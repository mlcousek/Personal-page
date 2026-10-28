# Change: A better CV when downloaded as PDF

## Why
The CV prints as a plain black-on-white flow: no photo, no background, links lose their look. The PDF is what recruiters actually receive.

## What Changes
- Print stylesheet: A4, zero page margin, a tinted identity rail with the portrait, an orange top edge, accent section headings, compact type in `pt`/`mm`.
- `print-color-adjust: exact` so backgrounds survive even when "Background graphics" is off.
- Contact links print as underlined URLs (clickable in the PDF), arrows hidden.
- Sections, entries, skill groups and certificates do not split across pages.

## Impact
- Affected specs: `cv-page` (new capability)
- Affected code: `assets/styles/cv.css` (print block only)
- No script changes.
