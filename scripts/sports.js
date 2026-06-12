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
    story: {
      en: 'An official half marathon in Zlín running alongside names like Petr Vabroušek and Tom Štverák. Finished 10th overall and 5th in category with a time of 1:21:39 — setting 38 personal records on the day. One of the best race experiences so far.',
      cs: 'Oficiální půlmaraton ve Zlíně, běh po boku jmen jako Petr Vabroušek a Tom Štverák. Skončil jsem 10. celkově a 5. v kategorii s časem 1:21:39 — s 38 osobními rekordy v ten den. Zatím jeden z nejlepších závodních zážitků.',
      es: 'Un medio maratón oficial en Zlín corriendo junto a nombres como Petr Vabroušek y Tom Štverák. Terminé 10.º en la general y 5.º en mi categoría con un tiempo de 1:21:39, estableciendo 38 récords personales en el día. Una de las mejores experiencias en carrera hasta ahora.'
    },
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
    story: {
      en: 'The race that finally broke the sub-3 hour barrier. Finished 2nd overall out of 13 runners with a time of 2:57:24 — a massive personal best from the 3:32:31 debut just a year earlier. 41 Strava PRs set on the day. Going from debut marathon to sub-3 in exactly one year.',
      cs: 'Závod, který konečně prolomil hranici pod 3 hodiny. Skončil jsem celkově 2. z 13 běžců s časem 2:57:24 — obrovský osobní rekord od debutu 3:32:31 pouhý rok předtím. V ten den padlo 41 Strava osobáků. Od debutového maratonu po sub-3 přesně za jeden rok.',
      es: 'La carrera que finalmente rompió la barrera de las 3 horas. Terminé 2.º en la general de 13 corredores con un tiempo de 2:57:24: un enorme récord personal respecto al debut en 3:32:31 solo un año antes. 41 RP en Strava en ese día. Pasar de un maratón de debut a sub-3 en exactamente un año.'
    },
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
    story: {
      en: 'Second 24-hour race, three weeks after Ještěd — an ambitious back-to-back schedule. Started with a compromised Achilles and ran through the pain to complete 6 laps (81.4 km, 5,322 m elevation). On the 6th lap a knee ligament gave way on the descent and the race was over. The result is bittersweet — but the lessons about race preparation, pacing and listening to the body are priceless. The promise: to come back and show what is possible when healthy.',
      cs: 'Druhý 24hodinový závod, tři týdny po Ještědu — ambiciózní plán. Odstartoval jsem s kompromitovanou achilovkou a přes bolest zaběhl 6 kol (81,4 km, 5 322 m převýšení). V 6. kole v seběhu povolil kolenní vaz a závod skončil. Výsledek je hořkosladký — ale lekce o přípravě, tempu a naslouchání tělu jsou k nezaplacení. Slib: vrátit se a ukázat, co je možné, když jsem zdravý.',
      es: 'Segunda carrera de 24 horas, tres semanas después de Ještěd: un ambicioso calendario. Empecé con el tendón de Aquiles tocado y corrí con dolor hasta completar 6 vueltas (81,4 km, 5.322 m de desnivel). En la sexta vuelta, un ligamento de la rodilla cedió en el descenso y la carrera terminó. El resultado es agridulce, pero las lecciones sobre preparación, ritmo y escuchar al cuerpo son inestimables. La promesa: volver y demostrar lo que es posible estando sano.'
    },
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
    story: {
      en: 'First-ever 24-hour race and the format was a revelation. Starting conservatively at ~2 hours per lap, the early hours went smoothly with good weather and daylight. The real race began after midnight. Despite long rest pauses — something to improve next time — completed 10 full laps (110.5 km, 6,389 m elevation) to finish 7th overall. Came away with sore legs, an Achilles warning and an enormous amount of lessons learned about this unique format.',
      cs: 'První 24hodinový závod a tento formát byl zjevení. Začal jsem konzervativně zhruba 2 hodiny na kolo, první hodiny šly hladce za dobrého počasí a světla. Opravdový závod začal po půlnoci. I přes dlouhé pauzy na odpočinek — což chci příště zlepšit — jsem dokončil 10 plných kol (110,5 km, 6 389 m převýšení) a skončil celkově na 7. místě. Odnesl jsem si bolavé nohy, varování od achilovky a obrovské množství zkušeností z tohoto unikátního formátu.',
      es: 'La primera carrera de 24 horas y el formato fue una revelación. Empezando de forma conservadora a ~2 horas por vuelta, las primeras horas fueron bien con buen tiempo y luz diurna. La verdadera carrera empezó pasada la medianoche. A pesar de las largas pausas de descanso —algo a mejorar la próxima vez— completé 10 vueltas (110,5 km, 6.389 m de desnivel) para acabar 7.º en la general. Salí con dolor de piernas, un aviso en el tendón de Aquiles y muchísimas lecciones sobre este formato único.'
    },
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
    story: {
      en: 'INOV-8 TrailTour race at Kosíř hill — the first shorter trail race of 2026. A tough 10.5 km course with 259 m of elevation gain. Finished 13th overall and 6th in category. A fun first effort at a shorter format and a good early-season shakeout.',
      cs: 'Závod INOV-8 TrailTour na vrchu Kosíř — první kratší trailový závod roku 2026. Náročná trať 10,5 km s 259 m převýšením. Skončil jsem na 13. místě celkově a 6. v kategorii. Zábavný první pokus o kratší formát a dobré probuzení do začátku sezóny.',
      es: 'Carrera INOV-8 TrailTour en el monte Kosíř: la primera carrera de trail corta de 2026. Un recorrido duro de 10,5 km con 259 m de desnivel positivo. Terminé 13.º en la general y 6.º en mi categoría. Un primer esfuerzo divertido en un formato más corto y una buena activación al inicio de la temporada.'
    },
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
    story: {
      en: 'A 101 km mountain ultra trail race through the Beskydy mountains with 5,585 m of total elevation gain. Starting at midnight and running through the night and the following day. Finished 53rd overall and took first place in the U23 category — the biggest result of the 2025 season.',
      cs: 'Horský ultra trail 101 km přes Beskydy s celkovým převýšením 5 585 m. Start o půlnoci a běh přes noc i celý následující den. Skončil jsem 53. celkově a vybojoval první místo v kategorii do 23 let — největší výsledek sezóny 2025.',
      es: 'Un ultra trail de montaña de 101 km por las montañas Beskydy con 5.585 m de desnivel positivo total. Empezando a medianoche y corriendo durante la noche y el día siguiente. Terminé 53.º en la general y obtuve el primer puesto en la categoría sub-23: el mayor resultado de la temporada 2025.'
    },
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
    story: {
      en: 'Just 10 days after the Prague debut, lined up again at Olomouc. Improved by 7 minutes to finish in 3:25:22 and placed 4th out of 13. The target was sub-3:30 — achieved. Proof that the body adapts faster than expected when the training is consistent.',
      cs: 'Jen 10 dní po debutu v Praze jsem znovu stál na startu v Olomouci. Zlepšil jsem se o 7 minut a dokončil v čase 3:25:22 na 4. místě z 13. Cíl byl pod 3:30 — splněno. Důkaz, že tělo se adaptuje rychleji, než se čeká, když je trénink konzistentní.',
      es: 'Apenas 10 días tras el debut en Praga, me alineé de nuevo en Olomouc. Mejoré 7 minutos para acabar en 3:25:22 y clasificarme 4.º de 13. El objetivo era sub-3:30: conseguido. La prueba de que el cuerpo se adapta más rápido de lo esperado cuando el entrenamiento es constante.'
    },
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
    story: {
      en: 'The very first marathon. No real expectations — just a benchmark to build from. Crossed the finish line in 3:32:31 at one of the most iconic road races in the Czech Republic. 26 Strava PRs and a foundation laid for everything that followed.',
      cs: 'Úplně první maraton. Žádná velká očekávání — jen nastavit laťku, na které se dá stavět. Cílem jsem proběhl v čase 3:32:31 na jednom z nejikoničtějších silničních závodů v Česku. Padlo 26 Strava osobáků a položil se základ pro vše, co následovalo.',
      es: 'El primer maratón. Sin grandes expectativas: solo una referencia sobre la que construir. Crucé la meta en 3:32:31 en una de las carreras en ruta más emblemáticas de la República Checa. 26 RP de Strava y las bases sentadas para todo lo que vino después.'
    },
    stravaUrl: 'https://www.strava.com/activities/14373512969',
    photos: [
      '../images/events/PragueMaraton2025/IMG_6169.jpg',
      '../images/events/PragueMaraton2025/IMG_6112.jpg',
      '../images/events/PragueMaraton2025/IMG_6124.jpg'
    ]
  }
];

