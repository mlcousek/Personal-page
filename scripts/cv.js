/**
 * CV — data + rendering.
 * Everything on the page lives here as { en, cs, es } and re-renders on `languageChanged`.
 * Birth year from the PDF résumé is deliberately not published (the phone number is, at the owner's request).
 */

const CV_UI = {
  en: {
    role: 'Software developer · Monet+',
    location: 'Olomouc, Czechia',
    savePdf: 'Save as PDF (clickable links)', printPaper: 'Print (links written out)',
    summary: 'Profile', experience: 'Experience', education: 'Education',
    skills: 'Technical skills', certs: 'Certifications', languages: 'Languages', interests: 'Beyond code',
    viewCred: 'View credential →', now: 'now', earlier: 'Earlier jobs'
  },
  cs: {
    role: 'Softwarový vývojář · Monet+',
    location: 'Olomouc, Česko',
    savePdf: 'Uložit jako PDF (klikací odkazy)', printPaper: 'Vytisknout (odkazy vypsané)',
    summary: 'Profil', experience: 'Praxe', education: 'Vzdělání',
    skills: 'Technické dovednosti', certs: 'Certifikace', languages: 'Jazyky', interests: 'Mimo kód',
    viewCred: 'Zobrazit certifikát →', now: 'dosud', earlier: 'Dřívější zaměstnání'
  },
  es: {
    role: 'Desarrollador de software · Monet+',
    location: 'Olomouc, Chequia',
    savePdf: 'Guardar como PDF (enlaces clicables)', printPaper: 'Imprimir (enlaces escritos)',
    summary: 'Perfil', experience: 'Experiencia', education: 'Formación',
    skills: 'Habilidades técnicas', certs: 'Certificaciones', languages: 'Idiomas', interests: 'Más allá del código',
    viewCred: 'Ver credencial →', now: 'actualidad', earlier: 'Empleos anteriores'
  }
};

const CV_CONTACT = [
  { label: 'Tel', href: 'tel:+420731280205', text: '+420 731 280 205' },
  { label: 'Email', href: 'mailto:jirka.mlcousek@seznam.cz', text: 'jirka.mlcousek@seznam.cz' }
];

// Social profiles render as icon links; the readable URL is only shown in the "print" version.
const CV_SOCIAL = [
  {
    label: 'LinkedIn', href: 'https://linkedin.com/in/jiří-mlčoušek', text: 'linkedin.com/in/jiří-mlčoušek',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
  },
  {
    label: 'GitHub', href: 'https://github.com/mlcousek', text: 'github.com/mlcousek',
    icon: '<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'
  },
  {
    label: 'Strava', href: 'https://www.strava.com/athletes/72382004', text: 'strava.com/athletes/72382004',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>'
  }
];

const CV_PHOTO = { src: '../images/cv-portrait.jpg', width: 900, height: 1200 };

// Paragraph arrays: each entry renders as its own <p>.
const CV_SUMMARY = {
  en: [
    'Software developer with an AI & .NET/C# focus. I work with AI coding agents every day and build good habits around them: spec-driven development, small reviewed iterations, tests as the safety net, and automation of anything repetitive. I like improving myself and my team, and I want everything we do to be done effectively.',
    'I grew from intern to full-time at Monet+ while finishing a master\'s degree. Outside of work I am a sports person, mainly focused on long-distance running and road cycling.'
  ],
  cs: [
    'Softwarový vývojář se zaměřením na AI a .NET/C#. S AI programovacími agenty pracuji každý den a vytvářím kolem nich dobré návyky: spec-driven vývoj, malé zrevidované iterace, testy jako záchranná síť a automatizace všeho opakujícího se. Rád zlepšuji sebe i svůj tým a chci, aby vše, co děláme, bylo děláno efektivně.',
    'V Monet+ jsem vyrostl ze stážisty na plný úvazek při dokončování magisterského studia. Mimo práci jsem sportovní typ, především se věnuji dlouhým běhům a silniční cyklistice.'
  ],
  es: [
    'Desarrollador de software con foco en IA y .NET/C#. Trabajo con agentes de programación con IA cada día y construyo buenos hábitos a su alrededor: desarrollo guiado por specs, iteraciones pequeñas y revisadas, pruebas como red de seguridad y automatización de todo lo repetitivo. Me gusta mejorar yo y mi equipo, y quiero que todo lo que hacemos se haga de forma efectiva.',
    'En Monet+ pasé de becario a jornada completa mientras terminaba el máster. Fuera del trabajo soy una persona deportista, centrada sobre todo en carreras de larga distancia y ciclismo de carretera.'
  ]
};

