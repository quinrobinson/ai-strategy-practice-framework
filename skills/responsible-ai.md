---
name: responsible-ai
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Run a structured responsible AI checklist before any AI system is built or deployed. Use this skill when a team needs to evaluate fairness, accountability, transparency, and privacy implications of an AI initiative. Triggers include questions like "is this AI ethical?", "what are our responsible AI obligations?", "how do we handle bias?", "what does the EU AI Act require?", or any moment where the team needs a structured framework for responsible AI design. Run alongside risk-mapping.md — this skill is proactive, risk-mapping is reactive.
ai_leverage: high
agents: [Ethics & Risk Advisor, AI Strategy Lead, AI Practice Lead]
---

# Responsible AI

A structured checklist for designing AI systems that are fair, accountable, transparent, and privacy-preserving — before any build begins.

Responsible AI is not a compliance exercise done at the end. It is a design discipline practiced from the first decision. Teams that treat it as a checkbox after the fact ship systems that harm users, expose the organization to regulatory risk, and erode trust in ways that take years to recover from.

## Goal

**Decision enabled:** Whether this AI initiative meets the organization's responsible AI obligations — and if not, what must change before proceeding.
**Output:** A Responsible AI Assessment — a structured checklist across five principles with a named owner, open issues, and a proceed/remediate/stop recommendation.
**What this unlocks:** A defensible record that responsible AI was considered proactively — not retrofitted. Required by most enterprise AI governance frameworks (EU AI Act, ISO 42001, Microsoft RAI Standard v2, NIST AI RMF). Also surfaces design changes that prevent FM-10 (Undetected Bias) and FM-11 (Opacity at Scale) before they become production failures.

## When to Use

- Before committing to any AI initiative — run alongside problem-qualification and risk-mapping
- Before presenting an AI initiative to a governance board, risk committee, or legal team
- When operating in a regulated domain (healthcare, finance, hiring, legal, education)
- When the AI system makes or influences decisions that affect people
- When an existing AI system is being reviewed for compliance or expanded in scope

---

## The Five Principles

### Principle 1: Fairness

The AI system should not create or reinforce unfair bias against individuals or groups.

**Assessment questions:**

1. Who is affected by this system's outputs — what groups of people?
2. Have we identified which demographic characteristics are relevant to this system's decisions? (race, gender, age, disability, socioeconomic status, geography)
3. Do we have representative training data across all affected groups?
4. Have we defined what "fair" means for this system — equal accuracy, equal outcomes, or equal opportunity?
5. How will we test for disparate impact before deployment?
6. Is there a mechanism to detect and correct bias after deployment?

**Scoring:**
- 3 = All questions answered with documented evidence
- 2 = Most questions answered, some gaps remain
- 1 = Awareness exists but no structured approach
- 0 = Not considered

**Fairness Score: __ / 3**

---

### Principle 2: Accountability

There must be clear human ownership of the AI system's decisions and consequences.

**Assessment questions:**

1. Who is accountable when the AI system produces a harmful or incorrect output?
2. Is there a named human decision-maker who can override the AI system?
3. Is there a documented escalation path for AI-related incidents?
4. Are audit logs maintained for consequential AI decisions?
5. Does the accountability structure survive team changes — is it embedded in process, not just people?
6. Can the system be rolled back or shut down quickly if needed?

**Scoring:** Same 0–3 scale as above.

**Accountability Score: __ / 3**

---

### Principle 3: Transparency

Users and affected parties should be able to understand that AI is involved and how it influences outcomes.

**Assessment questions:**

1. Do users know when they are interacting with or being evaluated by an AI system?
2. Can the system explain its outputs in terms users can understand?
3. Do users have the ability to contest or request human review of AI-driven decisions?
4. Is the system's purpose, training approach, and known limitations documented publicly or internally?
5. Are there terms of service or privacy notices that accurately describe the AI system?
6. For high-stakes decisions: can the system produce an explanation that satisfies regulatory explainability requirements (e.g., EU AI Act Article 13)?

**Transparency Score: __ / 3**

---

### Principle 4: Privacy

The AI system should collect and use only the data it needs, protect it appropriately, and respect individuals' rights over their data.

**Assessment questions:**

1. What personal data does the system collect, process, or infer?
2. Is data collection limited to what is strictly necessary for the defined purpose (data minimization)?
3. Do individuals have the right to access, correct, or delete their data?
4. Is data retained only as long as necessary, with defined retention and deletion schedules?
5. Are appropriate technical controls in place — encryption, access controls, anonymization where possible?
6. Has a Data Protection Impact Assessment (DPIA) been conducted if required under GDPR or equivalent?

