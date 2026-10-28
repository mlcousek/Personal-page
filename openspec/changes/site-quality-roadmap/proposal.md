# Change: Site quality roadmap (planned, not yet implemented)

## Why
The content is now broad (CV, projects, sports, blog, media hub) but several areas are waiting for material from the owner, and a few quality topics were deliberately postponed.

## What Changes (planned)
1. **Media hub** — books, podcasts and videos: content and structure to be supplied by the owner.
2. **24DS story** — the owner's own-words section for the 24DS race post.
3. **Design direction** — light polish of the current aurora theme vs. a new identity; needs the owner's decision before any work.
4. **Performance** — Lighthouse run on every page; lazy-load and size review of large photos; font loading strategy.
5. **Accessibility** — contrast audit of the muted text on the aurora background, focus order in modals, reduced-motion review.
6. **SEO** — structured data (`Person`, `Article` for posts), per-post URLs instead of one blog page, refreshed sitemap on every content change.
7. **Dev tooling** — replace `live-server` (9 moderate dev-only audit findings) with a maintained static server; add an image-size budget to `npm run check`.
8. **Language QA** — native read-through of Czech and Spanish copy.

## Impact
- Affected specs: none yet; each item becomes its own change when started.
- Nothing here ships until the owner picks the items.
