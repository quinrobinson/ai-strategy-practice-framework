---
name: risk-mapping
framework: ASPF — AI Strategy Practice Framework
entry-point: Before, During
description: Identify, score, and plan mitigations for AI-specific risks before or during a project. Use this skill when a team needs to evaluate what could go wrong with an AI approach — technically, ethically, organizationally, or legally. Triggers include questions like "what are the risks of using AI here?", "what do we need to watch out for?", "our AI pilot is showing unexpected behavior", or any moment where risk needs to be named and structured. Works in both Before (proactive) and During (reactive) entry points.
ai_leverage: high
agents: [Ethics & Risk Advisor, AI Strategy Lead, ML/AI Engineer]
---

# Risk Mapping

Identify and structure AI-specific risks before they become failures.

AI risk is different from standard project risk. It includes technical failure modes that don't exist in traditional software — model drift, hallucination, bias amplification, and emergent behavior — alongside standard organizational and legal risks. This skill maps all of them into a single structured risk register.

## Goal

**Decision enabled:** Whether and how to proceed given the risk profile — with explicit conditions, mitigations, and monitoring triggers attached to the go decision.
**Output:** An AI Risk Register — every identified risk scored by severity and likelihood, with named mitigations, owners, and monitoring triggers for Critical and High risks.
**What this unlocks:** A defensible path forward. Teams that skip risk mapping proceed on optimism. Teams that complete it proceed on evidence — they know what could go wrong, who owns the response, and what signal will tell them it's happening. The risk register also feeds directly into the APDF handoff brief as phase-level constraints on the design work.

## When to Use

- Before committing to an AI approach — proactive risk identification
- Mid-project when something unexpected is happening — reactive risk evaluation
- Before presenting an AI initiative to leadership or a governance board
- When entering a regulated domain (healthcare, finance, hiring, legal)
- When a pilot is being considered for scale

## Risk Mapping Workflow

### Step 1: Establish Risk Context

Before identifying risks, establish the context:
- What is the AI system doing — what decisions or outputs does it produce?
- Who is affected by those outputs — users, customers, employees, third parties?
- What happens when the system is wrong — what are the consequences of error?
- Is this domain regulated — what legal or compliance obligations apply?

### Step 2: Map Risks Across Four Dimensions

Evaluate risks across four dimensions. Each dimension has a defined risk category set.

---

**Dimension 1: Technical Risks**

| Risk | Description | Common in |
|---|---|---|
| Model drift | Performance degrades as real-world data shifts from training data | Prediction, classification |
| Hallucination | System generates plausible but false outputs | LLMs, generation |
| Data leakage | Training data surfaces in outputs, exposing private information | LLMs, fine-tuned models |
| Adversarial vulnerability | System manipulated by crafted inputs | Classification, content moderation |
| Infrastructure failure | Latency, downtime, or capacity issues at scale | All methods |
| Evaluation gap | No reliable way to measure whether outputs are correct | Generation, extraction |

---

**Dimension 2: Ethical & Fairness Risks**

| Risk | Description | Common in |
|---|---|---|
| Algorithmic bias | System performs worse for certain demographic groups | Classification, prediction, recommendation |
| Disparate impact | Neutral-seeming outputs produce unequal real-world outcomes | Hiring, lending, healthcare AI |
| Autonomy erosion | AI removes human choice or agency without user awareness | Recommendation, personalization |
| Opacity | Users can't understand or contest AI-driven decisions | All methods |
| Over-reliance | Teams trust AI outputs without appropriate validation | All methods |

---

**Dimension 3: Organizational Risks**

| Risk | Description |
|---|---|
| Skill dependency | System requires expertise the team doesn't have to maintain |
| Vendor lock-in | Switching away from a vendor becomes prohibitively expensive |
| Change resistance | Team or users reject the AI system, reducing adoption |
| Pilot trap | System works in pilot but fails at scale due to unmodeled conditions |
| Accountability gap | No clear owner when the AI system makes a consequential error |

---

**Dimension 4: Legal & Regulatory Risks**

| Risk | Description |
|---|---|
| Data privacy violation | AI processes personal data in ways that violate GDPR, CCPA, or equivalent |
| Intellectual property | Training data or outputs infringe on IP rights |
| Regulatory non-compliance | AI system violates sector-specific regulations (HIPAA, FINRA, EU AI Act) |
| Liability exposure | Consequential AI error creates legal exposure for the organization |

---

### Step 3: Score Each Risk

For each identified risk, assign severity and likelihood:

**Severity** — consequence if the risk materializes
- Critical (4): Irreversible harm to users, legal liability, significant business damage
- High (3): Significant disruption, reputational damage, or user harm
- Medium (2): Recoverable setback, moderate user impact
- Low (1): Minor inconvenience, easily corrected

**Likelihood** — probability of occurrence given current conditions
- Almost certain (4): Very likely without active mitigation
- Probable (3): More likely than not
- Possible (2): Could happen, roughly 50/50
- Unlikely (1): Possible but not expected

**Risk Score** = Severity × Likelihood (max 16)

### Step 4: Produce the Risk Register

```
# AI Risk Register
## Project: [PROJECT NAME]
## AI Method: [From method selection]
## Date: [DATE]
## Owner: [Risk register owner]

---

| Risk | Dimension | Severity | Likelihood | Score | Status |
|------|-----------|----------|------------|-------|--------|
| [Risk name] | Technical | [1-4] | [1-4] | [score] | Open |
| ... | | | | | |

---

## Critical Risks (Score 12–16)
### [Risk Name]
- Description: [What this risk is and how it manifests]
- Trigger conditions: [What would cause this risk to materialize]
- Mitigation: [Specific action to reduce likelihood or severity]
- Owner: [Who is responsible for this mitigation]
- Review date: [When to reassess]

## High Risks (Score 8–11)
[Same structure]

## Medium Risks (Score 4–7)
[Same structure]

## Accepted Risks (Score 1–3)
[List with brief note on why accepted]

---

## Residual Risk Summary
After mitigations: [Overall risk posture — Low / Medium / High / Critical]
Recommendation: [Proceed / Proceed with conditions / Do not proceed]
```

### Step 5: Define Monitoring Triggers

For each Critical or High risk, define a monitoring trigger — the signal that indicates the risk is materializing:

```
Risk: [Name]
Monitoring signal: [What to watch — metric, behavior, user report]
Threshold: [At what level does this trigger escalation]
Response: [What happens when the threshold is crossed]
```

## Quality Checklist

- [ ] All four risk dimensions evaluated
- [ ] Every identified risk has a severity and likelihood score
- [ ] Critical and High risks have named mitigations and owners
- [ ] Monitoring triggers defined for Critical/High risks
- [ ] Residual risk posture stated clearly
- [ ] Recommendation is unambiguous

---

## Handoff Block

```
## Handoff: Risk Mapping → Outcome Definition
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Risk Posture: [Low / Medium / High / Critical]
### Critical Risks: [Count and names]
### High Risks: [Count and names]

### Conditions on Proceeding
[Any conditions the risk register places on the project before it can proceed]

### Monitoring Triggers to Carry Into Delivery
[Specific signals the team must watch during activation]

### Active Predictor Flags
[Risks surfaced by the Predictor that aren't yet in the register]

---
*Paste this block as your first message when opening outcome-definition.md.*
```
