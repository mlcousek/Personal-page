const BLOG_POSTS = [
  {
    id: 'masters-done',
    date: '2026-06-06',
    category: 'Life',
    coverPhoto: '../images/Posts/MastersDone/IMG_9011.jpg',
    photos: ['../images/Posts/MastersDone/IMG_9011.jpg'],
    title: { en: 'Closing the Loop: Master\'s Done', cs: 'Uzavírám kruh: magistr hotov', es: 'Cerrando el ciclo: máster terminado' },
    excerpt: {
      en: 'After two years of juggling coursework, Monet+ and daily training, I finished my master\'s in Software Development at UPOL.',
      cs: 'Po dvou letech žonglování mezi studiem, Monet+ a každodenním tréninkem jsem dokončil magisterské studium Vývoje software na UPOL.',
      es: 'Tras dos años compaginando clases, Monet+ y entrenamiento diario, terminé el máster en Desarrollo de Software en UPOL.'
    },
    body: {
      en: `<p>Five years ago I started at Palacký University in Olomouc. Bachelor's first — General Informatics — then straight into the master's in Software Development. Today that chapter closes.</p>
<p>The master's thesis was a web-based <strong>finite automata simulator</strong>. You can build and simulate deterministic automata, non-deterministic automata, epsilon-NFAs and pushdown automata — stepping through each state transition one by one. On top of the core simulation I added NFA-to-DFA conversion, minimization, and a set of teaching features: group management, saved configurations, shareable automaton states. The goal was a tool a lecturer could actually use in class, not just a demo.</p>
<p>What the two years taught me beyond the curriculum: theory and practice running in parallel is the right mode. Algorithms, formal languages and software architecture from the coursework directly sharpened how I think about production code at Monet+. The discipline from training — showing up every day, tracking progress, staying consistent — mapped cleanly onto deadlines and side projects.</p>
<p>I joined Monet+ as an intern in February 2025. By July 2026 it becomes full-time. The gap between student and professional closes. What's next is just work — the good kind.</p>`
    }
  },
  {
    id: 'svoc-2026',
    date: '2026-04-25',
    category: 'Academic',
    coverPhoto: '../images/Posts/SVOC/IMG_8964.JPG',
    photos: ['../images/Posts/SVOC/IMG_8964.JPG'],
    title: { en: '2nd at SVOČ — Finite Automata Simulator', cs: '2. místo na SVOČ — Simulátor konečných automatů', es: '2.º en SVOČ — Simulador de autómatas finitos' },
    excerpt: {
      en: 'Presented my master\'s thesis at UPOL\'s SVOČ and finished second in the Didactics of Natural Sciences section.',
      cs: 'Na SVOČ UPOL jsem prezentoval diplomovou práci a obsadil druhé místo v sekci Didaktika přírodovědných oborů.',
      es: 'Presenté mi trabajo de fin de máster en el SVOČ de la UPOL y quedé segundo en la sección de Didáctica de Ciencias Naturales.'
    },
    body: {
      en: `<p>Every year UPOL runs SVOČ — the student scientific and professional activities competition. This year I entered with my master's thesis: <strong>Simulátor konečných automatů</strong> (Finite Automata Simulator), presenting in the Didaktika přírodovědných oborů section, master's category.</p>
<p>The thesis is a web application. You define automata visually, feed in input strings, and watch the machine process them step by step — state by state, transition by transition. It handles deterministic automata (DFA), non-deterministic automata (NFA), epsilon-NFAs, and pushdown automata. Beyond simulation there are operations: NFA-to-DFA conversion, minimization, epsilon-closure computation. The teaching layer adds group management and saved configurations so a lecturer can prepare exercises and share exact automaton states with students.</p>
<p>The presentation itself was a different kind of test from writing the code. You have to explain not just what the tool does but why the architecture decisions make sense — why I modeled transitions the way I did, why the teaching features work the way they do. The jury's questions pushed on edge cases I'd thought carefully about.</p>
<p><strong>2nd place.</strong> The feedback centred on the breadth of automaton types covered and the practical teaching integration. The advisor was doc. RNDr. Miroslav Kolařík, Ph.D. First place to someone I'll be chasing next time.</p>`
    }
  },
  {
    id: 'olomouc-sub3',
    date: '2026-05-13',
    category: 'Running',
    coverPhoto: '../images/events/OlomoucMarathon2026/IMG_8773.jpg',
    photos: [
      '../images/events/OlomoucMarathon2026/IMG_8773.jpg',
      '../images/events/OlomoucMarathon2026/IMG_8776.PNG'
    ],
    stravaUrl: 'https://www.strava.com/activities/18490047395',
    title: { en: 'Sub-3 at Olomouc: 2:57:24', cs: 'Sub-3 v Olomouci: 2:57:24', es: 'Sub-3 en Olomouc: 2:57:24' },
    excerpt: {
      en: 'Finally under three hours — 2:57:24, second place out of 13 at Memoriál Jiřího Hronka.',
      cs: 'Konečně pod tři hodiny — 2:57:24, druhé místo z 13 na Memoriálu Jiřího Hronka.',
      es: 'Por fin bajo las tres horas: 2:57:24, segundo lugar de 13 en el Memoriál Jiřího Hronka.'
    },
    body: {
      en: `<p>Sub-3 was the number I had circled all season. I ran 3:32 in Prague, then 3:25 in Olomouc — the direction was right but the barrier held. This race, Memoriál Jiřího Hronka, is a smaller marathon in Olomouc: tight field, competitive runners, flat loop course. The kind of race where you can't hide in a crowd and pace yourself honestly.</p>
<p>The plan was simple: <strong>4:10/km through 30k, then decide</strong>. I hit 10k in 41:40 and the half in 1:27:45 — exactly on pace, feeling controlled rather than comfortable. At 30k I checked in with myself. The legs were still there. I pushed to 4:05/km for the final stretch.</p>
<p>Crossed the line in <strong>2:57:24</strong>. Second place out of 13 finishers. The win went to someone considerably faster and I was happy to let him have it — I had my own race to run.</p>
<p>A 7-minute PB. The three-hour barrier gone. The next target is sub-2:55, but I'll give it a proper block of training first. Racing the Zlín half two weeks later was already on the calendar and I wasn't going to skip it.</p>`
    }
  },
  {
    id: 'zlin-half-pb',
    date: '2026-05-31',
    category: 'Running',
    coverPhoto: '../images/events/zlinHalf2026/_MTK_0077.JPG',
    photos: [
      '../images/events/zlinHalf2026/_MTK_0077.JPG',
      '../images/events/zlinHalf2026/_MTK_2364.JPG',
      '../images/events/zlinHalf2026/LIL_7023.JPG'
    ],
    stravaUrl: 'https://www.strava.com/activities/18728683802',
    title: { en: '1:21:39 in Zlín — Half Marathon PB', cs: '1:21:39 ve Zlíně — osobák na půlmaratonu', es: '1:21:39 en Zlín — récord personal en medio maratón' },
    excerpt: {
      en: 'Two weeks after the sub-3 marathon, I ran a new half marathon PB in Zlín: 1:21:39, 10th overall, 5th in category.',
      cs: 'Dva týdny po sub-3 maratonu jsem zaběhl nový osobák na půlmaratonu ve Zlíně: 1:21:39, 10. celkově, 5. v kategorii.',
      es: 'Dos semanas después del maratón sub-3, corrí un nuevo récord personal de medio maratón en Zlín: 1:21:39, 10.º general, 5.º en categoría.'
    },
    body: {
      en: `<p>The Festivalový půlmaraton Zlín was two weeks after Olomouc. Not ideal recovery time, but the race was on the calendar and I like keeping the legs moving after a marathon block rather than going completely flat.</p>
<p>I went in without a specific time goal — the legs were still carrying marathon fatigue and I wanted to run by feel. The course winds through Zlín's city centre, mostly flat with a few sharp turns that break rhythm. I settled into <strong>3:55/km for the first 10k</strong>, holding back slightly because it felt easier than it should.</p>
<p>At 15k something clicked. The pace dropped without it costing more effort — the kind of thing that happens when a training block compounds correctly. I closed the final 5k averaging 3:48/km. Crossed in <strong>1:21:39</strong>.</p>
<p>10th overall. 5th in age category. And a new half marathon PB by almost four minutes — my previous best was a half split inside a marathon, not a standalone race. Having the distance done clean, on its own, feels different.</p>
<p>There is a sub-1:20 in me when I'm fresh and focused for it specifically. That's a target for autumn.</p>`
    }
  }
];

