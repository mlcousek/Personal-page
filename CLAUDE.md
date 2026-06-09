# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

```powershell
npm install
npx live-server . --open=index.html
```

No build step — everything is plain static HTML/CSS/JS deployed as-is. The VS Code Live Server extension also works.

### Strava data refresh

Requires a `.env` file (copy `.env.example`) with Strava API credentials:

```powershell
node scripts/update-strava.mjs
```

This fetches the last 30 days of activities from the Strava API and directly patches the `TRAINING_STATS` block inside `scripts/sports.js`. Requires Node.js 20+.

## Architecture

### Path resolution

Every page sets `data-root` on `<body>` (e.g. `data-root="../"` for pages under `pages/`). `getSiteRootPrefix()` in `scripts/main.js` reads this attribute so that shared assets and component fetches resolve correctly regardless of nesting depth. `root/index.html` is a redirect shim — the real home page is `pages/index.html`.

### Component injection

`loadNavbar()` and `loadFooter()` fetch `components/navbar.html` and `components/footer.html` via `fetch()` and inject them into the DOM on every page. After injection, `applyLanguageAfterNavbar()` runs the full i18n pass and wires up mobile/dropdown interactivity (`setupHamburger`, `setupMediaDropdown`, `normalizeNavbarLinks`). Edit shared navigation only in `components/navbar.html`.

### i18n system

`scripts/main.js` holds a `translations` object with keys for `en`, `cs`, and `es`. `setLanguage(lang)` updates all `[data-i18n]` elements, persists the choice to `localStorage`, then dispatches a `languageChanged` CustomEvent. Feature scripts (`posts.js`, `sports.js`, `videos.js`) listen for this event to re-render their content in the new language. The language switcher UI lives inside the injected navbar; `applyLanguageAfterNavbar()` must run before the switcher is functional.

### Feature scripts

Each content page pairs one HTML file with one JS file under `scripts/`:

| Page | Script | Key data structure |
|------|--------|--------------------|
| `pages/blog.html` | `scripts/posts.js` | `BLOG_POSTS` array |
| `pages/podcasts.html` | `scripts/podcasts.js` | `PODCAST_EPISODES` array |
| `pages/videos.html` | `scripts/videos.js` | `VIDEOS` array |
| `pages/sports.html` | `scripts/sports.js` | `RACES` + `TRAINING_STATS` |

All feature scripts follow the same pattern: data array → filter/sort → `renderCard()` / `renderXxx()` → DOM update. `TRAINING_STATS` in `sports.js` is the only data structure written by an external script (`update-strava.mjs`).

### Asset paths

CSS lives in `assets/styles/`. Each page loads `main.css` plus its own stylesheet. Images are in `images/`. All paths are relative — keep them that way.