**Privacy Score: __ / 3**

---

### Principle 5: Safety & Reliability

The AI system should perform as intended, handle failures gracefully, and not cause harm through malfunction or misuse.

**Assessment questions:**

1. Has the system been tested for robustness against edge cases and adversarial inputs?
2. Is there a defined acceptable error rate, and does the system meet it in testing?
3. Are there safeguards that prevent the system from causing harm in failure states?
4. Has the system been evaluated for potential for misuse or dual-use harm?
5. Is there a monitoring plan for detecting performance degradation in production?
6. Has the system been reviewed for physical or psychological safety risks to users?

**Safety Score: __ / 3**

---

## Regulatory Context

Apply the relevant regulatory frame based on domain and geography:

| Regulation | Applies when | Key requirement |
|---|---|---|
| **EU AI Act** | Operating in EU or affecting EU residents | High-risk AI systems require conformity assessment, transparency, human oversight, and data governance documentation |
| **GDPR / UK GDPR** | Processing personal data of EU/UK residents | DPIA for high-risk processing, right to explanation for automated decisions |
| **CCPA / CPRA** | Processing data of California residents | Right to opt out of automated decision-making |
| **HIPAA** | Healthcare data in the US | PHI protection, minimum necessary standard, audit controls |
| **ECOA / FHA** | Lending, housing, credit in the US | Prohibition on disparate impact across protected classes |
| **ISO 42001** | Organizations seeking AI management certification | AI management system requirements across the full lifecycle |
| **NIST AI RMF** | US federal or federal-adjacent contexts | Govern, Map, Measure, Manage framework for AI risk |

**Applicable regulations for this initiative:**
[ ] EU AI Act — Risk level classification: [ ] Unacceptable [ ] High [ ] Limited [ ] Minimal
[ ] GDPR / UK GDPR — DPIA required: [ ] Yes [ ] No
[ ] CCPA / CPRA
[ ] HIPAA
[ ] ECOA / FHA
[ ] ISO 42001
[ ] NIST AI RMF
[ ] Other: ___

---

## Responsible AI Assessment Output

```
# Responsible AI Assessment
## Project: [PROJECT NAME]
## AI System: [What the system does]
## Date: [DATE]
## Assessor: [Role]
## Reviewed by: [Ethics & Risk Advisor / Legal / Compliance]

---

## Principle Scores
| Principle         | Score | Key Gap |
|-------------------|-------|---------|
| Fairness          | __ /3 | [Gap]   |
| Accountability    | __ /3 | [Gap]   |
| Transparency      | __ /3 | [Gap]   |
| Privacy           | __ /3 | [Gap]   |
| Safety            | __ /3 | [Gap]   |
| **Total**         | __ /15|         |

---

## Classification
13–15: Strong responsible AI posture. Proceed.
9–12:  Adequate. Address gaps before deployment.
5–8:   Significant gaps. Remediation required before proceeding.
0–4:   Fundamental issues. Do not proceed until resolved.

**Classification: [Strong / Adequate / Significant gaps / Fundamental issues]**

---

## Open Issues (scores of 0–1 on any principle)
| Issue | Principle | Remediation | Owner | Deadline |
|-------|-----------|-------------|-------|----------|
| [Issue] | [Principle] | [Action] | [Role] | [Date] |

---

## Regulatory Status
[List applicable regulations and current compliance status]

---

## Recommendation
[ ] Proceed — responsible AI posture is sufficient
[ ] Proceed with conditions: [list open issues that must be resolved]
[ ] Pause — remediation required before proceeding
[ ] Stop — fundamental responsible AI issues cannot be resolved with current approach

---

## Sign-off
Ethics & Risk Advisor: _____________ Date: _______
Legal / Compliance:   _____________ Date: _______
Project Lead:         _____________ Date: _______
```

## Quality Checklist

- [ ] All five principles scored with specific evidence
- [ ] Open issues have named owners and deadlines
- [ ] Applicable regulations identified
- [ ] Recommendation is unambiguous
- [ ] Sign-off process completed or scheduled

---

## Handoff Block

```
## Handoff: Responsible AI → Risk Mapping
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Responsible AI Score: __ / 15
### Classification: [Strong / Adequate / Significant gaps / Fundamental issues]

### Open Issues to Carry into Risk Register
[Issues that scored 0–1 — these become risk register entries]

### Regulatory Obligations
[Applicable regulations and any compliance conditions]

### Recommendation: [Proceed / Proceed with conditions / Pause / Stop]

---
*Paste this block as opening context when running risk-mapping.md.*
*Open responsible AI issues should appear in the risk register as Ethics & Fairness entries.*
```
