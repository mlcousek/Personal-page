# Personal Webpage – Jiří Mlčoušek

Source code for my personal website: a hub for projects, reading highlights, sports data, inspirations, and ways to connect. Intentionally lightweight — plain HTML, CSS, and JavaScript, no build step required.

## ✨ Features

- **Landing page:** Hero content, social links, and quick navigation.
- **My Projects:** NARUZU and the Automata Simulator up front with screenshots, then the other apps and the Obsidian vault with its custom plugin and automations — data-driven cards in `pages/projects.html` + `scripts/projects.js`. Product only: no repository links or tech stacks.
- **CV:** Trilingual, print-friendly résumé rendered from data in `scripts/cv.js` (`pages/cv.html`).
- **Sports:** Race history with detail modals, future races, clickable PB stat cards linking to Strava activities, and the football background.
- **Books log:** Curated reading list with completion dates, currently-reading entries, and cover images. Lives in `pages/books.html`.
- **Blog / Podcasts / Videos:** Dedicated pages with filterable, data-driven card layouts.
- **i18n:** Three-language support (EN / CS / ES) via a `translations` object in `scripts/main.js`; all content pages re-render on `languageChanged`.
- **Shared components:** Navbar and footer injected dynamically from `components/`; `getSiteRootPrefix()` resolves asset paths from any nesting depth via `data-root` on `<body>`.

## 🚀 Getting started

```powershell
npm install
npx live-server . --open=index.html
```

> The VS Code **Live Server** extension also works — open the workspace and click **Go Live**.

## 🛠️ Updating content

| What | Where |
|------|-------|
| Races / future races | `RACES` / `FUTURE_RACES` arrays in `scripts/sports.js` |
| CV | `CV_*` data sets in `scripts/cv.js` |
| Projects | `PROJECTS`, `VAULT_PLUGINS`, `VAULT_AUTOMATIONS` arrays in `scripts/projects.js` (screenshots in `images/projects/`) |
| Books | `pages/books.html` |
| Blog posts | `BLOG_POSTS` array in `scripts/posts.js` |
| Podcasts | `PODCAST_EPISODES` array in `scripts/podcasts.js` |
| Videos | `VIDEOS` array in `scripts/videos.js` |
| Navbar / footer | `components/navbar.html`, `components/footer.html` |
| Translations | `translations` object in `scripts/main.js` |

### Image optimization

Always run this after dropping new photos into `images/` — straight-from-the-camera files are 2–20 MB each:

```powershell
npm run optimize:images
```

Resizes to 1920px max edge and re-encodes in place, keeping filenames and extensions so nothing else has to change. EXIF metadata is stripped (this removes embedded GPS coordinates too). Safe to re-run; already-optimised files are skipped.

### Checks

`npm run check` verifies that every local page, image and asset reference resolves. CI (`.github/workflows/check.yml`) runs it together with a syntax check of all scripts on each push and pull request.

### SEO metadata

Every page carries `description`, `canonical`, Open Graph and Twitter card tags pointing at `images/og-cover.jpg` (1200×630). Language is switchable via `?lang=en|cs|es`, which is what the `hreflang` alternates point at. If the site ever moves off `https://mlcousek.github.io/Personal-page`, those absolute URLs plus `sitemap.xml` need updating.

## 📦 Deployment

Everything is static — deploy to GitHub Pages, Netlify, Vercel, Azure Static Web Apps, or any static host. No build step needed; just upload from the repo root.

Thanks for stopping by — *consistency is key, next stop the top ⬆️⬆️⬆️!*
