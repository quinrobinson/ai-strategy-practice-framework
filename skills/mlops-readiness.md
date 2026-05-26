---
name: mlops-readiness
framework: ASPF — AI Strategy Practice Framework
pillar: P5 — AI Factory
entry-point: Before
description: Assess a client's readiness to industrialize AI delivery — moving from pilot to repeatable, enterprise-scale production through MLOps and AgentOps infrastructure. Use this skill before committing to AI Factory engagement work. Triggers include "we have pilots but can't scale them", "we need to industrialize our AI delivery", "our models keep breaking in production", "we want to move from experiments to a real AI operating model", or any engagement where the goal is to make AI delivery reliable, repeatable, and scalable across the organization.
ai_leverage: medium
agents: [ML/AI Engineer, AI Practice Lead, Change & Enablement Lead]
---

# MLOps Readiness

Assess whether a client is ready to industrialize AI delivery — and what must be built before the AI Factory can operate at scale.

The AI Factory exists to make AI delivery reliable, repeatable, and scalable across the organization. Most clients who come to this pillar have AI systems that work in isolation but break at scale, fail silently in production, or require heroic engineering effort to maintain. MLOps readiness identifies exactly which gaps stand between where they are and a functioning AI Factory.

## Goal

**Decision enabled:** Whether the client is ready to engage the AI Factory pillar — and if not, what infrastructure must be built first.
**Output:** An MLOps Readiness Assessment — scored across six dimensions with a gap remediation roadmap and a phased AI Factory engagement plan.
**What this unlocks:** A clear scope for the AI Factory engagement. Prevents committing to industrialization work on a foundation that can't support it. Turns "we want enterprise AI" from an aspiration into a structured build sequence.

## When to Use

- At the start of any AI Factory engagement
- When a client has multiple pilots and wants to understand what it takes to scale them
- When existing AI systems are causing operational pain — inconsistent performance, manual maintenance, no monitoring
- Before recommending MLOps tooling or platform investments

---

## The Six Readiness Dimensions

### Dimension 1: Model Lifecycle Management (0–10)

Does the client have infrastructure and processes for the full model lifecycle — from training through deployment to retirement?

| Score | Description |
|---|---|
| 9–10 | Full model registry in place. Versioning, lineage, and metadata tracked. Deployment pipeline is automated. Rollback is tested and documented. Model retirement process defined. |
| 7–8 | Model registry exists but is incomplete. Deployment is semi-automated. Rollback is possible but manual. |
| 4–6 | Models tracked informally (spreadsheets, wiki). Deployment is manual. No formal rollback process. |
| 1–3 | No model registry. Deployments are ad hoc. No record of which model version is in production. |
| 0 | No model lifecycle management exists. Models are research artifacts, not production assets. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

### Dimension 2: CI/CD for ML (Continuous Integration / Continuous Delivery) (0–10)

Can the client test, validate, and deploy model updates reliably and frequently?

| Score | Description |
|---|---|
| 9–10 | ML pipelines are fully automated. Code and model changes trigger automated tests. Deployment to production is automated with quality gates. Environment parity between dev/staging/prod. |
| 7–8 | Pipelines exist but require manual steps. Some automation. Tests exist for code but not model behavior. |
| 4–6 | Basic automation exists. Manual testing before deployment. Environments differ between dev and prod. |
| 1–3 | No ML CI/CD. Deployment is a manual, error-prone process. No test suite for model behavior. |
| 0 | No pipeline infrastructure. Deployment means copying files manually. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

### Dimension 3: Monitoring and Observability (0–10)

Can the client detect when AI systems are degrading — before users do?

| Score | Description |
|---|---|
| 9–10 | All five monitoring layers active (input drift, output drift, performance, fairness, operational). Alerts configured with named owners. Dashboards visible to both engineering and business. |
| 7–8 | Technical monitoring (latency, errors) is solid. Model performance monitored. Fairness and drift monitoring partial. |
| 4–6 | Basic operational monitoring only. No model performance tracking. No drift detection. Issues discovered by user complaints. |
| 1–3 | Minimal logging. No alerting. Performance tracked manually and infrequently. |
| 0 | No monitoring infrastructure. AI systems run blind in production. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

### Dimension 4: Data Pipeline Reliability (0–10)

Are the data pipelines that feed AI systems reliable, versioned, and tested?

| Score | Description |
|---|---|
| 9–10 | Data pipelines are version-controlled, tested, and monitored. Data quality checks run automatically. Pipeline failures alert immediately. Data lineage is tracked end-to-end. |
| 7–8 | Pipelines are reliable in normal conditions. Some testing. Data quality checks exist but are incomplete. |
| 4–6 | Pipelines run but break under load or with schema changes. Testing is manual. No data quality monitoring. |
| 1–3 | Pipelines are fragile and require frequent manual intervention. Data quality issues discovered downstream. |
| 0 | No reliable data pipelines. Data is prepared manually for each model run. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

