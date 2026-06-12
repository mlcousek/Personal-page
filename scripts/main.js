// This file contains the JavaScript code for the personal webpage. 
// It may include functionality for interactive elements, event listeners, and any dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    // Language toggle logic
    const translations = {
        en: {
            'footer-text': 'Built with consistency, one block at a time.',
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'About',
            'nav-books': 'Read Books',
            'nav-media': 'Media Hub',
            'nav-podcasts': 'Podcast Log',
            'nav-videos': 'Video Vault',
            'nav-blog': 'Blog',
            'nav-sports': 'Sports',
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'Consistency is key. Next stop the top ⬆️⬆️⬆️',
            'contact-email-label': 'Email:',
            'contact-phone-label': 'Phone:',
            'about-title': 'About Me',
            'about-summary-1': 'I am a driven learner who turns consistency into long-term momentum and results.',
            'about-summary-2': 'With interests spanning technology, cryptography, personal performance and structured growth, I build habits that compound.',
            'skills-heading': 'Key Skills',
            'skill-learning': 'Lifelong Learning',
            'skill-motivation': 'Motivation',
            'skill-security': 'Security Basics',
            'skill-crypto': 'Cryptography Interest',
            'skill-consistency': 'Consistency',
            'skill-growth': 'Growth Mindset',
            'experience-heading': 'Experience',
            'exp-role-1-title': 'Update Your Current Role',
            'exp-role-1-company': 'Your Company / Organization',
            'exp-role-1-period': 'Year – Present',
            'exp-role-1-desc': 'Describe your main contributions, learning focus and impact.',
            'exp-role-2-title': 'Previous Role',
            'exp-role-2-company': 'Previous Company',
            'exp-role-2-period': 'Year – Year',
            'exp-role-2-desc': 'Highlight achievements, responsibilities or key lessons.',
            'exp-note': '(Replace the placeholders above with real experience details.)',
            'focus-heading': 'Focus & Interests',
            'focus-text-1': 'Motivated by disciplined progress, I explore technology, security concepts, and performance optimization.',
            'focus-text-2': 'I aim to combine structured learning with practical experimentation to build durable knowledge.',
            'sports-title': 'Sports Journey',
            'sports-lead': 'A foundation of 15 years in football built endurance, discipline and competitive focus—now powering progress in endurance racing.',
            'stat-years-label': 'Years in Football',
            'stat-best-league-label': 'Highest Level',
            'stat-marathons-label': 'Marathons',
            'stat-ultras-label': 'Ultramarathons',
            'stat-ultra-label': 'Ultra Events',
            'race-heading': 'Races',
            'future-race-heading': 'Future Races',
            'th-event': 'Event',
            'th-future-event': 'Event',
            'th-date': 'Date',
            'th-future-date': 'Date',
            'th-time': 'Time',
            'th-future-distance': 'Distance',
            'th-notes': 'Notes',
            'th-future-link': 'Link',
            'career-heading': 'Football Background',
            'career-p-1': 'I played competitive football for 15 years, developing tactical awareness, speed endurance and team resilience.',
            'career-p-2': 'My highest competition level reached the Czech fourth tier, an environment that demanded structure, discipline and consistency.',
            'career-p-3': 'Those foundations now translate into structured training blocks for running, strength and hybrid endurance challenges.',
            'long-bio-heading': 'A Longer Story',
            'long-bio-p1': 'I like building momentum through small, well-defined daily actions. Whether it was years of competitive football, structured reading, or disciplined training for endurance events, I’ve learned that consistency isn’t glamorous—but it wins. I apply that mindset to learning technology, understanding systems, and improving my personal performance.',
            'long-bio-p2': 'Books gave me frameworks: how to think clearly, how to train deliberately, and how to analyze problems instead of reacting to them. I’m especially interested in the intersection of security fundamentals and cryptography—how trust, identity, and verification shape the modern digital landscape. I approach those topics the same way I approach training: break complexity into repeatable, progressive cycles.',
            'long-bio-p3': 'Sport taught me resilience. Long runs, strength sessions, and tactical football years built discipline under fatigue. That directly translates to focused study sessions and long-term projects where progress can feel invisible day to day. I like turning vague goals into trackable inputs—mornings studied, pages read, kilometers run, repetitions logged.',
            'long-bio-p4': 'Right now I’m refining a system that blends physical training, technical learning, and reflective review. Each week I evaluate what compounded, what stalled, and what needs iteration. I don’t chase intensity spikes—I engineer sustainable acceleration. That approach keeps me improving without burning out.',
            'long-bio-p5': 'Looking ahead, I want to deepen my expertise in applied security concepts while continuing to test endurance boundaries. I believe that combining mental rigor with physical durability creates a competitive advantage both professionally and personally. This page documents that ongoing build process—one disciplined block at a time.',
            // ── Index page ──
            'hero-eyebrow': ' .NET dev / runner / a lifelong learner',
            'hero-scroll': 'Scroll',
            'home-blog-eyebrow': 'From the blog',
            'home-blog-heading': 'Latest Updates',
            'home-blog-more': 'View all posts →',
            // ── About page ──
            'about-eyebrow': 'Applied Informatics · .NET Developer · Monet+',
            'about-tagline': 'Always pushing for better. In everything.',
            'about-intro': 'I\'m a disciplined, consistent and ambitious person who goes hard after what I want. Technical by nature, I love working with numbers, statistics and building systems that hold up. Competitive and detail-oriented, yet I know the best results come from a great team.',
            'trait-disciplined': 'Disciplined',
            'trait-consistent': 'Consistent',
            'trait-ambitious': 'Ambitious',
            'trait-technical': 'Technical',
            'trait-numbers': 'Numbers & Stats',
            'trait-competitive': 'Competitive',
            'trait-team': 'Team Player',
            'trait-detail': 'Detail-oriented',
            'about-story-heading': 'My Story',
            'about-story-p1': 'I\'ve always believed that the gap between where you are and where you want to be is closed by consistency — not occasional bursts of effort. Whether it\'s running, studying or writing code, I show up every day and look for 1% improvements. That mindset shaped everything: how I study, how I train and how I approach my career.',
            'about-story-p2': 'I studied Applied Informatics at Palacký University in Olomouc — first a bachelor\'s in General Informatics (2021–2024), then a master\'s in Software Development (2024–2026). During my master\'s I joined Monet+ as an intern in February 2025 and since then I\'ve grown from intern to part-time to ¾ time, with full-time starting July 2026. The overlap between studying and working has been intentional: theory and practice, running in parallel.',
            'about-story-p3': 'I\'m a technical person who loves structure — clean architecture, well-defined processes, measurable results. I enjoy digging into data, finding patterns and building solutions that hold up under pressure. Outside of work I run long distances, track every workout and read obsessively. Discipline in sport and discipline in code are the same muscle.',
            'about-timeline-heading': 'Education & Career Path',
            'timeline-title-1': 'Bc. General Informatics',
            'timeline-title-2': 'Mgr. Software Development',
            'timeline-title-3': 'Internship',
            'timeline-title-4': 'Part-time',
            'timeline-title-5': 'Full-time',
            'about-skills-heading': 'Skills',
            'skills-col-technical': 'Technical',
            'skills-col-personal': 'Personal',
            'skill-sql': 'SQL & Databases',
            'skill-git': 'Git & Version Control',
            'skill-crypto-pki': 'Cryptography & PKI',
            'skill-pqc': 'Postquantum Cryptography',
            'skill-data': 'Data & Statistics',
            'skill-analytical': 'Analytical thinking',
            'skill-disciplined': 'Disciplined & consistent',
            'skill-goal': 'Goal tracking & planning',
            'skill-problem': 'Problem solving',
            'skill-team': 'Team collaboration',
            'skill-drive': 'Competitive drive',
            'about-certs-heading': 'Certifications',
            'cert-view-cred': 'View credential →',
            // ── Blog page ──
            'blog-eyebrow': 'Running · Academic · Life',
            'blog-title': 'Blog',
            'blog-lead': 'Race reports, academic milestones and progress notes.',
            'latest-heading': 'Latest Posts',
            'archive-heading': 'All Posts',
            // ── Books page ──
            'books-title': 'Read Books',
            'books-lead': 'A personal log of books that shaped my thinking — across security, performance, philosophy, and endurance.',
            // ── Videos page ──
            'video-page-title': 'Video Log',
            'video-note': 'Hand-picked long-form talks, documentaries, and stories that shaped my mindset.',
            'vf-all': 'All',
            'vf-in-progress': 'In Progress',
            'vf-finished': 'Finished',
            'vf-favorites': 'Favorites',
            'vf-favourite': 'Favourites',
            'video-sort-label': 'Sort by',
            'vsort-date': 'Date (newest)',
            'vsort-channel': 'Channel (A–Z)',
            'vsort-tag': 'Tag (A–Z)',
            'video-tag-label': 'Tag',
            'video-tag-all': 'All tags',
            'video-clear': 'Clear filters',
            // ── Podcasts page ──
            'podcast-page-title': 'Podcast Log',
            'podcast-note': 'Cover images and descriptions sourced from Spotify and other platforms when available.',
            'pf-all': 'All',
            'pf-favourite': 'Favourites',
            'pf-spotify': 'Spotify',
            'pf-youtube': 'YouTube',
            'podcast-show-label': 'Show',
            'podcast-show-all': 'All shows',
            'podcast-tag-label': 'Tag',
            'podcast-tag-all': 'All tags',
            'podcast-clear': 'Clear filters',
            // ── Sports page ──
            'sports-eyebrow': 'Running · Trail · Cycling · Endurance',
            'sports-page-lead': '15 years of competitive football built the discipline and resilience. After burning out at the 4th national division, I found a new fire in endurance — marathons, ultras and long rides.',
            'stat-marathon-pb-label': 'Marathon PB',
            'stat-ultra-dist-label': 'Max Ultra Distance',
            'stat-half-pb-label': 'Half Marathon PB',
            'th-result': 'Result',
            'race-heading-hint': '— click a row for details',
            'strava-heading': 'Training Overview',
            'strava-note': 'Strava data · last updated June 2026 · refresh: node scripts/update-strava.mjs',
            'football-heading': 'Football Background',
            'football-p1': 'I grew up playing football in Město Albrechtice and joined FK Město Albrechtice as a kid — my hometown club. Over the years I worked my way up through the pyramid: from the 7th division to the 6th, then to the 5th, and eventually to the 4th highest level in the Czech Republic — Moravskoslezská divize F — playing for FK Břidličná. I also spent a significant stint at FK Krnov along the way.',
            'football-p2': 'After years of intense competition at that level I burned out. The passion I once had for the game faded and I needed a new physical challenge. I turned to cycling and long-distance running — and found something I hadn\'t expected: the same fire, but without the burn. Endurance sport gave me back the competitive drive without the team politics, the injuries and the grind of weekend matches.',
            'football-p3': 'Football gave me discipline, tactical thinking and the ability to perform under pressure. Everything I learned on the pitch I now apply on the road and on the trail.',
        },
        cs: {
            'footer-text': 'Budováno konzistentně, kostku po kostce.',
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'O mně',
            'nav-books': 'Přečtené knihy',
            'nav-media': 'Mediální hub',
            'nav-podcasts': 'Podcasty',
            'nav-videos': 'Video archiv',
            'nav-blog': 'Blog',
            'nav-sports': 'Sport',
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'Konzistence je klíč. Další zastávka vrchol ⬆️⬆️⬆️',
            'contact-email-label': 'E-mail:',
            'contact-phone-label': 'Telefon:',
            'about-title': 'O mně',
            'about-summary-1': 'Jsem cílevědomý student, který proměňuje konzistenci v dlouhodobou hybnou sílu a výsledky.',
            'about-summary-2': 'Mé zájmy zahrnují technologie, kryptografii, osobní výkonnost a strukturovaný růst. Buduji návyky, které se násobí.',
            'skills-heading': 'Klíčové dovednosti',
            'skill-learning': 'Celoživotní učení',
            'skill-motivation': 'Motivace',
            'skill-security': 'Základy bezpečnosti',
            'skill-crypto': 'Zájem o kryptografii',
            'skill-consistency': 'Konzistence',
            'skill-growth': 'Růstové myšlení',
            'experience-heading': 'Zkušenosti',
            'exp-role-1-title': 'Aktuální pozice (upravte)',
            'exp-role-1-company': 'Vaše společnost / organizace',
            'exp-role-1-period': 'Rok – Současnost',
            'exp-role-1-desc': 'Popište hlavní přínosy, zaměření na učení a dopad.',
            'exp-role-2-title': 'Předchozí pozice',
            'exp-role-2-company': 'Předchozí společnost',
            'exp-role-2-period': 'Rok – Rok',
            'exp-role-2-desc': 'Vyzdvihněte úspěchy, odpovědnosti nebo klíčové lekce.',
            'exp-note': '(Nahraďte výše uvedené placeholdery skutečnými údaji.)',
            'focus-heading': 'Zaměření & Zájmy',
            'focus-text-1': 'Poháněn disciplínou zkoumám technologie, bezpečnostní koncepty a optimalizaci výkonu.',
            'focus-text-2': 'Snažím se kombinovat strukturované učení s praktickými experimenty pro trvalé znalosti.',
            'sports-title': 'Sportovní cesta',
            'sports-lead': '15 let ve fotbale vybudovalo vytrvalost, disciplínu a soutěživost – nyní posouvá můj pokrok v běhu a vytrvalostních závodech.',
            'stat-years-label': 'Let ve fotbale',
            'stat-best-league-label': 'Nejvyšší úroveň',
            'stat-marathons-label': 'Maratony',
            'stat-ultras-label': 'Ultramaratony',
            'stat-ultra-label': 'Ultra závody',
            'race-heading': 'Závody',
            'future-race-heading': 'Plánované závody',
            'th-event': 'Závod',
            'th-future-event': 'Závod',
            'th-date': 'Datum',
            'th-future-date': 'Datum',
            'th-time': 'Čas',
            'th-future-distance': 'Vzdálenost',
            'th-notes': 'Poznámky',
            'th-future-link': 'Odkaz',
            'career-heading': 'Fotbalové pozadí',
            'career-p-1': 'Hrál jsem soutěžní fotbal 15 let a rozvíjel tak taktické vnímání, rychlostní vytrvalost a týmovou odolnost.',
            'career-p-2': 'Dosáhl jsem české čtvrté ligy, prostředí vyžadující strukturu, disciplínu a konzistenci.',
            'career-p-3': 'Tyto základy nyní převádím do strukturovaných tréninkových bloků pro běh, sílu a hybridní výzvy.',
            'long-bio-heading': 'Delší příběh',
            'long-bio-p1': 'Rád buduji tempo pomocí malých, jasně definovaných denních kroků. Ať už šlo o roky soutěžního fotbalu, strukturované čtení nebo disciplinovanou přípravu na vytrvalostní závody, naučil jsem se, že konzistence není okázalá – ale vítězí. Stejný přístup aplikuji na učení technologií, pochopení systémů a zlepšování osobního výkonu.',
            'long-bio-p2': 'Knihy mi daly rámce: jak přemýšlet jasně, jak trénovat záměrně a jak analyzovat problémy místo impulsivních reakcí. Zajímá mě zejména průnik základů bezpečnosti a kryptografie – jak důvěra, identita a ověřování formují moderní digitální prostředí. Přistupuji k těmto tématům jako k tréninku: rozdělit složitost do opakovatelných, postupných cyklů.',
            'long-bio-p3': 'Sport mě naučil odolnosti. Dlouhé běhy, silové bloky a taktické fotbalové roky vybudovaly disciplínu i při únavě. To se přímo promítá do soustředěných studijních bloků a dlouhodobých projektů, kde je pokrok den ode dne neviditelný. Baví mě převádět vágní cíle do měřitelných vstupů – rána studia, přečtené stránky, uběhnuté kilometry, odcvičené opakování.',
            'long-bio-p4': 'Momentálně ladím systém, který kombinuje fyzický trénink, technické učení a reflexi. Každý týden hodnotím, co se násobilo, co stagnovalo a co potřebuje iteraci. Nehoním se za špičkami intenzity – navrhuji udržitelnou akceleraci. Díky tomu zlepšuji bez vyhoření.',
            'long-bio-p5': 'Do budoucna chci prohloubit odbornost v aplikovaných bezpečnostních konceptech a zároveň dál testovat hranice vytrvalosti. Věřím, že spojení mentální preciznosti s fyzickou odolností vytváří konkurenční výhodu profesně i osobně. Tato stránka dokumentuje proces budování – krok za krokem.',
            // ── Index page ──
            'hero-eyebrow': ' .NET vývojář / běžec / celoživotní student',
            'hero-scroll': 'Scrollovat',
            'home-blog-eyebrow': 'Z blogu',
            'home-blog-heading': 'Nejnovější příspěvky',
            'home-blog-more': 'Zobrazit všechny →',
            // ── About page ──
            'about-eyebrow': 'Aplikovaná informatika · .NET Developer · Monet+',
            'about-tagline': 'Vždy tlačím na lepší výsledky. Ve všem.',
            'about-intro': 'Jsem disciplinovaný, konzistentní a ambiciózní člověk, který jde tvrdě za tím, co chce. Technicky zaměřený, miluji práci s čísly, statistikami a budování systémů, které obstojí. Soutěživý a zaměřený na detail, přesto vím, že nejlepší výsledky vycházejí ze skvělého týmu.',
            'trait-disciplined': 'Disciplinovaný',
            'trait-consistent': 'Konzistentní',
            'trait-ambitious': 'Ambiciózní',
            'trait-technical': 'Technický',
            'trait-numbers': 'Čísla & statistiky',
            'trait-competitive': 'Soutěživý',
            'trait-team': 'Týmový hráč',
            'trait-detail': 'Orientovaný na detail',
            'about-story-heading': 'Můj příběh',
            'about-story-p1': 'Vždy jsem věřil, že mezera mezi tím, kde jste, a kde chcete být, se překonává konzistencí — ne nárazovým úsilím. Ať jde o běh, studium nebo psaní kódu, každý den se ukážu a hledám 1% zlepšení. Tento přístup formoval vše: jak studuji, jak trénuji a jak přistupuji ke kariéře.',
            'about-story-p2': 'Studoval jsem Aplikovanou informatiku na Univerzitě Palackého v Olomouci — nejprve bakaláře Obecné informatiky (2021–2024), pak navazující magisterské studium Vývoje software (2024–2026). Během magistra jsem v únoru 2025 nastoupil do Monet+ jako stážista a od té doby jsem přešel z intern na částečný a ¾ úvazek; plný úvazek začíná v červenci 2026. Překryv studia a práce byl záměrný: teorie a praxe souběžně.',
            'about-story-p3': 'Jsem technický člověk, který miluje strukturu — čistou architekturu, dobře definované procesy, měřitelné výsledky. Rád se ponořím do dat, hledám vzorce a buduji řešení, která obstojí pod tlakem. Mimo práci běhám dlouhé vzdálenosti, sleduji každý trénink a obsesivně čtu. Disciplína ve sportu a disciplína v kódu jsou tentýž sval.',
            'about-timeline-heading': 'Vzdělání & kariérní cesta',
            'timeline-title-1': 'Bc. Obecná informatika',
            'timeline-title-2': 'Mgr. Vývoj software',
            'timeline-title-3': 'Stáž',
            'timeline-title-4': 'Částečný úvazek',
            'timeline-title-5': 'Plný úvazek',
            'about-skills-heading': 'Dovednosti',
            'skills-col-technical': 'Technické',
            'skills-col-personal': 'Osobní',
            'skill-sql': 'SQL & databáze',
            'skill-git': 'Git & správa verzí',
            'skill-crypto-pki': 'Kryptografie & PKI',
            'skill-pqc': 'Post-kvantová kryptografie',
            'skill-data': 'Data & statistiky',
            'skill-analytical': 'Analytické myšlení',
            'skill-disciplined': 'Disciplinovaný & konzistentní',
            'skill-goal': 'Sledování cílů & plánování',
            'skill-problem': 'Řešení problémů',
            'skill-team': 'Týmová spolupráce',
            'skill-drive': 'Soutěživé odhodlání',
            'about-certs-heading': 'Certifikace',
            'cert-view-cred': 'Zobrazit certifikát →',
            // ── Blog page ──
            'blog-eyebrow': 'Běh · Akademické · Život',
            'blog-title': 'Blog',
            'blog-lead': 'Závodní zprávy, akademické milníky a poznámky o pokroku.',
            'latest-heading': 'Nejnovější příspěvky',
            'archive-heading': 'Všechny příspěvky',
            // ── Books page ──
            'books-title': 'Přečtené knihy',
            'books-lead': 'Osobní přehled knih, které formovaly mé myšlení — bezpečnost, výkon, filozofie a vytrvalost.',
            // ── Videos page ──
            'video-page-title': 'Video deník',
            'video-note': 'Ručně vybraná dlouhá videa, dokumenty a příběhy, které formovaly můj přístup.',
            'vf-all': 'Vše',
            'vf-in-progress': 'Rozkoukáno',
            'vf-finished': 'Dokoukaná',
            'vf-favorites': 'Oblíbená',
            'vf-favourite': 'Oblíbené',
            'video-sort-label': 'Seřadit podle',
            'vsort-date': 'Datum (nejnovější)',
            'vsort-channel': 'Kanál (A–Z)',
            'vsort-tag': 'Tag (A–Z)',
            'video-tag-label': 'Tag',
            'video-tag-all': 'Všechny tagy',
            'video-clear': 'Zrušit filtry',
            // ── Podcasts page ──
            'podcast-page-title': 'Podcast deník',
            'podcast-note': 'Obrázky a popisy pořízeny ze Spotify a dalších platforem, pokud jsou dostupné.',
            'pf-all': 'Vše',
            'pf-favourite': 'Oblíbené',
            'pf-spotify': 'Spotify',
            'pf-youtube': 'YouTube',
            'podcast-show-label': 'Pořad',
            'podcast-show-all': 'Všechny pořady',
            'podcast-tag-label': 'Tag',
            'podcast-tag-all': 'Všechny tagy',
            'podcast-clear': 'Zrušit filtry',
            // ── Sports page ──
            'sports-eyebrow': 'Běh · Trail · Cyklistika · Vytrvalost',
            'sports-page-lead': '15 let soutěžního fotbalu vybudovalo disciplínu a odolnost. Po vyhoření na 4. nejvyšší úrovni jsem našel nový oheň ve vytrvalosti — maratony, ultra závody a dlouhé jízdy.',
            'stat-marathon-pb-label': 'Osobák maratón',
            'stat-ultra-dist-label': 'Max Ultra vzdálenost',
            'stat-half-pb-label': 'Osobák půlmaratón',
            'th-result': 'Výsledek',
            'race-heading-hint': '— klikni pro detail',
            'strava-heading': 'Tréninkový přehled',
            'strava-note': 'Data ze Strava · poslední aktualizace červen 2026 · obnovit: node scripts/update-strava.mjs',
            'football-heading': 'Fotbalové pozadí',
            'football-p1': 'Vyrůstal jsem s fotbalem v Městě Albrechtice a jako dítě jsem nastoupil do FK Město Albrechtice — mého domovského klubu. Postupem let jsem se propracovával pyramidou: ze 7. třídy na 6., pak na 5. a nakonec na 4. nejvyšší úroveň v České republice — Moravskoslezskou divizi F — v dresu FK Břidličná. Výraznou část kariéry jsem strávil také v FK Krnov.',
            'football-p2': 'Po letech intenzivní soutěže na té úrovni jsem vyhořel. Vášeň, kterou jsem pro hru měl, pohasla a potřeboval jsem novou fyzickou výzvu. Obrátil jsem se k cyklistice a dálkovému běhu — a našel něco, co jsem nečekal: stejný oheň, ale bez popálenin. Vytrvalostní sport mi vrátil soutěživé odhodlání bez týmové politiky, zranění a rutiny víkendových zápasů.',
            'football-p3': 'Fotbal mi dal disciplínu, taktické myšlení a schopnost podávat výkon pod tlakem. Vše, co jsem se naučil na hřišti, dnes uplatňuji na silnici a na trailech.',
        },
        es: {
            'footer-text': 'Construido con consistencia, un bloque a la vez.',
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'Sobre mí',
            'nav-books': 'Libros leídos',
            'nav-media': 'Centro multimedia',
            'nav-podcasts': 'Podcasts',
            'nav-videos': 'Archivo de videos',
            'nav-blog': 'Blog',
            'nav-sports': 'Deporte',
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'La constancia es la clave. Próxima parada la cima ⬆️⬆️⬆️',
            'contact-email-label': 'Correo:',
            'contact-phone-label': 'Teléfono:',
            'about-title': 'Sobre mí',
            'about-summary-1': 'Soy un aprendiz disciplinado que convierte la constancia en impulso y resultados a largo plazo.',
            'about-summary-2': 'Mis intereses abarcan tecnología, criptografía, rendimiento personal y crecimiento estructurado. Construyo hábitos que se multiplican.',
            'skills-heading': 'Habilidades clave',
            'skill-learning': 'Aprendizaje continuo',
            'skill-motivation': 'Motivación',
            'skill-security': 'Fundamentos de seguridad',
            'skill-crypto': 'Interés en criptografía',
            'skill-consistency': 'Constancia',
            'skill-growth': 'Mentalidad de crecimiento',
            'experience-heading': 'Experiencia',
            'exp-role-1-title': 'Cargo actual (actualizar)',
            'exp-role-1-company': 'Tu empresa / organización',
            'exp-role-1-period': 'Año – Presente',
            'exp-role-1-desc': 'Describe tus principales contribuciones, enfoque de aprendizaje e impacto.',
            'exp-role-2-title': 'Cargo anterior',
            'exp-role-2-company': 'Empresa anterior',
            'exp-role-2-period': 'Año – Año',
            'exp-role-2-desc': 'Destaca logros, responsabilidades o lecciones clave.',
            'exp-note': '(Reemplaza los placeholders con datos reales.)',
            'focus-heading': 'Enfoque e intereses',
            'focus-text-1': 'Motivado por el progreso disciplinado exploro tecnología, conceptos de seguridad y optimización del rendimiento.',
            'focus-text-2': 'Busco combinar aprendizaje estructurado con experimentación práctica para construir conocimiento duradero.',
            'sports-title': 'Trayectoria deportiva',
            'sports-lead': 'Una base de 15 años en fútbol construyó resistencia, disciplina y enfoque competitivo—ahora impulsa el progreso en carreras de resistencia.',
            'stat-years-label': 'Años en fútbol',
            'stat-best-league-label': 'Máximo nivel',
            'stat-marathons-label': 'Maratones',
            'stat-ultras-label': 'Ultramaratones',
            'stat-ultra-label': 'Eventos ultra',
            'race-heading': 'Carreras',
            'future-race-heading': 'Carreras futuras',
            'th-event': 'Evento',
            'th-future-event': 'Evento',
            'th-date': 'Fecha',
            'th-future-date': 'Fecha',
            'th-time': 'Tiempo',
            'th-future-distance': 'Distancia',
            'th-notes': 'Notas',
            'th-future-link': 'Enlace',
            'career-heading': 'Antecedente futbolístico',
            'career-p-1': 'Jugué fútbol competitivo durante 15 años desarrollando percepción táctica, resistencia de velocidad y resiliencia en equipo.',
            'career-p-2': 'Mi nivel más alto fue la cuarta división checa, un entorno que exigía estructura, disciplina y constancia.',
            'career-p-3': 'Ahora esa base se traduce en bloques de entrenamiento estructurados para correr, fuerza y desafíos híbridos.',
            'long-bio-heading': 'Historia más extensa',
            'long-bio-p1': 'Me gusta construir impulso mediante acciones diarias pequeñas y bien definidas. Ya fueran años de fútbol competitivo, lectura estructurada o entrenamiento disciplinado para eventos de resistencia, aprendí que la constancia no es glamorosa—pero gana. Aplico esa mentalidad al aprendizaje tecnológico, a comprender sistemas y a mejorar mi rendimiento personal.',
            'long-bio-p2': 'Los libros me dieron marcos: cómo pensar con claridad, cómo entrenar deliberadamente y cómo analizar problemas en lugar de reaccionar. Me interesa especialmente la intersección entre fundamentos de seguridad y criptografía: cómo la confianza, la identidad y la verificación moldean el panorama digital moderno. Abordo esos temas igual que el entrenamiento: descomponer la complejidad en ciclos repetibles y progresivos.',
            'long-bio-p3': 'El deporte me enseñó resiliencia. Las carreras largas, las sesiones de fuerza y los años de fútbol táctico construyeron disciplina bajo fatiga. Eso se traduce directamente en sesiones de estudio enfocadas y proyectos a largo plazo donde el progreso parece invisible día a día. Me gusta convertir metas vagas en insumos medibles: mañanas estudiadas, páginas leídas, kilómetros corridos, repeticiones registradas.',
            'long-bio-p4': 'Ahora estoy refinando un sistema que combina entrenamiento físico, aprendizaje técnico y revisión reflexiva. Cada semana evalúo lo que se compuso, lo que se estancó y qué necesita iteración. No persigo picos de intensidad: diseño aceleración sostenible. Ese enfoque me mantiene mejorando sin quemarme.',
            'long-bio-p5': 'De cara al futuro quiero profundizar mi especialización en conceptos de seguridad aplicada mientras sigo probando los límites de la resistencia. Creo que combinar rigor mental con durabilidad física crea una ventaja competitiva tanto profesional como personalmente. Esta página documenta ese proceso continuo de construcción—bloque disciplinado a la vez.',
            // ── Index page ──
            'hero-eyebrow': 'Dev .NET / corredor / aprendiz de por vida',
            'hero-scroll': 'Bajar',
            'home-blog-eyebrow': 'Del blog',
            'home-blog-heading': 'Últimas actualizaciones',
            'home-blog-more': 'Ver todas las entradas →',
            // ── About page ──
            'about-eyebrow': 'Informática Aplicada · Dev .NET · Monet+',
            'about-tagline': 'Siempre buscando mejorar. En todo.',
            'about-intro': 'Soy una persona disciplinada, constante y ambiciosa que persigue con determinación lo que quiere. Técnico por naturaleza, me encanta trabajar con números, estadísticas y construir sistemas sólidos. Competitivo y orientado al detalle, aunque sé que los mejores resultados provienen de un gran equipo.',
            'trait-disciplined': 'Disciplinado',
            'trait-consistent': 'Constante',
            'trait-ambitious': 'Ambicioso',
            'trait-technical': 'Técnico',
            'trait-numbers': 'Números y estadísticas',
            'trait-competitive': 'Competitivo',
            'trait-team': 'Jugador de equipo',
            'trait-detail': 'Orientado al detalle',
            'about-story-heading': 'Mi historia',
            'about-story-p1': 'Siempre he creído que la brecha entre donde estás y donde quieres estar se cierra con constancia — no con esfuerzos ocasionales. Ya sea corriendo, estudiando o escribiendo código, me presento cada día y busco mejoras del 1%. Esa mentalidad lo moldeó todo: cómo estudio, cómo entreno y cómo afronto mi carrera.',
            'about-story-p2': 'Estudié Informática Aplicada en la Universidad Palacký de Olomouc — primero un grado en Informática General (2021–2024), luego un máster en Desarrollo de Software (2024–2026). Durante el máster me incorporé a Monet+ como becario en febrero de 2025 y desde entonces pasé de becario a media jornada, luego a ¾ jornada, con jornada completa a partir de julio de 2026. La coincidencia entre estudios y trabajo fue intencionada: teoría y práctica en paralelo.',
            'about-story-p3': 'Soy una persona técnica que ama la estructura — arquitectura limpia, procesos bien definidos, resultados medibles. Disfruto profundizando en datos, encontrando patrones y construyendo soluciones que aguanten la presión. Fuera del trabajo corro largas distancias, registro cada entrenamiento y leo sin parar. La disciplina en el deporte y la disciplina en el código son el mismo músculo.',
            'about-timeline-heading': 'Formación y trayectoria profesional',
            'timeline-title-1': 'Grado en Informática General',
            'timeline-title-2': 'Máster en Desarrollo de Software',
            'timeline-title-3': 'Prácticas',
            'timeline-title-4': 'Media jornada',
            'timeline-title-5': 'Jornada completa',
            'about-skills-heading': 'Habilidades',
            'skills-col-technical': 'Técnicas',
            'skills-col-personal': 'Personales',
            'skill-sql': 'SQL y bases de datos',
            'skill-git': 'Git y control de versiones',
            'skill-crypto-pki': 'Criptografía y PKI',
            'skill-pqc': 'Criptografía post-cuántica',
            'skill-data': 'Datos y estadísticas',
            'skill-analytical': 'Pensamiento analítico',
            'skill-disciplined': 'Disciplinado y constante',
            'skill-goal': 'Seguimiento de metas y planificación',
            'skill-problem': 'Resolución de problemas',
            'skill-team': 'Trabajo en equipo',
            'skill-drive': 'Impulso competitivo',
            'about-certs-heading': 'Certificaciones',
            'cert-view-cred': 'Ver credencial →',
            // ── Blog page ──
            'blog-eyebrow': 'Correr · Académico · Vida',
            'blog-title': 'Blog',
            'blog-lead': 'Crónicas de carreras, hitos académicos y notas de progreso.',
            'latest-heading': 'Últimas entradas',
            'archive-heading': 'Todas las entradas',
            // ── Books page ──
            'books-title': 'Libros leídos',
            'books-lead': 'Un registro personal de libros que moldearon mi pensamiento — seguridad, rendimiento, filosofía y resistencia.',
            // ── Videos page ──
            'video-page-title': 'Registro de videos',
            'video-note': 'Charlas largas, documentales e historias seleccionadas a mano que moldearon mi mentalidad.',
            'vf-all': 'Todos',
            'vf-in-progress': 'En progreso',
            'vf-finished': 'Terminados',
            'vf-favorites': 'Favoritos',
            'vf-favourite': 'Favoritos',
            'video-sort-label': 'Ordenar por',
            'vsort-date': 'Fecha (más reciente)',
            'vsort-channel': 'Canal (A–Z)',
            'vsort-tag': 'Etiqueta (A–Z)',
            'video-tag-label': 'Etiqueta',
            'video-tag-all': 'Todas las etiquetas',
            'video-clear': 'Borrar filtros',
            // ── Podcasts page ──
            'podcast-page-title': 'Registro de podcasts',
            'podcast-note': 'Imágenes y descripciones obtenidas de Spotify y otras plataformas cuando están disponibles.',
            'pf-all': 'Todos',
            'pf-favourite': 'Favoritos',
            'pf-spotify': 'Spotify',
            'pf-youtube': 'YouTube',
            'podcast-show-label': 'Programa',
            'podcast-show-all': 'Todos los programas',
            'podcast-tag-label': 'Etiqueta',
            'podcast-tag-all': 'Todas las etiquetas',
            'podcast-clear': 'Borrar filtros',
            // ── Sports page ──
            'sports-eyebrow': 'Carrera · Trail · Ciclismo · Resistencia',
            'sports-page-lead': '15 años de fútbol competitivo construyeron la disciplina y la resiliencia. Tras quemarme en la 4.ª división nacional, encontré un nuevo fuego en la resistencia — maratones, ultras y largas rutas en bici.',
            'stat-marathon-pb-label': 'MR Maratón',
            'stat-ultra-dist-label': 'Max Distancia Ultra',
            'stat-half-pb-label': 'MR Medio maratón',
            'th-result': 'Resultado',
            'race-heading-hint': '— haz clic para detalles',
            'strava-heading': 'Resumen de entrenamiento',
            'strava-note': 'Datos de Strava · última actualización junio 2026 · actualizar: node scripts/update-strava.mjs',
            'football-heading': 'Trayectoria futbolística',
            'football-p1': 'Crecí jugando al fútbol en Město Albrechtice y me incorporé al FK Město Albrechtice de niño — mi club local. Con los años fui ascendiendo por la pirámide: de la 7.ª división a la 6.ª, luego a la 5.ª, y finalmente al 4.º nivel más alto de la República Checa — la Moravskoslezská divize F — jugando para el FK Břidličná. También pasé una etapa importante en el FK Krnov.',
            'football-p2': 'Tras años de competición intensa en ese nivel me quemé. La pasión que sentía por el juego se apagó y necesitaba un nuevo reto físico. Me volqué en el ciclismo y la carrera de larga distancia — y encontré algo que no esperaba: el mismo fuego, pero sin las quemaduras. El deporte de resistencia me devolvió el impulso competitivo sin la política de equipo, las lesiones y la rutina de los partidos de fin de semana.',
            'football-p3': 'El fútbol me dio disciplina, pensamiento táctico y la capacidad de rendir bajo presión. Todo lo que aprendí en el campo lo aplico ahora en la carretera y en el sendero.',
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        const dict = translations[lang] || translations['en'];
        Object.keys(dict).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (id === 'footer') {
                    el.innerHTML = dict[id];
                } else if (id === 'contact-email-label') {
                    // Only replace the label, keep the link
                    const link = el.querySelector('a');
                    if (link) {
                        el.innerHTML = dict[id] + ' ';
                        el.appendChild(link);
                    } else {
                        el.textContent = dict[id];
                    }
                } else if (id === 'contact-phone-label') {
                    // Only replace the label, keep the link
                    const link = el.querySelector('a');
                    if (link) {
                        el.innerHTML = dict[id] + ' ';
                        el.appendChild(link);
                    } else {
                        el.textContent = dict[id];
                    }
                } else {
                    el.textContent = dict[id];
                }
            }
        });

        // Translate "Rozečteno" (datetime="0") on books page
        const readingElements = document.querySelectorAll('time[datetime="0"]');
        if (readingElements.length > 0) {
            const readingText = { en: 'Reading', cs: 'Rozečteno', es: 'Leyendo' };
            readingElements.forEach(el => el.textContent = readingText[lang] || readingText['en']);
        }

        document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    }

    function setupLanguageSwitcher() {
        // Listen for language button clicks
        document.addEventListener('click', function(e) {
            if (e.target.closest('#lang-en')) {
                setLanguage('en');
            } else if (e.target.closest('#lang-cs')) {
                setLanguage('cs');
            } else if (e.target.closest('#lang-es')) {
                setLanguage('es');
            }
        });
        // Set initial language
        let savedLang = localStorage.getItem('lang') || 'en';
        if (!['en','cs','es'].includes(savedLang)) {
            savedLang = 'en';
            localStorage.setItem('lang','en');
        }
        setLanguage(savedLang);
    }

    // Re-apply language and nav state after navbar is injected
    window.applyLanguageAfterNavbar = function() {
        let savedLang = localStorage.getItem('lang') || 'en';
        if (!['en','cs','es'].includes(savedLang)) {
            savedLang = 'en';
            localStorage.setItem('lang','en');
        }
        setLanguage(savedLang);
        normalizeNavbarLinks();
        // Auto-detect active nav link based on current path
        const path = window.location.pathname;
        const map = [
            { id: 'nav-about', key: 'about.html' },
            { id: 'nav-books', key: 'books.html' },
            { id: 'nav-podcasts', key: 'podcasts.html' },
            { id: 'nav-videos', key: 'videos.html' },
            { id: 'nav-blog', key: 'blog.html' },
            { id: 'nav-sports', key: 'sports.html' },
            { id: 'nav-logo', key: 'index.html' }
        ];
        map.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) {
                if (path.endsWith(item.key)) el.classList.add('active');
                else el.classList.remove('active');
            }
        });

        const mediaToggle = document.getElementById('nav-media');
        if (mediaToggle) {
            const mediaLinks = ['nav-books', 'nav-podcasts', 'nav-videos'];
            const hasActiveChild = mediaLinks.some(id => {
                const link = document.getElementById(id);
                return link && link.classList.contains('active');
            });
            if (hasActiveChild) mediaToggle.classList.add('active');
            else mediaToggle.classList.remove('active');
        }

        setupMediaDropdown();
        setupHamburger();
    };

    // Call setupLanguageSwitcher on DOMContentLoaded
    setupLanguageSwitcher();

    // Ensure the shared navbar and footer are injected
    loadNavbar();
    loadFooter();

    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Toggle mobile navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

