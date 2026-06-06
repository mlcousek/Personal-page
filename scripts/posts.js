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
<p>I joined Monet+ as an intern in February 2025. By July 2026 it becomes full-time. The gap between student and professional closes. What's next is just work — the good kind.</p>`,
      cs: `<p>Před pěti lety jsem nastoupil na Univerzitu Palackého v Olomouci. Nejdřív bakalář — Obecná informatika — pak rovnou navazující magisterské studium Vývoje software. Dnes se tato kapitola uzavírá.</p>
<p>Diplomová práce byla webový <strong>simulátor konečných automatů</strong>. Můžete sestavovat a simulovat deterministické automaty, nedeterministické automaty, epsilon-NKA a zásobníkové automaty — krok za krokem sledovat každý přechod. Nad rámec základní simulace jsem přidal převod NKA na DKA, minimalizaci a sadu výukových funkcí: správu skupin, uložené konfigurace a sdílitelné stavy automatu. Cílem byl nástroj, který by učitel mohl reálně použít ve výuce, nejen demo.</p>
<p>Co mě ty dva roky naučily nad rámec osnov: teorie a praxe běžící souběžně je ten správný režim. Algoritmy, formální jazyky a softwarová architektura ze studia přímo zostřily mé uvažování o produkčním kódu v Monet+. Disciplína z tréninku — ukázat se každý den, sledovat pokrok, zůstat konzistentní — se čistě promítla do termínů a vedlejších projektů.</p>
<p>Do Monet+ jsem nastoupil jako stážista v únoru 2025. V červenci 2026 přecházím na plný úvazek. Propast mezi studentem a profesionálem se uzavírá. Další na řadě je jen práce — ta dobrá.</p>`,
      es: `<p>Hace cinco años empecé en la Universidad Palacký de Olomouc. Primero el grado en Informática General y luego directamente al máster en Desarrollo de Software. Hoy se cierra ese capítulo.</p>
<p>El trabajo de fin de máster fue un <strong>simulador web de autómatas finitos</strong>. Puedes construir y simular autómatas deterministas, no deterministas, con transiciones épsilon y de pila, observando cada transición paso a paso. Además de la simulación principal, añadí conversión de AFND a AFD, minimización y un conjunto de funciones didácticas: gestión de grupos, configuraciones guardadas y estados de autómatas compartibles. El objetivo era crear una herramienta que un profesor pudiera usar realmente en clase, no solo una demostración.</p>
<p>Lo que me enseñaron estos dos años más allá del plan de estudios: la teoría y la práctica en paralelo es el modo correcto. Algoritmos, lenguajes formales y arquitectura de software de las clases afilaron directamente mi forma de pensar sobre el código de producción en Monet+. La disciplina del entrenamiento —estar presente cada día, hacer seguimiento del progreso, ser constante— se trasladó de forma limpia a las fechas límite y los proyectos paralelos.</p>
<p>Me uní a Monet+ como becario en febrero de 2025. En julio de 2026 paso a tiempo completo. La brecha entre estudiante y profesional se cierra. Lo que sigue es simplemente trabajo, del bueno.</p>`
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
<p><strong>2nd place.</strong> The feedback centred on the breadth of automaton types covered and the practical teaching integration. The advisor was doc. RNDr. Miroslav Kolařík, Ph.D.</p>`,
      cs: `<p>Každý rok pořádá UPOL SVOČ — soutěž studentské vědecké a odborné činnosti. Letos jsem se přihlásil se svou diplomovou prací: <strong>Simulátor konečných automatů</strong>, prezentoval jsem v sekci Didaktika přírodovědných oborů v magisterské kategorii.</p>
<p>Práce je webová aplikace. Definetuje automaty vizuálně, zadáváte vstupní řetězce a sledujete, jak je stroj zpracovává krok za krokem — stav po stavu, přechod po přechodu. Zvládá deterministické automaty (DKA), nedeterministické automaty (NKA), epsilon-NKA a zásobníkové automaty. Kromě simulace jsou k dispozici i operace: převod NKA na DKA, minimalizace, výpočet epsilon-uzávěru. Výuková vrstva přidává správu skupin a uložené konfigurace, takže učitel může připravovat cvičení a sdílet se studenty přesné stavy automatu.</p>
<p>Samotná prezentace byla zkouškou jiného druhu než psaní kódu. Musíte vysvětlit nejen to, co nástroj dělá, ale také proč dávají architektonická rozhodnutí smysl — proč jsem modeloval přechody tak, jak jsem je modeloval, proč výukové funkce fungují právě takto. Otázky poroty mířily na okrajové případy, o kterých jsem pečlivě přemýšlel.</p>
<p><strong>2. místo.</strong> Zpětná vazba se soustředila na šíři pokrytých typů automatů a praktickou integraci do výuky. Vedoucím práce byl doc. RNDr. Miroslav Kolařík, Ph.D.</p>`,
      es: `<p>Cada año la UPOL organiza SVOČ, la competición de actividades científicas y profesionales para estudiantes. Este año me presenté con mi trabajo de fin de máster: <strong>Simulador de autómatas finitos</strong>, en la sección de Didáctica de Ciencias Naturales, categoría de máster.</p>
