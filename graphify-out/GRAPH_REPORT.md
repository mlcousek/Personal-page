# Graph Report - .  (2026-06-09)

## Corpus Check
- 56 files · ~0 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 182 nodes · 297 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 70 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_i18n & Shared Components|i18n & Shared Components]]
- [[_COMMUNITY_Podcasts & Favourites Feature|Podcasts & Favourites Feature]]
- [[_COMMUNITY_Strava & Sports Integration|Strava & Sports Integration]]
- [[_COMMUNITY_Videos Feature & CSS|Videos Feature & CSS]]
- [[_COMMUNITY_Package & Project Config|Package & Project Config]]
- [[_COMMUNITY_Blog & Posts|Blog & Posts]]
- [[_COMMUNITY_Favourites Migration Scripts|Favourites Migration Scripts]]
- [[_COMMUNITY_CLAUDE.md Architecture Docs|CLAUDE.md Architecture Docs]]
- [[_COMMUNITY_README & Project Docs|README & Project Docs]]
- [[_COMMUNITY_Sports Races & Modal UI|Sports Races & Modal UI]]
- [[_COMMUNITY_PKI & Portrait Photos|PKI & Portrait Photos]]
- [[_COMMUNITY_Academic Milestones|Academic Milestones]]
- [[_COMMUNITY_B7 Trail Race 2025|B7 Trail Race 2025]]
- [[_COMMUNITY_Claude Dev Settings|Claude Dev Settings]]

## God Nodes (most connected - your core abstractions)
1. `RACES` - 22 edges
2. `renderVideos()` - 7 edges
3. `BLOG_POSTS array` - 7 edges
4. `setLanguage()` - 6 edges
5. `Architecture` - 6 edges
6. `loadNavbar()` - 5 edges
7. `renderEpisodes()` - 5 edges
8. `setupFilters()` - 5 edges
9. `Personal Webpage – Jiří Mlčoušek` - 5 edges
10. `applyLanguageAfterNavbar()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` --references--> `RACES`  [INFERRED]
  images/events/B72025/IMG_8080.jpg → scripts/sports.js
- `Runner with bib number 94 at Olomouc Maraton 2025` --references--> `RACES`  [EXTRACTED]
  images/events/OlomoucMaraton2025/74a875bc-16b0-4030-af00-610e0c66fdae.JPG → scripts/sports.js
- `Masters Graduation Celebration Photo` --references--> `BLOG_POSTS array`  [INFERRED]
  images/Posts/MastersDone/IMG_9011.jpg → scripts/posts.js
- `SVOC Award Ceremony - Jiří Mlčoušek Receiving Certificate` --references--> `BLOG_POSTS array`  [INFERRED]
  images/Posts/SVOC/IMG_8964.JPG → scripts/posts.js
- `patchHtml()` --references--> `sports.html – Sports Page`  [EXTRACTED]
  scripts/update-strava.mjs → pages/sports.html

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "i18n & Shared Components"
Cohesion: 0.09
Nodes (28): Feature script pattern: data array -> filter/sort -> render -> DOM, i18n languageChanged event re-render pattern, favourite field on media items, Media filter UI (filter chips + controls), podcasts.html – Podcast Log Page, videos.html – Video Vault Page, fs, fs (+20 more)

### Community 1 - "Podcasts & Favourites Feature"
Cohesion: 0.13
Nodes (33): Trail runner on rocky forest path - B7 2025 race, Trail runner with poles, race number 0916, rocky forest path - B7 2025 race, Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem, Football Career, Jiří Mlčoušek, Kosir 2026 Running Event, Football match action photo - player #6 in neon green kit dribbling ball, Football player portrait on pitch in black and yellow kit (+25 more)

### Community 2 - "Strava & Sports Integration"
Cohesion: 0.14
Nodes (19): footer.html – Shared Footer Component, navbar.html – Shared Navigation Component, Trilingual i18n (EN/CS/ES) Pattern, languageChanged CustomEvent Bus, pages/index.html – Home Page, index.html – Root Redirect Page, README – Personal Webpage Documentation, applyLanguageAfterNavbar() (+11 more)

### Community 3 - "Videos Feature & CSS"
Cohesion: 0.14
Nodes (16): Strava API Integration Pattern, renderTrainingStats(), TRAINING_STATS object, __dir, fmtElev(), fmtKm(), fmtMonth(), now (+8 more)

### Community 4 - "Package & Project Config"
Cohesion: 0.21
Nodes (14): Masters Degree Completion, SVOC Academic Competition, Masters Graduation Celebration Photo, blog.html – Blog Page, BLOG_POSTS, BLOG_POSTS array, cardHTML(), CATEGORY_MAP (+6 more)

### Community 5 - "Blog & Posts"
Cohesion: 0.15
Nodes (12): author, description, devDependencies, live-server, keywords, license, main, name (+4 more)

### Community 6 - "Favourites Migration Scripts"
Cohesion: 0.18
Nodes (10): code, endIdx, fs, startIdx, code, fs, match, code (+2 more)

### Community 7 - "CLAUDE.md Architecture Docs"
Cohesion: 0.22
Nodes (8): Architecture, Asset paths, Component injection, Development, Feature scripts, i18n system, Path resolution, Strava data refresh

### Community 8 - "README & Project Docs"
Cohesion: 0.22
Nodes (8): 📦 Deployment, ✨ Features, 🚀 Getting started, Install dependencies, Personal Webpage – Jiří Mlčoušek, Prerequisites, Run a local dev server, 🛠️ Updating content

### Community 10 - "PKI & Portrait Photos"
Cohesion: 1.00
Nodes (3): Electronic Signature (Elektronický podpis), Public Key Infrastructure (PKI), PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020

## Ambiguous Edges - Review These
- `Photo of man holding race finisher medal at outdoor running event` → `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`  [AMBIGUOUS]
  images/PKI_course.png · relation: conceptually_related_to

## Knowledge Gaps
- **51 isolated node(s):** `allow`, `name`, `version`, `description`, `main` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Photo of man holding race finisher medal at outdoor running event` and `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `languageChanged CustomEvent Bus` connect `Strava & Sports Integration` to `i18n & Shared Components`, `Podcasts & Favourites Feature`, `Package & Project Config`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Are the 24 inferred relationships involving `Jiří Mlčoušek` (e.g. with `Football Career` and `Masters Degree Completion`) actually correct?**
  _`Jiří Mlčoušek` has 24 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `RACES` (e.g. with `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` and `Jiří Mlčoušek`) actually correct?**
  _`RACES` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `renderVideos()` (e.g. with `groupByDateDescending()` and `renderCard()`) actually correct?**
  _`renderVideos()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `BLOG_POSTS array` (e.g. with `Jiří Mlčoušek` and `Masters Graduation Celebration Photo`) actually correct?**
  _`BLOG_POSTS array` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `allow`, `name`, `version` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._