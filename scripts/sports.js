const RACES = [
  {
    id: 'zlin-2026',
    name: '11. Festivalový půlmaraton Zlín',
    date: '2026-05-31',
    category: 'Half Marathon',
    distance: '21.1 km',
    time: '1:21:39',
    placement: '10th overall · 5th in category',
    badge: '21.1K',
    badgeClass: 'race-badge--half',
    highlight: true,
    story: 'An official half marathon in Zlín running alongside names like Petr Vabroušek and Tom Štverák. Finished 10th overall and 5th in category with a time of 1:21:39 — setting 38 personal records on the day. One of the best race experiences so far.',
    stravaUrl: 'https://www.strava.com/activities/18728683802',
    photos: [
      '../images/events/zlinHalf2026/_MTK_0077.JPG',
      '../images/events/zlinHalf2026/_MTK_2364.JPG',
      '../images/events/zlinHalf2026/LIL_7023.JPG'
    ]
  },
  {
    id: 'memorial-2026',
    name: 'Memoriál Jiřího Hronka',
    date: '2026-05-13',
    category: 'Marathon',
    distance: '42.2 km',
    time: '2:57:24',
    placement: '🥈 2nd / 13 · Sub-3!',
    badge: '42.2K',
    badgeClass: 'race-badge--full',
    highlight: true,
    story: 'The race that finally broke the sub-3 hour barrier. Finished 2nd overall out of 13 runners with a time of 2:57:24 — a massive personal best from the 3:32:31 debut just a year earlier. 41 Strava PRs set on the day. Going from debut marathon to sub-3 in exactly one year.',
    stravaUrl: 'https://www.strava.com/activities/18490047395',
    photos: [
      '../images/events/OlomoucMarathon2026/IMG_8773.jpg',
      '../images/events/OlomoucMarathon2026/IMG_8776.PNG'
    ]
  },
  {
    id: 'lh24-2026',
    name: 'LH24 2026',
    date: '2026-01-31',
    category: 'Ultra 24h',
    distance: '81.4 km · 6 laps',
    time: '14:15:07',
    placement: '6 laps · DNF (injury)',
    badge: '24h',
    badgeClass: 'race-badge--ultra',
    highlight: false,
    story: 'Second 24-hour race, three weeks after Ještěd — an ambitious back-to-back schedule. Started with a compromised Achilles and ran through the pain to complete 6 laps (81.4 km, 5,322 m elevation). On the 6th lap a knee ligament gave way on the descent and the race was over. The result is bittersweet — but the lessons about race preparation, pacing and listening to the body are priceless. The promise: to come back and show what is possible when healthy.',
    stravaUrl: 'https://www.strava.com/activities/17243564338',
    photos: [
      '../images/events/LH242026/0049_IMG_9617%20(1).jpg',
      '../images/events/LH242026/55073242584_83b7d721b5_o%20(1).jpg'
    ]
  },
  {
    id: 'jested24-2026',
    name: 'Winter Ještěd 24h',
    date: '2026-01-10',
    category: 'Ultra 24h',
    distance: '110.5 km · 10 laps',
    time: '21:53:19',
    placement: '🏅 7th overall · 10 laps',
    badge: '24h',
    badgeClass: 'race-badge--ultra',
    highlight: false,
    story: 'First-ever 24-hour race and the format was a revelation. Starting conservatively at ~2 hours per lap, the early hours went smoothly with good weather and daylight. The real race began after midnight. Despite long rest pauses — something to improve next time — completed 10 full laps (110.5 km, 6,389 m elevation) to finish 7th overall. Came away with sore legs, an Achilles warning and an enormous amount of lessons learned about this unique format.',
    stravaUrl: 'https://www.strava.com/activities/17010517721',
    photos: [
      '../images/events/jestedWinter242026/321A6841.jpg',
      '../images/events/jestedWinter242026/Jested%2024%20winter%202026-96.jpg'
    ]
  },
  {
    id: 'kosir-2026',
    name: 'Slatinice na Kosíř',
    date: '2026-01-03',
    category: 'Trail Run',
    distance: '10.5 km',
    time: '46:03',
    placement: '13th overall · 6th in category',
    badge: 'Trail',
    badgeClass: 'race-badge--trail',
    highlight: false,
    story: 'INOV-8 TrailTour race at Kosíř hill — the first shorter trail race of 2026. A tough 10.5 km course with 259 m of elevation gain. Finished 13th overall and 6th in category. A fun first effort at a shorter format and a good early-season shakeout.',
    stravaUrl: 'https://www.strava.com/activities/16921423860',
    photos: [
      '../images/events/Kosir2026/IMG_1317.jpg'
    ]
  },
  {
    id: 'b7-2025',
    name: 'B7 – Beskydská Sedmička',
    date: '2025-08-29',
    category: 'Ultra',
    distance: '101 km',
    time: '14:52:18',
    placement: '53rd overall · 🥇 1st U23',
    badge: 'Ultra',
    badgeClass: 'race-badge--ultra',
    highlight: false,
    story: 'A 101 km mountain ultra trail race through the Beskydy mountains with 5,585 m of total elevation gain. Starting at midnight and running through the night and the following day. Finished 53rd overall and took first place in the U23 category — the biggest result of the 2025 season.',
    stravaUrl: 'https://www.strava.com/activities/15636334015',
    photos: [
      '../images/events/B72025/IMG_5622.JPG',
      '../images/events/B72025/IMG_5624.JPG'
    ]
  },
  {
    id: 'olomouc-2025',
    name: 'Olomouc Marathon 2025',
    date: '2025-05-14',
    category: 'Marathon',
    distance: '42.2 km',
    time: '3:25:22',
    placement: '4th / 13',
    badge: '42.2K',
    badgeClass: 'race-badge--full',
    highlight: false,
    story: 'Just 10 days after the Prague debut, lined up again at Olomouc. Improved by 7 minutes to finish in 3:25:22 and placed 4th out of 13. The target was sub-3:30 — achieved. Proof that the body adapts faster than expected when the training is consistent.',
    stravaUrl: 'https://www.strava.com/activities/14476221521',
    photos: [
      '../images/events/OlomoucMaraton2025/74a875bc-16b0-4030-af00-610e0c66fdae.JPG'
    ]
  },
  {
    id: 'prague-2025',
    name: 'ORLEN Prague Marathon 2025',
    date: '2025-05-04',
    category: 'Marathon',
    distance: '42.2 km',
    time: '3:32:31',
    placement: 'Marathon debut',
    badge: '42.2K',
    badgeClass: 'race-badge--full',
    highlight: false,
    story: 'The very first marathon. No real expectations — just a benchmark to build from. Crossed the finish line in 3:32:31 at one of the most iconic road races in the Czech Republic. 26 Strava PRs and a foundation laid for everything that followed.',
    stravaUrl: 'https://www.strava.com/activities/14373512969',
    photos: [
      '../images/events/PragueMaraton2025/IMG_6169.jpg',
      '../images/events/PragueMaraton2025/IMG_6112.jpg',
      '../images/events/PragueMaraton2025/IMG_6124.jpg'
    ]
  }
];

