#!/usr/bin/env node
/**
 * Builds the 1200x630 link-preview image and cache-busts it in every page.
 *
 *   npm run og -- images/events/mf50-2026/mf50_finish.jpg
 *
 * Chat apps (Teams, Slack, WhatsApp...) cache previews per image URL, so
 * overwriting og-cover.jpg alone keeps showing the old photo. The script also
 * stamps ?v=<date> on every og:image / twitter:image URL, which forces a refetch.
 * Optional second arg is the sharp crop focus: top | centre (default) | bottom.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'images', 'og-cover.jpg');

const [source, focus = 'attention'] = process.argv.slice(2);
if (!source) {
  console.error('usage: npm run og -- <source-image> [top|centre|bottom|attention]');
  process.exit(1);
}

await sharp(path.resolve(source))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: focus === 'attention' ? sharp.strategy.attention : focus })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUT);

const version = new Date().toISOString().slice(0, 10).replace(/-/g, '');
const pages = [path.join(ROOT, 'index.html')];
for (const f of await readdir(path.join(ROOT, 'pages'))) {
  if (f.endsWith('.html')) pages.push(path.join(ROOT, 'pages', f));
}

let touched = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8').catch(() => null);
  if (html === null) continue;
  const next = html.replace(/(images\/og-cover\.jpg)(\?v=\w+)?/g, `$1?v=${version}`);
  if (next !== html) {
    await writeFile(file, next);
    touched++;
  }
}
console.log(`og-cover.jpg written from ${source}; ?v=${version} stamped in ${touched} page(s)`);
