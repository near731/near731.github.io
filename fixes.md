# Proposed website fixes

Review date: 3 October 2026. Review of the current local repository, the private CV, project documentation, saved experiment outputs and the ADLR poster. Three Luna agents were assigned review areas. Two completed independent CV/homepage and lab/ROS reviews; the ADLR/thesis agent returned no independent findings, so Codex checked those sources directly. This is a proposal: no website copy has been changed.

## Overall feedback

The site has a coherent robotics/deep-learning focus and substantial project evidence. No clear CV contradiction was found in the dates, grades, language levels or award details. The lab success counts and confidence intervals match the project documentation. The most useful improvements are more precise technical claims, clearer education status and less generic introductory prose. There are few obvious spelling errors; consistency and phrasing matter more.

## Recommended corrections

### 1. Remove the unsupported sample-efficiency claim

**Location:** `src/data/projects.ts:139` (lab, “The idea”).  
**Priority:** High. **Confidence:** High.

“Pure random sampling wastes most candidates” and “far fewer samples are needed” imply a measured comparison. The private lab README documents K = 500 and the prior/CEM mixture, but the reviewed evidence does not establish that reduction against a baseline.

**Proposed replacement:**
> The planner simulates candidate action sequences in parallel and favours those with lower cost. A conditional flow-matching model proposes promising sequences alongside Gaussian CEM samples, guiding the search toward useful manipulation actions.

**Evidence:** `private/repos/tum-lsy-isaac_mppi/README.md:68–73`. Retain a quantitative sample-efficiency claim only with a verified comparative experiment.

### 2. Qualify the ROS model-error statement

**Location:** `src/data/projects.ts:300`.  
**Priority:** High. **Confidence:** High.

“The problem is re-solved from the true pose every cycle, so model error does not accumulate” overstates what replanning guarantees. Prediction error can still occur within each horizon.

**Proposed replacement:**
> The controller replans from the latest simulator pose each cycle, limiting the effect of model error across successive plans. The cost penalises cross-track error, heading error, steering effort, steering rate and terminal error.

**Evidence:** ROS controller documentation under `private/repos/introduction-to-ros-2026/src/controller/`. This changes the explanation, not the reported controller parameters.

### 3. Clarify education entries that did not confer a degree

**Location:** `src/data/education.ts:25,32`.  
**Priority:** Medium. **Confidence:** High for ambiguity; owner confirmation needed for final wording.

“M.Sc. Mechanical Engineering (Erasmus)” and “M.Sc. Mechatronics” can be read as awarded degrees. The dates and transfer note agree with the CV, but the headings should distinguish exchange/enrolment from graduation.

**Proposals, subject to owner confirmation:**
- “Erasmus exchange — master's-level Mechanical Engineering coursework”
- “Master's studies in Mechatronics — transferred to TUM”

Keep the existing dates and institution names. **TODO(owner):** confirm the award/enrolment status before changing the headings.

### 4. Date the current academic snapshot

**Location:** `src/data/education.ts:20–21`.  
**Priority:** Medium. **Confidence:** High.

ECTS is explicitly dated April 2026; “Current GPA: 1.9” is not. Both match the CV snapshot, but “current” may now imply a newer value.

**Proposed replacement:** “GPA (April 2026): 1.9” if that date applies to both values.  
**TODO(owner):** confirm whether there is an updated ECTS/GPA snapshot. Do not invent an update.

### 5. Tighten the summary and use sentence case

**Location:** `src/data/profile.ts:11–14`.  
**Priority:** Medium. **Confidence:** High; editorial preference.

“Optimal/Adaptive Control” is compressed, and “I have a passion for challenges…” is generic. Capitalise proper names rather than ordinary research fields.

**Proposed intro:**
> I build learning-based methods for physical systems. My interests include deep learning and control theory, particularly optimal and adaptive control and reinforcement learning.

**Proposed second summary paragraph:**
> My practical experience includes deep learning, ROS 2 and sampling-based control for robotic manipulation.

The proposed paragraph is supported by the existing project and internship evidence. Preserve the accurate degree/institution information in the first summary paragraph.

### 6. Make the internship bullet easier to read

**Location:** `src/data/experience.ts:22`.  
**Priority:** Low. **Confidence:** High; editorial.

The trailing “simulated in IsaacLab” is awkward and can modify the object geometries rather than the work.

**Proposed replacement:**
> Developing sampling-based MPC with conditional flow-matching priors for grasp planning across different object geometries in Isaac Lab.

Present tense suits the ongoing internship. Keep the verified simulation result and hardware-transfer status.

### 7. Describe the ADLR representation as directional

**Location:** `src/data/projects.ts:395`, tag “Neural SDF”.  
**Priority:** Medium. **Confidence:** High for the distinction.

The described network predicts distance along an input ray, conditioned on direction and object identity. “Neural SDF” alone can suggest an ordinary signed distance to the nearest surface.

**Proposed tag:** “Directional distance field” or “Neural raycasting”.  
**Evidence:** `private/repos/tum-adlr-ws26-03/nn.py`, ray inputs/output and the page's own method description. No claim that the original project's SDF terminology is invalid; this is a clearer portfolio label.

### 8. Add squared units to thesis MSE