<p>El trabajo es una aplicación web. Defines autómatas visualmente, introduces cadenas y ves cómo la máquina las procesa paso a paso: estado a estado, transición a transición. Maneja autómatas deterministas (AFD), no deterministas (AFND), con transiciones épsilon y de pila. Más allá de la simulación hay operaciones: conversión de AFND a AFD, minimización, cálculo de clausura épsilon. La capa didáctica añade gestión de grupos y configuraciones guardadas para que un profesor pueda preparar ejercicios y compartir estados exactos del autómata con los estudiantes.</p>
<p>La presentación en sí fue un tipo de prueba diferente a escribir código. Tienes que explicar no solo qué hace la herramienta, sino por qué las decisiones de arquitectura tienen sentido: por qué modelé las transiciones de esa manera, por qué las funciones de enseñanza funcionan así. Las preguntas del jurado incidieron en casos extremos sobre los que había reflexionado cuidadosamente.</p>
<p><strong>2.º puesto.</strong> El feedback se centró en la amplitud de tipos de autómatas cubiertos y en la integración práctica en la enseñanza. El tutor fue el doc. RNDr. Miroslav Kolařík, Ph.D.</p>`
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
<p>A 7-minute PB. The three-hour barrier gone. The next target is sub-2:55, but I'll give it a proper block of training first. Racing the Zlín half two weeks later was already on the calendar and I wasn't going to skip it.</p>`,
      cs: `<p>Sub-3 bylo číslo, které jsem měl v kalendáři zakroužkované celou sezónu. V Praze jsem běžel 3:32, pak 3:25 v Olomouci — směr byl správný, ale bariéra držela. Tento závod, Memoriál Jiřího Hronka, je menší maraton v Olomouci: úzké startovní pole, soutěživí běžci, rovinatá okruhová trať. Typ závodu, kde se nemůžete schovat v davu a musíte si tempo držet poctivě.</p>
<p>Plán byl jednoduchý: <strong>4:10/km do 30. km, pak se uvidí</strong>. Na desítce jsem byl za 41:40 a půlmaraton za 1:27:45 — přesně podle plánu, s pocitem kontroly spíše než komfortu. Na 30. kilometru jsem zhodnotil stav. Nohy pořád fungovaly. Do závěrečného úseku jsem to zrychlil na 4:05/km.</p>
<p>Cílem jsem proběhl za <strong>2:57:24</strong>. Druhé místo z 13 dokončivších. Vítězství si odnesl někdo podstatně rychlejší a já mu ho rád přenechal — běžel jsem si vlastní závod.</p>
<p>Osobák o 7 minut. Tříhodinová bariéra je pryč. Další cíl je pod 2:55, ale nejdřív tomu dám pořádný tréninkový blok. Zlínský půlmaraton o dva týdny později už byl v kalendáři a nehodlal jsem ho vynechat.</p>`,
      es: `<p>Bajar de las 3 horas era el número que tenía marcado toda la temporada. Corrí en 3:32 en Praga, luego 3:25 en Olomouc — la dirección era correcta, pero la barrera resistía. Esta carrera, el Memoriál Jiřího Hronka, es un maratón más pequeño en Olomouc: pocos participantes, corredores competitivos, circuito llano. El tipo de carrera donde no puedes esconderte en la multitud y debes llevar tu propio ritmo con honestidad.</p>
<p>El plan era simple: <strong>4:10/km hasta el km 30, y luego decidir</strong>. Pasé los 10k en 41:40 y el medio maratón en 1:27:45 — exactamente en el ritmo, sintiendo control más que comodidad. En el km 30 evalué cómo me sentía. Las piernas seguían respondiendo. Aceleré a 4:05/km para el tramo final.</p>
<p>Crucé la meta en <strong>2:57:24</strong>. Segundo puesto de 13 finalistas. La victoria fue para alguien bastante más rápido y estuve encantado de dejársela: yo estaba corriendo mi propia carrera.</p>
<p>Récord personal por 7 minutos. La barrera de las tres horas superada. El siguiente objetivo es bajar de 2:55, pero antes haré un buen bloque de entrenamiento. El medio maratón de Zlín dos semanas después ya estaba en el calendario y no pensaba perdérmelo.</p>`
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
<p>There is a sub-1:20 in me when I'm fresh and focused for it specifically. That's a target for autumn.</p>`,
      cs: `<p>Festivalový půlmaraton Zlín se běžel dva týdny po Olomouci. Ne zrovna ideální doba na regeneraci, ale závod byl v kalendáři a po maratonském bloku rád udržuji nohy v pohybu, než abych úplně vypnul.</p>
