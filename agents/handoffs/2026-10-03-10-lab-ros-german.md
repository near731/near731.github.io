# Handoff: German project copy for lab and ROS

- **Date:** 2026-10-03
- **From:** codex
- **Next agent:** codex
- **Next agent's role:** builder
- **Branch / commit:** main, uncommitted

## Goal of this task
Prepare German translations for the first two project entries, preserving project facts and technical identifiers. The root agent integrates the locale catalog.

## Done
- Added src/data/locales/lab-ros.de.ts, exporting labRosTranslations: Record<string, string> keyed by exact English strings.
- Covered user-facing text for the MPPI/flow-matching lab and autonomous-driving ROS 2 projects, including alt text, captions, results, tables, video titles, and link notes.
- Left technical names, acronyms, package/node identifiers, state constants, numeric values, and units intact where appropriate.

## Not done / in progress
- Root still needs to integrate this map into the German project catalog and check key coverage against rendered fields.
- Quality gates remain pending until integration is complete.

## Files touched
- src/data/locales/lab-ros.de.ts
- agents/handoffs/2026-10-03-10-lab-ros-german.md

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | Not run; translation catalog awaits integration |
| npm run typecheck | Not run; translation catalog awaits integration |
| npm test | Not run; translation catalog awaits integration |
| npm run build | Not run; translation catalog awaits integration |
| Manual check (themes / mobile / reduced motion) | Not applicable before integration |

## Decisions made
- Kept MPPI, CEM, MPC, Flow Matching, Isaac Lab, ROS 2, CRISP, FoundationPose, ros2_control, package names, node names, state constants, numbers, and units intact.
- Used exact English strings as keys so the root can overlay translated values on the canonical English data.

## Open questions for the owner
- None for this copy pass.

## TODO(owner)
- None.

## Do not redo / do not undo
- Do not translate project slugs, asset paths, links, package/node identifiers, or state constants.
- Keep the English project data canonical.

## Suggested next steps
1. Root integrates the map and checks every rendered text field.
2. Run the required quality gates after integration.