**Location:** `src/data/projects.ts:549–553`.  
**Priority:** Low. **Confidence:** High.

MAE values include units; MSE values do not.

**Proposed cells:** “59.56 kg²”, “15.53 cm²”, “30.61 years²”. R² remains dimensionless.  
**Evidence:** `private/repos/PN_V2/README.md`, “Current performance — 31/7/2024”; the table values correctly round the source.

### 9. Standardise terminology and formatting

**Locations:** `src/data/profile.ts`, `experience.ts`, `skills.ts`, `projects.ts`.  
**Priority:** Low. **Confidence:** High; editorial.

- Use “ROS 2” consistently instead of mixing it with “ROS2”.
- Use “Isaac Lab” in prose and tags instead of “IsaacLab”.
- Choose one English spelling convention: the site currently mixes “modeling/centered/favoring” with “optimisation/penalises/centres/coloured”. Either convention is fine.
- Use one percentage style: “93.84%” rather than mixing it with “93.84 %”.
- Use “16 November 2023” for the achievement date instead of “2023/11/16”, matching the thesis page.

### 10. Centralise the remaining interface copy

**Locations:** `src/components/MppiDiagram.tsx`, `VideoClip.tsx`, `src/pages/Home.tsx`, `Skills.tsx`, `ProjectDetail.tsx`.  
**Priority:** Low. **Confidence:** High.

Several visible labels, the diagram explanations, contact paragraph and accessibility labels are hardcoded in components despite the content-in-`src/data/` rule. Move these to typed data exports in a later maintenance pass.

In particular, replace “the cheapest” in the diagram's accessible description with “the lowest-cost”, so the technical meaning is explicit. Preserve the owner-reviewed contact wording.

## Owner decisions and evidence gaps

These are questions, not confirmed errors:

- **ADLR semester:** “Winter Semester 2026” was explicitly chosen by the owner. The handoff records November 2025–February 2026; “Winter semester 2025/26” would make that interval clearer. Change only if desired.
- **Thesis chronology:** the page says 2023, while the reported performance is from the July 2024 rework. The owner already chose “Test-set results”. A short “Results from the July 2024 model revision” note would clarify provenance without changing the results. Do not relabel the numbers as the original 2023 thesis experiment.
- **Thesis split:** the private loader contains more than one splitting approach. Confirm which generated the reported results and whether people/recordings are separated between splits before adding a generalisation claim. The current page does not claim unseen-person performance.
- **ADLR experiment provenance:** the poster explicitly specifies dropout 0.1 and supports the published headline averages. The saved notebook uses dropout 0.0, and the script has a different hidden width. This is source-version drift, not proof the poster-based page is wrong. Keep the poster canonical; identify its exact run before mixing in further implementation details.
- **Demo labels:** the handoff records the owner's choice to omit “demonstration runs, not benchmark results” and extra oracle-perception labels. This review does not treat those choices as typos or silently reverse them.
- **Antra internship:** the more detailed SVD/PCA/matrix-factorisation bullet is supported by the cover-letter portion of the full CV artifact rather than page 1. No contradiction established.
- **CV drift:** update the separately exported CV manually if its lab results should match the site. Keep CV download disabled until the owner chooses to publish it.

## Additional small functional findings

These are outside the copy review, but visible in the source:

- `VideoClip.tsx`: the IntersectionObserver always calls play on re-entry, even after the visitor presses Pause. Track explicit user pause separately from visibility pauses so scrolling away and back respects that choice. Verified by source inspection; not browser-tested here.
- `Skills.tsx` and `Projects.tsx` use Section, which always renders h2; neither page provides an h1. Give each route a page-level h1 and preserve sensible subordinate heading levels.

## Verification and limits

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm test`: passed, 2 files / 6 tests.
- `npm run build`: passed.
- npm was initially absent from PATH; the successful checks used the installed Node directory.
- No private-repo scripts, notebooks, simulations or training were executed.
- No website implementation changes, commits or pushes were made.
- This was a local content/source review, not a live-site browser, screenshot, Lighthouse or full accessibility audit. ROS headline figures were independently checked against the project report's extracted results table: 206.9 s average, 205.7 s best, 752 m, 3.64 m/s average, 8.56 m/s top and 32.5 s at lights; the site's rounding is consistent.

Suggested order: resolve items 1–4 first, apply agreed copy edits, then address terminology and the small functional findings.

## Implementation follow-up (3 October 2026)

The owner authorised the remaining fixes after Claude's first implementation pass. The follow-up now:

- Uses American English consistently in site copy.
- Replaces the generic summary paragraph and expands optimal/adaptive control to optimal and adaptive control.
- Discloses that the thesis metrics come from the July 2024 model revision.
- Moves remaining interface labels, contact copy, navigation, video accessibility labels and diagram explanations to typed exports in src/data/ui.ts.
- Preserves Claude's manual-pause fix and adds a browser regression covering pause, scroll away/back, explicit Play and automatic visibility pause/resume.

Verification: lint, typecheck, 6 unit tests, production build and all 8 browser tests pass. Playback is simulated in the regression because Chromium may lack H.264 decoding; real visibility/scroll events are exercised. No new dependencies, commits or pushes.

The evidence/provenance questions above remain reference notes, not instructions to change approved project details without evidence.
