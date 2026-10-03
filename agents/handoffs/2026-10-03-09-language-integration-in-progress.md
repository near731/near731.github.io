# Handoff: Language integration in progress

- **Date:** 2026-10-03
- **From:** codex
- **Next agent:** Luna lab_ros
- **Next agent's role:** translator
- **Branch / commit:** main / 55b05f5, uncommitted

## Goal of this task
Add EN/DE switching with English default and natural technical German, using multiple Luna agents and cross-checks.

## Done
- Root prepared provider, language hook, locale context, switch, recursive text localization and component integration.
- Root added general German copy from Luna's read-only draft, with terminology polish.
- Root updated AGENTS.md language decision to match owner's explicit request.

## Not done / in progress
- Project translation files not yet present. Imports deliberately remain unresolved until translator turns complete.
- Locale tests and final verification pending integration.

## Files touched
- AGENTS.md, src/App.tsx, main.tsx, data/ui.ts, data/locales/general.de.ts
- src/lib/content.ts, localize.ts, locale-context.ts
- src/hooks/useLocale.ts, components/LocaleProvider.tsx, LanguageSwitcher.tsx
- Existing pages/components now consume useContent.

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | Not run: integration incomplete |
| npm run typecheck | Not run: project translation imports pending |
| npm test | Not run: integration incomplete |
| npm run build | Not run: integration incomplete |
| Manual check | Not run |

## Decisions made
- English default, saved explicit choice, same route and assets across languages.
- Keep standard technical terms and official course names; show known German course originals once.
- No dependencies added. Only one editor at a time.

## Open questions for the owner
- None.

## TODO(owner)
- None blocking.

## Do not redo / do not undo
- Root files are intentional in-progress implementation. Do not alter them during translator turn.
- Private repos untouched; no commit/push.

## Suggested next steps
1. lab_ros saves ONLY src/data/locales/lab-ros.de.ts and a translator handoff, then releases editing.
2. adlr_thesis saves its prepared catalog on the next editor turn.
3. Root integrates, tests, cross-checks and completes final handoff.
