# Graph Report - .  (2026-06-08)

## Corpus Check
- Corpus is ~21,510 words - fits in a single context window. You may not need a graph.

## Summary
- 117 nodes · 149 edges · 15 communities (9 shown, 6 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.9)
- Token cost: 12,000 input · 3,500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_i18n & Navbar Lifecycle|i18n & Navbar Lifecycle]]
- [[_COMMUNITY_Strava Data Pipeline|Strava Data Pipeline]]
- [[_COMMUNITY_Package & Project Config|Package & Project Config]]
- [[_COMMUNITY_Podcasts Feature|Podcasts Feature]]
- [[_COMMUNITY_Videos Feature|Videos Feature]]
- [[_COMMUNITY_Blog & Posts|Blog & Posts]]
- [[_COMMUNITY_Sports & Races|Sports & Races]]
- [[_COMMUNITY_Navigation & Landing|Navigation & Landing]]
- [[_COMMUNITY_Claude Dev Settings|Claude Dev Settings]]
- [[_COMMUNITY_Strava API Integration|Strava API Integration]]
- [[_COMMUNITY_VS Code & Local Config|VS Code & Local Config]]
- [[_COMMUNITY_Books Page|Books Page]]
- [[_COMMUNITY_Root Package|Root Package]]
- [[_COMMUNITY_Strava Updater Script|Strava Updater Script]]

## God Nodes (most connected - your core abstractions)
1. `renderVideos()` - 7 edges
2. `setLanguage()` - 6 edges
3. `getSiteRootPrefix()` - 5 edges
4. `loadNavbar()` - 5 edges
5. `applyLanguageAfterNavbar()` - 5 edges
6. `loadFooter()` - 4 edges
7. `renderEpisodes()` - 4 edges
8. `getLang()` - 4 edges
9. `renderPosts()` - 4 edges
10. `cardHTML()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `loadNavbar()` --references--> `navbar.html – Shared Navigation Component`  [EXTRACTED]
  scripts/main.js → components/navbar.html
- `loadFooter()` --references--> `footer.html – Shared Footer Component`  [EXTRACTED]
  scripts/main.js → components/footer.html
- `RACES` --semantically_similar_to--> `BLOG_POSTS array`  [INFERRED] [semantically similar]
  scripts/sports.js → scripts/posts.js
- `VS Code MCP Server Config (Spotify)` --references--> `Project Settings (Local Permissions)`  [INFERRED]
  .vscode/mcp.json → .claude/settings.local.json
- `PODCAST_EPISODES array` --semantically_similar_to--> `Trilingual i18n (EN/CS/ES) Pattern`  [INFERRED] [semantically similar]
  scripts/podcasts.js → scripts/main.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Trilingual Language System (translations + setLanguage + languageChanged event)** — scripts_main_translations, scripts_main_setlanguage, concept_languagechanged_event, scripts_posts, scripts_sports, scripts_videos [INFERRED 0.95]
- **Strava Data Pipeline (API fetch → computeStats → patchSportsJs → sports.html)** — scripts_updatestrava_getaccesstoken, scripts_updatestrava_fetchactivities, scripts_updatestrava_computestats, scripts_updatestrava_patchsportsjs, scripts_sports_trainingstats, pages_sports [EXTRACTED 1.00]
- **Navbar Injection Lifecycle (loadNavbar → fetch → applyLanguageAfterNavbar → normalizeNavbarLinks)** — scripts_main_loadnavbar, components_navbar, scripts_main_applylanguageafternavbar, scripts_main_normalizenavarlinks, scripts_main_setupmediaddropdown, scripts_main_setuphamburger [EXTRACTED 1.00]

## Communities (15 total, 6 thin omitted)

### Community 0 - "i18n & Navbar Lifecycle"
Cohesion: 0.16
Nodes (15): footer.html – Shared Footer Component, Trilingual i18n (EN/CS/ES) Pattern, languageChanged CustomEvent Bus, applyLanguageAfterNavbar(), buildInlineNavbar(), combinePath(), getSiteRootPrefix(), loadFooter() (+7 more)

### Community 1 - "Strava Data Pipeline"
Cohesion: 0.16
Nodes (10): __dir, fmtElev(), fmtKm(), fmtMonth(), now, patchHtml(), patchSportsJs(), ROOT (+2 more)

### Community 2 - "Package & Project Config"
Cohesion: 0.15
Nodes (12): author, description, devDependencies, live-server, keywords, license, main, name (+4 more)

### Community 3 - "Podcasts Feature"
Cohesion: 0.23
Nodes (11): podcasts.html – Podcast Log Page, applyFiltersAndSort(), collectAllShows(), collectAllTags(), escapeHtml(), groupByDateDescending(), PODCAST_EPISODES, renderCard() (+3 more)

### Community 4 - "Videos Feature"
Cohesion: 0.26
Nodes (11): videos.html – Video Vault Page, PODCAST_EPISODES array, applyFiltersAndSort(), collectAllTags(), escapeHtml(), groupByDateDescending(), renderCard(), renderVideos() (+3 more)

### Community 5 - "Blog & Posts"
Cohesion: 0.29
Nodes (10): blog.html – Blog Page, BLOG_POSTS, BLOG_POSTS array, cardHTML(), CATEGORY_MAP, getLang(), isHomePage(), openPost() (+2 more)

### Community 6 - "Sports & Races"
Cohesion: 0.21
Nodes (7): sports.html – Sports Page, openModal(), RACES, renderRaceTable(), renderTrainingStats(), TRAINING_STATS, TRAINING_STATS object

### Community 7 - "Navigation & Landing"
Cohesion: 0.33
Nodes (5): navbar.html – Shared Navigation Component, about.html – About Page, pages/index.html – Home Page, index.html – Root Redirect Page, README – Personal Webpage Documentation

## Knowledge Gaps
- **31 isolated node(s):** `allow`, `name`, `version`, `description`, `main` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `languageChanged CustomEvent Bus` connect `i18n & Navbar Lifecycle` to `Videos Feature`, `Blog & Posts`, `Sports & Races`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **Why does `navbar.html – Shared Navigation Component` connect `Navigation & Landing` to `i18n & Navbar Lifecycle`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `allow`, `name`, `version` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._