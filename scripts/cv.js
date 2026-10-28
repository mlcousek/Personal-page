/**
 * CV — data + rendering.
 * Everything on the page lives here as { en, cs, es } and re-renders on `languageChanged`.
 * Birth year from the PDF résumé is deliberately not published (the phone number is, at the owner's request).
 */

const CV_UI = {
  en: {
    role: '.NET Developer · Monet+',
    location: 'Olomouc, Czechia',
    print: 'Print / save as PDF',
    summary: 'Profile', experience: 'Experience', education: 'Education',
    skills: 'Technical skills', certs: 'Certifications', languages: 'Languages', interests: 'Beyond code',
    viewCred: 'View credential →', now: 'now', earlier: 'Earlier jobs'
  },
  cs: {
    role: '.NET vývojář · Monet+',
    location: 'Olomouc, Česko',
    print: 'Vytisknout / uložit jako PDF',
    summary: 'Profil', experience: 'Praxe', education: 'Vzdělání',
    skills: 'Technické dovednosti', certs: 'Certifikace', languages: 'Jazyky', interests: 'Mimo kód',
    viewCred: 'Zobrazit certifikát →', now: 'dosud', earlier: 'Dřívější zaměstnání'
  },
  es: {
    role: 'Desarrollador .NET · Monet+',
    location: 'Olomouc, Chequia',
    print: 'Imprimir / guardar como PDF',
    summary: 'Perfil', experience: 'Experiencia', education: 'Formación',
    skills: 'Habilidades técnicas', certs: 'Certificaciones', languages: 'Idiomas', interests: 'Más allá del código',
    viewCred: 'Ver credencial →', now: 'actualidad', earlier: 'Empleos anteriores'
  }
};