const FUTURE_RACES = [
  { name: 'MF50 (Malofatranská stovka)', date: '27.6.2026', distance: '50 km', link: 'https://www.mfstovka.eu/trasy', badge: 'Ultra', badgeClass: 'race-badge--ultra' },
  { name: 'Road Classics Vysočina - Dlouhá', date: '18.7.2026', distance: '102 km', link: 'https://www.roadclassics.cz/propozice/vysocina', badge: 'Bike', badgeClass: 'race-badge--bike' },
  { name: 'Beskydský Ultra Trail', date: '1.8.2026', distance: '86 km', link: 'https://www.beskydskyultratrail.cz/', badge: 'Ultra', badgeClass: 'race-badge--ultra' },
  { name: 'B7 (Beskydská sedmička)', date: '28.8.2026', distance: '101 km', link: 'https://www.beskydskasedmicka.cz/', badge: 'Ultra', badgeClass: 'race-badge--ultra' },
  { name: '24DS (24 hod. na Dlouhých stráních)', date: '3.10.2026', distance: '24h', link: 'https://moravaflow.cz/dlouhe-strane/24ds/', badge: '24H', badgeClass: 'race-badge--ultra' }
];

// --- Training overview data ---
// Run `node scripts/update-strava.mjs` to regenerate this block.
const TRAINING_STATS = {
  updatedLabel: 'June 2026',
  cards: [
    { icon: '🏃', value: '221 km',    label: { en: 'Running this month', cs: 'Běh tento měsíc',       es: 'Carrera este mes'     } },
    { icon: '⬆️', value: '2,230 m',  label: { en: 'Running elevation',  cs: 'Běžecké převýšení',     es: 'Desnivel corriendo'   } },
    { icon: '📅', value: '16',         label: { en: 'Running sessions',   cs: 'Běžecké tréninky',      es: 'Sesiones de carrera'  } },
    { icon: '🚴', value: '91 km',     label: { en: 'Cycling this month', cs: 'Cyklistika tento měsíc',es: 'Ciclismo este mes'     } },
    { icon: '⛰️', value: '860 m',    label: { en: 'Cycling elevation',  cs: 'Cyklistické převýšení', es: 'Desnivel en bici'     } },
    { icon: '📏', value: '42.2 km',   label: { en: 'Longest run',        cs: 'Nejdelší běh',          es: 'Carrera más larga'    } },
    { icon: '⏱️', value: '5:50 /km', label: { en: 'Avg run pace',       cs: 'Průměrné tempo',        es: 'Ritmo promedio'       } },
    { icon: '🕐', value: '21h 30m',   label: { en: 'Run time',           cs: 'Čas běhu',              es: 'Tiempo corriendo'     } },
    { icon: '🔥', value: '16,220',    label: { en: 'Calories (run)',     cs: 'Kalorie (běh)',         es: 'Calorías (carrera)'   } },
  ],
  weekly: [
    { label: 'May 5–11',     km: 22.3 },
    { label: 'May 12–18',    km: 71.1 },
    { label: 'May 19–25',    km: 53.7 },
    { label: 'May 26–Jun 1', km: 41.9 },
    { label: 'Jun 2–8',      km: 42.4 },
  ],
  yearCards: [
    { icon: '🏃', value: '1,447 km',   label: { en: 'Running this year',  cs: 'Běh letos',              es: 'Carrera este año'      } },
    { icon: '🚴', value: '1,981 km',   label: { en: 'Cycling this year',  cs: 'Kolo letos',             es: 'Ciclismo este año'     } },
    { icon: '⬆️', value: '33,640 m',  label: { en: 'Run elevation YTD',  cs: 'Převýšení běh letos',   es: 'Desnivel carrera año'  } },
    { icon: '📅', value: '93',          label: { en: 'Run sessions YTD',   cs: 'Tréninků běh letos',    es: 'Sesiones carrera año'  } },
    { icon: '📊', value: '63 km/wk',   label: { en: 'Avg weekly km',      cs: 'Průměr km/týden',        es: 'Km semanales promedio' } },
    { icon: '🕐', value: '159h',        label: { en: 'Total run hours',    cs: 'Celkový čas běhu',       es: 'Horas totales carrera' } },
    { icon: '⏱️', value: '6:35 /km',  label: { en: 'Avg pace YTD',       cs: 'Průměrné tempo letos',   es: 'Ritmo promedio año'    } },
    { icon: '🏆', value: '378',         label: { en: 'Strava PRs set YTD',        cs: 'Strava Osobáků letos',          es: 'Strava Récords personales año'} },
    { icon: '🔥', value: '111,420',     label: { en: 'Calories YTD (run)', cs: 'Kalorie letos (běh)',    es: 'Calorías año (carrera)' } },
  ],
  monthly: [
    { label: 'Jan', runKm: 232.8, bikeKm: 114.4 },
    { label: 'Feb', runKm: 200.4, bikeKm: 639.3 },
    { label: 'Mar', runKm: 321.3, bikeKm: 674.8 },
    { label: 'Apr', runKm: 377.2, bikeKm: 383.1 },
    { label: 'May', runKm: 273.2, bikeKm: 168.9 },
    { label: 'Jun', runKm:  42.4, bikeKm:   0.0 },
  ],
};

