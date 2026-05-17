# AI Strategy Practice Framework (ASPF)

A Claude-powered decision framework for product research, design, and delivery teams navigating AI strategy decisions — before, during, and after every AI initiative.

**Live site:** [quinrobinson.github.io/ai-strategy-practice-framework](https://quinrobinson.github.io/ai-strategy-practice-framework)
**Companion to:** [Agentic Product Design Framework (APDF)](https://github.com/quinrobinson/Agentic-Product-Design-Framework) — ASPF is upstream. Strategy first, then design.

---

## What This Is

Most AI initiatives fail for three reasons: teams start with tools instead of problems, they can't connect AI to business outcomes, and pilots never scale. ASPF fixes the sequence.

ASPF is the methodology — a decision framework with a defined structure, skill files, failure mode library, and three entry points. Claude runs it. You describe your situation. Claude runs a decision tree that diagnoses where you are, activates the right role agents, routes you through the right skills, and predicts failure modes before you encounter them.

---

## Three Entry Points

| Entry Point | Question | When to use |
|---|---|---|
| **Before** | Should we use AI here, and how? | Starting a new AI initiative |
| **During** | Are we using AI in the right ways? | Mid-project recalibration |
| **After** | Did our AI approach actually work? | Post-project retrospective |

The Predictor runs alongside every session — pattern-matching your inputs against a library of documented AI strategy failure modes and surfacing risks before you hit them.

---

## Quick Start

### Claude Chat (no setup required)

1. Upload the relevant skill file from `/skills/` to a new Claude conversation
2. Describe your situation — Claude will detect your entry point and begin the intake
3. Follow the decision tree through the relevant skills in sequence

**Not sure where to start?** Paste this into Claude:

```
You are running the AI Strategy Practice Framework (ASPF) — a decision framework
for product teams making AI strategy decisions.

You have three entry points:
- Before: qualifying a new AI initiative
- During: recalibrating an initiative in progress
- After: evaluating a completed initiative

The skill files are:
Before → problem-qualification.md, ai-method-selection.md, risk-mapping.md,
         outcome-definition.md, readiness-audit.md, phase-routing.md
During → mid-project-audit.md
After  → retrospective.md
Always → failure-mode-library.md (Predictor — runs in every session)

I need help with an AI initiative. Please detect my entry point from what
I describe, run the context snapshot, then route me through the right skills.
```

### Claude Code (full agentic setup)

```bash
# Clone the repo
git clone https://github.com/quinrobinson/ai-strategy-practice-framework.git
cd ai-strategy-practice-framework

# Launch Claude Code — CLAUDE.md loads automatically
claude
```

Then use slash commands:

| Command | What it does |
|---|---|
| `/project:diagnose` | Start a Before session — full decision tree from scratch |
| `/project:audit` | Start a During session — mid-project recalibration |
| `/project:retro` | Start an After session — retrospective evaluation |
| `/project:predict` | Run the Predictor standalone against current context |
| `/project:risk` | Surface the current risk profile |
| `/project:handoff` | Generate an APDF-ready brief from ASPF outputs |

---

## How It Works

### The Decision Tree

Claude runs four layers every session:

**Layer 0 — Entry detection**
Passive language signal detection from your opening message. If ambiguous, one clarifying question. Never more.

**Layer 1 — Context snapshot**
Three questions about domain, team composition, and prior decisions. The Predictor runs its first sweep immediately after — before the full intake begins.

**Layer 2 — Branch intake**
Framing questions together, then adaptive follow-ups based on what's parsed. Each branch has its own routing table that determines which agents activate and which skills load.

**Layer 3 — Synthesis**
Every session closes with a summary: agents activated, skills run, Predictor flags, open questions, and one explicit next action.

### Role Agents

Agents are activated by need — not pre-assigned. Multiple agents can be active in a single session. The Orchestrator synthesizes their perspectives into a single recommendation.

| Agent | Activated when |
|---|---|
| AI Strategy Lead | Setting direction, making the case to leadership |
| AI Product Manager | Build/buy/pilot decisions, roadmap prioritization |
| AI Researcher | Research method selection, AI in research practice |
| Ethics & Risk Advisor | Risk mapping, governance, bias, compliance |
| ML / AI Engineer | Feasibility, data readiness, model selection |
| Change & Enablement Lead | Adoption, team readiness, resistance management |
| AI Practice Lead | Framework questions, capability building |
| Predictor | Always active — pattern-matches against failure mode library |

### The Before Sequence

Skills in a Before session run sequentially. Each skill produces a handoff block that becomes the opening context of the next.

```
problem-qualification → ai-method-selection → risk-mapping
                                                    ↓
                        readiness-audit ← outcome-definition
                                ↓
                         phase-routing → APDF Handoff Brief
```

Minimum AI Fit Score of 3/10 required to advance from qualification. A "Poor fit" classification is a valid and valuable outcome — it saves the team from a project that was never going to work.

---

## Skill Files

### Before Entry Point

| Skill | File | Goal |
|---|---|---|
| Problem Qualification | `skills/problem-qualification.md` | Go / No-go on using AI for this problem |
| AI Method Selection | `skills/ai-method-selection.md` | Which method to use, build/buy/integrate |
| Risk Mapping | `skills/risk-mapping.md` | Defensible path forward with named mitigations |
| Outcome Definition | `skills/outcome-definition.md` | Measurable success criteria before any build |
| Readiness Audit | `skills/readiness-audit.md` | Scored readiness across people, data, tooling, process |
| Phase Routing | `skills/phase-routing.md` | APDF-ready handoff brief |

### During Entry Point

| Skill | File | Goal |
|---|---|---|
| Mid-Project Audit | `skills/mid-project-audit.md` | Continue, pivot, or stop — with owned actions |

### After Entry Point

| Skill | File | Goal |
|---|---|---|
| Retrospective | `skills/retrospective.md` | Lessons forward + failure mode library contributions |

### Always Active

| Skill | File | Role |
|---|---|---|
| Failure Mode Library | `skills/failure-mode-library.md` | Predictor's pattern library — 11 documented failure modes |

---

## Session State

ASPF persists session state in `.aspf/context.json`. Claude Code reads it at session open and writes to it at close — carrying decisions, agent activations, Predictor flags, and skill completion status across conversations.

```json
{
  "project": "",
  "entry_point": "before|during|after",
  "session_date": "",
  "agents_activated": [],
  "skills_completed": [],
  "predictor_flags": [],
  "decisions": [],
  "open_questions": [],
  "apdf_handoff_status": "pending|generated|delivered"
}
```

---

## The APDF Bridge

When a Before session closes with a validated AI approach, `/project:handoff` generates a structured brief carrying the problem statement, method decision, risk constraints, outcome metrics, and Predictor watch list directly into an APDF session as opening context.

**ASPF answers:** Should we use AI, which method, what are the risks, how will we measure success, are we ready.
**APDF executes:** The design work, with AI, across six phases.

---

## Repo Structure

```
ai-strategy-practice-framework/
├── README.md                          ← you are here
├── CLAUDE.md                          ← Orchestrator brief for Claude Code
├── CLAUDE.local.md                    ← personal overrides (gitignored)
├── .aspf/
│   └── context.json                   ← session state schema
├── .claude/
│   ├── commands/                      ← 6 slash commands
│   │   ├── diagnose.md
│   │   ├── audit.md
│   │   ├── retro.md
│   │   ├── predict.md
│   │   ├── risk.md
│   │   └── handoff.md
│   └── skills/                        ← 9 skills in Claude Code format
│       └── [skill-name]/SKILL.md
├── skills/                            ← 9 skills flat (Claude Chat format)
│   └── [skill-name].md
└── docs/
    ├── aspf-decision-tree-spec.md     ← full Orchestrator logic
    └── aspf-system-architecture.html ← system visualization
```

---

## Contributing & Evolving

The framework is designed to improve with use. Two feedback loops are built in:

**Retrospective → Failure Mode Library**
Every After session ends with failure mode library contributions — new patterns discovered during the project that future Predictor sweeps should catch.

**README sync**
Run `/project:update-readme` in Claude Code after any structural change to the framework — new skills, updated routing, new agents, or changed commands. The command reads the current CLAUDE.md and skill files, diffs against the current README, and proposes targeted updates.

---

*Built by [Quin Robinson](https://github.com/quinrobinson)*
*Part of the Agentic Product Design ecosystem*
