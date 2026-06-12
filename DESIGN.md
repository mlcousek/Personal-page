# Design System

Dark engineering-performance theme. One theme site-wide (dark, locked).

## Color

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0a0b0d` | page background |
| `--surface` | `#121417` | cards, modals |
| `--surface-2` | `#191c20` | nested surfaces, inputs |
| `--border` | `rgba(255,255,255,.08)` | hairlines |
| `--border-strong` | `rgba(255,255,255,.16)` | hover hairlines |
| `--ink` | `#f2f3f5` | headings, strong text |
| `--text` | `#b9c0ca` | body |
| `--muted` | `#828b96` | secondary/meta |
| `--accent` | `#fc5200` | fills, bars, primary CTA (Strava orange) |
| `--accent-text` | `#ff7a3d` | accent-colored text on dark (AA at small sizes) |

Accent is locked: no second accent. Semantic exceptions: race-category badges (real categories) and platform brand colors (Spotify/YouTube/GitHub/LinkedIn/Instagram/Strava).

## Typography

- Display & UI: **Space Grotesk** (400/500/600/700)
- Data & meta: **JetBrains Mono** (400/500/600) — all numbers, dates, durations, chart labels, eyebrows
- Display headings: `letter-spacing: -0.03em`, `text-wrap: balance`
- Body line-height 1.7, max ~70ch

## Shape

- Cards/modals: 16px (`--radius-md`) / 20px (`--radius-lg`)
- Inputs/selects: 10px (`--radius-sm`)
- Chips, pills, buttons: full pill (`--radius-pill`)
- Images inside cards: inherit card clipping

## Ambient backdrop

`.bg-scene` (injected by `effects.js` on every page, styled in `main.css`): three orange radial blobs on slow transform-only drift loops (38–58s, alternate) plus five sharp diagonal beam lines at a shared -34° tilt: faint hairline tracks, each with an orange comet pulse lapping along it (9–15s, staggered negative delays). Layered under the blueprint grid. Fixed layer, `pointer-events: none`, glow peaks at ~15% accent alpha so AA contrast holds. Two beams hidden below 700px; freezes under `prefers-reduced-motion`.

## Motion

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`
- Scroll reveal: opacity + 18px rise + 6px blur, 600ms ease-out, 55ms sibling stagger (effects.js)
- Pressables: `scale(0.97)` on `:active`, 140ms
- Hovers gated behind `@media (hover: hover) and (pointer: fine)`
- Dropdown: 180ms ease-out, `transform-origin: top left`
- Charts: `scaleY` rise from bottom, 700ms ease-out, per-column stagger
- Everything collapses under `prefers-reduced-motion: reduce`
