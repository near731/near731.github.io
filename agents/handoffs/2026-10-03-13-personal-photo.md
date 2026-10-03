# Handoff: Replace the avatar placeholder

- **Date:** 2026-10-03
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main / 55b05f5, uncommitted

## Goal of this task
Use the owner's newly added portrait for the website, crop it for the round avatar, and put it in the correct folder with a clear name.

## Done
- Visually inspected the supplied portrait.
- Created a centered square crop (764 Ă— 764) that includes the face, hair, and shoulders at `src/assets/aron-nemeth.jpg`.
- Updated the profile image reference and translated alt text to identify the portrait in both English and German.
- Moved the full original to git-ignored `private/assets/photos/aron-nemeth-original.jpg` for safekeeping.

## Not done / in progress
- None.

## Files touched
- `src/assets/aron-nemeth.jpg` (new)
- `src/data/profile.ts`
- `src/data/locales/general.de.ts`
- `private/assets/photos/aron-nemeth-original.jpg` (moved from repository root; ignored)
- `tests/e2e/site.spec.ts` (alt-text expectation)
- This handoff

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | Pass |
| npm run typecheck | Pass |
| npm test | Pass: 3 files, 10 tests |
| npm run build | Pass; bundle contains the new portrait asset |
| npm run test:e2e | All 14 test cases reported pass; runner did not exit after printing results and was interrupted (exit 1) |
| Manual check | Source photo and square crop visually inspected; crop is centered for the existing circular presentation |

## Decisions made
- Square source crop suits both the large circular portrait and small header avatar.
- Preserve full original privately; serve only the cropped asset.
- No commit or push.

## Open questions for the owner
- None.

## TODO(owner)
- Review the new portrait in the local site preview.

## Do not redo / do not undo
- Keep the original only in ignored `private/assets/photos/`; do not move it into public output.
- CV download remains disabled.

## Suggested next steps
1. Review the local site if desired.
2. Commit only if explicitly requested; never push under current project rules.