const CV_LINKS = [
  { label: 'Tel', href: 'tel:+420731280205', text: '+420 731 280 205' },
  { label: 'Email', href: 'mailto:jirka.mlcousek@seznam.cz', text: 'jirka.mlcousek@seznam.cz' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jiří-mlčoušek', text: 'linkedin.com/in/jiří-mlčoušek' },
  { label: 'GitHub', href: 'https://github.com/mlcousek', text: 'github.com/mlcousek' },
  { label: 'Strava', href: 'https://www.strava.com/athletes/72382004', text: 'strava.com/athletes/72382004' }
];

const CV_PHOTO = { src: '../images/cv-portrait.jpg', width: 1050, height: 1400 };

// Paragraph arrays: each entry renders as its own <p>.
const CV_SUMMARY = {
  en: [
    'Software developer with an AI & .NET/C# focus — REST APIs, data-heavy backends and the infrastructure around them. I work with AI coding agents every day and build good habits around them: spec-driven development, small reviewed iterations, tests as the safety net, and automation of anything repetitive. I like improving myself and my team, and I want everything we do to be done effectively.',
    'I grew from intern to full-time at Monet+ while finishing a master\'s degree. Outside of work I am a sports person, mainly focused on long-distance running and road cycling.'
  ],
  cs: [
    'Softwarový vývojář se zaměřením na AI a .NET/C# — REST API, datově náročné backendy a infrastruktura kolem nich. S AI programovacími agenty pracuji každý den a vytvářím kolem nich dobré návyky: spec-driven vývoj, malé zrevidované iterace, testy jako záchranná síť a automatizace všeho opakujícího se. Rád zlepšuji sebe i svůj tým a chci, aby vše, co děláme, bylo děláno efektivně.',
    'V Monet+ jsem vyrostl ze stážisty na plný úvazek při dokončování magisterského studia. Mimo práci jsem sportovní typ, především se věnuji dlouhým běhům a silniční cyklistice.'
  ],
  es: [
    'Desarrollador de software con foco en IA y .NET/C#: APIs REST, backends con muchos datos y la infraestructura que los rodea. Trabajo con agentes de programación con IA cada día y construyo buenos hábitos a su alrededor: desarrollo guiado por specs, iteraciones pequeñas y revisadas, pruebas como red de seguridad y automatización de todo lo repetitivo. Me gusta mejorar yo y mi equipo, y quiero que todo lo que hacemos se haga de forma efectiva.',
    'En Monet+ pasé de becario a jornada completa mientras terminaba el máster. Fuera del trabajo soy una persona deportista, centrada sobre todo en carreras de larga distancia y ciclismo de carretera.'
  ]
};

// Roles at Monet+ are shown as one company with a stepped timeline.
const CV_EXPERIENCE = [
  {
    company: 'Monet+',
    period: { en: 'Feb 2025 – present', cs: 'únor 2025 – dosud', es: 'feb 2025 – actualidad' },
    title: { en: '.NET Developer', cs: '.NET vývojář', es: 'Desarrollador .NET' },
    note: {
      en: 'Iteration driver for two months in summer 2026 — a team-lead role I loved and can see myself in.',
      cs: 'Dva měsíce v létě 2026 jsem dělal iteration drivera — roli týmového lídra, která mě bavila a vidím se v ní.',
      es: 'Iteration driver durante dos meses en el verano de 2026: un rol de líder de equipo que me encantó y en el que me veo.'
    },
    steps: [
      { when: { en: 'Jul 2026 →', cs: 'čvc 2026 →', es: 'jul 2026 →' }, what: { en: 'Full-time', cs: 'Plný úvazek', es: 'Jornada completa' } },
      { when: { en: 'Nov 2025 – Jul 2026', cs: 'lis 2025 – čvc 2026', es: 'nov 2025 – jul 2026' }, what: { en: '¾ time', cs: '¾ úvazek', es: '¾ de jornada' } },
      { when: { en: 'Jun – Nov 2025', cs: 'čvn – lis 2025', es: 'jun – nov 2025' }, what: { en: 'Part-time', cs: 'Částečný úvazek', es: 'Media jornada' } },
      { when: { en: 'Feb – Jun 2025', cs: 'úno – čvn 2025', es: 'feb – jun 2025' }, what: { en: 'Internship', cs: 'Stáž', es: 'Prácticas' } }
    ]
  }
];

const CV_EARLIER_JOBS = {
  en: 'Administrative work at Cetin (2022–23) · production operator (2021, 2022) · remote data entry at STEM/MARK (2020–21) · seasonal forestry work (2019)',
  cs: 'Administrativa v Cetin (2022–23) · operátor výroby (2021, 2022) · práce z domova pro STEM/MARK (2020–21) · sezónní práce v lese (2019)',
  es: 'Trabajo administrativo en Cetin (2022–23) · operario de producción (2021, 2022) · introducción de datos remota en STEM/MARK (2020–21) · trabajo forestal de temporada (2019)'
};

const CV_EDUCATION = [
  {
    period: '2024 – 2026',
    title: { en: 'Mgr. Software Development', cs: 'Mgr. Vývoj software', es: 'Máster en Desarrollo de Software' },
    school: 'Palacký University Olomouc',
    thesisLabel: { en: 'Master thesis', cs: 'Diplomová práce', es: 'Trabajo de máster' },
    thesis: { en: 'Finite Automata Simulator', cs: 'Simulátor konečných automatů', es: 'Simulador de autómatas finitos' },
    award: {
      en: '2nd place — SVOČ, Didactics of Natural Sciences section (2026)',
      cs: '2. místo — SVOČ, sekce Didaktika přírodovědných oborů (2026)',
      es: '2.º puesto — SVOČ, sección Didáctica de Ciencias Naturales (2026)'
    }
  },
  {
    period: '2021 – 2024',
    title: { en: 'Bc. General Informatics', cs: 'Bc. Obecná informatika', es: 'Grado en Informática General' },
    school: 'Palacký University Olomouc',
    thesisLabel: { en: 'Bachelor thesis', cs: 'Bakalářská práce', es: 'Trabajo de grado' },
    thesis: {
      en: 'FitnessWebApp — application for creating training plans',
      cs: 'FitnessWebApp — aplikace pro vytváření tréninkových plánů',
      es: 'FitnessWebApp — aplicación para crear planes de entrenamiento'
    }
  },
  {
    period: '2017 – 2021',
    title: { en: 'Secondary school (maturita)', cs: 'Gymnázium (maturita)', es: 'Bachillerato (maturita)' },
    school: 'Gymnázium Krnov'
  }
];

// Grouped, not levelled: a percentage bar claims precision nobody has.
const CV_SKILLS = [
  {
    group: { en: 'AI & agents', cs: 'AI a agenti', es: 'IA y agentes' },
    items: {
      en: ['Claude Code', 'Codex', 'GitHub Copilot', 'Agentic workflows', 'Spec-driven development (OpenSpec)', '"Grill me" mode', 'Open to new tech'],
      cs: ['Claude Code', 'Codex', 'GitHub Copilot', 'Agentní workflow', 'Spec-driven vývoj (OpenSpec)', 'Režim „grill me“', 'Otevřenost novým technologiím'],
      es: ['Claude Code', 'Codex', 'GitHub Copilot', 'Flujos agénticos', 'Desarrollo guiado por specs (OpenSpec)', 'Modo «grill me»', 'Abierto a nuevas tecnologías']
    }
  },
  {
    group: { en: 'APIs', cs: 'API', es: 'APIs' },
    items: ['C# / .NET', 'ASP.NET Core', 'Web API', 'REST', 'Controllers & endpoints', 'Swagger / OpenAPI', 'gRPC', '.NET Aspire']
  },
  {
    group: { en: 'Authentication & authorization', cs: 'Autentizace a autorizace', es: 'Autenticación y autorización' },
    items: {
      en: ['ASP.NET Core Identity', 'JWT Bearer', 'Roles', 'Policies'],
      cs: ['ASP.NET Core Identity', 'JWT Bearer', 'Role', 'Policies'],
      es: ['ASP.NET Core Identity', 'JWT Bearer', 'Roles', 'Policies']
    }
  },
  {
    group: { en: 'Testing — a speciality', cs: 'Testování — moje specialita', es: 'Testing — mi especialidad' },
    items: {
      en: ['Unit tests', 'Integration tests', 'Testcontainers', 'E2E tests', 'xUnit', 'Modern Software Engineering mindset'],
      cs: ['Unit testy', 'Integrační testy', 'Testcontainers', 'E2E testy', 'xUnit', 'Přístup z Modern Software Engineering'],
      es: ['Pruebas unitarias', 'Pruebas de integración', 'Testcontainers', 'Pruebas E2E', 'xUnit', 'Enfoque de Modern Software Engineering']
    }
  },
  {
    group: { en: 'Architecture & clean code', cs: 'Architektura a čistý kód', es: 'Arquitectura y código limpio' },
    items: {
      en: ['Architecture', 'Abstraction', 'Dependencies', 'Dependency injection', 'Paradigms & styles of programming'],
      cs: ['Architektura', 'Abstrakce', 'Závislosti', 'Dependency injection', 'Paradigmata a styly programování'],
      es: ['Arquitectura', 'Abstracción', 'Dependencias', 'Inyección de dependencias', 'Paradigmas y estilos de programación']
    }
  },
  {
    group: { en: 'Caching, logging & observability', cs: 'Caching, logování a observabilita', es: 'Caché, logging y observabilidad' },
    items: {
      en: ['Redis', 'Shared cache', 'Logging', 'Observability', 'OpenTelemetry'],
      cs: ['Redis', 'Sdílená cache', 'Logování', 'Observabilita', 'OpenTelemetry'],
      es: ['Redis', 'Caché compartida', 'Logging', 'Observabilidad', 'OpenTelemetry']
    }
  },
  {
    group: { en: 'Messaging & data', cs: 'Messaging a data', es: 'Mensajería y datos' },
    items: {
      en: ['Message queues', 'Message brokers', 'SQL Server', 'PostgreSQL', 'EF Core', 'Auditing'],
      cs: ['Fronty zpráv', 'Message brokery', 'SQL Server', 'PostgreSQL', 'EF Core', 'Auditing'],
      es: ['Colas de mensajes', 'Message brokers', 'SQL Server', 'PostgreSQL', 'EF Core', 'Auditoría']
    }
  },
  {
    group: { en: 'Cloud & DevOps', cs: 'Cloud a DevOps', es: 'Cloud y DevOps' },
    items: ['Cloud', 'Git', 'CI/CD', 'GitHub Actions', 'Docker', 'Docker Desktop', 'Kubernetes', 'Freelens']
  },
  {
    group: { en: 'Security', cs: 'Bezpečnost', es: 'Seguridad' },
    items: {
      en: ['Cryptography & PKI', 'Postquantum cryptography'],
      cs: ['Kryptografie a PKI', 'Postkvantová kryptografie'],
      es: ['Criptografía y PKI', 'Criptografía poscuántica']
    }
  },
  {
    group: { en: 'Other languages', cs: 'Další jazyky', es: 'Otros lenguajes' },
    items: ['Python', 'C / C++', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Swift']
  }
];

const CV_MINDSET = {
  en: 'I think like a programmer first and a technology specialist second. What I want to get better at is the layer above the syntax — architecture, paradigms and programming style. I am firmly into AI and use it to work efficiently: I can pick up any new technology and start working in it almost immediately.',
  cs: 'Přemýšlím nejdřív jako programátor a teprve potom jako specialista na konkrétní technologii. Chci se zlepšovat ve vrstvě nad syntaxí — architektura, paradigmata a styl programování. S AI to myslím vážně a využívám ji k efektivní práci: zvládnu se naučit jakoukoli novou technologii a začít v ní pracovat téměř okamžitě.',
  es: 'Pienso primero como programador y después como especialista en una tecnología. Quiero mejorar en la capa que está por encima de la sintaxis: arquitectura, paradigmas y estilo de programación. Me tomo la IA muy en serio y la uso para trabajar con eficiencia: puedo aprender cualquier tecnología nueva y empezar a trabajar en ella casi de inmediato.'
};

const CV_CERTS = [
  { issuer: 'Microsoft Learn', name: 'GitHub Copilot', url: 'https://learn.microsoft.com/en-us/users/jirimlcousek-6170/credentials/e7eee83913415126' },
  { issuer: 'Dometrain', name: 'Deep Dive: C#' },
  { issuer: 'Dometrain', name: 'From Zero to Hero: REST APIs in .NET' },
  { issuer: 'freeCodeCamp', name: 'Foundational C# with Microsoft' }
];

const CV_LANGUAGES = [
  { name: { en: 'Czech', cs: 'Čeština', es: 'Checo' }, level: { en: 'native', cs: 'rodilý mluvčí', es: 'nativo' } },
  { name: { en: 'English', cs: 'Angličtina', es: 'Inglés' }, level: { en: 'advanced', cs: 'pokročilá', es: 'avanzado' } },
  { name: { en: 'German', cs: 'Němčina', es: 'Alemán' }, level: { en: 'beginner', cs: 'začátečník', es: 'principiante' } },
  { name: { en: 'Spanish', cs: 'Španělština', es: 'Español' }, level: { en: 'beginner', cs: 'začátečník', es: 'principiante' } }
];

const CV_INTERESTS = {
  en: [
    'I have been a sports person since I was young, and I like hard challenges: ultra-trail races, 24-hour races, the B7 and similar. Alongside running I enjoy road cycling and the gym, and in the past I played football.',
    'I like reading and improving myself in everything I do. I like data and statistics, and I log everything in a self-built Obsidian vault. My favourite quality time is walking in the mountains with my fiancée.'
  ],
  cs: [
    'Sportuji od mládí a mám rád těžké výzvy: ultratrailové závody, 24hodinovky, B7 a podobně. Vedle běhání mě baví silniční kolo a posilovna a v minulosti jsem hrál fotbal.',
    'Rád čtu a zlepšuji se ve všem, co dělám. Mám rád data a statistiky a všechno si zapisuji do vlastnoručně postaveného Obsidian vaultu. Nejraději trávím kvalitní čas s přítelkyní při procházkách po horách.'
  ],
  es: [
    'Hago deporte desde joven y me gustan los retos duros: ultra-trails, carreras de 24 horas, la B7 y similares. Además de correr, disfruto del ciclismo de carretera y del gimnasio, y en el pasado jugué al fútbol.',
    'Me gusta leer y mejorar en todo lo que hago. Me gustan los datos y las estadísticas, y lo registro todo en un vault de Obsidian construido por mí. Mi mejor tiempo de calidad es caminar por la montaña con mi prometida.'
  ]
};

function cvLang() {
  const lang = localStorage.getItem('lang');
  return CV_UI[lang] ? lang : 'en';
}

function cvPick(field, lang) {
  return (field && (field[lang] || field.en)) || '';
}

function cvList(items, lang) {
  return Array.isArray(items) ? items : (items[lang] || items.en);
}

function cvParagraphs(field, lang, cls) {
  return (field[lang] || field.en).map(p => `<p class="${cls}">${p}</p>`).join('');
}

// Links render as full-row targets: a visible arrow in the browser, a printed URL in the PDF.
function renderCvHeader(lang, ui) {
  const links = CV_LINKS.map(l => {
    const external = l.href.startsWith('http');
    return `<li><a class="cv-link" href="${l.href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}><span class="cv-link-label">${l.label}</span><span class="cv-link-text">${l.text}</span>${external ? '<span class="cv-link-arrow" aria-hidden="true">↗</span>' : ''}</a></li>`;
  }).join('');
  const langs = CV_LANGUAGES.map(l =>
    `<li><span>${cvPick(l.name, lang)}</span><span class="cv-meta">${cvPick(l.level, lang)}</span></li>`
  ).join('');
  return `
    <img class="cv-photo" src="${CV_PHOTO.src}" alt="Jiří Mlčoušek" width="${CV_PHOTO.width}" height="${CV_PHOTO.height}" decoding="async">
    <p class="cv-eyebrow">${ui.role}</p>
    <h1 class="cv-name">Jiří Mlčoušek</h1>
    <p class="cv-location">${ui.location}</p>
    <ul class="cv-links">${links}</ul>
    <h2 class="cv-side-heading">${ui.languages}</h2>
    <ul class="cv-langs">${langs}</ul>
    <button type="button" class="cv-print" id="cv-print">${ui.print}</button>`;
}

function renderCvExperience(lang) {
  return CV_EXPERIENCE.map(e => `
    <article class="cv-entry">
      <span class="cv-period">${cvPick(e.period, lang)}</span>
      <div class="cv-entry__body">
        <h3 class="cv-entry__title">${cvPick(e.title, lang)} <span class="cv-company">· ${e.company}</span></h3>
        <ol class="cv-steps">${e.steps.map(s => `<li><span class="cv-meta">${cvPick(s.when, lang)}</span><span>${cvPick(s.what, lang)}</span></li>`).join('')}</ol>
        ${e.note ? `<p class="cv-note">${cvPick(e.note, lang)}</p>` : ''}
      </div>
    </article>`).join('');
}

function renderCvEducation(lang) {
  return CV_EDUCATION.map(e => `
    <article class="cv-entry">
      <span class="cv-period">${e.period}</span>
      <div class="cv-entry__body">
        <h3 class="cv-entry__title">${cvPick(e.title, lang)}</h3>
        <p class="cv-school">${e.school}</p>
        ${e.thesis ? `<p class="cv-thesis"><span class="cv-meta">${cvPick(e.thesisLabel, lang)}</span> ${cvPick(e.thesis, lang)}</p>` : ''}
        ${e.award ? `<p class="cv-award">${cvPick(e.award, lang)}</p>` : ''}
      </div>
    </article>`).join('');
}

function renderCvSkills(lang) {
  return `<div class="cv-skills">${CV_SKILLS.map(g => `
    <div class="cv-skill-group">
      <h3 class="cv-skill-group__title">${cvPick(g.group, lang)}</h3>
      <ul class="cv-chips">${cvList(g.items, lang).map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('')}</div>`;
}

function renderCvCerts(ui) {
  return `<ul class="cv-certs">${CV_CERTS.map(c => {
    const inner = `<span class="cv-meta">${c.issuer}</span><span class="cv-cert__name">${c.name}</span>${c.url ? `<span class="cv-cert__cta">${ui.viewCred}</span>` : ''}`;
    return c.url
      ? `<li class="cv-cert"><a href="${c.url}" target="_blank" rel="noopener noreferrer">${inner}</a></li>`
      : `<li class="cv-cert"><div>${inner}</div></li>`;
  }).join('')}</ul>`;
}

function renderCv() {
  const lang = cvLang();
  const ui = CV_UI[lang];
  const header = document.getElementById('cv-header');
  const content = document.getElementById('cv-content');
  if (!header || !content) return;

  header.innerHTML = renderCvHeader(lang, ui);
  content.innerHTML = `
    <section class="cv-section"><h2 class="section-heading">${ui.summary}</h2>${cvParagraphs(CV_SUMMARY, lang, 'cv-summary')}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.experience}</h2>${renderCvExperience(lang)}<p class="cv-earlier"><span class="cv-meta">${ui.earlier}</span> ${CV_EARLIER_JOBS[lang]}</p></section>
    <section class="cv-section"><h2 class="section-heading">${ui.education}</h2>${renderCvEducation(lang)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.skills}</h2><p class="cv-summary cv-mindset">${CV_MINDSET[lang]}</p>${renderCvSkills(lang)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.certs}</h2>${renderCvCerts(ui)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.interests}</h2>${cvParagraphs(CV_INTERESTS, lang, 'cv-summary')}</section>`;

  const print = document.getElementById('cv-print');
  if (print) print.addEventListener('click', () => window.print());
  document.title = `CV – Jiří Mlčoušek`;
}

document.addEventListener('DOMContentLoaded', renderCv);
document.addEventListener('languageChanged', renderCv);
