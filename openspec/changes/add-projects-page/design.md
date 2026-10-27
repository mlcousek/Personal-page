# Design: My Projects page

## Context
Static site, no build step, three languages, dark single-accent design system. The page must look native next to About / Sports and follow the existing page ↔ script ↔ stylesheet pattern.

## Decisions

### Data-driven rendering (`PROJECTS` array)
Project text exists in three languages, so it lives in `scripts/projects.js` as data with `{ en, cs, es }` fields, the same way `posts.js` / `videos.js` work. The script renders on load and on `languageChanged`. The hero and static section headings use ids in the shared `translations` object in `main.js`.

Shape:
```js
{
  id: 'fitness-web-app',
  group: 'academic' | 'vault' | 'tools',
  kind:  { en, cs, es },          // e.g. "Bachelor thesis"
  title: 'FitnessWebApp',
  summary: { en, cs, es },
  highlights: { en: [...], cs: [...], es: [...] },
  stack: ['C#', 'ASP.NET Core', ...],
  repo: 'https://github.com/mlcousek/FitnessWebApp'
}
```

### Layout
- Hero (`.projects-header`): mono eyebrow + h1 + lead, matching `.sports-header`.
- Section headings reuse the accent-underlined `.section-heading` look.
- **Academic**: two large featured cards side by side (stacked on mobile) with a degree badge, summary, highlight bullets, stack chips and a GitHub link.
- **Vault**: an intro panel (what the vault is, why Obsidian, "everything lives in the vault"), then a 2×2 grid of plugin cards, then an automations list rendered as compact rows.
- **Tools**: two standard cards.
- Cards: `--surface`, 1px `--border`, `--radius-md`, hover lift gated behind `(hover: hover)`, `:active` scale 0.98 — same as `.cert-card`.
- Stack chips in JetBrains Mono, pill radius, neutral colours (the accent stays reserved for eyebrows, badges and the CTA).

### Accessibility
- The card itself is not a link; each card has one explicit "View on GitHub →" link (`target=_blank`, `rel="noopener noreferrer"`), so screen readers get one clear action.
- Sections are landmarks with `aria-labelledby`.
- `prefers-reduced-motion` is respected through the existing `effects.js` reveal.

## Risks / Trade-offs
- Content is hand-maintained and can drift from the repos. Mitigation: keep descriptions at the "what & why" level, not version-specific details.
- Vault plugins are not published as standalone repos, so their cards link to the vault repository.
