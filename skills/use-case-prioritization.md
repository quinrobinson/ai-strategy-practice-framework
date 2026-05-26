---
name: use-case-prioritization
framework: ASPF — AI Strategy Practice Framework
pillar: P3 — AI Rapid Innovation Garage
entry-point: Before
description: Evaluate, score, and sequence AI use cases for a rapid innovation engagement — so the client builds the right thing first and sees working outcomes in weeks, not months. Use this skill when a client has identified multiple potential AI use cases and needs a structured way to decide which to pursue first. Triggers include "we have a long list of AI ideas", "we don't know where to start with AI", "we need to pick the right pilot", "leadership wants to see a quick win", or any engagement where use-case selection is the key decision before build begins.
ai_leverage: high
agents: [AI Product Manager, AI Strategy Lead, ML/AI Engineer]
---

# Use-Case Prioritization

Evaluate and sequence AI use cases so the client builds the right thing first — and sees working outcomes quickly.

The Innovation Garage exists to deliver working AI outcomes in weeks, not months. That velocity only happens when the first use case is the right one — high enough value to matter, scoped tightly enough to ship, and technically feasible with what exists today. This skill prevents the most common Innovation Garage failure: spending six weeks on a use case that was never going to work.

## Goal

**Decision enabled:** Which use case to build first — and in what sequence to build the rest.
**Output:** A Use-Case Priority Matrix — every identified use case scored across four dimensions, ranked, and sequenced into a delivery roadmap with rationale.
**What this unlocks:** A clear, defensible starting point for the Innovation Garage build. Gives the client a sequenced roadmap they can present to leadership. Prevents the pilot trap (FM-08) by ensuring the first use case is representative of production conditions, not just technically easy.

## When to Use

- At the start of any Innovation Garage engagement, before any build begins
- When a client has a backlog of AI ideas with no scoring framework
- When leadership is pushing for a "quick win" that may not actually be the best starting point
- When multiple departments are competing for the first AI initiative
- Before committing engineering resources to any specific use case

---

## Use-Case Identification

Before scoring, ensure the use case list is complete and specific. Each use case must be stated as a problem or opportunity, not a technology:

**Well-stated:** "Automate initial triage of incoming customer support tickets to reduce first-response time"
**Poorly stated:** "Use AI for customer support" — too vague to evaluate

For each use case, capture:
```
Use Case: [Name]
Problem statement: [What specific problem does this solve?]
Current state: [How is this handled today?]
Affected process: [Front / Middle / Back office]
Primary beneficiary: [Who benefits most — customer, employee, or business?]
Data availability: [What data would this require?]
Proposing stakeholder: [Who is championing this?]
```

---

## The Four-Dimension Scoring Framework

Score each use case across four dimensions. Each dimension is scored 1–5. Maximum total: 20.

---

### Dimension 1: Business Value (1–5)

What is the magnitude of impact if this use case succeeds?

| Score | Description |
|---|---|
| 5 | Directly impacts a top-3 business priority. Measurable revenue, cost, or risk outcome at significant scale. |
| 4 | Clear business impact. Addresses a meaningful operational pain point with quantifiable improvement. |
| 3 | Moderate impact. Valuable but not strategically critical. Affects a limited scope or secondary process. |
| 2 | Marginal impact. Nice to have. Hard to connect to business outcomes. |
| 1 | Unclear or speculative value. No consensus on why this matters. |

**Business Value Score: __ / 5**
Rationale: [Why this score]

---

### Dimension 2: Feasibility (1–5)

Can this actually be built with what exists today — data, infrastructure, talent, and time?

| Score | Description |
|---|---|
| 5 | Data exists, is accessible, and is sufficient. No new infrastructure required. Team has the skills. Can ship in 4–6 weeks. |
| 4 | Data mostly exists with minor gaps. Small infrastructure additions needed. 6–10 week build. |
| 3 | Data exists but needs preparation. Some infrastructure gaps. Requires external support. 10–16 week build. |
| 2 | Significant data or infrastructure gaps. Heavy engineering required. Risks exceeding Innovation Garage timeline. |
| 1 | Data doesn't exist or is inaccessible. Fundamental infrastructure missing. Not buildable in current engagement. |

**Feasibility Score: __ / 5**
Rationale: [Why this score — especially any data or infrastructure blockers]

---

### Dimension 3: Strategic Alignment (1–5)

How well does this use case align to the client's stated AI strategy and the AI-native enterprise north star?

