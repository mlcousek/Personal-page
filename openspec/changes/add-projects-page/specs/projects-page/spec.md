## ADDED Requirements

### Requirement: Projects page reachable from navigation
The site SHALL provide a page `pages/projects.html` linked from the shared navbar with the label "My Projects" (cs "Moje projekty", es "Mis proyectos"), positioned directly after "About".

#### Scenario: Navigate from any page
- **WHEN** a visitor clicks "My Projects" in the navbar on any page
- **THEN** `pages/projects.html` opens
- **AND** the "My Projects" nav link is marked active

#### Scenario: Navbar fetch fails
- **WHEN** `components/navbar.html` cannot be fetched
- **THEN** the inline fallback navbar still contains the "My Projects" link

### Requirement: Academic projects section
The page SHALL present the bachelor thesis (FitnessWebApp) and the master thesis (FiniteAutomatons) as featured cards, each with a degree label, summary, highlights, technology stack and a link to its GitHub repository.

#### Scenario: Thesis cards shown
- **WHEN** the page loads
- **THEN** an "Academic work" section shows two featured cards labelled "Bachelor thesis" and "Master thesis"
- **AND** the cards link to `https://github.com/mlcousek/FitnessWebApp` and `https://github.com/mlcousek/FiniteAutomatons` respectively

### Requirement: Obsidian vault section
The page SHALL describe the "Jirka's World" Obsidian vault, show its custom plugins (Heatmap, UTMB table, Activities, Dashboard) as cards, and list the vault automations, linking to `https://github.com/mlcousek/Jirkas_world`.

#### Scenario: Vault content shown
- **WHEN** the page loads
- **THEN** the vault section shows an intro text, four plugin cards and an automations list

### Requirement: Tools section
The page SHALL present Claude Tray App and GarminFood as project cards linking to their repositories.

#### Scenario: Tool cards shown
- **WHEN** the page loads
- **THEN** a "Tools & side projects" section shows cards for Claude Tray App and GarminFood

### Requirement: Multilingual content
All visible page text SHALL be available in English, Czech and Spanish and SHALL update when the language is switched, without a reload.

#### Scenario: Switch language
- **WHEN** the visitor selects the Czech flag
- **THEN** headings, lead, card summaries, highlights and link labels render in Czech

### Requirement: Consistent design and motion
The page SHALL use only design tokens from `main.css` and be usable at 375px width without horizontal scroll. Cards SHALL use the shared scroll-reveal animation, which is disabled under `prefers-reduced-motion`.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed at 375px width
- **THEN** cards stack in a single column and no horizontal scrolling occurs
