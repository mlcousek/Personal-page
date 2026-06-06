/**
 * Refreshes TRAINING_STATS in sports.js with the last 30 days of Strava data.
 *
 * Setup (one-time):
 *   1. Create a Strava API application at https://www.strava.com/settings/api
 *   2. Copy .env.example → .env and fill in the three values.
 *   3. Run: node scripts/update-strava.mjs
 *
 * Requires Node.js 20+ (uses --env-file flag or reads .env manually).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');

// ── Load .env ─────────────────────────────────────────────────────────────────
function loadEnv() {
  try {
    const raw = readFileSync(resolve(ROOT, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)\s*$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch {
    // Already set via system env — that's fine.
  }
}
loadEnv();

const CLIENT_ID     = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('Missing env vars. Copy .env.example → .env and fill in values.');
  process.exit(1);
}

// ── Strava helpers ─────────────────────────────────────────────────────────────
async function getAccessToken() {
  const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function fetchActivities(token, afterTs, beforeTs) {
  const url = `https://www.strava.com/api/v3/athlete/activities?after=${afterTs}&before=${beforeTs}&per_page=200`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error(`Activities fetch failed: ${res.status}`);
  return res.json();
}

// ── Stats computation ─────────────────────────────────────────────────────────
function computeStats(activities) {
  const running = activities.filter(a =>
    ['Run', 'TrailRun', 'VirtualRun'].includes(a.type) && a.distance > 1500
  );
  const cycling = activities.filter(a =>
    ['Ride', 'VirtualRide', 'EBikeRide'].includes(a.type)
  );

  const sumKm   = arr => arr.reduce((s, a) => s + a.distance / 1000, 0);
  const sumElev = arr => arr.reduce((s, a) => s + (a.total_elevation_gain || 0), 0);

  const runKm   = sumKm(running);
  const runElev = sumElev(running);
  const bikeKm  = sumKm(cycling);
  const bikeElev = sumElev(cycling);

  const longestRun = running.reduce(
    (max, a) => (a.distance > max ? a.distance : max), 0
  ) / 1000;

  return {
    runKm:    Math.round(runKm),
    runElev:  Math.round(runElev / 10) * 10,
    runCount: running.length,
    bikeKm:   Math.round(bikeKm),
    bikeElev: Math.round(bikeElev / 10) * 10,
    longestRun: Math.round(longestRun * 10) / 10,
  };
}

function computeWeekly(activities) {
  const running = activities.filter(a =>
    ['Run', 'TrailRun', 'VirtualRun'].includes(a.type) && a.distance > 1500
  );

  const weeks = {};
  for (const a of running) {
    const d = new Date(a.start_date_local);
    // ISO week Monday
    const day = d.getDay(); // 0=Sun
    const diff = (day === 0 ? -6 : 1) - day;
    const mon = new Date(d);
    mon.setDate(d.getDate() + diff);
    const key = mon.toISOString().slice(0, 10);
    weeks[key] = (weeks[key] || 0) + a.distance / 1000;
  }

  return Object.entries(weeks)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, km]) => {
      const mon = new Date(key);
      const sun = new Date(mon);
      sun.setDate(mon.getDate() + 6);
      const label = `${mon.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}–${sun.getDate()}`;
      return { label, km: Math.round(km * 10) / 10 };
    });
}

function fmtKm(n)   { return `${n} km`; }
function fmtElev(n) { return `${n.toLocaleString('cs-CZ')} m`; }
function fmtMonth() {
  return new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

// ── Patch sports.js ───────────────────────────────────────────────────────────
function patchSportsJs(stats, weekly) {
  const filePath = resolve(ROOT, 'scripts', 'sports.js');
  let src = readFileSync(filePath, 'utf8');

  const newBlock = `// --- Training overview data ---
// Run \`node scripts/update-strava.mjs\` to regenerate this block.
const TRAINING_STATS = {
  updatedLabel: '${fmtMonth()}',
  cards: [
    { icon: '🏃', value: '${fmtKm(stats.runKm)}',   label: 'Running this month' },
    { icon: '⬆️', value: '${fmtElev(stats.runElev)}', label: 'Running elevation'   },
    { icon: '📅', value: '${stats.runCount}',          label: 'Running sessions'   },
    { icon: '🚴', value: '${fmtKm(stats.bikeKm)}',   label: 'Cycling this month' },
    { icon: '⛰️', value: '${fmtElev(stats.bikeElev)}', label: 'Cycling elevation'   },
    { icon: '📏', value: '${stats.longestRun} km',    label: 'Longest run'        },
  ],
  weekly: ${JSON.stringify(weekly, null, 4).replace(/^/gm, '  ').trim()},
};`;

  src = src.replace(
    /\/\/ --- Training overview data ---[\s\S]*?^};/m,
    newBlock
  );

  writeFileSync(filePath, src, 'utf8');
}

// ── Also patch the strava-note in sports.html ─────────────────────────────────
function patchHtml() {
  const filePath = resolve(ROOT, 'pages', 'sports.html');
  let src = readFileSync(filePath, 'utf8');
  src = src.replace(
    /Strava data · last updated [^<]+/,
    `Strava data · last updated ${fmtMonth()}`
  );
  writeFileSync(filePath, src, 'utf8');
}

// ── Main ─────────────────────────────────────────────────────────────────────
const now     = Math.floor(Date.now() / 1000);
const thirtyDaysAgo = now - 30 * 24 * 3600;

console.log('Fetching Strava access token…');
const token = await getAccessToken();

console.log('Fetching activities (last 30 days)…');
const activities = await fetchActivities(token, thirtyDaysAgo, now);
console.log(`  → ${activities.length} activities found`);

const stats  = computeStats(activities);
const weekly = computeWeekly(activities);

console.log('Computed stats:', stats);
console.log('Weekly:', weekly);

patchSportsJs(stats, weekly);
patchHtml();

console.log('Done. Commit scripts/sports.js and pages/sports.html.');
