# Personal Webpage – Jiří Mlčoušek

Source code for my personal website: a hub for projects, reading highlights, sports data, inspirations, and ways to connect. Intentionally lightweight — plain HTML, CSS, and JavaScript, no build step required.

## ✨ Features

- **Landing page:** Hero content, social links, and quick navigation.
- **Sports:** Race history, future races, clickable PB stat cards linking to Strava activities, and a live Training Overview powered by the Strava API — last-30-days stats (pace, time, elevation, calories…), weekly bar chart, year-to-date stats (9 cards), and a monthly run vs. bike dual-bar chart.
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
| Training stats (manual) | `TRAINING_STATS` block in `scripts/sports.js` |
| Training stats (auto) | `node scripts/update-strava.mjs` — fetches last 30 days + YTD from Strava API and patches `sports.js` |
| Books | `pages/books.html` |
| Blog posts | `BLOG_POSTS` array in `scripts/posts.js` |
| Podcasts | `PODCAST_EPISODES` array in `scripts/podcasts.js` |
| Videos | `VIDEOS` array in `scripts/videos.js` |
| Navbar / footer | `components/navbar.html`, `components/footer.html` |
| Translations | `translations` object in `scripts/main.js` |

### Strava data refresh

Requires a `.env` file (copy `.env.example`) with Strava API credentials:

```powershell
node scripts/update-strava.mjs
```

Fetches activities for the last 30 days and year-to-date, computes running and cycling stats, and patches the `TRAINING_STATS` block in `scripts/sports.js` directly. Commit the result.

## 📦 Deployment

Everything is static — deploy to GitHub Pages, Netlify, Vercel, Azure Static Web Apps, or any static host. No build step needed; just upload from the repo root.

Thanks for stopping by — *consistency is key, next stop the top ⬆️⬆️⬆️!*