<p>Šel jsem do toho bez konkrétního časového cíle — v nohách byla stále maratonská únava a chtěl jsem běžet podle pocitu. Trať se kroutí centrem Zlína, převážně po rovině s několika ostrými zatáčkami, které narušují rytmus. Prvních 10 km jsem se usadil na tempu <strong>3:55/km</strong> a trochu se krotil, protože to připadalo snazší, než by mělo.</p>
<p>Na 15. kilometru do sebe něco zapadlo. Tempo kleslo, aniž by to stálo víc úsilí — taková ta věc, co se stane, když se tréninkový blok správně zúročí. Posledních 5 km jsem uzavřel s průměrem 3:48/km. Cíl za <strong>1:21:39</strong>.</p>
<p>10. místo celkově. 5. místo ve věkové kategorii. A nový osobák na půlmaratonu o téměř čtyři minuty — můj předchozí nejlepší čas byl mezičas v maratonu, ne samostatný závod. Zaběhnout tu vzdálenost čistě, sama o sobě, je úplně jiný pocit.</p>
<p>Je ve mně čas pod 1:20, až na to budu odpočatý a cíleně se na to zaměřím. To je cíl na podzim.</p>`,
      es: `<p>El Medio Maratón del Festival de Zlín fue dos semanas después de Olomouc. No era el tiempo de recuperación ideal, pero la carrera estaba en el calendario y me gusta mantener las piernas en movimiento tras un bloque de maratón en lugar de parar por completo.</p>
<p>Fui sin un objetivo de tiempo específico: las piernas aún arrastraban la fatiga del maratón y quería correr por sensaciones. El recorrido serpentea por el centro de Zlín, mayormente llano con algunos giros bruscos que rompen el ritmo. Me instalé en <strong>3:55/km durante los primeros 10k</strong>, conteniéndome ligeramente porque parecía más fácil de lo que debería.</p>
<p>En el km 15 algo hizo clic. El ritmo bajó sin requerir más esfuerzo: el tipo de cosa que ocurre cuando un bloque de entrenamiento se asimila correctamente. Cerré los últimos 5k promediando 3:48/km. Crucé en <strong>1:21:39</strong>.</p>
<p>10.º en la general. 5.º en categoría de edad. Y un nuevo récord personal de medio maratón por casi cuatro minutos: mi anterior mejor marca era un parcial dentro de un maratón, no una carrera independiente. Completar la distancia limpia, por sí sola, se siente diferente.</p>
<p>Tengo un sub-1:20 en mis piernas cuando esté fresco y enfocado específicamente para ello. Ese es el objetivo para otoño.</p>`
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

const CATEGORY_MAP = {
  'Life': { en: 'Life', cs: 'Život', es: 'Vida' },
  'Academic': { en: 'Academic', cs: 'Akademické', es: 'Académico' },
  'Running': { en: 'Running', cs: 'Běh', es: 'Carrera' }
};

function cardHTML(post, lang) {
  const action = isHomePage()
    ? `href="blog.html#${post.id}" class="read-more read-more-link"`
    : `data-read="${post.id}" class="read-more"`;
  const tag = isHomePage() ? 'a' : 'button';
  const readMoreText = { en: 'Read more', cs: 'Číst dál', es: 'Leer más' };
  const catText = CATEGORY_MAP[post.category] ? (CATEGORY_MAP[post.category][lang] || CATEGORY_MAP[post.category].en) : post.category;
  return `<article class="post-card" data-read="${post.id}">
    <div class="post-card-body">
      <div class="post-meta">${post.date} &nbsp;·&nbsp; ${catText}</div>
      <h3 class="post-title">${post.title[lang] || post.title.en}</h3>
      <p class="post-excerpt">${post.excerpt[lang] || post.excerpt.en}</p>
      <${tag} ${action}>${readMoreText[lang] || readMoreText.en}</${tag}>
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
    ? `<a class="post-modal-strava-btn" href="${post.stravaUrl}" target="_blank" rel="noopener">${{ en: 'View on Strava →', cs: 'Zobrazit na Stravě →', es: 'Ver en Strava →' }[lang] || 'View on Strava →'}</a>`
    : '';

  const catText = CATEGORY_MAP[post.category] ? (CATEGORY_MAP[post.category][lang] || CATEGORY_MAP[post.category].en) : post.category;
  document.getElementById('post-modal-title').textContent = post.title[lang] || post.title.en;
  document.getElementById('post-modal-meta').textContent = `${post.date} · ${catText}`;
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

  // Auto-open post when navigated from home page via blog.html#post-id
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (BLOG_POSTS.find(p => p.id === id)) openPost(id);
  }

  // Modal close listeners
  const closeBtn = document.getElementById('post-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePost);
  }

  const backdrop = document.getElementById('post-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', e => {
      if (e.target === e.currentTarget) closePost();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('modal-open')) {
      closePost();
    }
  });
});

// Re-render on language change
const _origApply = window.applyLanguageAfterNavbar;
window.applyLanguageAfterNavbar = function () {
  if (_origApply) _origApply();
  renderPosts();
  renderHomeLatest();
};

document.addEventListener('languageChanged', () => {
  renderPosts();
  renderHomeLatest();
});
