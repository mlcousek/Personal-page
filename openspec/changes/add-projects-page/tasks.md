# Tasks

## 1. Navigation
- [x] 1.1 Add `nav-projects` link after About in `components/navbar.html`
- [x] 1.2 Add `nav-projects` translations (en/cs/es) to `scripts/main.js`
- [x] 1.3 Register `projects.html` in the active-link map, `normalizeNavbarLinks()` and `buildInlineNavbar()`

## 2. Content research
- [x] 2.1 Read READMEs / sources of FitnessWebApp, FiniteAutomatons, Jirkas_world, claude_trayapp, GarminFood
- [x] 2.2 Write EN summaries, highlights and stack; translate to CS and ES

## 3. Page
- [x] 3.1 Create `pages/projects.html` (head/meta/OG/hreflang like other pages, `data-root=".."`, hero, three section containers)
- [x] 3.2 Create `scripts/projects.js` with `PROJECTS`, `VAULT_PLUGINS` + `VAULT_AUTOMATIONS` data and render functions; re-render on `languageChanged`
- [x] 3.3 Create `assets/styles/projects.css` using design tokens only
- [x] 3.4 Add hero / section heading / vault intro translations to `main.js`
- [x] 3.5 Add the new card and header classes to `REVEAL_SELECTORS`
- [x] 3.6 Add screenshots to `images/projects/` (FitnessWebApp plan calendar, FiniteAutomatons app screen from the thesis figures, Claude Usage Tray flyout, GarminFood alternate app icons)
- [x] 3.7 Plugin cards accept an optional `image` (16:9 screenshot replaces the emoji icon)
- [ ] 3.8 Add the four plugin screenshots from Obsidian (the user will provide them later)

## 4. Housekeeping
- [x] 4.1 Add the page to `sitemap.xml`
- [x] 4.2 Add the page to the `README.md` page table

## 5. Verification
- [x] 5.1 Open the page in a browser; check desktop (1280px) and mobile (375px) layout, no horizontal scroll
- [x] 5.2 Switch EN / CS / ES; all text changes, no console errors
- [x] 5.3 Navbar active state on the projects page
- [x] 5.4 GitHub links point at the correct public repositories; private repos (FitnessWebApp, Jirkas_world) show a "Private" badge instead of a link

## Notes
- FitnessWebApp and Jirkas_world are private repos. Private repos get a badge instead of a dead link. To publish FitnessWebApp, set `isPrivate: false` on its entry in `scripts/projects.js`.
- The vault's People / UTMB area holds other runners' data, so the page describes the feature only generically: no names, no numbers.
