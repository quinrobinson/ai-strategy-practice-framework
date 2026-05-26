# /project:discover

Start a discovery session — the prerequisite to all six pillar engagements.

## What this command does

Runs the three-act discovery workflow from discovery.md:

**Act 1 — Pre-meeting preparation**
Claude asks 10 structured questions about the client and engagement. Based on your answers, it produces:
- A Pillar Hypothesis Map — what Claude expects to find in each of the six pillars
- A Facilitation Guide — the question set you carry into the client workshop

**Act 2 — Workshop facilitation**
You run the client session. Claude does not attend. Use the facilitation guide.
Capture what you hear in whatever format works — notes, recording, whiteboard photos.

**Act 3 — Post-meeting synthesis**
Feed your notes back into Claude. It produces the Master Client Brief:
- Six-pillar current state assessment
- Gap analysis with blocking relationships
- Prioritized roadmap (Phase 1 / 2 / 3)
- Client communication points

## File outputs

Master brief: `.aspf/clients/[client-name]/brief.md`
Per-engagement briefs: `.aspf/clients/[client-name]/engagements/[id].md`

## After discovery

Run `/project:deck discovery` to generate the client-ready PowerPoint.
Then open any pillar page — the brief loads as opening context for that engagement.

## When to run

- Start of every new client engagement
- Before opening any pillar page
- When returning to a client after a significant gap
- When expanding scope to new pillars
