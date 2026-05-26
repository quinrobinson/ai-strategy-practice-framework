---
name: agent-design
framework: ASPF — AI Strategy Practice Framework
pillar: P3 — AI Rapid Innovation Garage
entry-point: Before, During
description: Design an AI agent for a specific business workflow — defining its purpose, inputs, outputs, decision logic, human oversight model, and evaluation criteria before any build begins. Use this skill after a use case has been selected and prioritized. Triggers include "we need to design the agent", "how should this AI work", "what should the agent do and not do", "we need to spec this before engineering starts", or any moment where the shape of the AI agent needs to be defined and agreed before build begins.
ai_leverage: high
agents: [ML/AI Engineer, AI Product Manager, AI Researcher, Ethics & Risk Advisor]
---

# Agent Design

Define the shape, behavior, and boundaries of an AI agent before engineering starts.

The most common Innovation Garage failure isn't a technical failure — it's a design failure. Engineers build something technically correct that doesn't match what the business needed or what users will trust. Agent design closes this gap: it produces a precise, agreed specification that engineering can build against and that stakeholders can evaluate against.

## Goal

**Decision enabled:** What the agent does, how it does it, what it doesn't do, and how humans stay in control.
**Output:** An Agent Design Specification — a complete behavioral, technical, and governance definition of the agent before any code is written.
**What this unlocks:** Engineering clarity. Stakeholder alignment on what's being built. A testable definition of success. The foundation for the model monitoring plan (which runs During) and the evaluation framework that determines whether the agent is working.

## When to Use

- After use-case prioritization — before any engineering sprint begins
- When the team is unclear on what the agent should and shouldn't do
- When there's disagreement between business stakeholders and engineering about scope
- When an existing agent isn't working and the team needs to redesign it

---

## Agent Design Workflow

### Step 1: Define the Agent's Job

State what the agent is hired to do in one precise sentence — the same way you'd describe a human role.

**Format:**
```
The [Agent Name] agent [verb phrase — what it does]
when [trigger condition]
so that [business or user outcome].
```

**Example:**
```
The Support Triage agent classifies and routes incoming support tickets
when a new ticket is submitted
so that the right team receives it within 2 minutes without human review.
```

If you can't complete this sentence cleanly, the use case is not scoped tightly enough. Stop and return to use-case-prioritization.

---

### Step 2: Map the Workflow

Define the agent's position in the business workflow — what comes before it, what it does, and what comes after.

```
Workflow Map:

Before the agent:
[What happens in the process before the agent is involved?]
[Who or what triggers the agent?]

The agent's actions:
[Step 1 — what the agent reads, receives, or observes]
[Step 2 — what the agent decides or generates]
[Step 3 — what the agent produces or initiates]

After the agent:
[What happens next — automated continuation or human review?]
[Who receives the agent's output and what do they do with it?]
```

---

### Step 3: Define Inputs and Outputs

**Inputs** — what the agent reads to do its job:

| Input | Type | Source | Always available? | Notes |
|---|---|---|---|---|
| [Input name] | [Text / Structured / Image / etc.] | [System or person] | [Yes/No] | [Edge cases] |

**Outputs** — what the agent produces:

| Output | Type | Destination | Format | Confidence signaled? |
|---|---|---|---|---|
| [Output name] | [Classification / Text / Action / etc.] | [System or person] | [JSON / Natural language / etc.] | [Yes/No] |

---

### Step 4: Define the Decision Logic

Map the agent's decision-making — what rules govern its behavior.

**Classification agents** — what categories does it assign, and on what basis?
**Generation agents** — what constraints govern what it produces?
**Action agents** — what actions can it take, and what conditions trigger each?

For each decision point:
```
Decision: [What the agent is deciding]
Basis: [What data, rules, or model output drives this decision]
Confidence threshold: [At what confidence level does it act vs. defer to human?]
Edge case handling: [What happens when the input is ambiguous or unusual?]
```

---

### Step 5: Human-in-the-Loop Design

Every agent needs an explicit human oversight model. Define it before building.

**Oversight level:**
- **Full autonomy** — agent acts without human review. Only appropriate for low-stakes, high-confidence, easily reversible actions.
- **Confidence-gated autonomy** — agent acts above a confidence threshold; defers to human below it.
- **Human-in-the-loop** — agent recommends, human approves before action.
- **Human-on-the-loop** — agent acts, human reviews asynchronously and can intervene.
- **Human-initiated** — agent only acts when explicitly invoked by a human.

```
Oversight model: [Level]
Rationale: [Why this level is appropriate given the stakes and error tolerance]

Escalation trigger: [When does the agent escalate to a human?]
Escalation path: [Who receives the escalation and how?]
Override mechanism: [How can a human override the agent's output?]
Audit trail: [What is logged for review?]
```

---

