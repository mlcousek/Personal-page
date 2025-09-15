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
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'Consistency is key. Next stop the top ⬆️⬆️⬆️',
            'contact-email-label': 'Email:',
            'contact-phone-label': 'Phone:',
            'about-title': 'About Me',
            'about-text': 'Consistency is key. Next stop the top',
            'footer': '© 2025 Jiří Mlčoušek. All rights reserved.',
            'books-title': 'Read Books'
        },
        cs: {
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'O mně',
            'nav-books': 'Přečtené knihy',
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'Konzistence je klíč. Další zastávka vrchol ⬆️⬆️⬆️',
            'contact-email-label': 'E-mail:',
            'contact-phone-label': 'Telefon:',
            'about-title': 'O mně',
            'about-text': 'Konzistence je klíč. Další zastávka vrchol',
            'footer': '© 2025 Jiří Mlčoušek. Všechna práva vyhrazena.',
            'books-title': 'Přečtené knihy'
        },
        es: {
            'nav-logo': 'Jiří Mlčoušek',
            'nav-about': 'Sobre mí',
            'nav-books': 'Libros leídos',
            'hero-name': 'Jiří Mlčoušek',
            'hero-slogan': 'La constancia es la clave. Próxima parada la cima ⬆️⬆️⬆️',
            'contact-email-label': 'Correo:',
            'contact-phone-label': 'Teléfono:',
            'about-title': 'Sobre mí',
            'about-text': 'La constancia es la clave. Próxima parada la cima',
            'footer': '© 2025 Jiří Mlčoušek. Todos los derechos reservados.',
            'books-title': 'Libros leídos'
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