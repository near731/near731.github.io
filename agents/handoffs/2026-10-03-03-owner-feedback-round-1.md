# Handoff: Owner feedback round 1

- **Date:** 2026-10-03
- **From:** claude
- **Next agent:** owner (review), then codex as reviewer
- **Next agent's role:** reviewer
- **Branch / commit:** main, uncommitted

## Goal of this task
Apply the owner's feedback on the first version.

## Done
- Removed the robot canvas hero (`HeroCanvas`, `src/lib/mppi.ts` and its test); history keeps them if wanted back.
- Hero is now centered: round placeholder avatar (Sukuna, restored from git history `assets/profile.jpg` -> `src/assets/avatar-placeholder.jpg`), name, tagline, links.
- Header: only a small round avatar + nav; no text/prompt mark.
- Removed High School from education.
- Headings are plain: "My Professional Experience", "Education", "Skills", "Contact"; eyebrow labels removed on pages.
- Skills moved to the bottom of the home page (featured chips, link to the full Skills page). Rating dots removed; skills expanded after owner Q&A (Isaac Lab/Sim, Franka FCI/libfranka, RViz, generative models, TRELLIS/MVDream, sklearn/pandas/NumPy, MPC/MPPI, adaptive/optimal/classical/modern control, Docker, CUDA).
- Lab experience now uses the LSY lab logo (`src/assets/logos/lsr-logo.svg`), downloaded from https://www.ce.cit.tum.de/lsy/ by a subagent. Shown on a white tile so it stays readable in dark mode.

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | pass |
| npm run typecheck | pass |
| npm test | pass (2 data tests) |
| npm run build | pass |
| npm run test:e2e | pass (3 tests) |
| Manual: screenshots light, dark, mobile | looked fine |

## Open questions for the owner
- Logo is the lab's trademark taken from the TUM site; fine for a CV-style portfolio, but confirm you are comfortable using it.
- The "featured" skills on the home page are my pick (`featured: true` in `src/data/skills.ts`); adjust freely.
- Real photo to replace the placeholder avatar (`src/assets/avatar-placeholder.jpg`, alt text in `profile.ts`).
- Still unconfirmed: "roughly 80% grasp accuracy", project summaries, public CV containing address/phone.

## Do not redo / do not undo
- Don't bring back the canvas animation or high school without asking.
- No commit/push without the owner asking.
