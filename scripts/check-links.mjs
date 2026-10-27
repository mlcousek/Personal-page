/**
 * Fails when a page or script points at a local file that does not exist.
 *
 * Covers href/src attributes in pages/ and components/, plus quoted '../images/…' paths in
 * scripts/*.js (blog, sports and project data reference photos that way).
 *
 * Usage: node scripts/check-links.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const missing = [];

function check(file, ref, baseDir) {
  const clean = ref.split('#')[0].split('?')[0];
  if (!clean || /^(https?:|mailto:|tel:|data:|javascript:)/.test(clean)) return;
  let target;
  try {
    target = resolve(baseDir, decodeURIComponent(clean));
  } catch {
    return;
  }
  if (!existsSync(target)) missing.push(`${file}: ${ref}`);
}

for (const dir of ['pages', 'components']) {
  for (const name of readdirSync(join(root, dir)).filter(n => n.endsWith('.html'))) {
    const file = join(dir, name);
    const html = readFileSync(join(root, file), 'utf8');
    // pages/ holds data-root=".." (assets resolve from pages/); components are injected into those pages
    const base = join(root, dir === 'components' ? 'pages' : dir);
    for (const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) check(file, m[1], base);
  }
}

for (const name of readdirSync(join(root, 'scripts')).filter(n => n.endsWith('.js'))) {
  const file = join('scripts', name);
  const js = readFileSync(join(root, file), 'utf8');
  for (const m of js.matchAll(/['"`](\.\.\/(?:images|assets)\/[^'"`$]+)['"`]/g)) {
    check(file, m[1], join(root, 'pages'));
  }
}

if (missing.length) {
  console.error(`Missing local files (${missing.length}):\n  ` + missing.join('\n  '));
  process.exit(1);
}
console.log('All local references resolve.');