function getSiteRootPrefix() {
    const datasetRoot = document.body && document.body.dataset && document.body.dataset.root;
    if (datasetRoot) {
        return datasetRoot.endsWith('/') ? datasetRoot.slice(0, -1) : datasetRoot;
    }

    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        return '..';
    }

    return '.';
}

function combinePath(base, append) {
    if (!base) return append || '';
    const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
    if (!append) return trimmedBase;
    const trimmedAppend = append.startsWith('/') ? append.slice(1) : append;
    if (!trimmedAppend) return trimmedBase;
    return `${trimmedBase}/${trimmedAppend}`;
}

function normalizeNavbarLinks() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    const prefixRaw = getSiteRootPrefix();
    const cleanPrefix = (!prefixRaw || prefixRaw === '.') ? '.' : (prefixRaw.endsWith('/') ? prefixRaw.slice(0, -1) : prefixRaw);
    const pagesRoot = combinePath(cleanPrefix, 'pages');

    const linkConfig = [
        { selector: '#nav-logo', file: 'index.html' },
        { selector: '#nav-about', file: 'about.html' },
        { selector: '#nav-books', file: 'books.html' },
        { selector: '#nav-podcasts', file: 'podcasts.html' },
        { selector: '#nav-videos', file: 'videos.html' },
        { selector: '#nav-blog', file: 'blog.html' },
        { selector: '#nav-sports', file: 'sports.html' }
    ];

    linkConfig.forEach(({ selector, file }) => {
        const link = nav.querySelector(selector);
        if (link && link.tagName === 'A') {
            link.setAttribute('href', combinePath(pagesRoot, file));
        }
    });
}

