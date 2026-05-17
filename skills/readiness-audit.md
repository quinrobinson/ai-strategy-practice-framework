---
name: readiness-audit
framework: ASPF — AI Strategy Practice Framework
entry-point: Before, During
description: Audit a team's readiness to build, deploy, or scale an AI initiative across four dimensions — people, data, tooling, and process. Use this skill when a team needs to assess whether they are actually ready to execute an AI approach. Triggers include questions like "are we ready to build this?", "do we have what we need?", "why is our AI project stalling?", or before any significant AI investment is committed. Also triggers mid-project when a team hits a wall and needs to diagnose the gap.
ai_leverage: medium
agents: [AI Practice Lead, Change & Enablement Lead, ML/AI Engineer, AI Product Manager]
---

# Readiness Audit

Assess whether your team is actually ready to execute an AI initiative — before the investment is committed or the project stalls.

Readiness failures are the most expensive kind. A team that discovers mid-project that it lacks data infrastructure, AI literacy, or a clear process owner wastes everything invested to that point. This skill surfaces those gaps before they become failures.

## Goal

**Decision enabled:** Whether the team is ready to commit to this AI initiative — and if not, what must be resolved first.
**Output:** A Readiness Score (0–100) across four dimensions — People, Data, Tooling, Process — with a gap remediation plan for every critical gap and a clear proceed / pause / stop recommendation.
**What this unlocks:** Informed commitment. A team that proceeds with a readiness score in hand knows exactly what it's taking on. Critical gaps become conditions on the go decision — not surprises mid-project. The readiness audit also protects leadership: it turns "are we ready?" from a judgment call into a scored, documented answer.

## When to Use

- Before committing to an AI initiative (Before entry point)
- When an AI project is stalling and the team can't diagnose why (During entry point)
- Before scaling a pilot to production
- Before a team takes on AI work they haven't done before

## Readiness Audit Workflow

Audit across four dimensions. Each dimension scores 0–25. Total readiness score: 0–100.

---

### Dimension 1: People Readiness (0–25)

Evaluate the team's human capability to design, build, and sustain the AI system.

**AI literacy** (0–5)
- 0: Team has no AI literacy — no understanding of how AI works, what it can and can't do
- 3: Team has working AI literacy — can prompt, evaluate, and make basic decisions about AI
- 5: Team includes AI practitioners — can design systems, evaluate methods, interpret model behavior

**Role coverage** (0–5)
- 0: No one is responsible for the AI initiative
- 3: One person owns it, others contribute ad hoc
- 5: Clear ownership across strategy, build, and QA

**Change readiness** (0–5)
- 0: Team or users are actively resistant to AI adoption
- 3: Neutral — no resistance, but no active champions
- 5: Active champions exist; leadership is visibly supportive

**External dependency** (0–5)
- 0: Fully dependent on vendors or contractors with no internal knowledge transfer
- 3: Vendor-supported with internal team learning in parallel
- 5: Primarily internal capability; vendors supplement only

**Ethical competency** (0–5)
- 0: No one on the team considers ethics, bias, or fairness implications
- 3: Someone is aware of ethical concerns but no formal process
- 5: Ethical review is part of the process; bias evaluation is practiced

**People Readiness Score: __ / 25**

---

### Dimension 2: Data Readiness (0–25)

Evaluate whether the data needed to power the AI system exists and is accessible.

**Data availability** (0–5)
- 0: Required data does not exist or cannot be accessed
- 3: Data exists but requires significant preparation or negotiation
- 5: Relevant, accessible data is available and sufficient in volume

**Data quality** (0–5)
- 0: Data is inconsistent, incomplete, or unreliable
- 3: Data has known quality issues that can be addressed with effort
- 5: Data is clean, well-structured, and documented

**Data governance** (0–5)
- 0: No data governance — unclear ownership, privacy, or access controls
- 3: Basic governance exists but AI-specific policies are absent
- 5: Clear data governance with AI-specific policies for consent, privacy, and access

**Labeling / annotation** (0–5) *(for supervised learning only — score 5 if not applicable)*
- 0: No labeled data exists; no process to create it
- 3: Some labeled data exists; labeling process is manual and slow
- 5: Sufficient labeled data exists or efficient labeling process is in place

**Data freshness** (0–5)
- 0: Data is static or stale — not updated frequently enough to reflect current conditions
- 3: Data is updated periodically; some lag between real-world and data state
- 5: Data is near-real-time or refreshes at the cadence the AI system requires

**Data Readiness Score: __ / 25**

---

### Dimension 3: Tooling Readiness (0–25)

