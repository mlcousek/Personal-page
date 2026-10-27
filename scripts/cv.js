/**
 * CV — data + rendering.
 * Everything on the page lives here as { en, cs, es } and re-renders on `languageChanged`.
 * Phone number and birth year from the PDF résumé are deliberately not published.
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

const CV_SUMMARY = {
  en: 'Software developer with a .NET/C# focus — REST APIs, data-heavy backends and the infrastructure around them. I grew from intern to full-time at Monet+ while finishing a master\'s degree, and I keep a record of everything I build and everything I run.',
  cs: 'Softwarový vývojář se zaměřením na .NET/C# — REST API, datově náročné backendy a infrastruktura kolem nich. V Monet+ jsem vyrostl ze stážisty na plný úvazek při dokončování magisterského studia a vedu si záznam o všem, co postavím i naběhám.',
  es: 'Desarrollador de software centrado en .NET/C#: APIs REST, backends con muchos datos y la infraestructura que los rodea. En Monet+ pasé de becario a jornada completa mientras terminaba el máster, y llevo un registro de todo lo que construyo y de todo lo que corro.'
};

// Roles at Monet+ are shown as one company with a stepped timeline.
const CV_EXPERIENCE = [
  {
    company: 'Monet+',
    period: { en: 'Feb 2025 – present', cs: 'únor 2025 – dosud', es: 'feb 2025 – actualidad' },
    title: { en: '.NET Developer', cs: '.NET vývojář', es: 'Desarrollador .NET' },
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
  en: 'I think like a programmer first and a technology specialist second. What I want to get better at is the layer above the syntax — architecture, paradigms and programming style. I can pick up any new technology, and with AI I can start working in it almost immediately.',
  cs: 'Přemýšlím nejdřív jako programátor a teprve potom jako specialista na konkrétní technologii. Chci se zlepšovat ve vrstvě nad syntaxí — architektura, paradigmata a styl programování. Zvládnu se naučit jakoukoli novou technologii a s AI v ní mohu začít pracovat téměř okamžitě.',
  es: 'Pienso primero como programador y después como especialista en una tecnología. Quiero mejorar en la capa que está por encima de la sintaxis: arquitectura, paradigmas y estilo de programación. Puedo aprender cualquier tecnología nueva y, con IA, empezar a trabajar en ella casi de inmediato.'
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
  en: 'Ultra-trail and road running, cycling, strength training and football. Reading, and logging everything in a self-built Obsidian vault.',
  cs: 'Ultratrail a silniční běh, cyklistika, silový trénink a fotbal. Čtení a zapisování všeho do vlastnoručně postaveného Obsidian vaultu.',
  es: 'Ultra-trail y carreras de asfalto, ciclismo, entrenamiento de fuerza y fútbol. Lectura, y registrar todo en un vault de Obsidian construido por mí.'
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

function renderCvHeader(lang, ui) {
  const links = CV_LINKS.map(l =>
    `<li><span class="cv-link-label">${l.label}</span><a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${l.text}</a></li>`
  ).join('');
  const langs = CV_LANGUAGES.map(l =>
    `<li><span>${cvPick(l.name, lang)}</span><span class="cv-meta">${cvPick(l.level, lang)}</span></li>`
  ).join('');
  return `
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
    <section class="cv-section"><h2 class="section-heading">${ui.summary}</h2><p class="cv-summary">${CV_SUMMARY[lang]}</p></section>
    <section class="cv-section"><h2 class="section-heading">${ui.experience}</h2>${renderCvExperience(lang)}<p class="cv-earlier"><span class="cv-meta">${ui.earlier}</span> ${CV_EARLIER_JOBS[lang]}</p></section>
    <section class="cv-section"><h2 class="section-heading">${ui.education}</h2>${renderCvEducation(lang)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.skills}</h2><p class="cv-summary cv-mindset">${CV_MINDSET[lang]}</p>${renderCvSkills(lang)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.certs}</h2>${renderCvCerts(ui)}</section>
    <section class="cv-section"><h2 class="section-heading">${ui.interests}</h2><p class="cv-summary">${CV_INTERESTS[lang]}</p></section>`;

  const print = document.getElementById('cv-print');
  if (print) print.addEventListener('click', () => window.print());
  document.title = `CV – Jiří Mlčoušek`;
}

document.addEventListener('DOMContentLoaded', renderCv);
document.addEventListener('languageChanged', renderCv);
