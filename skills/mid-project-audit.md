---
name: mid-project-audit
framework: ASPF — AI Strategy Practice Framework
entry-point: During
description: Recalibrate an AI initiative mid-project — detecting drift, surfacing emerging risks, and recommending course corrections before they become failures. Use this skill when a team is in the middle of an AI project and wants to check whether they're still on track. Triggers include "we're not sure if this is working", "something feels off with our AI approach", "we've hit a wall", "our pilot results are unexpected", or any mid-project moment where the team needs an honest assessment of where they stand.
ai_leverage: high
agents: [AI Practice Lead, AI Product Manager, Ethics & Risk Advisor, ML/AI Engineer]
---

# Mid-Project Audit

An honest mid-project check — detect drift, flag emerging risks, and course-correct before failure.

Most AI projects that fail were already off-track weeks before the team noticed. The mid-project audit is a structured intervention that catches the signal early — while there's still time to respond.

## Goal

**Decision enabled:** Continue, pivot, or stop — with a specific rationale and a named set of actions for whichever path is chosen.
**Output:** A Mid-Project Audit Report — a drift assessment across five categories, a metric trajectory snapshot, an emerging risk profile, and an explicit course correction recommendation with owned actions.
**What this unlocks:** The ability to course-correct before failure is locked in. Most AI project failures are not sudden — they're visible in hindsight as a series of small drifts that compounded. This audit makes those drifts visible while they're still small. A Continue recommendation gives the team confidence grounded in evidence. A Pivot or Stop recommendation saves everything that hasn't been spent yet.

## When to Use

- 30–60 days into an AI initiative before pilot launch
- Immediately after unexpected pilot results
- When the team feels stuck but can't name why
- Before a leadership or stakeholder review of the initiative
- When a key team member has left or the team composition has changed significantly
- When the original problem, method, or context has shifted

## Audit Workflow

### Step 1: Restate Current State

Before evaluating, reconstruct where the project is now — without reference to where it was supposed to be.

```
### Current State Snapshot
- What is the AI system doing right now? [Current function]
- What stage is the project at? [Planning / Building / Pilot / Scaling]
- What has been shipped or deployed so far? [Deliverables to date]
- What does the team believe is working? [Team's own assessment]
- What does the team believe is not working? [Team's own assessment]
```

### Step 2: Compare to Original Intention

Pull the original ASPF outputs if available. If not, reconstruct from team memory.

```
### Intention vs. Reality Check

Problem Statement
- Original: [From problem-qualification.md or team memory]
- Current: [What problem the team is actually solving now]
- Drift: [None / Minor / Significant / Complete pivot]

AI Method
- Original: [From method-selection.md or team memory]
- Current: [What approach is actually being used]
- Drift: [None / Minor / Significant / Complete change]

Primary Metric
- Original target: [From outcome-definition.md or team memory]
- Current trajectory: [Where the metric is heading based on current data]
- On track: [Yes / Behind / Significantly behind / Cannot determine]
```

### Step 3: Run Drift Detection

Evaluate five drift categories — each can signal that the project is no longer aligned with its original strategic intent.

**Problem drift** — the problem being solved has changed without explicit acknowledgment
- Signal: Team describes the project differently than the original problem statement
- Risk: The AI system solves a different problem than the one that was qualified

**Metric drift** — the success metrics have changed without revalidation
- Signal: New metrics have been added that are easier to move; original metric is rarely discussed
- Risk: The project reports success against metrics that don't reflect the original outcome

**Method drift** — the AI approach has changed without reassessing fit, risk, or data requirements
- Signal: "We ended up using [different method] because it was easier / faster / available"
- Risk: The new method may not fit the problem; the original risk analysis is invalid

**Scope drift** — the project has expanded or contracted from the original scope
- Signal: Features, users, or use cases not in the original brief are now being addressed
- Risk: Expanded scope without expanded readiness assessment; contracted scope may not deliver the outcome

**Ownership drift** — the people responsible for the initiative have changed
- Signal: The original problem owner, method decision-maker, or AI lead is no longer involved
- Risk: Strategic context is lost; decisions are made without full understanding of original intent

### Step 4: Assess Emerging Risks

Run the Predictor against current conditions — not original conditions. The failure modes that matter now may be different from the ones that were flagged at project start.

Focus particularly on:
- **FM-05 (Data Readiness Overestimation):** Has actual data access matched what was assumed?
- **FM-06 (Evaluation Gap):** Can the team measure whether outputs are correct?
- **FM-07 (Accountability Gap):** Is there a clear owner for production incidents?
- **FM-08 (Pilot Trap):** Are pilot conditions representative of production conditions?
- **FM-09 (Change Resistance):** Is adoption tracking as expected?

### Step 5: Produce the Mid-Project Audit Report

```
# Mid-Project Audit Report
## Project: [PROJECT NAME]
## Audit date: [DATE]
## Project stage: [Planning / Building / Pilot / Scaling]
## Auditor: [Role]

---

## Overall Assessment: [On track / Caution / Off track / Critical]

---

## Drift Summary
| Category | Status | Detail |
|----------|--------|--------|
| Problem drift | [None/Minor/Significant/Pivoted] | [Note] |
| Metric drift | [None/Minor/Significant/Pivoted] | [Note] |
| Method drift | [None/Minor/Significant/Pivoted] | [Note] |
| Scope drift | [None/Minor/Significant/Pivoted] | [Note] |
| Ownership drift | [None/Minor/Significant/Pivoted] | [Note] |

---

## Metric Status
- Primary metric: [Current value vs. target — on track / behind / significantly behind]
- Guardrail status: [All holding / [N] at risk / [N] breached]

---

## Emerging Risks
### Critical (address immediately)
[FM-XX or new risk — description — recommended action]

### High (address this sprint/cycle)
[FM-XX or new risk — description — recommended action]

---

## Recommended Actions

### Immediate (this week)
1. [Action — owner — deadline]

### Short-term (this month)
1. [Action — owner — deadline]

### Strategic (requires leadership decision)
1. [Decision needed — by whom — by when]

---

## Course Correction Options

If the audit identifies significant drift or emerging critical risks, three options:

**Continue with adjustments** — the core approach is sound; specific elements need correction
Appropriate when: drift is minor, risks are manageable, metric trajectory is recoverable

**Pivot** — change the problem, method, or scope deliberately and with full documentation
Appropriate when: significant drift has already occurred; better to acknowledge and reframe than continue misaligned

**Stop** — the initiative should not continue as structured
Appropriate when: critical risks cannot be mitigated, readiness gaps are unbridgeable, or the outcome is no longer achievable

Recommended option: [Continue / Pivot / Stop]
Rationale: [Why]
```

## Quality Checklist

- [ ] Current state described without reference to what was intended (Step 1 done independently)
- [ ] All five drift categories assessed
- [ ] Predictor run against current conditions, not original conditions
- [ ] Emerging risks include both FM library matches and novel risks
- [ ] Course correction recommendation is explicit — not "it depends"
- [ ] Immediate actions are specific, owned, and time-bound

---

## Handoff Block (if continuing)

```
## Mid-Project Audit Handoff
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Overall Assessment: [On track / Caution / Off track]
### Decision: [Continue / Pivot / Stop]

### Adjustments Made
[What changed as a result of this audit]

### Updated Risk Watch List
[Risks to monitor going forward — for the Predictor]

### Next Audit Checkpoint
[When to run the next mid-project audit]

---
*Carry this block into the next ASPF session as opening context.*
```
