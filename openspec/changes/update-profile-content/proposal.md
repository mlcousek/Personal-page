# Change: Refresh profile content (home, About, CV, sports stats, blog)

## Why
The profile no longer matches where Jiří is: the 24DS result (132.3 km) is the longest run, AI and team leadership are now central to the work, and the CV and About pages disagree about skills. Visitors also get a random hero photo instead of one deliberate image.

## What Changes
- **Home**: one fixed hero photo (the SVOČ award photo); the third chip reads `132.3 km ultra`.
- **Sports**: *Ultra Distance* becomes 132.3 km (links to the 24DS Strava activity); *Ultramarathons* count goes 4 → 7.
- **About**: new traits *Leader* and *AI enthusiast* (en/cs/es); new portrait (white shirt); the Skills section renders the same `CV_SKILLS` / `CV_MINDSET` data as the CV through the new `scripts/about.js`, so the two pages cannot drift.
- **CV**: portrait in the identity rail; rewritten profile (AI & .NET/C# focus, AI best practices, improving self and team, sport background); longer *Beyond the code* text; Monet+ entry gains the iteration-driver note; contact links become bordered, clickable rows with a visible affordance.
- **Blog**: new post *Two Months as Iteration Driver* dated 2026-09-01, category *Career*.

## Impact
- Affected specs: `profile-content` (new capability)
- Affected code: `pages/index.html`, `pages/about.html`, `pages/sports.html`, `scripts/main.js`, `scripts/cv.js`, `scripts/about.js` (new), `scripts/posts.js`, `assets/styles/cv.css`, `images/about-portrait.jpg`, `images/cv-portrait.jpg`
- No breaking changes; no new dependencies.
