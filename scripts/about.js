/**
 * About — skills block.
 * Reuses the CV data and renderer from cv.js so the two pages can never drift apart.
 * Load order on the page: main.js, cv.js, about.js.
 */

function renderAboutSkills() {
  const host = document.getElementById('about-skills');
  if (!host) return;
  const lang = cvLang();
  const mindset = document.getElementById('about-skills-mindset');
  if (mindset) mindset.textContent = CV_MINDSET[lang];
  host.innerHTML = renderCvSkills(lang);
}

document.addEventListener('DOMContentLoaded', renderAboutSkills);
document.addEventListener('languageChanged', renderAboutSkills);
