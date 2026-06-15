# Graph Report - Personal-page  (2026-06-12)

## Corpus Check
- 118 files · ~2,805,446 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 190 nodes · 290 edges · 16 communities (12 shown, 4 thin omitted)
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 52 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c43e99d1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Academic Milestones|Academic Milestones]]
- [[_COMMUNITY_B7 Trail Race 2025|B7 Trail Race 2025]]
- [[_COMMUNITY_Claude Dev Settings|Claude Dev Settings]]
- [[_COMMUNITY_Football Photos|Football Photos]]
- [[_COMMUNITY_Prague Marathon 2025|Prague Marathon 2025]]
- [[_COMMUNITY_Zlin Half Marathon 2026|Zlin Half Marathon 2026]]

## God Nodes (most connected - your core abstractions)
1. `RACES` - 22 edges
2. `Product` - 8 edges
3. `renderVideos()` - 7 edges
4. `BLOG_POSTS array` - 7 edges
5. `init()` - 6 edges
6. `Design System` - 6 edges
7. `Architecture` - 6 edges
8. `renderEpisodes()` - 5 edges
9. `setupFilters()` - 5 edges
10. `Personal Webpage – Jiří Mlčoušek` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` --references--> `RACES`  [INFERRED]
  images/events/B72025/IMG_8080.jpg → scripts/sports.js
- `Runner with bib number 94 at Olomouc Maraton 2025` --references--> `RACES`  [EXTRACTED]
  images/events/OlomoucMaraton2025/74a875bc-16b0-4030-af00-610e0c66fdae.JPG → scripts/sports.js
- `Masters Graduation Celebration Photo` --references--> `BLOG_POSTS array`  [INFERRED]
  images/Posts/MastersDone/IMG_9011.jpg → scripts/posts.js
- `SVOC Award Ceremony - Jiří Mlčoušek Receiving Certificate` --references--> `BLOG_POSTS array`  [INFERRED]
  images/Posts/SVOC/IMG_8964.JPG → scripts/posts.js
- `loadNavbar()` --references--> `navbar.html – Shared Navigation Component`  [EXTRACTED]
  scripts/main.js → components/navbar.html

## Import Cycles
- None detected.

## Communities (16 total, 4 thin omitted)

### Community 0 - "i18n & Shared Components"
Cohesion: 0.09
Nodes (24): Feature script pattern: data array -> filter/sort -> render -> DOM, i18n languageChanged event re-render pattern, favourite field on media items, fs, code, endIdx, fs, startIdx (+16 more)

### Community 1 - "Podcasts & Favourites Feature"
Cohesion: 0.12
Nodes (34): Trail runner on rocky forest path - B7 2025 race, Trail runner with poles, race number 0916, rocky forest path - B7 2025 race, Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem, Electronic Signature (Elektronický podpis), Football Career, Jiří Mlčoušek, Kosir 2026 Running Event, Public Key Infrastructure (PKI) (+26 more)

### Community 2 - "Strava & Sports Integration"
Cohesion: 0.23
Nodes (10): navbar.html – Shared Navigation Component, README – Personal Webpage Documentation, buildInlineNavbar(), combinePath(), getSiteRootPrefix(), loadFooter(), loadNavbar(), normalizeNavbarLinks() (+2 more)

### Community 3 - "Videos Feature & CSS"
Cohesion: 0.14
Nodes (16): Strava API Integration Pattern, renderTrainingStats(), TRAINING_STATS object, __dir, fmtElev(), fmtKm(), fmtMonth(), now (+8 more)

### Community 4 - "Package & Project Config"
Cohesion: 0.23
Nodes (13): Masters Degree Completion, SVOC Academic Competition, Masters Graduation Celebration Photo, BLOG_POSTS, BLOG_POSTS array, cardHTML(), CATEGORY_MAP, getLang() (+5 more)

### Community 5 - "Blog & Posts"
Cohesion: 0.15
Nodes (12): author, description, devDependencies, live-server, keywords, license, main, name (+4 more)

### Community 6 - "Favourites Migration Scripts"
Cohesion: 0.24
Nodes (11): fs, applyFiltersAndSort(), collectAllShows(), collectAllTags(), escapeHtml(), groupByDateDescending(), renderCard(), renderVideos() (+3 more)

### Community 7 - "CLAUDE.md Architecture Docs"
Cohesion: 0.22
Nodes (8): Architecture, Asset paths, Component injection, Development, Feature scripts, i18n system, Path resolution, Strava data refresh

### Community 8 - "README & Project Docs"
Cohesion: 0.22
Nodes (8): 📦 Deployment, ✨ Features, 🚀 Getting started, Install dependencies, Personal Webpage – Jiří Mlčoušek, Prerequisites, Run a local dev server, 🛠️ Updating content

### Community 14 - "Football Photos"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 15 - "Prague Marathon 2025"
Cohesion: 0.42
Nodes (7): init(), prepareCounters(), prepareReveals(), scheduleScan(), setupBackdrop(), setupNavState(), setupParallax()

### Community 16 - "Zlin Half Marathon 2026"
Cohesion: 0.29
Nodes (6): Ambient backdrop, Color, Design System, Motion, Shape, Typography

## Ambiguous Edges - Review These
- `Photo of man holding race finisher medal at outdoor running event` → `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`  [AMBIGUOUS]
  images/PKI_course.png · relation: conceptually_related_to

## Knowledge Gaps
- **60 isolated node(s):** `allow`, `Color`, `Typography`, `Shape`, `Ambient backdrop` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Photo of man holding race finisher medal at outdoor running event` and `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `RACES` connect `Podcasts & Favourites Feature` to `Package & Project Config`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Are the 17 inferred relationships involving `Jiří Mlčoušek` (e.g. with `Football Career` and `Masters Degree Completion`) actually correct?**
  _`Jiří Mlčoušek` has 17 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `RACES` (e.g. with `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` and `Jiří Mlčoušek`) actually correct?**
  _`RACES` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `renderVideos()` (e.g. with `groupByDateDescending()` and `renderCard()`) actually correct?**
  _`renderVideos()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `BLOG_POSTS array` (e.g. with `Jiří Mlčoušek` and `Masters Graduation Celebration Photo`) actually correct?**
  _`BLOG_POSTS array` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `allow`, `Color`, `Typography` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._