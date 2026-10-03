# Handoff: Projects pages, round 1

- **Date:** 2026-10-03
- **From:** claude
- **Next agent:** owner (review), then codex as reviewer
- **Next agent's role:** reviewer
- **Branch / commit:** main, uncommitted

## Done
- Projects overview (cards with image) and detail pages `/projects/:slug`; data in `src/data/projects.ts`, priority order: lab MPPI+flow matching, ROS autonomous driving, ADLR tactile raycasting, bachelor thesis footstep CNN.
- Content only from items the owner ticked in the Q&A. Teammates/supervisors not named. No source code shown.
- Images: ROS result dashboard and three thesis pred-vs-actual plots (extracted from the notebook, converted to WebP). Lab and ADLR use the generated "Placeholder" tile (ADLR poster pending from owner).
- PD_Project (colorization) dropped and its clone deleted, as requested.
- Home experience bullet for the lab corrected from "~80% over seven categories" (not found in repo) to 91.7% (550/600, six objects, simulation).
- Five read-only subagents analyzed the repos; their findings are summarized below, not stored.

## Verified numbers and sources
- Lab: README "Current results": grasp_n_lift 550/600, pick_n_place 231/250 (docs/results files).
- ROS: report Table 3 (206.9 s avg lap, 205.7 best, 752 m, 3.64 m/s avg, 8.56 top, 32.5 s at lights); MPC params Table 2.
- ADLR: owner chose conservative numbers. Saved timing output: RC 2.47 s vs NN 0.15 s for 1M rays (~16x); notebook accuracy 94.55% with threshold 0.05. README claims 32x / 93.56% (not verified).
- Thesis: README "Current performance 31/7/2024" (MAE/R2). README does not say which model produced them; results date from the July 2024 rework.

## Verification
lint, typecheck, unit tests (4), build and e2e (7) all pass; screenshots checked for the overview and a detail page.

## Open questions / TODO(owner)
- Lab project: owner/supervisor approval of the text and numbers; no credit to the base method was requested, so the text stays neutral about novelty.
- ADLR poster and figures; ROS pipeline diagram from the report PDF (needs a PDF renderer).
- Thesis: confirm which model gave the numbers; link to the actual TDK paper instead of the TDK home page; plots show per-recording points (anonymous), confirm OK.
- Confirm role wording for ADLR ("Pair project", no role claim yet) and period for the thesis ("2023").

## Do not redo / do not undo
- Don't re-add PD_Project, high school, or the robot canvas. No commit/push without the owner asking.