// ── Rendering ───────────────────────────────────────────────────────────────
function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function renderPosts() {
  const lang = getLang();
  const latestContainer = document.getElementById('latest-posts');
  const allList = document.getElementById('all-posts');
  if (!latestContainer || !allList) return;

  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  latestContainer.innerHTML = sorted.slice(0, 2).map(p => cardHTML(p, lang)).join('');
  allList.innerHTML = sorted.map(p => `
    <li>
      <a href="#" data-post="${p.id}">${p.title[lang] || p.title.en}</a>
      <span class="post-date">${p.date}</span>
    </li>`).join('');
}

function isHomePage() {
  return !!document.getElementById('home-latest-posts') && !document.getElementById('latest-posts');
}

function cardHTML(post, lang) {
  const action = isHomePage()
    ? `href="blog.html#${post.id}" class="read-more read-more-link"`
    : `data-read="${post.id}" class="read-more"`;
  const tag = isHomePage() ? 'a' : 'button';
  return `<article class="post-card" data-read="${post.id}">
    <div class="post-card-body">
      <div class="post-meta">${post.date} &nbsp;·&nbsp; ${post.category}</div>
      <h3 class="post-title">${post.title[lang] || post.title.en}</h3>
      <p class="post-excerpt">${post.excerpt[lang] || post.excerpt.en}</p>
      <${tag} ${action}>Read more</${tag}>
    </div>
  </article>`;
}

