@AGENTS.md

# Claude Code specifics

Shared project rules, decisions and layout are in AGENTS.md (imported above). Only Claude-specific guidance lives here.

## Workflow

- Start of session: read the newest file in `agents/handoffs/` and run `git status`.
- End of session or when handing to Codex: write a handoff (`agents/templates/handoff.md`).
- Non-trivial UI work: run the dev server and check the result in a browser (both themes, mobile width, reduced motion) before claiming it works. If you couldn't run it, say so.
- Ask clarifying questions with the clickable question tool when a design decision is the owner's to make; otherwise pick the sensible default and note it in the handoff.

## Subagents (Claude Code multi-agent)

- Use parallel subagents **only for independent tasks**: research, separate pages/sections in different files, test writing vs. implementation in disjoint files.
- Never let two agents edit the same file concurrently. Give each subagent an explicit file ownership list and a precise brief (they start cold).
- Prefer `Explore` for read-only codebase searches and `Plan` for architecture proposals before large changes.
- Subagents do not commit. The main agent integrates, runs the quality gate, and writes the handoff.
- Don't spawn agents for small tasks you can do inline.

## Working with Codex

- Same working tree, take turns. Check the newest handoff's `Next agent` field; if it names Codex, don't edit.
- Roles are per task (e.g. Claude builds a section, Codex reviews/adds tests, or the reverse). State the role in the handoff.
- Don't rewrite Codex's work wholesale; list disagreements in the next handoff.
