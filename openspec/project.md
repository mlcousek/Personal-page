# Project Context

## Purpose
Personal website of Jiří Mlčoušek — .NET developer, runner, lifelong learner. Hosted on GitHub Pages at https://mlcousek.github.io/Personal-page/.

## Tech Stack
- Plain static HTML / CSS / JavaScript, no build step
- Google Fonts: Space Grotesk (UI), JetBrains Mono (data/meta)
- Node.js 20+ scripts only for offline data refresh (`scripts/update-strava.mjs`) and image optimisation

## Project Conventions
- Every page sets `data-root` on `<body>`; the navbar and footer are injected from `components/` by `scripts/main.js`
- i18n: `translations` object in `scripts/main.js` (`en`, `cs`, `es`), keyed by element id; feature scripts re-render on the `languageChanged` event
- One HTML page ↔ one feature script ↔ one page stylesheet; data lives in an array at the top of the feature script
- Design tokens live only in `assets/styles/main.css` (see `DESIGN.md`); one locked accent (`--accent`, Strava orange)
- Scroll-reveal animation via `REVEAL_SELECTORS` in `scripts/effects.js`
- All asset paths are relative
