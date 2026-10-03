# Handoff: CV and project content review

- **Date:** 2026-10-03
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main, f05c6f4; review documents uncommitted

## Goal of this task
Review portfolio copy against the CV and private project evidence, and provide a proposed fixes.md without changing the website.

## Done
- Three read-only Luna reviewers were assigned. Two completed CV/home and lab/ROS reviews; the third returned no independent findings. Codex inspected ADLR/thesis sources directly.
- Produced fixes.md with precise locations, proposed wording, confidence and evidence.
- Confirmed CV facts, lab counts/intervals, poster-based ADLR averages and ROS report metrics.
- Flagged overstrong efficiency/model-error statements, ambiguous degree headings, dated academic status, wording/terminology and two small functional findings.
- Used installed pdftotext for read-only PDF extraction; no private project code executed.

## Not done / in progress
- Proposed website fixes await owner review.
- No browser, screenshots, Lighthouse or full accessibility audit.

## Files touched
- fixes.md
- agents/handoffs/2026-10-03-06-content-review.md

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | Pass |
| npm run typecheck | Pass |
| npm test | Pass: 2 files, 6 tests |
| npm run build | Pass |
| Manual check (themes / mobile / reduced motion) | Not run; source review only |

Initially npm was absent from PATH. Successful checks used C:/Program Files/nodejs with npm.cmd. Build outputs are ignored.

## Decisions made
- Recommendations only: website data/components untouched.
- Poster remains canonical for ADLR; notebook/script differences are provenance questions rather than automatic corrections.
- Existing owner choices on semester wording, banners, contact and demo labels remain intact.
- ROS results independently verified from report extraction.

## Open questions for the owner
- Confirm BME master's and Erasmus award/enrolment status for clearer headings.
- Confirm date/currentness of GPA/ECTS snapshot.
- Decide whether to disclose July 2024 thesis-results provenance.
- Identify exact ADLR poster run and thesis split before adding further scientific claims.

## TODO(owner)
- Review fixes.md and select implementation scope.
- Resolve the education/status/provenance questions above.

## Do not redo / do not undo
- Do not change public project content automatically from private files.
- Do not re-enable CV download or disclose private data.
- No dependencies installed, no commits or pushes.

## Suggested next steps
1. Review proposed fixes; prioritise technical overclaims and education clarity.
2. Apply agreed edits to canonical site data and small functional fixes.
3. Repeat required gates after implementation.