// --- Training overview data ---
// Run `node scripts/update-strava.mjs` to regenerate this block.
const TRAINING_STATS = {
  updatedLabel: 'June 2026',
  cards: [
    { icon: '🏃', value: '223 km',   label: 'Running this month' },
    { icon: '⬆️', value: '1,900 m', label: 'Running elevation'   },
    { icon: '📅', value: '15',        label: 'Running sessions'   },
    { icon: '🚴', value: '169 km',   label: 'Cycling this month' },
    { icon: '⛰️', value: '1,473 m', label: 'Cycling elevation'   },
    { icon: '📏', value: '42.2 km',  label: 'Longest run'        },
  ],
  weekly: [
    { label: 'May 5–11',     km: 22.3 },
    { label: 'May 12–18',    km: 72.3 },
    { label: 'May 19–25',    km: 53.7 },
    { label: 'May 26–Jun 1', km: 43.1 },
    { label: 'Jun 2+',       km: 31.3 },
  ]
};

function renderTrainingStats() {
  const container = document.getElementById('training-stats-container');
  if (!container) return;

  const maxKm = Math.max(...TRAINING_STATS.weekly.map(w => w.km));

  const cardsHtml = TRAINING_STATS.cards.map(c => `
    <div class="training-stat-card">
      <span class="training-icon">${c.icon}</span>
      <span class="training-value">${c.value}</span>
      <span class="training-label">${c.label}</span>
    </div>`).join('');

  const barsHtml = TRAINING_STATS.weekly.map(w => {
    const pct = Math.round((w.km / maxKm) * 100);
    return `<div class="chart-col">
      <span class="chart-km">${w.km}</span>
      <div class="chart-bar" style="height:${pct}%"></div>
      <span class="chart-week">${w.label}</span>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="training-stats">${cardsHtml}</div>
    <div class="weekly-chart-wrap">
      <p class="weekly-chart-title">Weekly running km</p>
      <div class="weekly-chart">${barsHtml}</div>
    </div>`;
}

function renderRaceTable() {
  const tbody = document.getElementById('races-tbody');
  if (!tbody) return;
  tbody.innerHTML = RACES.map(r => `
    <tr data-race-id="${r.id}" tabindex="0" role="button" aria-label="View details for ${r.name}">
      <td>${r.name} <span class="race-badge ${r.badgeClass}">${r.badge}</span></td>
      <td>${r.date}</td>
      <td class="race-time">${r.time}</td>
      <td>${r.placement}</td>
    </tr>
  `).join('');

  tbody.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('click', () => openModal(tr.dataset.raceId));
    tr.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(tr.dataset.raceId); }
    });
  });
}

function openModal(raceId) {
  const race = RACES.find(r => r.id === raceId);
  if (!race) return;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-header">
      <span class="race-badge ${race.badgeClass} modal-badge">${race.category}</span>
      <h2 id="modal-title" class="modal-title">${race.name}</h2>
      <p class="modal-date">${race.date}</p>
    </div>
    <div class="modal-stats">
      <div class="modal-stat">
        <span class="modal-stat-label">Distance</span>
        <span class="modal-stat-value">${race.distance}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Time</span>
        <span class="modal-stat-value">${race.time}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">Result</span>
        <span class="modal-stat-value" style="font-size:0.82rem">${race.placement}</span>
      </div>
    </div>
    ${race.photos && race.photos.length > 0
      ? `<div class="modal-photos">
          ${race.photos.map(src => `<img class="modal-photo" src="${src}" alt="${race.name}" loading="lazy" onerror="this.style.display='none'">`).join('')}
        </div>`
      : ''}
    <p class="modal-story">${race.story}</p>
    ${race.stravaUrl ? `<a class="modal-strava-btn" href="${race.stravaUrl}" target="_blank" rel="noopener">View on Strava →</a>` : ''}
  `;

  const backdrop = document.getElementById('race-modal-backdrop');
  backdrop.classList.add('open');
  document.body.classList.add('modal-open');
  backdrop.querySelector('.race-modal').focus();
}

function closeModal() {
  document.getElementById('race-modal-backdrop').classList.remove('open');
  document.body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderRaceTable();
  renderTrainingStats();

  document.getElementById('modal-close').addEventListener('click', closeModal);

  document.getElementById('race-modal-backdrop').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