async function loadNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder || placeholder.dataset.navLoaded === 'true') return;

    const prefix = getSiteRootPrefix();
    const tried = new Set();
    const candidates = [];

    const pushCandidate = path => {
        if (path && !tried.has(path)) {
            tried.add(path);
            candidates.push(path);
        }
    };

    if (prefix) {
        pushCandidate(`${prefix}/components/navbar.html`);
    }
    pushCandidate('../components/navbar.html');
    pushCandidate('components/navbar.html');
    pushCandidate('/components/navbar.html');

    let html = null;
    for (const candidate of candidates) {
        try {
            const response = await fetch(candidate);
            if (!response.ok) continue;
            html = await response.text();
            break;
        } catch (err) {
            // try next candidate
        }
    }

    if (!html) {
        console.warn('Navbar fetch failed for all candidates, injecting inline fallback.');
        html = buildInlineNavbar(prefix);
    }

    placeholder.innerHTML = html;
    placeholder.dataset.navLoaded = 'true';
    if (typeof window.applyLanguageAfterNavbar === 'function') {
        window.applyLanguageAfterNavbar();
    }
}

function buildInlineNavbar(prefix) {
    const base = (!prefix || prefix === '.') ? '.' : prefix;
    const page = path => `${base}/pages/${path}`;
    return `
<nav class="navbar">
    <a href="${page('index.html')}" class="logo" id="nav-logo">Jiří Mlčoušek</a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
    </button>
    <div class="nav-panel" id="nav-panel">
        <ul class="nav-links">
            <li class="nav-item"><a href="${page('about.html')}" id="nav-about">About</a></li>
            <li class="nav-item dropdown">
                <button class="nav-dropdown-toggle" id="nav-media" type="button" aria-haspopup="true" aria-expanded="false">Media Hub</button>
                <ul class="dropdown-menu" aria-label="Media pages">
                    <li><a href="${page('books.html')}" id="nav-books">Read Books</a></li>
                    <li><a href="${page('podcasts.html')}" id="nav-podcasts">Podcast Log</a></li>
                    <li><a href="${page('videos.html')}" id="nav-videos">Video Vault</a></li>
                </ul>
            </li>
            <li class="nav-item"><a href="${page('blog.html')}" id="nav-blog">Blog</a></li>
            <li class="nav-item"><a id="nav-sports" href="${page('sports.html')}">Sports</a></li>
        </ul>
        <div class="lang-toggle">
            <button id="lang-en" class="lang-btn" aria-label="English"><img src="https://flagcdn.com/24x18/gb.png" alt="English" width="24" height="18"></button>
            <button id="lang-cs" class="lang-btn" aria-label="Čeština"><img src="https://flagcdn.com/24x18/cz.png" alt="Čeština" width="24" height="18"></button>
            <button id="lang-es" class="lang-btn" aria-label="Español"><img src="https://flagcdn.com/24x18/es.png" alt="Español" width="24" height="18"></button>
        </div>
    </div>
</nav>
    `.trim();
}

