// This file contains the JavaScript code for the personal webpage. 
// It may include functionality for interactive elements, event listeners, and any dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Toggle mobile navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Language toggle logic
    const translations = {
        en: {
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'About',
            'nav-books': 'Read Books',
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
            'stat-ultra-label': 'Ultra Events',
            'race-heading': 'Races',
            'th-event': 'Event',
            'th-date': 'Date',
            'th-time': 'Time',
            'th-notes': 'Notes',
            'career-heading': 'Football Background',
            'career-p-1': 'I played competitive football for 15 years, developing tactical awareness, speed endurance and team resilience.',
            'career-p-2': 'My highest competition level reached the Czech fourth tier, an environment that demanded structure, discipline and consistency.',
            'career-p-3': 'Those foundations now translate into structured training blocks for running, strength and hybrid endurance challenges.'
        },
        cs: {
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'O mně',
            'nav-books': 'Přečtené knihy',
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
            'stat-ultra-label': 'Ultra závody',
            'race-heading': 'Závody',
            'th-event': 'Závod',
            'th-date': 'Datum',
            'th-time': 'Čas',
            'th-notes': 'Poznámka',
            'career-heading': 'Fotbalové pozadí',
            'career-p-1': 'Hrál jsem soutěžní fotbal 15 let a rozvíjel tak taktické vnímání, rychlostní vytrvalost a týmovou odolnost.',
            'career-p-2': 'Dosáhl jsem české čtvrté ligy, prostředí vyžadující strukturu, disciplínu a konzistenci.',
            'career-p-3': 'Tyto základy nyní převádím do strukturovaných tréninkových bloků pro běh, sílu a hybridní výzvy.',
        },
        es: {
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'Sobre mí',
            'nav-books': 'Libros leídos',
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
            'stat-ultra-label': 'Eventos ultra',
            'race-heading': 'Carreras',
            'th-event': 'Evento',
            'th-date': 'Fecha',
            'th-time': 'Tiempo',
            'th-notes': 'Notas',
            'career-heading': 'Antecedente futbolístico',
            'career-p-1': 'Jugué fútbol competitivo durante 15 años desarrollando percepción táctica, resistencia de velocidad y resiliencia en equipo.',
            'career-p-2': 'Mi nivel más alto fue la cuarta división checa, un entorno que exigía estructura, disciplina y constancia.',
            'career-p-3': 'Ahora esa base se traduce en bloques de entrenamiento estructurados para correr, fuerza y desafíos híbridos.',
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

    // Call setupLanguageSwitcher on DOMContentLoaded
    setupLanguageSwitcher();

    // If navbar is loaded dynamically, re-apply language after fetch
    window.applyLanguageAfterNavbar = function() {
        let savedLang = localStorage.getItem('lang') || 'en';
        if (!['en','cs','es'].includes(savedLang)) {
            savedLang = 'en';
            localStorage.setItem('lang','en');
        }
        setLanguage(savedLang);
    };
});