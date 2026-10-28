# Change: Project detail modals, status and screenshot galleries

## Why
Project cards show a summary only. Visitors cannot see more screenshots, the project's state (in development, in use, finished) or where the code lives. Several screenshots are also still missing or out of date.

## What Changes
- Every project card gets a status pill (*In development / In use / Finished*) and a **Details** button.
- **Details** opens one native `<dialog>` with title, kind, year, status, long text, highlights, all screenshots and — only where the repository is public and meant to be shared — GitHub links. Esc, backdrop click and a close button dismiss it; focus returns to the button.
- Data model: `status`, optional `details`, optional `repos[{label,url}]`, `images[]`.
- NARUZU: latest in-game screenshot replaces the old one.
- *Claude Usage Tray* becomes *Claude & Codex Usage Tray*: both apps, in use across the team, two repo links.
- Planned images supplied by the owner (tracked in tasks): NARUZU menu, more Jirka's Arc screens, Closet, and the four vault-plugin screenshots (World Heatmap, Activity Detail, Training Dashboard, UTMB Runner Index).

## Impact
- Affected specs: `projects-page` (modified)
- Affected code: `scripts/projects.js`, `assets/styles/projects.css`
- Privacy: no repository link for private projects (NARUZU, FitnessWebApp, the vault) and none for Closet or Jirka's Arc until the owner confirms. No UTMB runner names or numbers in screenshots.