// Roles at Monet+ are shown as one company with a stepped timeline.
const CV_EXPERIENCE = [
  {
    company: 'Monet+',
    period: { en: 'Feb 2025 – present', cs: 'únor 2025 – dosud', es: 'feb 2025 – actualidad' },
    title: {
      en: 'Software developer (mainly in .NET)',
      cs: 'Softwarový vývojář (hlavně v .NET)',
      es: 'Desarrollador de software (principalmente en .NET)'
    },
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
    group: { en: 'C# & .NET', cs: 'C# a .NET', es: 'C# y .NET' },
    items: ['C#', '.NET', 'ASP.NET Core', '.NET Aspire']
  },
  {
    group: { en: 'APIs', cs: 'API', es: 'APIs' },
    items: {
      en: ['Web API', 'REST', 'Controllers & endpoints', 'Swagger / OpenAPI'],
      cs: ['Web API', 'REST', 'Controllery a endpointy', 'Swagger / OpenAPI'],
      es: ['Web API', 'REST', 'Controllers y endpoints', 'Swagger / OpenAPI']
    }
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
    group: { en: 'Messaging & service communication', cs: 'Messaging a komunikace mezi službami', es: 'Mensajería y comunicación entre servicios' },
    items: {
      en: ['gRPC', 'Message queues', 'Message brokers'],
      cs: ['gRPC', 'Fronty zpráv', 'Message brokery'],
      es: ['gRPC', 'Colas de mensajes', 'Message brokers']
    }
  },
  {
    group: { en: 'Data', cs: 'Data', es: 'Datos' },
    items: {
      en: ['SQL Server', 'PostgreSQL', 'EF Core', 'Auditing'],
      cs: ['SQL Server', 'PostgreSQL', 'EF Core', 'Auditing'],
      es: ['SQL Server', 'PostgreSQL', 'EF Core', 'Auditoría']
    }
  },
  {
    group: { en: 'Cloud & DevOps', cs: 'Cloud a DevOps', es: 'Cloud y DevOps' },
    items: ['Cloud', 'Git', 'CI/CD', 'GitHub Actions', 'Docker', 'Docker Desktop', 'Kubernetes', 'Freelens']
  },
  {
    group: { en: 'Security', cs: 'Bezpečnost', es: 'Seguridad' },
    items: {
      en: ['Cryptography & PKI', 'Post-quantum cryptography'],
      cs: ['Kryptografie a PKI', 'Postkvantová kryptografie'],
      es: ['Criptografía y PKI', 'Criptografía poscuántica']
    }
  },
  {
    group: { en: 'Other programming languages', cs: 'Další programovací jazyky', es: 'Otros lenguajes de programación' },
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
    'I read a lot and try to get a little better at everything I do. I love data and statistics, so I track my training, reading and much more in a self-built Obsidian vault. My favourite way to recharge is a long walk in the mountains with my fiancée.'
  ],
  cs: [
    'Sportuji od mládí a mám rád těžké výzvy: ultratrailové závody, 24hodinovky, B7 a podobně. Vedle běhání mě baví silniční kolo a posilovna a v minulosti jsem hrál fotbal.',
    'Hodně čtu a snažím se být ve všem, co dělám, o kousek lepší. Miluji data a statistiky, a tak si trénink, čtení a mnoho dalšího zapisuji do vlastnoručně postaveného Obsidian vaultu. Nejlépe si odpočinu na dlouhé procházce po horách s přítelkyní.'
  ],
  es: [
    'Hago deporte desde joven y me gustan los retos duros: ultra-trails, carreras de 24 horas, la B7 y similares. Además de correr, disfruto del ciclismo de carretera y del gimnasio, y en el pasado jugué al fútbol.',
    'Leo mucho e intento mejorar un poco en todo lo que hago. Me encantan los datos y las estadísticas, así que registro mi entrenamiento, mis lecturas y mucho más en un vault de Obsidian construido por mí. Mi forma favorita de desconectar es una larga caminata por la montaña con mi prometida.'
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
  const links = CV_CONTACT.map(l =>
    `<li><a class="cv-link" href="${l.href}"><span class="cv-link-label">${l.label}</span><span class="cv-link-text">${l.text}</span></a></li>`
  ).join('');
  const social = CV_SOCIAL.map(s =>
    `<li><a class="cv-social__link" href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${s.icon}<span class="cv-social__name">${s.label}</span><span class="cv-social__url">${s.text}</span></a></li>`
  ).join('');
  const langs = CV_LANGUAGES.map(l =>
    `<li><span>${cvPick(l.name, lang)}</span><span class="cv-meta">${cvPick(l.level, lang)}</span></li>`
  ).join('');
  return `
    <img class="cv-photo" src="${CV_PHOTO.src}" alt="Jiří Mlčoušek" width="${CV_PHOTO.width}" height="${CV_PHOTO.height}" decoding="async">
    <p class="cv-eyebrow">${ui.role}</p>
    <h1 class="cv-name">Jiří Mlčoušek</h1>
    <p class="cv-location">${ui.location}</p>
    <ul class="cv-links">${links}</ul>
    <ul class="cv-social">${social}</ul>
    <h2 class="cv-side-heading">${ui.languages}</h2>
    <ul class="cv-langs">${langs}</ul>
    <div class="cv-downloads">
      <button type="button" class="cv-print" data-print-mode="pdf">${ui.savePdf}</button>
      <button type="button" class="cv-print" data-print-mode="paper">${ui.printPaper}</button>
    </div>`;
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

  // "pdf" keeps the social icons as clickable links; "paper" also writes the URLs out as text.
  document.querySelectorAll('.cv-print').forEach(btn => btn.addEventListener('click', () => {
    document.documentElement.dataset.cvPrint = btn.dataset.printMode;
    window.print();
  }));
  document.title = `CV – Jiří Mlčoušek`;
}

window.addEventListener('afterprint', () => { delete document.documentElement.dataset.cvPrint; });

document.addEventListener('DOMContentLoaded', renderCv);
document.addEventListener('languageChanged', renderCv);
