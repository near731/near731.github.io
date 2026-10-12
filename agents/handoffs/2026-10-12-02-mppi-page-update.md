# Handoff: MPPI page with real wrist-camera demos and current results

- **Date:** 2026-10-12
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main, uncommitted

## Goal of this task
Implement the owner's choices from the preceding page-update proposal: pair simulation and real footage, feature episode 8, show 98.7% simulated pick-and-place success, and keep grasp-and-lift secondary.

## Done
- Added separate simulation and real-wrist-camera players at the top, side by side on desktop and stacked on mobile. Captions identify separate runs and original playback acceleration.
- Featured episode 8; episodes 3, 6 and 7 are available in a keyboard-accessible disclosure.
- Replaced the older headline pick-and-place result with 98.7% (148/150, Wilson 95% CI 95.3–99.6%, evaluation date 2026-10-06). Hardware evaluation remains TODO, with no hardware success rate.
- Moved grasp-and-lift and its six clips/91.7% earlier simulation result to a collapsed secondary section, retaining the distinct setup and ground-truth-pose context.
- Moved the existing planner-trajectory demonstration below the main content; retained earlier simulation clips.
- Updated deployment status, perception explanation, MPPI cost weighting and the planner diagram. Preserved the existing project title and route.
- Added real-robot video labels and translated all new copy into German while retaining familiar technical terms.
- Converted owner-approved GIFs into five compact H.264 MP4s and WebP posters. Original dimensions/timing preserved. Added MP4s total about 1.42 MB; no upscaling or detail recovery claimed.
- Extended the asset-resolution test to include paired hero videos, added a browser test for results/disclosures/localization/mobile width, and updated existing hero tests for the pair.
- Corrected a stale home test which still expected CV download links to be absent, despite the earlier authorized CV feature.

## Not done / in progress
- No commit, push or deployment.
- Higher-resolution originals remain unavailable locally; owner approved use of the GIFs for now.
- Downloadable EN/DE CVs still contain the earlier 92.4% pick-and-place result. Flagged drift; PDFs were not edited, per the owner's manual re-export rule.

## Files touched
- `src/data/projects.ts`, `src/data/ui.ts`, `src/lib/localize.ts`
- `src/data/locales/lab-ros.de.ts`, `src/data/locales/general.de.ts`
- `src/components/VideoClip.tsx`, `src/components/MppiDiagram.tsx`, `src/pages/ProjectDetail.tsx`
- Five MP4/WebP pairs under `src/assets/projects/mppi-flow-matching-franka/video/`
- `tests/unit/projects.test.ts`, `tests/e2e/site.spec.ts`, `tests/e2e/mppi.spec.ts`
- This handoff. Previous planning handoff remains append-only.

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | PASS, including after final test adjustment |
| npm run typecheck | PASS, including after final test adjustment |
| npm test | PASS: 10 tests across 3 files |
| npm run build | PASS |
| npm run test:e2e -- --workers=1 | PASS: all 16 tests, exit 0 |
| Targeted Prettier check | PASS for all changed TS/TSX files |
| git diff --check | PASS |
| Media validation | All four wrist MP4s fully decoded; source GIF and MP4 durations matched within 0.01 seconds for all five clips. Both featured videos played in Chromium with advancing time, correct dimensions and no media error. |
| Manual check (themes / mobile / reduced motion) | Inspected desktop English/light and mobile German/dark screenshots. Paired clips fit; mobile stacks correctly. E2E covers reduced-motion native controls, pause persistence and keyboard disclosure operation. |

The first full browser run passed 15/16 tests and exposed the stale CV-off assertion. Updated it to check the authorized English PDF download links, then reran the full suite: 16/16 passed.

## Decisions made
- Owner explicitly selected the paired top layout, episode 8 featured with other runs expandable, 98.7% for pick-and-place, grasp-and-lift secondary, hardware sweep TODO, and existing GIFs temporarily.
- Quantitative source: `private/repos/tum-lsy-isaac_mppi/FR3_Robotiq_Grasping/docs/results/PNP_V5B_PURE_MPPI_FP_150_SEED480_2026-10-06.md`, inspected at repo revision `55d183c`.
- Demo sources at that revision: `FR3_Robotiq_Grasping/docs/media/sim_pnp_01.gif` and `real_wrist_ep{3,6,7,8}.gif`. Root README supplies the playback-speed labels: simulation 3×, wrist episodes 2.5×, dated 2026-10-12.
- Media conversion used locally installed imageio-ffmpeg/Pillow, not a new website dependency or a private repository script. Nothing in the private repo was executed or modified.
- Separate recordings do not imply synchronized trials. Demonstrations do not establish a hardware success rate.
- New copy lives in site data; player labels are localized and distinguish real footage from simulation.

## Open questions for the owner
- None blocking the website update.

## TODO(owner)
- Re-export updated EN/DE CVs if they should show 98.7%; put originals in `private/cv/originals/` and regenerate permanent redactions before publishing them.
- Supply higher-resolution footage later if desired.
- Supply verified hardware-sweep results when available; until then keep TODO.

## Do not redo / do not undo
- Preserve real/simulation distinctions, original playback-speed captions and hardware TODO.
- Keep grasp-and-lift secondary unless the owner requests removal.
- Do not run private code or publish private source/operational details.

## Suggested next steps
1. Owner reviews the updated MPPI page and media before committing/deploying.