| Score | Description |
|---|---|
| 5 | Directly advances one of the three AI-native enterprise shifts. Explicitly named in the client's AI strategy or roadmap. |
| 4 | Clearly supports the AI strategy. Moves the client toward an AI-native operating model. |
| 3 | Consistent with the strategy but not a direct enabler. Tactical more than strategic. |
| 2 | Tangentially related. Leadership hasn't prioritized this area. |
| 1 | Disconnected from stated strategy. Pet project or politically motivated. |

**Strategic Alignment Score: __ / 5**
Rationale: [Which shift or strategy element this advances]

---

### Dimension 4: Scalability Potential (1–5)

If this pilot succeeds, how well does it scale — across the organization, across use cases, or as a reusable pattern?

| Score | Description |
|---|---|
| 5 | Directly reusable across multiple departments or business units. Creates a repeatable pattern for the AI Factory. High cross-BU rollout potential. |
| 4 | Scalable within a department or function. Learnings transfer to adjacent use cases. |
| 3 | Limited scale. Valuable in isolation but doesn't generalize easily. |
| 2 | Point solution. Specific to one team, one process, one dataset. |
| 1 | Dead end. Success here creates no foundation for further AI work. |

**Scalability Score: __ / 5**
Rationale: [Where and how this could scale]

---

## Priority Classification

Total Score = Business Value + Feasibility + Strategic Alignment + Scalability

| Score | Classification |
|---|---|
| 18–20 | **Tier 1 — Build first.** High value, feasible, strategic. Obvious starting point. |
| 14–17 | **Tier 2 — Build next.** Strong candidate. May need minor preparation before build. |
| 10–13 | **Tier 3 — Build later.** Worth pursuing but not the right starting point. |
| 6–9 | **Tier 4 — Revisit.** Fundamental gaps in value, feasibility, or alignment. Address blockers first. |
| 1–5 | **Tier 5 — Decline.** Not viable for this engagement. Explain why and redirect. |

---

## The Priority Matrix Output

```
# Use-Case Priority Matrix
## Client: [CLIENT NAME]
## Engagement: [ENGAGEMENT NAME]
## Date: [DATE]
## Practitioner: [NAME]

---

## Use-Case Inventory and Scores

| # | Use Case | Business Value | Feasibility | Strategic Alignment | Scalability | Total | Tier |
|---|----------|---------------|-------------|---------------------|-------------|-------|------|
| 1 | [Name] | __ /5 | __ /5 | __ /5 | __ /5 | __ /20 | [Tier] |
| 2 | [Name] | __ /5 | __ /5 | __ /5 | __ /5 | __ /20 | [Tier] |
...

---

## Recommended Sequence

### Phase 1 — Innovation Garage Build (Weeks 1–8)
**Primary use case:** [Use case name] — Score: __ /20
Rationale: [Why this is the right starting point]
Expected outcome: [What success looks like in 8 weeks]

### Phase 2 — Scale or Next Build (Weeks 9–16)
**Use case:** [Name] — Score: __ /20
Prerequisite: [What must be true from Phase 1]

### Phase 3 — Pipeline
**Use cases queued:** [Names] — [Pending conditions]

---

## Use Cases Declined for This Engagement
| Use Case | Tier | Reason | Recommendation |
|----------|------|--------|---------------|
| [Name] | 4/5 | [Specific gap] | [What would need to change] |

---

## Risks to the Recommended Sequence
[Any failure modes (FM-01 through FM-11) relevant to this sequencing — especially FM-08 Pilot Trap and FM-03 Scope Creep]

---

## Stakeholder Communication
[How to present this prioritization to the use-case proposers whose ideas were deprioritized]
```

## Quality Checklist

- [ ] Every use case scored on all four dimensions with specific rationale
- [ ] The Tier 1 recommendation is specific enough to begin scoping immediately
- [ ] Tier 4/5 use cases have a clear, respectful explanation for deferral
- [ ] The recommended sequence has explicit dependencies between phases
- [ ] Stakeholder communication plan addresses anyone whose idea was deprioritized
- [ ] No use case was scored high on Feasibility simply because it was the sponsor's preference

---

## Handoff Block

```
## Handoff: Use-Case Prioritization → Agent Design
### Engagement: [NAME]
### Date: [DATE]

---

### Selected Use Case (Phase 1)
[Name and one-sentence description]

### Score: __ / 20
Business Value: __ | Feasibility: __ | Strategic Alignment: __ | Scalability: __

### Key Constraints
[Data limitations, infrastructure gaps, or timeline pressures to carry into design]

### Success Criteria
[What the client expects to see at the end of the Innovation Garage build]

### Stakeholder Owner
[Who is accountable for this use case on the client side]

### Active Risk Flags
[Predictor flags from this session]

---
*Paste this block as opening context when running agent-design.md.*
```
