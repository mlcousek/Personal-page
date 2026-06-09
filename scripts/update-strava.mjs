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
  let all = [];
  let page = 1;
  while (true) {
    const url = `https://www.strava.com/api/v3/athlete/activities?after=${afterTs}&before=${beforeTs}&per_page=200&page=${page}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error(`Activities fetch failed: ${res.status}`);
    const batch = await res.json();
    if (!batch.length) break;
    all = all.concat(batch);
    if (batch.length < 200) break;
    page++;
  }
  return all;
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

  const totalRunTime = running.reduce((s, a) => s + (a.moving_time || 0), 0);
  const totalRunCalories = running.reduce((s, a) => s + (a.total_calories || 0), 0);
  const avgPaceSec = runKm > 0 ? totalRunTime / runKm : 0;
  const runHours = Math.floor(totalRunTime / 3600);
  const runMins  = Math.round((totalRunTime % 3600) / 60);

  return {
    runKm:        Math.round(runKm),
    runElev:      Math.round(runElev / 10) * 10,
    runCount:     running.length,
    bikeKm:       Math.round(bikeKm),
    bikeElev:     Math.round(bikeElev / 10) * 10,
    longestRun:   Math.round(longestRun * 10) / 10,
    avgPace:      `${Math.floor(avgPaceSec / 60)}:${String(Math.round(avgPaceSec % 60)).padStart(2, '0')} /km`,
    runTime:      `${runHours}h ${String(runMins).padStart(2, '0')}m`,
    runCalories:  Math.round(totalRunCalories),
  };
}

function computeYearStats(activities, yearStartTs) {
  const running = activities.filter(a =>
    ['Run', 'TrailRun', 'VirtualRun'].includes(a.type) && a.distance > 1500
  );
  const cycling = activities.filter(a =>
    ['Ride', 'VirtualRide', 'EBikeRide'].includes(a.type)
  );
  const sumKm   = arr => arr.reduce((s, a) => s + a.distance / 1000, 0);
  const sumElev = arr => arr.reduce((s, a) => s + (a.total_elevation_gain || 0), 0);

  const runKm       = sumKm(running);
  const totalTime   = running.reduce((s, a) => s + (a.moving_time || 0), 0);
  const totalPRs    = running.reduce((s, a) => s + (a.pr_count || 0), 0);
  const totalCalories = running.reduce((s, a) => s + (a.total_calories || 0), 0);
  const weeksElapsed  = (Date.now() / 1000 - yearStartTs) / (7 * 86400);
  const avgWeeklyKm   = runKm / (weeksElapsed || 1);
  const avgPaceSec    = runKm > 0 ? totalTime / runKm : 0;
  const avgRunDist    = running.length > 0 ? runKm / running.length : 0;
  const totalHours    = Math.round(totalTime / 3600);

  return {
    runKm:        Math.round(runKm),
    runElev:      Math.round(sumElev(running) / 10) * 10,
    runCount:     running.length,
    bikeKm:       Math.round(sumKm(cycling)),
    avgWeeklyKm:  Math.round(avgWeeklyKm),
    totalHours,
    avgPace:      `${Math.floor(avgPaceSec / 60)}:${String(Math.round(avgPaceSec % 60)).padStart(2, '0')} /km`,
    totalPRs,
    totalCalories: Math.round(totalCalories),
    avgRunDist:   Math.round(avgRunDist * 10) / 10,
  };
}

function computeMonthly(activities) {
  const running = activities.filter(a =>
    ['Run', 'TrailRun', 'VirtualRun'].includes(a.type) && a.distance > 1500
  );
  const cycling = activities.filter(a =>
    ['Ride', 'VirtualRide', 'EBikeRide'].includes(a.type)
  );

  const months = {};
  for (const a of [...running, ...cycling]) {
    const d = new Date(a.start_date_local);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (!months[key]) months[key] = { runKm: 0, bikeKm: 0 };
    const isRun = ['Run', 'TrailRun', 'VirtualRun'].includes(a.type);
    if (isRun) months[key].runKm  += a.distance / 1000;
    else       months[key].bikeKm += a.distance / 1000;
  }

  const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, v]) => ({
      label:  monthLabels[parseInt(key.split('-')[1], 10) - 1],
      runKm:  Math.round(v.runKm  * 10) / 10,
      bikeKm: Math.round(v.bikeKm * 10) / 10,
    }));
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
function patchSportsJs(stats, weekly, yearStats, monthly) {
  const filePath = resolve(ROOT, 'scripts', 'sports.js');
  let src = readFileSync(filePath, 'utf8');

  const fmtCal = n => n.toLocaleString('en-US');

  const newBlock = `// --- Training overview data ---
// Run \`node scripts/update-strava.mjs\` to regenerate this block.
const TRAINING_STATS = {
  updatedLabel: '${fmtMonth()}',
  cards: [
    { icon: '🏃', value: '${fmtKm(stats.runKm)}',     label: { en: 'Running this month', cs: 'Běh tento měsíc',        es: 'Carrera este mes'     } },
    { icon: '⬆️', value: '${fmtElev(stats.runElev)}',  label: { en: 'Running elevation',  cs: 'Běžecké převýšení',     es: 'Desnivel corriendo'   } },
    { icon: '📅', value: '${stats.runCount}',            label: { en: 'Running sessions',   cs: 'Běžecké tréninky',      es: 'Sesiones de carrera'  } },
    { icon: '🚴', value: '${fmtKm(stats.bikeKm)}',     label: { en: 'Cycling this month', cs: 'Cyklistika tento měsíc',es: 'Ciclismo este mes'     } },
    { icon: '⛰️', value: '${fmtElev(stats.bikeElev)}', label: { en: 'Cycling elevation',  cs: 'Cyklistické převýšení', es: 'Desnivel en bici'     } },
    { icon: '📏', value: '${stats.longestRun} km',      label: { en: 'Longest run',        cs: 'Nejdelší běh',          es: 'Carrera más larga'    } },
    { icon: '⏱️', value: '${stats.avgPace}',            label: { en: 'Avg run pace',       cs: 'Průměrné tempo',        es: 'Ritmo promedio'       } },
    { icon: '🕐', value: '${stats.runTime}',             label: { en: 'Run time',           cs: 'Čas běhu',              es: 'Tiempo corriendo'     } },
    { icon: '🔥', value: '${fmtCal(stats.runCalories)}',label: { en: 'Calories (run)',     cs: 'Kalorie (běh)',         es: 'Calorías (carrera)'   } },
  ],
  weekly: ${JSON.stringify(weekly, null, 4).replace(/^/gm, '  ').trim()},
  yearCards: [
    { icon: '🏃', value: '${fmtKm(yearStats.runKm)}',      label: { en: 'Running this year',  cs: 'Běh letos',             es: 'Carrera este año'       } },
    { icon: '🚴', value: '${fmtKm(yearStats.bikeKm)}',     label: { en: 'Cycling this year',  cs: 'Kolo letos',            es: 'Ciclismo este año'      } },
    { icon: '⬆️', value: '${fmtElev(yearStats.runElev)}',  label: { en: 'Run elevation YTD',  cs: 'Převýšení běh letos',  es: 'Desnivel carrera año'   } },
    { icon: '📅', value: '${yearStats.runCount}',            label: { en: 'Run sessions YTD',   cs: 'Tréninků běh letos',   es: 'Sesiones carrera año'   } },
    { icon: '📊', value: '${yearStats.avgWeeklyKm} km/wk',  label: { en: 'Avg weekly km',      cs: 'Průměr km/týden',       es: 'Km semanales promedio'  } },
    { icon: '🕐', value: '${yearStats.totalHours}h',         label: { en: 'Total run hours',    cs: 'Celkový čas běhu',      es: 'Horas totales carrera'  } },
    { icon: '⏱️', value: '${yearStats.avgPace}',            label: { en: 'Avg pace YTD',       cs: 'Průměrné tempo letos',  es: 'Ritmo promedio año'     } },
    { icon: '🏆', value: '${yearStats.totalPRs}',            label: { en: 'PRs set YTD',        cs: 'Osobáků letos',         es: 'Récords personales año' } },
    { icon: '🔥', value: '${fmtCal(yearStats.totalCalories)}',label: { en: 'Calories YTD (run)',cs: 'Kalorie letos (běh)',   es: 'Calorías año (carrera)' } },
  ],
  monthly: ${JSON.stringify(monthly, null, 4).replace(/^/gm, '  ').trim()},
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
const now          = Math.floor(Date.now() / 1000);
const thirtyDaysAgo = now - 30 * 24 * 3600;
const yearStart    = Math.floor(new Date(new Date().getFullYear(), 0, 1).getTime() / 1000);

console.log('Fetching Strava access token…');
const token = await getAccessToken();

console.log('Fetching activities (last 30 days)…');
const activities = await fetchActivities(token, thirtyDaysAgo, now);
console.log(`  → ${activities.length} activities found`);

console.log('Fetching activities (year to date)…');
const yearActivities = await fetchActivities(token, yearStart, now);
console.log(`  → ${yearActivities.length} activities found (YTD)`);

const stats      = computeStats(activities);
const weekly     = computeWeekly(activities);
const yearStats  = computeYearStats(yearActivities, yearStart);
const monthly    = computeMonthly(yearActivities);

console.log('Computed stats:', stats);
console.log('Year stats:', yearStats);

patchSportsJs(stats, weekly, yearStats, monthly);
patchHtml();

console.log('Done. Commit scripts/sports.js and pages/sports.html.');
