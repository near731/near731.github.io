# agents/ — multi-agent coordination

Coordination space for Claude Code, Codex and any other coding agent working in this repo. Shared rules: `../AGENTS.md`.

## Turn-taking

1. One agent edits at a time (shared working tree).
2. On start: read the newest handoff in `handoffs/` + `git status`.
3. On finish/switch: copy `templates/handoff.md` to `handoffs/YYYY-MM-DD-NN-<slug>.md` (NN = counter for that day) and fill every field.
4. Handoffs are append-only history. Don't edit old ones; write a new one that supersedes.

## Handoff must contain

- Who wrote it, who is next, and the next agent's role for that task
- What was done, what is unfinished, files touched
- Commands run and **actual** results (pass/fail)
- Decisions made, open questions for the owner, `TODO(owner)` items
- Anything the next agent must not redo or undo

## Role ideas (assigned per task, not fixed)

- Builder: implements a section/page
- Reviewer: reads the diff, checks a11y/perf/theme/types, reports without rewriting
- Tester: writes Vitest/Playwright tests and screenshot checks
- Researcher: library/option comparisons, no code changes

## Files

- `handoffs/` — dated handoff notes (an example is included)
- `templates/handoff.md` — blank template