Evaluate whether the technical infrastructure exists to build, deploy, and operate the AI system.

**Infrastructure** (0–5)
- 0: No AI-ready infrastructure — compute, storage, or APIs unavailable
- 3: Basic infrastructure exists; AI-specific components need to be built or procured
- 5: AI-ready infrastructure is in place and operational

**Development environment** (0–5)
- 0: No development or experimentation environment for AI work
- 3: Environment exists but is poorly configured or shared inefficiently
- 5: Well-configured, isolated, and version-controlled AI development environment

**Model / API access** (0–5)
- 0: No access to models or APIs needed for the approach
- 3: Access is available but not yet configured or approved
- 5: Models or APIs are accessible, approved, and integrated

**Monitoring & observability** (0–5)
- 0: No way to monitor AI system behavior in production
- 3: Basic logging exists; AI-specific monitoring not in place
- 5: Monitoring covers model performance, drift, and error rates with alerts

**Security & compliance tooling** (0–5)
- 0: No security controls for AI systems; compliance requirements unaddressed
- 3: Standard security in place; AI-specific controls in progress
- 5: AI-specific security controls and compliance checks are operational

**Tooling Readiness Score: __ / 25**

---

### Dimension 4: Process Readiness (0–25)

Evaluate whether the team has the workflows, governance, and decision-making structures to operate AI responsibly.

**Experimentation process** (0–5)
- 0: No process for running AI experiments — no hypothesis, no measurement, no review
- 3: Ad hoc experimentation — some structure but inconsistent
- 5: Structured experimentation process with hypothesis, baseline, and review cadence

**Decision rights** (0–5)
- 0: Unclear who makes decisions about the AI system — build, ship, rollback
- 3: Decisions are made informally by whoever is available
- 5: Clear decision rights — who approves, who escalates, who can halt

**Incident response** (0–5)
- 0: No plan for when the AI system produces harmful or incorrect outputs
- 3: Informal understanding of what to do but no documented process
- 5: Documented incident response process specific to AI failure modes

**Feedback loops** (0–5)
- 0: No mechanism for users or operators to flag AI errors or provide feedback
- 3: Ad hoc feedback channels exist but aren't systematically reviewed
- 5: Structured feedback loops feeding back into model improvement or process change

**Governance** (0–5)
- 0: No governance — AI decisions are made without oversight or accountability
- 3: Governance exists informally or for high-stakes decisions only
- 5: AI governance is embedded in how the team works — reviews, sign-offs, documentation

**Process Readiness Score: __ / 25**

---

### Readiness Summary

```
# Readiness Audit Summary
## Project: [PROJECT NAME]
## Date: [DATE]
## Auditor: [Role]

### Scores
People Readiness:   __ / 25
Data Readiness:     __ / 25
Tooling Readiness:  __ / 25
Process Readiness:  __ / 25
Total:              __ / 100

### Readiness Classification
85–100: Ready — proceed with confidence
65–84:  Mostly ready — address gaps before scaling
45–64:  Partially ready — significant gaps; address before full commitment
25–44:  Not ready — substantial investment needed before proceeding
0–24:   Not ready — foundational capability is missing

### Critical Gaps (scores of 0–1 on any individual criterion)
[List each critical gap with its dimension and specific criterion]

### Gap Remediation Plan
| Gap | Owner | Timeline | Blocker? |
|-----|-------|----------|----------|
| [Gap] | [Role] | [Timeline] | Yes/No |

### Recommendation
[ ] Proceed — readiness is sufficient
[ ] Proceed with conditions: [list gaps that must be closed]
[ ] Pause — address critical gaps before proceeding
[ ] Stop — foundational readiness is too low to justify investment
```

## Quality Checklist

- [ ] All four dimensions scored
- [ ] Every criterion scored with honest rationale
- [ ] Critical gaps (0–1 scores) explicitly named
- [ ] Remediation plan covers every critical and high gap
- [ ] Recommendation is unambiguous

---

## Handoff Block

```
## Handoff: Readiness Audit → [phase-routing.md or APDF Bridge]
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Readiness Score: __ / 100
### Classification: [Ready / Mostly ready / Partially ready / Not ready]

### Critical Gaps
[List with owners and timelines]

### Conditions on Proceeding
[What must be resolved before the team moves to delivery]

### Recommendation
[Proceed / Proceed with conditions / Pause / Stop]

### Active Predictor Flags
[Failure patterns surfaced during this session]

---
*Paste this block as your first message when opening phase-routing.md or initiating /handoff to APDF.*
```
