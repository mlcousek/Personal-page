## ADDED Requirements

### Requirement: Project status
Each project SHALL declare a status of `in-progress`, `in-use` or `done`, shown as a localised pill on its card and in its modal.

#### Scenario: Czech card
- **WHEN** the language is Czech
- **THEN** a finished project shows *Dokončeno*

### Requirement: Detail modal
Activating a card's **Details** button SHALL open a modal dialog with the project's full text, highlights and all screenshots.

#### Scenario: Keyboard use
- **WHEN** the user opens the modal with Enter and presses Esc
- **THEN** the modal closes and focus returns to the **Details** button

#### Scenario: Page scroll
- **WHEN** the modal is open
- **THEN** the page behind it does not scroll

### Requirement: Section order
The page SHALL list *Featured projects* first, then the Obsidian vault section, then *More projects*.

#### Scenario: Reading order
- **WHEN** the page is opened
- **THEN** the headings appear in the order Featured, vault, More

### Requirement: Full-screen images
Every project, plugin and modal screenshot SHALL open in a full-screen viewer when activated by click, Enter or Space.

#### Scenario: Paging
- **WHEN** an image belongs to a group of several and the viewer is open
- **THEN** ← and → (and the on-screen arrows) move through the group, and Esc closes the viewer

#### Scenario: From inside a modal
- **WHEN** a screenshot in an open project modal is activated
- **THEN** the viewer opens above the modal, and closing it leaves the modal open

### Requirement: Repository links only where public
A modal SHALL show a GitHub link only for projects whose `repos` list is set; private projects SHALL show none.

#### Scenario: NARUZU
- **WHEN** the NARUZU modal is opened
- **THEN** no repository link is shown
