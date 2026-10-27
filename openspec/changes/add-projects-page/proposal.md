# Change: Add "My Projects" page

## Why
The site shows sport, reading and blog content but nothing about the software Jiří actually builds. Recruiters and peers have no single place to see his engineering work — the two university theses, the Obsidian-vault tooling, and small utilities he wrote for himself.

## What Changes
- New page `pages/projects.html` linked from the navbar as **My Projects** (cs: *Moje projekty*, es: *Mis proyectos*), placed right after *About*.
- New feature script `scripts/projects.js` holding a `PROJECTS` data array and rendering project cards in all three languages.
- New stylesheet `assets/styles/projects.css` built on the existing design tokens.
- Content, grouped into three sections:
  1. **Academic work** — Bachelor thesis *FitnessWebApp*, Master thesis *FiniteAutomatons*.
  2. **Jirka's World (Obsidian vault)** — intro text about the vault as a personal knowledge base and training system, cards for the custom plugins (Heatmap, UTMB table, Activities, Dashboard) and a list of automations (e.g. Strava + Garmin activity sync).
  3. **Tools & side projects** — *Claude Tray App*, *GarminFood*.
- Each card links to its GitHub repository.
- Navbar wiring in `components/navbar.html` and `scripts/main.js` (translations, active-link map, link normalisation, inline fallback navbar).
- `sitemap.xml` and `README.md` updated with the new page; the new card classes are added to `REVEAL_SELECTORS`.

## Impact
- Affected specs: `projects-page` (new capability)
- Affected code: `components/navbar.html`, `scripts/main.js`, `scripts/effects.js`, `sitemap.xml`, `README.md`; new `pages/projects.html`, `scripts/projects.js`, `assets/styles/projects.css`
- No breaking changes; no new dependencies.
