# /project:update-readme

Keep README.md in sync with the current state of the framework.

## When to run
- After adding a new skill file to `.claude/skills/` or `skills/`
- After adding or removing a slash command in `.claude/commands/`
- After updating agent roster or routing logic in CLAUDE.md
- After any structural change to the repo layout

## What this command does

1. Read `CLAUDE.md` — extract current agent roster, skill routing, commands, and hooks
2. Read all skill files in `.claude/skills/` — extract name, entry-point, and goal (first line of ## Goal section)
3. Read `.claude/commands/` — extract command names and one-line descriptions
4. Read current `README.md`
5. Diff current README against the live framework state
6. Produce a proposed update — show only what changed, not the full file
7. Ask for confirmation before writing

## Output format

Present changes as a diff summary:

```
## README Update Proposal

### Sections with changes:
- Skill Files table: [what changed]
- Commands table: [what changed]
- Repo Structure: [what changed]

### No changes detected in:
- Quick Start
- How It Works
- APDF Bridge

Proceed with update? (yes / no / show full diff)
```

## Rules
- Never rewrite sections that haven't changed
- Never change the tone or structure of prose sections — only update tables and lists
- Always confirm before writing to README.md
- After writing, stage the file but do not commit — let the user review and commit manually
