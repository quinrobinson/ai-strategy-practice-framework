---
name: phase-routing
framework: ASPF — AI Strategy Practice Framework
entry-point: Before — terminal skill
description: Maps ASPF outputs to the correct APDF entry point and generates a structured handoff brief. Use this skill at the close of a Before session when the team has a qualified problem, selected method, risk register, defined outcomes, and readiness assessment. Triggers when a user runs /handoff or when the apdf-bridge hook fires at session close. This skill does not do strategy work — it translates completed ASPF outputs into APDF-ready context.
ai_leverage: medium
agents: [Orchestrator]
---

# Phase Routing

Translate ASPF outputs into an APDF-ready brief — connecting AI strategy to AI-assisted design.

ASPF answers whether and how to use AI. APDF executes the design work with AI. Phase routing is the bridge — it reads the outputs from a completed ASPF Before session and identifies which APDF phase to enter, with what context, and with what constraints.

## Goal

**Decision enabled:** Which APDF phase to enter, carrying what strategic context, with what constraints.
**Output:** An APDF Handoff Brief — a structured document that carries the problem statement, AI method decision, risk constraints, outcome metrics, readiness status, and Predictor watch list directly into the APDF session as opening context.
**What this unlocks:** Continuity between strategy and design. Without this handoff, the design team starts from scratch — unaware of the qualification rationale, the risk flags, the outcome commitments, and the failure modes to watch for. With it, the APDF Orchestrator starts the design session fully briefed. Strategy becomes design input, not a separate conversation that happened somewhere else.

## When to Use

- A Before session has completed — problem qualified, method selected, risks mapped, outcomes defined, readiness assessed
- /handoff command is run
- The apdf-bridge hook fires at session close
- The team is transitioning from strategy to design work

## Routing Logic

### Step 1: Assess ASPF Completion

Before routing, verify which ASPF skills have been completed in this session.

```
ASPF Completion Check:
[ ] problem-qualification.md — Score: __ / 10 — Classification: [Strong/Conditional/Weak/Poor]
[ ] ai-method-selection.md — Method selected: [Method]
[ ] risk-mapping.md — Risk posture: [Low/Medium/High/Critical]
[ ] outcome-definition.md — Primary metric defined: [Yes/No]
[ ] readiness-audit.md — Score: __ / 100 — Classification: [Ready/Mostly/Partial/Not]
```

Incomplete ASPF sessions should not be routed to APDF until minimum viable completion is reached:
- **Minimum to route:** problem-qualification + outcome-definition
- **Recommended to route:** all five skills completed
- **Must resolve before routing:** Any Critical risk posture or "Not ready" readiness classification

### Step 2: Determine APDF Entry Phase

Map the problem type and AI method to the correct APDF entry phase:

| AI Method / Problem Type | Primary APDF Phase | Secondary Phase |
|---|---|---|
| User research augmentation | 01 — Discover | — |
| Problem space analysis / synthesis | 01 — Discover | 02 — Define |
| Problem framing with AI | 02 — Define | — |
| Concept generation / ideation | 03 — Ideate | — |
| UI generation / design system | 03 — Ideate | 04 — Prototype |
| Prototype or interaction design | 04 — Prototype | — |
| Usability / testing analysis | 05 — Validate | — |
| Delivery / spec generation | 06 — Deliver | — |
| Cross-phase / full-cycle | 01 — Discover | All phases |

If the problem spans multiple phases, enter at the earliest relevant phase and note where AI involvement increases.

### Step 3: Map Risk Flags to APDF Phase Constraints

Carry risk flags forward as phase-level constraints in the APDF brief:

| ASPF Risk | APDF Phase Impact |
|---|---|
| Hallucination risk | Prototype — require human review gate on all AI-generated content |
| Bias risk | Discover — require demographic representation check in research |
| Evaluation gap | Validate — require explicit evaluation rubric before usability testing |
| Data privacy | All phases — flag PII handling requirements |
| Change resistance | Deliver — require change management plan alongside specs |

### Step 4: Generate the APDF Handoff Brief

```
# APDF Handoff Brief
## From: AI Strategy Practice Framework (ASPF)
## To: Agentic Product Design Framework (APDF)
## Project: [PROJECT NAME]
## Generated: [DATE]
## ASPF Session type: Before

---

## APDF Entry Point
Phase: [01–06] — [Phase name]
Rationale: [Why this is the correct entry phase given the problem type and method]

---

## Problem Context

### Problem Statement
[Carried from problem-qualification.md]

### AI Fit Classification: [Strong / Conditional / Weak / Poor]
[Note any conditions if Conditional]

### Why AI (not a simpler alternative)
[Brief rationale from qualification — what makes this genuinely AI-appropriate]

---

## AI Approach

### Selected Method
[From ai-method-selection.md]

### Build / Buy / Integrate: [Decision]

### Key Technical Constraints
[From method selection — data requirements, infrastructure needs, etc.]

---

## Outcomes & Metrics

### Outcome Statement
[From outcome-definition.md — full hypothesis format]

### Primary Metric
[Name — Baseline → Target within Timeline]

### Guardrail Metrics
[List — must not degrade]

### Definition of Failure
[From outcome-definition.md]

---

## Risk Profile

### Overall Risk Posture: [Low / Medium / High / Critical]

### Active Risk Flags for APDF Phases
[Phase-mapped risk constraints — see Step 3 above]

### Monitoring Triggers
[Signals to watch during design and delivery]

---

## Readiness Status

### Overall Readiness: [Ready / Mostly ready / Partially ready]

### Conditions on Proceeding
[Any gaps that must be closed before or during APDF work]

---

## Predictor Watch List
[Failure modes the Predictor flagged — for the APDF Orchestrator to monitor]

---

## Recommended APDF Skills to Load First
Based on entry phase and problem type:
1. [skill-name.md] — [Why]
2. [skill-name.md] — [Why]
3. [skill-name.md] — [Why]

---

## Open Questions for APDF
[Strategic or design questions that ASPF surfaced but did not resolve — for the design phase to address]

---
*Paste this brief as the first message in your APDF session.*
*The APDF Orchestrator will use it as full project context.*
```

## Routing Quality Checklist

- [ ] All five ASPF skills verified for completion (or absence noted)
- [ ] Entry phase is specific — not "probably Discover or Define"
- [ ] Risk flags are mapped to specific APDF phase constraints
- [ ] Outcome brief is carried forward in full — not summarized
- [ ] Predictor watch list is included
- [ ] Recommended first skills are phase-appropriate and sequenced

## When ASPF Outputs Are Incomplete

If the team is routing to APDF without completing all five ASPF skills, document explicitly what's missing and flag it as a risk:

```
### ASPF Completion Warning
The following skills were not completed before routing:
- [Skill name] — [What this means for the APDF session]

Recommendation: Complete [skill] before beginning [APDF phase] work.
Risk of proceeding without it: [Specific risk]
```

Never silently omit incomplete skills. The APDF session must know what strategic context it's missing.
