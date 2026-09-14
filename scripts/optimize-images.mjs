#!/usr/bin/env node
/**
 * Recompresses everything under images/ in place.
 *
 * Camera originals go straight into the repo, so a single race photo can be
 * 20 MB. This resizes to MAX_EDGE, re-encodes, and overwrites the original —
 * filenames and extensions are preserved so no HTML/JS reference has to change.
 *
 *   node scripts/optimize-images.mjs           # rewrite images in place
 *   node scripts/optimize-images.mjs --dry-run # report only, touch nothing
 *
 * EXIF is stripped (orientation is baked in first via .rotate()), which also
 * removes the GPS coordinates embedded in phone photos.
 */

import { readdir, stat, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES_DIR = path.join(ROOT, 'images');

const MAX_EDGE = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 82;

const DRY_RUN = process.argv.includes('--dry-run');

const JPEG_EXT = new Set(['.jpg', '.jpeg']);
const PNG_EXT = new Set(['.png']);

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            yield* walk(full);
        } else if (entry.isFile()) {
            yield full;
        }
    }
}

function fmt(bytes) {
    return `${(bytes / 1048576).toFixed(2)} MB`;
}

async function optimize(file) {
    const ext = path.extname(file).toLowerCase();
    const isJpeg = JPEG_EXT.has(ext);
    const isPng = PNG_EXT.has(ext);
    if (!isJpeg && !isPng) return null;

    const before = (await stat(file)).size;

    // .rotate() with no argument bakes in the EXIF orientation flag before the
    // metadata is dropped — without it, portrait phone photos come out sideways.
    let pipeline = sharp(file)
        .rotate()
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });

    pipeline = isJpeg
        ? pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
        : pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });

    const output = await pipeline.toBuffer();

    // Recompressing an already-optimised file can come out larger; keep the original.
    if (output.length >= before) {
        return { file, before, after: before, skipped: true };
    }

    if (!DRY_RUN) {
        // Write beside the original, then swap, so an interrupted run cannot
        // leave a truncated image behind.
        const tmp = `${file}.tmp`;
        await writeFile(tmp, output);
        await unlink(file);
        await rename(tmp, file);
    }

    return { file, before, after: output.length, skipped: false };
}

const results = [];
for await (const file of walk(IMAGES_DIR)) {
    try {
        const result = await optimize(file);
        if (result) results.push(result);
    } catch (err) {
        console.error(`FAILED ${path.relative(ROOT, file)}: ${err.message}`);
        process.exitCode = 1;
    }
}

results.sort((a, b) => (b.before - b.after) - (a.before - a.after));

for (const r of results) {
    const rel = path.relative(ROOT, r.file);
    if (r.skipped) {
        console.log(`  skip  ${rel} (already optimal)`);
    } else {
        const pct = ((1 - r.after / r.before) * 100).toFixed(0);
        console.log(`  ${fmt(r.before).padStart(9)} -> ${fmt(r.after).padStart(9)}  (-${pct}%)  ${rel}`);
    }
}

const before = results.reduce((sum, r) => sum + r.before, 0);
const after = results.reduce((sum, r) => sum + r.after, 0);
console.log(
    `\n${results.length} images: ${fmt(before)} -> ${fmt(after)} ` +
    `(-${((1 - after / before) * 100).toFixed(1)}%)${DRY_RUN ? '  [dry run, nothing written]' : ''}`
);