async function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    const prefix = getSiteRootPrefix();
    const tried = new Set();
    const candidates = [];

    const push = path => { if (path && !tried.has(path)) { tried.add(path); candidates.push(path); } };
    if (prefix) push(`${prefix}/components/footer.html`);
    push('../components/footer.html');
    push('components/footer.html');
    push('/components/footer.html');

    let html = null;
    for (const candidate of candidates) {
        try {
            const response = await fetch(candidate);
            if (!response.ok) continue;
            html = await response.text();
            break;
        } catch (err) {}
    }

    if (!html) {
        html = `<footer class="footer" id="footer">&copy; 2026 Jiří Mlčoušek &mdash; <span id="footer-text">Built with consistency, one block at a time.</span></footer>`;
    }

    placeholder.outerHTML = html;
    
    // Re-apply language translations to newly injected footer
    const currentLang = localStorage.getItem('lang') || 'en';
    setLanguage(currentLang);
}

function closeAllDropdowns() {
    document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
}

function setupHamburger() {
    const btn = document.getElementById('nav-hamburger');
    const navbar = document.querySelector('.navbar');
    if (!btn || !navbar || btn.dataset.hamburgerInit === 'true') return;
    btn.dataset.hamburgerInit = 'true';

    function openMenu() {
        navbar.classList.add('nav-open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navbar.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', e => {
        e.stopPropagation();
        navbar.classList.contains('nav-open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is clicked
    document.querySelectorAll('.nav-panel .nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (navbar.classList.contains('nav-open') && !navbar.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on resize to desktop width
    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) closeMenu();
    });
}

function setupMediaDropdown() {
    const dropdown = document.querySelector('.navbar .dropdown');
    if (!dropdown) return;

    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!toggle || toggle.dataset.dropdownInit === 'true') return;

    toggle.dataset.dropdownInit = 'true';
    toggle.setAttribute('aria-expanded', toggle.getAttribute('aria-expanded') || 'false');

    toggle.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const isOpen = dropdown.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) {
            dropdown.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
        }
    });

    const menuLinks = dropdown.querySelectorAll('.dropdown-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeAllDropdowns();
        });
    });

    if (!window.__mediaDropdownHandlersAttached) {
        document.addEventListener('click', event => {
            if (!event.target.closest('.navbar .dropdown')) {
                closeAllDropdowns();
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeAllDropdowns();
            }
        });

        window.__mediaDropdownHandlersAttached = true;
    }
}