### Dimension 5: Reusable Patterns and Components (0–10)

Does the client have reusable AI components — patterns that can be applied across use cases rather than built from scratch each time?

| Score | Description |
|---|---|
| 9–10 | Component library exists. Common patterns (feature stores, serving infrastructure, evaluation frameworks) are reusable across teams. New use cases are assembled from components, not built from scratch. |
| 7–8 | Some reusable components exist. Teams sometimes share code but not systematically. |
| 4–6 | Each AI project builds its own stack. Some informal code sharing. No component library. |
| 1–3 | Every project is bespoke. No shared infrastructure. Significant duplication across teams. |
| 0 | No concept of reusability. Every AI system is a one-off. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

### Dimension 6: Cross-BU Governance and Rollout Capability (0–10)

Can the client roll out AI systems consistently across business units — with governance that scales?

| Score | Description |
|---|---|
| 9–10 | Cross-BU AI governance is established. Rollout playbook exists and has been tested. Model and agent inventory is maintained centrally. Compliance monitoring is automated. |
| 7–8 | Governance exists for individual systems. Cross-BU rollout has been done but required significant effort. |
| 4–6 | Governance is informal. Cross-BU rollout is possible but ad hoc. No central inventory. |
| 1–3 | Governance only for regulated systems. No cross-BU rollout capability. Each business unit manages AI independently. |
| 0 | No governance infrastructure. AI systems are ungoverned and untracked at the org level. |

**Score: __ / 10**
Current state: [Description]
Critical gap: [What is most missing]

---

## MLOps Readiness Assessment Output

```
# MLOps Readiness Assessment
## Client: [CLIENT NAME]
## Engagement: [ENGAGEMENT NAME]
## Date: [DATE]
## Practitioner: [NAME]

---

## Dimension Scores

| Dimension | Score | Critical Gap |
|-----------|-------|-------------|
| Model Lifecycle Management | __ /10 | [Gap] |
| CI/CD for ML | __ /10 | [Gap] |
| Monitoring and Observability | __ /10 | [Gap] |
| Data Pipeline Reliability | __ /10 | [Gap] |
| Reusable Patterns | __ /10 | [Gap] |
| Cross-BU Governance | __ /10 | [Gap] |
| **Total** | __ /60 | |

---

## Readiness Classification

50–60: Factory-ready. Begin AI Factory engagement immediately.
38–49: Mostly ready. Address 1-2 critical gaps before full engagement.
24–37: Foundational work required. Phase 1 must build missing infrastructure.
12–23: Not ready. Significant investment required before Factory engagement.
0–11: Pre-foundational. Consider starting with AI Data Foundation (Pillar 2) first.

**Classification: [Factory-ready / Mostly ready / Foundational work / Not ready / Pre-foundational]**

---

## Phased AI Factory Engagement Plan

### Phase 1 — Foundation Build (if score < 38)
Priority gaps to close: [List by dimension]
Estimated timeline: [Weeks]
Deliverables: [What gets built in Phase 1]

### Phase 2 — Industrialization
Pilots to industrialize: [Which existing pilots are ready to scale]
Infrastructure to build: [MLOps components required]
Cross-BU targets: [Which business units are first for rollout]

### Phase 3 — Scale and Govern
Component library build: [Reusable patterns to extract]
Governance model: [Central AI inventory, compliance monitoring]
Run and Enhance handoff: [When to transition to Pillar 6]

---

## Tooling Recommendations
Based on the gaps identified, the following tooling categories should be evaluated:
[List relevant tool categories — do not recommend specific vendors without client context]

---

## Risks to the Engagement
[FM-08 Pilot Trap, FM-07 Accountability Gap, and any pillar-specific risks from the Predictor]
```

## Quality Checklist

- [ ] All six dimensions scored with specific evidence from client conversations or system review
- [ ] Critical gaps are specific enough to design a remediation plan
- [ ] Classification is honest — do not advance a client to AI Factory work on an inadequate foundation
- [ ] Phased engagement plan has explicit gates between phases
- [ ] Tooling recommendations are category-level, not specific vendor endorsements

---

## Handoff Block

```
## Handoff: MLOps Readiness → AI Factory Engagement
### Client: [CLIENT NAME]
### Date: [DATE]

---

### MLOps Readiness Score: __ / 60
### Classification: [Factory-ready / Mostly ready / Foundational / Not ready]

### Phase 1 Prerequisites
[What must be built before Phase 2 begins]

### Pilots Ready to Industrialize
[Existing AI systems that are candidates for AI Factory scale-up]

### Critical Infrastructure Gaps
[Specific gaps that will be addressed in the engagement]

### Active Predictor Flags
[Failure modes flagged during this session]

---
*Paste this block as opening context for AI Factory engagement kickoff.*
*Run /project:deck mlops-readiness to generate a client-facing readiness report.*
```
