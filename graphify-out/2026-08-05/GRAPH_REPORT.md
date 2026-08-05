# Graph Report - Personal-page  (2026-07-15)

## Corpus Check
- 117 files · ~2,818,543 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 193 nodes · 283 edges · 18 communities (13 shown, 5 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1f8a4213`
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
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Academic Milestones|Academic Milestones]]
- [[_COMMUNITY_B7 Trail Race 2025|B7 Trail Race 2025]]
- [[_COMMUNITY_Claude Dev Settings|Claude Dev Settings]]
- [[_COMMUNITY_Football Photos|Football Photos]]
- [[_COMMUNITY_Prague Marathon 2025|Prague Marathon 2025]]
- [[_COMMUNITY_Zlin Half Marathon 2026|Zlin Half Marathon 2026]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `RACES` - 21 edges
2. `Product` - 8 edges
3. `renderVideos()` - 7 edges
4. `init()` - 7 edges
5. `Design System` - 6 edges
6. `Architecture` - 6 edges
7. `setupFilters()` - 5 edges
8. `renderEpisodes()` - 5 edges
9. `Personal Webpage – Jiří Mlčoušek` - 5 edges
10. `renderCard()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` --references--> `RACES`  [INFERRED]
  images/events/B72025/IMG_8080.jpg → scripts/sports.js
- `Runner with bib number 94 at Olomouc Maraton 2025` --references--> `RACES`  [EXTRACTED]
  images/events/OlomoucMaraton2025/74a875bc-16b0-4030-af00-610e0c66fdae.JPG → scripts/sports.js
- `Trail runner on rocky forest path - B7 2025 race` --references--> `RACES`  [EXTRACTED]
  images/events/B72025/IMG_5622.JPG → scripts/sports.js
- `Trail runner with poles, race number 0916, rocky forest path - B7 2025 race` --references--> `RACES`  [EXTRACTED]
  images/events/B72025/IMG_5624.JPG → scripts/sports.js
- `Jested 24 Winter 2026 - Athlete climbing snowy slope with poles` --references--> `RACES`  [EXTRACTED]
  images/events/jestedWinter242026/321A6841.jpg → scripts/sports.js

## Import Cycles
- None detected.

## Communities (18 total, 5 thin omitted)

### Community 0 - "i18n & Shared Components"
Cohesion: 0.11
Nodes (25): Feature script pattern: data array -> filter/sort -> render -> DOM, i18n languageChanged event re-render pattern, favourite field on media items, fs, fs, applyFiltersAndSort(), collectAllShows(), collectAllTags() (+17 more)

### Community 1 - "Podcasts & Favourites Feature"
Cohesion: 0.14
Nodes (30): Trail runner on rocky forest path - B7 2025 race, Trail runner with poles, race number 0916, rocky forest path - B7 2025 race, Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem, Electronic Signature (Elektronický podpis), Jiří Mlčoušek, Kosir 2026 Running Event, Masters Degree Completion, Public Key Infrastructure (PKI) (+22 more)

### Community 2 - "Strava & Sports Integration"
Cohesion: 0.23
Nodes (10): navbar.html – Shared Navigation Component, README – Personal Webpage Documentation, buildInlineNavbar(), combinePath(), getSiteRootPrefix(), loadFooter(), loadNavbar(), normalizeNavbarLinks() (+2 more)

### Community 3 - "Videos Feature & CSS"
Cohesion: 0.15
Nodes (13): Strava API Integration Pattern, __dir, fmtElev(), fmtKm(), fmtMonth(), now, ROOT, stats (+5 more)

### Community 4 - "Package & Project Config"
Cohesion: 0.33
Nodes (8): BLOG_POSTS, cardHTML(), CATEGORY_MAP, getLang(), isHomePage(), openPost(), renderHomeLatest(), renderPosts()

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

### Community 14 - "Football Photos"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 15 - "Prague Marathon 2025"
Cohesion: 0.38
Nodes (8): init(), prepareCounters(), prepareReveals(), scheduleScan(), setupBackdrop(), setupBeams(), setupNavState(), setupParallax()

### Community 16 - "Zlin Half Marathon 2026"
Cohesion: 0.29
Nodes (6): Ambient backdrop, Color, Design System, Motion, Shape, Typography

### Community 17 - "Community 17"
Cohesion: 0.23
Nodes (8): Football Career, Football match action photo - player #6 in neon green kit dribbling ball, Football player portrait on pitch in black and yellow kit, Football match photo - two players contesting near touchline with spectators, FUTURE_RACES, openModal(), renderRaceTable(), TRAINING_STATS

## Ambiguous Edges - Review These
- `Photo of man holding race finisher medal at outdoor running event` → `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`  [AMBIGUOUS]
  images/PKI_course.png · relation: conceptually_related_to

## Knowledge Gaps
- **62 isolated node(s):** `PODCAST_EPISODES`, `TAGS_I18N`, `BLOG_POSTS`, `CATEGORY_MAP`, `FUTURE_RACES` (+57 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Photo of man holding race finisher medal at outdoor running event` and `PKI a elektronický podpis - course/document cover by Libor Dostálek, 2020`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `RACES` connect `Podcasts & Favourites Feature` to `Community 17`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 14 inferred relationships involving `Jiří Mlčoušek` (e.g. with `Football Career` and `Masters Degree Completion`) actually correct?**
  _`Jiří Mlčoušek` has 14 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `RACES` (e.g. with `Podium ceremony at B7 2025 race (16th edition), Frenstat pod Radhostem` and `Jiří Mlčoušek`) actually correct?**
  _`RACES` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `renderVideos()` (e.g. with `groupByDateDescending()` and `renderCard()`) actually correct?**
  _`renderVideos()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PODCAST_EPISODES`, `TAGS_I18N`, `BLOG_POSTS` to the rest of the system?**
  _62 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `i18n & Shared Components` be split into smaller, more focused modules?**
  _Cohesion score 0.10887096774193548 - nodes in this community are weakly interconnected._