function renderTrainingStats() {
  const container = document.getElementById('training-stats-container');
  if (!container) return;

  const lang = localStorage.getItem('lang') || 'en';

  const i18n = {
    lastMonth:   { en: 'Last 30 days',          cs: 'Posledních 30 dní',      es: 'Últimos 30 días' },
    yearToDate:  { en: 'Year to Date',           cs: 'Letos celkem',           es: 'Acumulado del año' },
    weeklyTitle: { en: 'Weekly running km',      cs: 'Týdenní uběhnuté km',   es: 'Km de carrera semanal' },
    monthlyTitle:{ en: 'Monthly km (run + bike)',cs: 'Měsíční km (běh + kolo)',es: 'Km mensuales (carrera + bici)' },
    run:         { en: 'Run',                    cs: 'Běh',                    es: 'Carrera' },
    bike:        { en: 'Bike',                   cs: 'Kolo',                   es: 'Bici' },
  };
  const t = k => i18n[k][lang] || i18n[k].en;

  const cardHtml = c => `
    <div class="training-stat-card">
      <span class="training-icon">${c.icon}</span>
      <span class="training-value">${c.value}</span>
      <span class="training-label">${typeof c.label === 'object' ? (c.label[lang] || c.label.en) : c.label}</span>
    </div>`;

  const maxWeekKm = Math.max(...TRAINING_STATS.weekly.map(w => w.km));
  const weekBarsHtml = TRAINING_STATS.weekly.map(w => {
    const pct = Math.round((w.km / maxWeekKm) * 100);
    return `<div class="chart-col">
      <span class="chart-km">${w.km}</span>
      <div class="chart-bar" style="height:${pct}%"></div>
      <span class="chart-week">${w.label}</span>
    </div>`;
  }).join('');

  const maxMonthVal = Math.max(...TRAINING_STATS.monthly.map(m => m.runKm + m.bikeKm));
  const monthBarsHtml = TRAINING_STATS.monthly.map(m => {
    const runPct  = Math.round((m.runKm  / maxMonthVal) * 100);
    const bikePct = Math.round((m.bikeKm / maxMonthVal) * 100);
    return `<div class="chart-col monthly-col">
      <div class="monthly-bars">
        ${m.runKm  > 0 ? `<div class="monthly-bar monthly-bar--run"  style="height:${runPct}%"  title="${m.runKm} km run"></div>`  : '<div class="monthly-bar monthly-bar--empty"></div>'}
        ${m.bikeKm > 0 ? `<div class="monthly-bar monthly-bar--bike" style="height:${bikePct}%" title="${m.bikeKm} km bike"></div>` : '<div class="monthly-bar monthly-bar--empty"></div>'}
      </div>
      <span class="chart-week">${m.label}</span>
    </div>`;
  }).join('');

  const yearCardsHtml = TRAINING_STATS.yearCards
    ? TRAINING_STATS.yearCards.map(cardHtml).join('')
    : '';

  container.innerHTML = `
    <div class="training-section-title">${t('lastMonth')}</div>
    <div class="training-stats">${TRAINING_STATS.cards.map(cardHtml).join('')}</div>
    <div class="weekly-chart-wrap">
      <p class="weekly-chart-title">${t('weeklyTitle')}</p>
      <div class="weekly-chart">${weekBarsHtml}</div>
    </div>
    ${yearCardsHtml ? `
    <div class="training-section-title training-section-title--ytd">${t('yearToDate')}</div>
    <div class="training-stats training-stats--year">${yearCardsHtml}</div>
    <div class="weekly-chart-wrap">
      <p class="weekly-chart-title">${t('monthlyTitle')}</p>
      <div class="monthly-legend">
        <span class="legend-dot legend-dot--run"></span>${t('run')}
        <span class="legend-dot legend-dot--bike"></span>${t('bike')}
      </div>
      <div class="weekly-chart monthly-chart">${monthBarsHtml}</div>
    </div>` : ''}`;
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

function renderFutureRaceTable() {
  const tbody = document.getElementById('future-races-tbody');
  if (!tbody) return;
  const lang = localStorage.getItem('lang') || 'en';
  const websiteTxt = { en: 'Website', cs: 'Web', es: 'Sitio web' };
  
  tbody.innerHTML = FUTURE_RACES.map(r => `
    <tr>
      <td>${r.name} <span class="race-badge ${r.badgeClass}">${r.badge}</span></td>
      <td>${r.date}</td>
      <td class="race-time">${r.distance}</td>
      <td><a href="${r.link}" target="_blank" rel="noopener">${websiteTxt[lang] || websiteTxt.en}</a></td>
    </tr>
  `).join('');
}

function openModal(raceId) {
  const race = RACES.find(r => r.id === raceId);
  if (!race) return;

  const lang = localStorage.getItem('lang') || 'en';
  const labels = {
    distance: { en: 'Distance', cs: 'Vzdálenost', es: 'Distancia' },
    time: { en: 'Time', cs: 'Čas', es: 'Tiempo' },
    result: { en: 'Result', cs: 'Výsledek', es: 'Resultado' },
    strava: { en: 'View on Strava →', cs: 'Zobrazit na Stravě →', es: 'Ver en Strava →' }
  };

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-header">
      <span class="race-badge ${race.badgeClass} modal-badge">${race.category}</span>
      <h2 id="modal-title" class="modal-title">${race.name}</h2>
      <p class="modal-date">${race.date}</p>
    </div>
    <div class="modal-stats">
      <div class="modal-stat">
        <span class="modal-stat-label">${labels.distance[lang] || labels.distance.en}</span>
        <span class="modal-stat-value">${race.distance}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">${labels.time[lang] || labels.time.en}</span>
        <span class="modal-stat-value">${race.time}</span>
      </div>
      <div class="modal-stat">
        <span class="modal-stat-label">${labels.result[lang] || labels.result.en}</span>
        <span class="modal-stat-value" style="font-size:0.82rem">${race.placement}</span>
      </div>
    </div>
    ${race.photos && race.photos.length > 0
      ? `<div class="modal-photos">
          ${race.photos.map(src => `<img class="modal-photo" src="${src}" alt="${race.name}" loading="lazy" onerror="this.style.display='none'">`).join('')}
        </div>`
      : ''}
    <p class="modal-story">${typeof race.story === 'object' ? (race.story[lang] || race.story.en) : race.story}</p>
    ${race.stravaUrl ? `<a class="modal-strava-btn" href="${race.stravaUrl}" target="_blank" rel="noopener">${labels.strava[lang] || labels.strava.en}</a>` : ''}
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
  renderFutureRaceTable();
  renderTrainingStats();

  document.querySelectorAll('.stat-card--link').forEach(card => {
    card.addEventListener('click', () => window.open(card.dataset.stravaUrl, '_blank', 'noopener'));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(card.dataset.stravaUrl, '_blank', 'noopener'); }
    });
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);

  document.getElementById('race-modal-backdrop').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

document.addEventListener('languageChanged', () => {
  renderRaceTable();
  renderFutureRaceTable();
  renderTrainingStats();
});