### Step 6: Failure Mode Mapping

Define what "wrong" looks like for this agent — before it goes wrong.

| Failure type | Description | Likelihood | Severity | Detection method |
|---|---|---|---|---|
| False positive | Agent acts when it shouldn't | [H/M/L] | [H/M/L] | [How detected] |
| False negative | Agent fails to act when it should | [H/M/L] | [H/M/L] | [How detected] |
| Hallucination | Agent generates plausible but incorrect output | [H/M/L] | [H/M/L] | [How detected] |
| Bias | Agent performs worse for certain groups | [H/M/L] | [H/M/L] | [How detected] |
| Adversarial | Agent manipulated by crafted inputs | [H/M/L] | [H/M/L] | [How detected] |

---

### Step 7: Evaluation Framework

Define how you will know the agent is working — before it launches.

**Offline evaluation** (before deployment):
```
Evaluation dataset: [How many examples, from where, how labeled]
Primary metric: [e.g., F1 score, BLEU, accuracy — specific to agent type]
Minimum acceptable threshold: [e.g., F1 ≥ 0.85 before deployment]
Human evaluation sample: [X% of outputs reviewed by humans before launch]
Bias evaluation: [Demographic groups tested, acceptable disparity threshold]
```

**Online evaluation** (after deployment):
```
Primary production metric: [What is measured in production]
Baseline: [Current state without agent]
Target: [Expected improvement]
Guardrail metric: [What must not degrade]
Review cadence: [Daily / Weekly — how often metrics are reviewed]
```

---

## Agent Design Specification

```
# Agent Design Specification
## Agent: [AGENT NAME]
## Use case: [From use-case-prioritization]
## Client: [CLIENT NAME]
## Date: [DATE]
## Practitioner: [NAME]

---

## One-sentence job definition
[The [Agent Name] agent [verb phrase] when [trigger] so that [outcome].]

---

## Workflow position
Before: [What precedes the agent]
Agent actions: [What it does — step by step]
After: [What follows the agent's output]

---

## Inputs
[Table: Input | Type | Source | Availability | Notes]

## Outputs
[Table: Output | Type | Destination | Format | Confidence signaled]

---

## Decision Logic
[Decision point by decision point with basis, threshold, and edge cases]

---

## Human Oversight Model
Level: [Full autonomy / Confidence-gated / In-the-loop / On-the-loop / Human-initiated]
Escalation trigger: [Condition]
Override mechanism: [How]
Audit trail: [What is logged]

---

## Failure Modes
[Table: Failure type | Description | Likelihood | Severity | Detection]

---

## Evaluation Framework

### Offline (pre-deployment)
Primary metric: [Metric] ≥ [Threshold]
Human review: [X]% of outputs before launch
Bias test: [Groups] | Max disparity: [X]%

### Online (production)
Primary metric: [Metric] — Baseline: [X] → Target: [Y]
Guardrail: [Metric must stay [above/below] X]
Review cadence: [Frequency]

---

## What the Agent Does NOT Do
[Explicit scope boundaries — prevents scope creep during build]

---

## Open Design Questions
[Questions that must be resolved before engineering begins]

---

## Engineering Handoff Checklist
[ ] One-sentence job definition agreed by client and engineering
[ ] All inputs confirmed accessible and in expected format
[ ] Output format agreed with downstream system owners
[ ] Oversight model reviewed and approved by accountable stakeholder
[ ] Evaluation thresholds agreed before build begins
[ ] Failure modes reviewed by Ethics & Risk Advisor
[ ] Responsible AI assessment completed (see responsible-ai.md)
```

## Quality Checklist

- [ ] Job definition fits in one sentence without ambiguity
- [ ] Every input is confirmed available — not assumed
- [ ] Output format is specific enough for engineering to implement
- [ ] Oversight model is explicit — "human review" is not sufficient
- [ ] Evaluation thresholds are numbers, not qualitative descriptions
- [ ] Scope boundaries define what the agent does NOT do
- [ ] All open design questions are named and assigned for resolution

---

## Handoff Block

```
## Handoff: Agent Design → Build (Innovation Garage)
### Agent: [AGENT NAME]
### Client: [CLIENT NAME]
### Date: [DATE]

---

### Job Definition
[One sentence]

### Oversight Model
[Level + escalation trigger]

### Primary Evaluation Metric
[Metric] ≥ [Threshold] (offline) | [Metric] Baseline → Target (production)

### Open Questions Before Build
[Must be resolved in sprint planning]

### Responsible AI Status
[ ] Responsible AI assessment completed
[ ] Risk mapping completed
[ ] Bias evaluation dataset identified

### Active Predictor Flags
[Failure modes flagged during this session]

---
*Paste this block as opening context for the engineering sprint kickoff.*
*Run /project:deck agent-design to generate a design review presentation.*
```
