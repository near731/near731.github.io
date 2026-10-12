# Handoff: MPPI project page update proposal

- **Date:** 2026-10-12
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main, planning only; no application changes

## Goal of this task
Compare the updated MPPI README with the portfolio page and propose a page update featuring new real wrist-camera recordings. Gather owner preferences with clickable questions.

## Done
- Read the latest private project's root README, its referenced simulation result, relevant media documentation and the current portfolio content/player/diagram.
- Local private project revision inspected: `55d183c`, 2026-10-12. No private code was executed or modified.
- Owner chose simulation plus real footage at the top, episode 8 featured, other real episodes expandable, and higher-resolution recordings if available.
- Explained current website simulation results: grasp-and-lift 550/600 (91.7%), pick-and-place 231/250 (92.4%).
- Verified the newer simulation result: 148/150 (98.7%), 95% Wilson interval 95.3–99.6%, dated 2026-10-06. Source: `private/repos/tum-lsy-isaac_mppi/FR3_Robotiq_Grasping/docs/results/PNP_V5B_PURE_MPPI_FP_150_SEED480_2026-10-06.md`.
- The current README documents real-robot demonstrations dated 2026-10-12. It leaves hardware evaluation pending; owner confirms the hardware sweep is TODO. Do not report a hardware success rate.
- Inspected media dimensions and representative frames locally. Wrist-camera episode GIFs are 360 × 204; the comparison GIF is 958 × 270. No MP4/WebM/MOV/MKV originals found in the local clone, including ignored files.
- Identified drift: moving-to-hardware summary/status, elite-selection explanation/diagram, simulation-only perception wording, simulation-only video badge, and real-robot placeholder.

## Not done / in progress
- No public copy, footage or page changes implemented: user requested a plan.
- Await owner choice for presenting old versus latest simulation metrics.
- Await location of higher-resolution recordings, or owner choice to use GIFs temporarily.

## Files touched
- This handoff only (tracked).
- Two ignored preview frames in `private/assets/mppi-review/`, extracted for local inspection.

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | PASS |
| npm run typecheck | PASS |
| npm test | PASS: 10 tests across 3 files |
| npm run build | PASS |
| Manual check (themes / mobile / reduced motion) | Not performed; no UI changes. Existing player inspected for reduced-motion behavior and playback controls. |

## Decisions made
- Proposed top section: separate simulation and real-wrist-camera players side by side on desktop, stacked on mobile. Preserve aspect ratios; identify separate runs and playback speeds. Do not imply synchronized trials.
- Feature episode 8, with episodes 3/6/7 in an expandable gallery. Keep the planner-trajectory demonstration further down.
- Proposed revised title: “Flow-prior MPPI for real-world pick-and-place”; owner has not explicitly approved final wording.
- Update summary/status to real deployment with hardware evaluation TODO; keep project in progress.
- Present the latest simulation evaluation with counts, date, setup and uncertainty. Recommend retaining older metrics/demos in a secondary dated section; pending owner choice. Different evaluations do not establish a controlled improvement comparison.
- Update planner explanation/diagram to MPPI cost-weighted combination per current README, rather than elite selection; keep familiar technical vocabulary in both languages.
- Update perception explanation to registration before grasp and gripper-relative held-object pose, matching the current README.
- Extend video data/player to distinguish simulation, hardware and comparison media. Labels, captions and accessibility copy belong in localized site data.
- Convert approved recordings locally to compact MP4 plus WebP posters; preserve timing and annotate existing acceleration. Conversion cannot recover detail from small GIFs. No new dependencies planned.

## Open questions for the owner
- Lead with latest result and retain older results in a dated secondary section, show all together with setups, or show only latest metrics?
- Where are higher-resolution recordings? Otherwise, may the existing GIFs be used temporarily?

## TODO(owner)
- Answer the pending clickable questions, including a local source path if available.

## Do not redo / do not undo
- Keep private repository source, operational details and unapproved text out of the website. Do not execute private repo scripts or hardware commands.
- No hardware success percentage until the owner supplies a verified sweep.
- Never label hardware videos as simulation or present earlier metrics as the current setup.

## Suggested next steps
1. Finalize the plan with remaining owner preferences.
2. When implementation is requested, prepare approved media, update EN/DE data, player and diagram, then validate responsive playback, reduced motion, accessibility and standard quality gates.
