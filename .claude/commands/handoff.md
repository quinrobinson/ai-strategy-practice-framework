# /project:handoff

Generate an APDF-ready brief from completed ASPF outputs.

Verify ASPF completion: check `skills_completed` in `.aspf/context.json`. Load `.claude/skills/phase-routing/SKILL.md`. Generate the full APDF Handoff Brief. Update `apdf_handoff_status: "generated"` in context.json. Print the brief for the user to paste as the first message of their APDF session.
