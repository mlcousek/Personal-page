## ADDED Requirements

### Requirement: Branded PDF output
Printing the CV SHALL produce a light A4 document with a tinted identity column, the portrait, an accent colour for headings and the contact links as underlined URLs.

#### Scenario: Save as PDF
- **WHEN** the user clicks *Print / save as PDF* and saves
- **THEN** the PDF shows the portrait, the tinted rail and clickable LinkedIn, GitHub and Strava links

### Requirement: No awkward page breaks
Entries, skill groups and certificates SHALL NOT be split across two pages.

#### Scenario: Long skills section
- **WHEN** the skills section does not fit on the page
- **THEN** whole skill groups move to the next page
