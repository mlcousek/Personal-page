# Tasks

## 1. Modal
- [x] 1.1 `status`, `details`, `repos` in the data model
- [x] 1.2 Status pill and **Details** button on each card
- [x] 1.3 Native `<dialog>` modal (Esc, backdrop click, focus return, body scroll lock)
- [x] 1.4 Modal and status styles in `projects.css`

## 1b. Structure and image viewer (second round)
- [x] 1b.1 Page order: Featured → Jirka's World vault → More projects
- [x] 1b.2 Vault intro gains a paragraph on the training plan and its link to Jirka's Arc; *Training Planner* plugin card; weekly planning automation entry
- [x] 1b.3 Jirka's Arc text rewritten from the app and vault docs (product level only; no health details, no implementation)
- [x] 1b.4 Lightbox: every project/plugin image opens full screen, ← → paging inside a group, Esc/backdrop/close button, focus return, keyboard-operable
- [x] 1b.5 Scroll lock derived from open dialogs (a dialog's `close` event can arrive late)

## 2. Content
- [x] 2.1 NARUZU: latest in-game and progress screenshots
- [x] 2.2 Claude & Codex Usage Tray text, both repos, "in use across the team"
- [ ] 2.3 NARUZU: newer menu screenshot (owner will provide) — replaces the progress shot
- [ ] 2.4 Jirka's Arc: additional screenshots (owner will provide)
- [ ] 2.5 Closet: screenshot(s) (owner will provide)
- [ ] 2.6 Vault plugins: World Heatmap, Activity Detail, Training Dashboard, UTMB Runner Index (owner will provide; add as `image` in `VAULT_PLUGINS`; crop out other runners' names)
- [ ] 2.7 Decide whether Closet and Jirka's Arc repositories may be linked

## 3. Verification
- [ ] 3.1 Open every modal at 1280px and 390px; no horizontal scroll, close works
- [ ] 3.2 en/cs/es: status and button labels translate
- [ ] 3.3 Re-render on language change while a modal is closed
