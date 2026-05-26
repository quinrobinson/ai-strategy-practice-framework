---
name: operating-model
framework: ASPF — AI Strategy Practice Framework
pillar: P1 — AI Value & Tech Strategy, P5 — AI Factory
entry-point: Before
description: Define how AI fits into the client's operating model — the roles, governance structures, decision rights, and workflows that make AI a sustainable part of how the organization operates. Use this skill when a client needs to move beyond piloting into a structured AI operating model. Triggers include "we need to define how AI will work here", "who owns AI decisions in the org?", "how do we restructure around agents?", "we need an AI operating model", or any engagement where the organizational design for AI needs to be defined before or alongside the technology build.
ai_leverage: medium
agents: [AI Strategy Lead, Change & Enablement Lead, AI Practice Lead]
---

# AI Operating Model

Define how AI fits into the client's organization — roles, governance, decision rights, and workflows that make AI sustainable at scale.

Technology without an operating model fails. An organization can have excellent AI systems and still fail at AI if no one owns the models in production, if governance decisions take months, or if the people most affected by AI have no role in shaping it. The AI operating model defines the human system that AI runs within.

## Goal

**Decision enabled:** How the organization needs to be structured to operate AI sustainably — at the team level, the function level, and the enterprise level.
**Output:** An AI Operating Model Design — defining roles, governance structures, decision rights, workforce transition, and the target state operating model.
**What this unlocks:** The organizational foundation for the AI Factory. Without this, industrialization creates AI systems that no one owns and governance that no one enforces. Directly enables the three AI-native enterprise shifts by defining how agents and humans work together.

## When to Use

- At the start of a Pillar 1 (Strategy) engagement — operating model is the strategic foundation
- Before launching an AI Factory engagement — the operating model defines who runs what
- When existing AI systems are failing due to unclear ownership, not technology
- When middle management resistance is blocking AI adoption
- When the client asks "who should own AI in our organization?"

---

## Operating Model Design Workflow

### Step 1: Assess the Current State

Before designing the target operating model, understand what exists today.

**Current AI ownership:**
- Who currently makes decisions about AI tools, vendors, and platforms?
- Where does AI talent sit — centralized AI team, embedded in business units, or both?
- How are AI initiatives funded — central budget, BU budget, or project-by-project?
- Who is accountable when an AI system fails or causes harm?

**Current governance:**
- Does an AI governance body exist? Who sits on it?
- How long does it take to approve a new AI initiative from idea to go-live?
- How are regulatory and compliance requirements for AI managed?

**Current workforce relationship to AI:**
- What percentage of employees currently use AI tools in their work?
- Where is resistance to AI adoption concentrated?
- What retraining or upskilling is already underway?

---

### Step 2: Define the Target Operating Model Structure

The AI operating model has four structural choices. Each has trade-offs.

**Model A: Centralized**
A central AI team owns all AI strategy, governance, and delivery. Business units are consumers of AI, not builders.
- Pros: Consistent standards, concentrated expertise, clear governance
- Cons: Bottleneck at scale, disconnected from business context, slow to respond
- Best for: Early-stage AI adoption, heavily regulated industries, organizations without distributed AI talent

**Model B: Decentralized / Federated**
Business units own their own AI initiatives. A central function provides standards and tooling but not delivery.
- Pros: Speed and context, business ownership, scales naturally
- Cons: Inconsistent standards, duplicated effort, governance gaps
- Best for: Large organizations with diverse business units, mature AI literacy across the org

**Model C: Center of Excellence (CoE)**
A central AI CoE sets standards, builds reusable components, and governs. Business units deliver with CoE support.
- Pros: Balances consistency with speed, builds organizational capability
- Cons: Requires careful governance design, can become a bureaucracy
- Best for: Most enterprise clients — the recommended default for AI Factory engagements

**Model D: Embedded / AI-Native**
AI is embedded into every team and function. No separate AI organization — AI practitioners work within business teams, supported by shared infrastructure.
- Pros: Maximum business alignment, agents and humans work side by side
- Cons: Requires high AI literacy across the organization, hard to govern without strong standards
- Best for: Organizations further along the AI-native enterprise journey

**Recommended model for this client:** [A / B / C / D]
Rationale: [Why this model fits given current state and target state]
Migration path: [How the client moves from current model to target]

---

### Step 3: Define Roles and Responsibilities

For each role in the target operating model, define: who they are, what they own, and how they relate to AI.

```
Role Design:

[Role Name]
Owns: [What AI responsibilities this role holds]
Decides: [What decisions this role makes autonomously]
Approves: [What decisions this role must approve before action]
Reports: [What this role reports on and to whom]
Interfaces with: [Which other roles this role works with on AI]
New or existing: [Is this a new role or an existing role with expanded scope?]
```

**Core roles to define for most clients:**

| Role | Owns | Typical location |
|---|---|---|
| Chief AI Officer (or equivalent) | AI strategy, investment decisions, board reporting | C-Suite |
| AI Governance Lead | Policy, compliance, risk oversight | Legal/Compliance or AI CoE |
| AI Practice Lead | Methodology, standards, capability building | AI CoE |
| AI Product Manager | Use case roadmap, delivery prioritization | BU or AI CoE |
| ML/AI Engineer | Model development, MLOps, production systems | AI CoE or embedded in BU |
| AI Ethics & Risk Advisor | Fairness, responsible AI review, incident response | AI CoE or Legal |
| Business AI Champion | Adoption, change management, feedback within BU | Each Business Unit |

