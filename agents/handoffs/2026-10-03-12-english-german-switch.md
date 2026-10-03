# Handoff: English and German language switch

- **Date:** 2026-10-03
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main / 55b05f5, uncommitted

## Goal of this task
Add an English/German option with English default, natural German copy retaining familiar technical terms, and multiple Luna cross-checks. Remove the Projects introduction as subsequently requested.

## Done
- Added accessible EN/DE controls in desktop and mobile headers. Native language names label buttons; selected language is exposed with aria-pressed.
- English defaults independently of browser language. Explicit choice survives navigation/reload through localStorage; blocked storage and unsupported saved values degrade safely.
- Added LocaleProvider, useLocale/useContent, typed content assembly and exact-source-string German catalogs, without dependencies.
- Translated homepage, skills, coursework headings, projects, tables, banners, image descriptions, video controls, planner diagram and shared interface text.
- Updated html lang and page title/description metadata with the selected language.
- Kept routes, IDs, assets, URLs and result magnitudes stable. Status discriminants stay English internally and use translated display labels.
- Preserved established technical names: Deep Learning, Reinforcement Learning, Flow Matching, MPC, MPPI, CEM, ROS 2, Isaac Lab, CRISP, FoundationPose and official English course titles. Known German course originals appear once in German mode.
- German decimal notation and years/Jahre unit wording are localised without changing metric values.
- Three Luna agents drafted/reviewed general, lab/ROS and ADLR/thesis copy. Peer checks corrected grammar, retained explicit Ground Truth wording, removed the additional Wilson qualifier for parity with English, and refined terminology.
- Coverage found a missing Recognition translation and duplicate catalog keys; fixed before final verification.
- Mobile layout checks found thesis heading overflow and overly tall image overlays. Long detail headings wrap/hyphenate; full hero banners stack below images on narrow screens. Gradient now uses backgroundImage so the solid mobile background retains contrast. Endpoint labels remain anchored to media.
- Removed the requested Projects introduction from the page and both content catalogs.
- Updated AGENTS.md language decision to reflect owner authorisation.

## Not done / in progress
- Existing report/plot raster images retain their original embedded labels; surrounding captions and alt text translate.
- No fresh Lighthouse audit. Video playback regression remains codec-independent, as before.

## Files touched
- AGENTS.md, src/App.tsx, src/main.tsx, src/data/ui.ts
- src/data/locales/general.de.ts, lab-ros.de.ts, adlr-thesis.de.ts, projects.de.ts
- src/lib/content.ts, localize.ts, locale-context.ts; src/hooks/useLocale.ts
- src/components/LanguageSwitcher.tsx, LocaleProvider.tsx
- Header, Footer, HeroBanner, MppiDiagram, ProjectImage, VideoClip, Hero
- Home, Skills, Projects, ProjectDetail
- tests/unit/localization.test.ts, tests/e2e/language.spec.ts
- Translator/integration handoffs 09–11 and this final handoff

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | Pass |
| npm run typecheck | Pass |
| npm test | Pass: 3 files, 10 tests |
| npm run build | Pass |
| npm run test:e2e | Pass: 14 tests, runner exited 0 |
| git diff --check | Pass; line-ending warnings only |
| Manual check (themes / mobile / reduced motion) | German desktop/mobile project screenshots inspected; existing tests cover theme and reduced motion |

Final gates were run after removing the Projects introduction. Earlier duplicate-key/coverage failures and mobile-overflow failure were corrected and rerun successfully.

Browser checks cover default English with German browser preference, German homepage/skills/all four project routes, persistence/reload, returning to English on the same route, mobile control/menu, blocked storage, unsupported language fallback, and no horizontal overflow at 375/1280px. Screenshots under ignored test-results/.

## Decisions made
- No i18n dependency needed for two languages. English site data remains canonical; coverage tests require new prose to receive translation or an explicit retained-term exception.
- Root and translators took turns editing; cross-check agents were read-only.
- No private-repo code executed or copied.

## Open questions for the owner
- None blocking.

## TODO(owner)
- Optional personal review of the German voice and terminology.

## Do not redo / do not undo
- Keep English default and preserve native language labels, stable route keys, project metrics and approved private-content boundaries.
- CV download remains disabled. No dependencies added, commits or pushes made.

## Suggested next steps
1. Owner reviews EN/DE in the local preview.
2. Commit only if requested; never push under current project rules.