// ── Post modal ───────────────────────────────────────────────────────────────
function openPost(id) {
  const backdrop = document.getElementById('post-modal-backdrop');
  if (!backdrop) { window.location.href = `blog.html#${id}`; return; }

  const lang = getLang();
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const photosHtml = post.photos && post.photos.length > 0
    ? `<div class="post-modal-photos">${post.photos.map(src =>
        `<img class="post-modal-photo" src="${src}" alt="${post.title.en}" loading="lazy" onerror="this.style.display='none'">`
      ).join('')}</div>`
    : '';

  const stravaHtml = post.stravaUrl
    ? `<a class="post-modal-strava-btn" href="${post.stravaUrl}" target="_blank" rel="noopener">View on Strava →</a>`
    : '';

  document.getElementById('post-modal-title').textContent = post.title[lang] || post.title.en;
  document.getElementById('post-modal-meta').textContent = `${post.date} · ${post.category}`;
  document.getElementById('post-modal-body').innerHTML = photosHtml + (post.body[lang] || post.body.en) + stravaHtml;

  backdrop.classList.add('open');
  document.body.classList.add('modal-open');
  backdrop.querySelector('.post-modal').focus();
}

function closePost() {
  document.getElementById('post-modal-backdrop').classList.remove('open');
  document.body.classList.remove('modal-open');
}

// ── Home page latest ─────────────────────────────────────────────────────────
function renderHomeLatest() {
  const container = document.getElementById('home-latest-posts');
  if (!container) return;
  const lang = getLang();
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  container.innerHTML = sorted.slice(0, 2).map(p => cardHTML(p, lang)).join('');
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
  renderHomeLatest();

  document.addEventListener('click', e => {
    // Prevent double-firing when button inside card is clicked
    const readBtn = e.target.closest('[data-read]');
    if (readBtn) { e.preventDefault(); openPost(readBtn.dataset.read); return; }

    const postLink = e.target.closest('[data-post]');
    if (postLink) { e.preventDefault(); openPost(postLink.dataset.post); return; }
  });

  const closeBtn = document.getElementById('post-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closePost);

  const backdrop = document.getElementById('post-modal-backdrop');
  if (backdrop) backdrop.addEventListener('click', e => { if (e.target === backdrop) closePost(); });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });

  // Auto-open post when navigated from home page via blog.html#post-id
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (BLOG_POSTS.find(p => p.id === id)) openPost(id);
  }
});

// Re-render on language change
const _origApply = window.applyLanguageAfterNavbar;
window.applyLanguageAfterNavbar = function () {
  if (_origApply) _origApply();
  renderPosts();
  renderHomeLatest();
};
