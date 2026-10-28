## ADDED Requirements

### Requirement: Single home hero photo
The home page SHALL show one fixed hero photo and SHALL NOT pick it at random.

#### Scenario: Reloading the home page
- **WHEN** the home page is loaded several times
- **THEN** the same hero photo is shown every time

### Requirement: Ultra stats match the longest race
The sports page and the home chip SHALL show the distance of the longest ultra on record, and the ultramarathon count SHALL include every ultra in `RACES`.

#### Scenario: Ultra distance card
- **WHEN** the sports page is opened
- **THEN** *Ultra Distance* shows 132.3 km and links to the 24DS Strava activity

### Requirement: About skills mirror the CV
The About page skills SHALL be rendered from the CV data (`CV_SKILLS`, `CV_MINDSET`) in the active language and SHALL re-render on `languageChanged`.

#### Scenario: Changing language
- **WHEN** the user switches to Czech on the About page
- **THEN** the skill group titles, chips and the mindset text are Czech

### Requirement: CV contact links are visibly clickable
Every CV contact entry SHALL be a link with a visible affordance in the browser and a readable underlined URL in the printed PDF.

#### Scenario: Printing
- **WHEN** the CV is saved as PDF
- **THEN** LinkedIn, GitHub and Strava appear as underlined links that stay clickable

### Requirement: Trilingual content
All new visible text SHALL exist in English, Czech and Spanish.

#### Scenario: Spanish
- **WHEN** the language is Spanish
- **THEN** the new traits, CV profile, interests and the iteration-driver post are Spanish