---

### Step 4: Design Governance Structures

AI governance answers: who decides what, how fast, and with what oversight?

**Governance bodies:**

```
AI Steering Committee
Purpose: Strategic AI investment decisions, cross-BU prioritization
Membership: [C-Suite sponsors, AI Practice Lead, BU leaders]
Cadence: [Monthly / Quarterly]
Decisions: [Budget allocation, major use case approval, risk escalation]

AI Ethics & Risk Board
Purpose: Responsible AI oversight, high-stakes deployment approvals
Membership: [AI Governance Lead, Legal, Compliance, CISO, External advisor]
Cadence: [Meets on trigger — new high-risk deployment, incident, regulatory change]
Decisions: [High-risk AI approval, policy updates, incident response]

AI Practice Council
Purpose: Standards, tooling, methodology — cross-team coordination
Membership: [AI Practice Lead, BU AI Champions, ML Engineering leads]
Cadence: [Bi-weekly]
Decisions: [Standards adoption, tooling selection, methodology updates]
```

**Decision rights matrix:**

| Decision | Who decides | Who approves | Who is informed |
|---|---|---|---|
| New AI use case (low risk) | AI Product Manager | Business Unit Lead | AI Practice Lead |
| New AI use case (high risk) | AI Product Manager | AI Ethics & Risk Board | Steering Committee |
| Model deployment to production | ML Engineering | AI Governance Lead | AI Practice Lead |
| AI vendor/platform selection | AI Practice Lead | CTO | Steering Committee |
| AI incident response | AI Governance Lead | CISO + Legal | All above |
| AI budget allocation | Steering Committee | CFO | BU Leaders |

---

### Step 5: Workforce Transition Plan

The AI-native enterprise shift changes how people work. The operating model must address this explicitly.

**Shift impact assessment:**

| Role/Function | Current way of working | AI-native way of working | Transition required |
|---|---|---|---|
| [Function] | [How work happens today] | [How agents change the work] | [Upskilling / Redesign / Redeploy] |

**Transition approach:**

```
Workforce segments:
Segment 1 — AI-adjacent workers: [Roles where AI augments but doesn't replace the core job]
Transition: AI literacy training, prompt engineering skills, human-AI workflow redesign

Segment 2 — AI-affected workers: [Roles where AI changes the volume or nature of tasks significantly]
Transition: Role redesign, redeployment to higher-value work, upskilling

Segment 3 — AI-enabled roles: [New roles that exist because of AI — AI trainers, output reviewers, AI champions]
Transition: Identify, hire or reskill for, define career paths

Communication plan: [How leadership communicates the transition — what changes, what doesn't, the timeline]
```

---

## AI Operating Model Design Document

```
# AI Operating Model Design
## Client: [CLIENT NAME]
## Date: [DATE]
## Practitioner: [NAME]

---

## Current State Summary
AI ownership today: [Who owns what]
Governance maturity: [Low / Medium / High]
Workforce AI readiness: [% using AI tools / resistance concentration]

---

## Target Operating Model

### Model type: [Centralized / Federated / CoE / Embedded]
### Rationale: [Why this model fits]

### Organizational structure
[Describe the AI organization — where it sits, how it relates to business units]

### Core roles
[Table: Role | Owns | Decides | Approves | Location]

### Governance bodies
[Table: Body | Purpose | Membership | Cadence | Key decisions]

### Decision rights matrix
[Table: Decision | Decides | Approves | Informed]

---

## Workforce Transition Plan
[Table: Segment | Current state | AI-native state | Transition approach]
Communication plan: [Summary]

---

## Migration Path
From current model → target model:
Phase 1 (0–3 months): [Quick wins — clarify ownership, establish governance basics]
Phase 2 (3–9 months): [Build CoE or designated team, formalize governance]
Phase 3 (9–18 months): [Embed AI into BU workflows, scale the model]

---

## Connection to AI-Native Enterprise Shifts
Shift 1 (Agents do the work): [How this operating model enables this shift]
Shift 2 (Company legible to AI): [How governance ensures data and process legibility]
Shift 3 (Closed loop): [How the model supports continuous learning and improvement]

---

## Risks to the Operating Model
[Organizational and political risks — especially FM-09 Change Resistance and FM-07 Accountability Gap]
```

## Quality Checklist

- [ ] Current state is specific — not "AI is immature" but named gaps in ownership and governance
- [ ] Model choice is justified relative to current state and org culture
- [ ] Every governance body has a specific membership list, not "TBD"
- [ ] Decision rights matrix covers the five most common AI decisions
- [ ] Workforce transition plan names specific segments — not just "training for everyone"
- [ ] Migration path has explicit gates between phases

---

## Handoff Block

```
## Handoff: Operating Model → AI Factory Engagement / Stakeholder Alignment
### Client: [CLIENT NAME]
### Date: [DATE]

---

### Target Operating Model: [Type]
### Migration Phase: [1 / 2 / 3]

### Key Governance Bodies to Establish
[List with membership and cadence]

### Critical Workforce Segments
[Segments that require transition planning before AI Factory work begins]

### Connection to AI Factory (P5)
[How the operating model enables industrialized AI delivery]

### Active Predictor Flags
[Failure modes flagged during this session]

---
*Paste this block as opening context for AI Factory engagement kickoff.*
*Run /project:deck operating-model to generate a leadership presentation.*
```
