---
name: managed-service-model
framework: ASPF — AI Strategy Practice Framework
pillar: P6 — Run & Enhance
entry-point: Before
description: Design the managed service model for operating AI systems post-launch — defining support tiers, SLAs, continuous improvement processes, and value reporting. Use this skill when transitioning a client from build to operate, or when scoping a Run & Enhance engagement. Triggers include "we need someone to run this after we launch", "what does ongoing AI support look like?", "how do we maintain and improve AI systems over time?", "we need SLAs for our AI systems", or any engagement where the question is how to operate AI sustainably after the initial build is complete.
ai_leverage: medium
agents: [AI Practice Lead, AI Product Manager, Change & Enablement Lead]
---

# Managed Service Model

Design the model for operating AI systems post-launch — support, maintenance, continuous improvement, and value reporting.

Most AI engagements end at launch. The client has a working system, the consulting team moves on, and within months the system is degrading, trust is eroding, and no one knows how to intervene. Run & Enhance exists to prevent this. It defines a sustainable operating model that keeps AI systems healthy, improving, and demonstrably valuable — long after the initial build team has left.

## Goal

**Decision enabled:** What the Run & Enhance engagement covers, at what service level, and how value is demonstrated continuously to the client.
**Output:** A Managed Service Model Design — support tier definitions, SLA commitments, continuous improvement cadence, and value reporting framework.
**What this unlocks:** The operational contract between the practice and the client for AI systems in production. Prevents AI systems from degrading silently. Creates the ongoing relationship through which the AI-native enterprise continues to evolve.

## When to Use

- At the close of any Innovation Garage or AI Factory engagement — before handoff
- At the start of a standalone Run & Enhance engagement
- When scoping a managed services contract for existing AI systems
- When a client has AI systems in production that are not being actively maintained

---

## Managed Service Model Design Workflow

### Step 1: Inventory AI Systems in Scope

Define exactly which AI systems the managed service covers.

For each system:
```
System: [Name]
Pillar origin: [Which pillar built this — P3 Innovation Garage / P5 AI Factory]
Production since: [Date]
Business function: [What business process this supports]
Criticality: [Mission-critical / High / Medium / Low]
Current health: [Healthy / Degraded / Unknown]
Current ownership: [Who is currently responsible — client or practice]
Handoff status: [Documentation complete / In progress / Not started]
```

Criticality classification drives SLA tier assignment:
- **Mission-critical:** System failure directly impacts revenue, customer experience, or regulatory compliance
- **High:** System failure causes significant operational disruption
- **Medium:** System failure is disruptive but workarounds exist
- **Low:** System failure has minimal operational impact

---

### Step 2: Define Support Tiers

**L1 — Monitoring and Alerting**
Scope: Continuous monitoring against defined thresholds. Alert triage and initial response.
Response time: Alerts acknowledged within [X] minutes of threshold breach
Includes:
- Model performance monitoring (all five layers from model-monitoring.md)
- Incident logging and initial classification
- Escalation to L2 when threshold breaches exceed defined duration
- Weekly health reports delivered to client

**L2 — Diagnosis and Remediation**
Scope: Root cause analysis of incidents surfaced by L1. Standard remediations.
Response time: L2 engagement within [X] hours of escalation
Includes:
- Root cause analysis of model drift, output degradation, data pipeline failures
- Standard remediations: threshold adjustment, data pipeline repair, model redeployment
- Escalation to L3 when root cause requires model retraining or architectural change
- Incident post-mortem documentation

**L3 — Engineering and Improvement**
Scope: Model retraining, architectural changes, new feature development.
Response time: Scoped and scheduled within [X] business days of L2 escalation
Includes:
- Model retraining with updated data
- Architectural changes to address systemic issues
- Integration of user feedback into model improvement
- New capability development within agreed scope
- Quarterly model enhancement releases

---

### Step 3: Define SLAs

SLAs must be specific and measurable. Vague SLAs are unenforceable.

**Availability SLA:**
```
System: [Name] — Criticality: [Level]
Availability target: [99.X%] measured monthly
Measurement method: [How uptime is measured]
Exclusions: [Scheduled maintenance windows, force majeure]
Remedy: [What happens if SLA is missed — credit, review, remediation plan]
```

**Performance SLA:**
```
Primary metric: [From outcome-definition.md]
Baseline at launch: [Value]
SLA threshold: [Must stay above/below X]
Measurement cadence: [Daily / Weekly]
Reporting: [How and when performance is reported to client]
Remedy: [What happens if performance SLA is missed]
```

**Response time SLA:**
```
L1 alert acknowledgment: [X] minutes
L2 engagement after escalation: [X] hours
L3 scoping after escalation: [X] business days
Post-mortem delivery: [X] business days after incident resolution
```

**Fairness SLA** (where applicable):
```
Protected characteristics monitored: [List]
Maximum acceptable disparity: [X%] between best and worst performing group
Review cadence: [Monthly / Quarterly]
Remedy: [Mandatory retraining if disparity exceeds threshold]
```

---

### Step 4: Continuous Improvement Framework

Run & Enhance is not just maintenance — it is continuous improvement. Define the improvement cadence.

**Weekly:**
- Review monitoring dashboards
- Triage user feedback
- Identify quick wins (threshold adjustments, prompt tuning, minor fixes)

**Monthly:**
- Performance review against SLAs
- User feedback synthesis (from user-feedback-loops.md)
- Identify improvement opportunities for next sprint
- Client health report delivery

**Quarterly:**
- Full model performance review
- Model retraining assessment (is the model still fit for purpose, or does it need retraining?)
- Fairness audit
- Value capture reporting (ROI against original outcome brief)
- Roadmap update — new capabilities or scope changes

**Annually:**
- Full system review against AI-native enterprise north star
- Operating model alignment check (is the governance still appropriate?)
- Maturity model update (has the client's AI practice matured?)
- Contract and scope renewal

---

### Step 5: Value Reporting Framework

The practice must continuously demonstrate that the managed service is delivering value — not just that systems are running.

**Value metrics (from outcome-definition.md):**
```
Primary business metric: [Metric] — Baseline: [X] → Current: [X] → Target: [X]
Supporting metrics: [2-3 metrics with trend]
Guardrail metrics: [Status — all holding / at risk]
```

**Value report structure (monthly):**

```
# AI System Health Report
## Client: [Name] | Month: [Month Year]

### Executive Summary
[3 sentences: system health, primary metric status, notable events]

### System Health
| System | Availability | Performance | Fairness | Trend |
|--------|-------------|-------------|----------|-------|
| [Name] | [%] | [vs SLA] | [Status] | [↑/→/↓] |

### Value Delivered This Month
Primary metric: [Value] ([+/- X% vs baseline])
Key improvements: [What got better]
Incidents: [Count, severity, resolution summary]

### Next Month
Planned improvements: [What's coming]
Risks to watch: [What the Predictor is flagging]
```

---

## Managed Service Model Design Document

```
# Managed Service Model Design
## Client: [CLIENT NAME]
## Systems in scope: [Count and names]
## Service start date: [Date]
## Practitioner: [NAME]

---

## Systems Inventory
[Table: System | Criticality | Pillar origin | Handoff status]

---

## Support Model

### L1 — Monitoring and Alerting
Coverage: [Hours — 24x7 / Business hours / etc.]
Alert response: [X minutes]
Includes: [Specific systems and monitoring layers]

### L2 — Diagnosis and Remediation
Engagement trigger: [Conditions]
Response time: [X hours]
Standard remediations: [List]

### L3 — Engineering and Improvement
Engagement trigger: [Conditions]
Scoping timeline: [X business days]
Release cadence: [Quarterly / As needed]

---

## SLA Commitments
[Table: System | Availability | Performance metric | Response times | Remedy]

---

## Continuous Improvement Cadence
[Weekly / Monthly / Quarterly / Annual — what happens at each cadence]

---

## Value Reporting
Primary metric: [Metric] — current value and trend
Report delivery: [Cadence and format]
Review meeting: [Cadence and attendees]

---

## Transition from Build to Operate

### Handoff checklist
[ ] All systems documented — architecture, dependencies, known issues
[ ] Monitoring dashboards configured and tested
[ ] Alert routing confirmed — who gets what alerts
[ ] L2 runbooks written for common failure scenarios
[ ] Client contacts confirmed for escalation
[ ] SLAs signed off by both parties
[ ] First monthly report date scheduled

### Knowledge transfer
[What the client team needs to know to work alongside the managed service]

---

## Connection to AI-Native Enterprise
[How the Run & Enhance model supports the closed-loop shift — continuous learning feeding back into improvement]
```

## Quality Checklist

- [ ] Every system in scope has a criticality classification
- [ ] SLAs are specific numbers, not ranges or qualitative descriptions
- [ ] L1/L2/L3 boundary conditions are unambiguous — clear escalation triggers
- [ ] Value reporting is tied to the original outcome brief, not just operational metrics
- [ ] Handoff checklist is complete before managed service begins
- [ ] Fairness SLA defined for any system that affects decisions about people

---

## Handoff Block

```
## Handoff: Managed Service Model → Run & Enhance Engagement
### Client: [CLIENT NAME]
### Service start date: [DATE]

---

### Systems in Scope
[Names, criticality levels]

### SLA Summary
Availability: [X]% | Performance: [Metric ≥ X] | Response: [L1/L2/L3 times]

### First 30-Day Priorities
[What must be established or fixed in the first month]

### Value Baseline
[Primary metric at service start — the number we measure improvement against]

### Active Predictor Flags
[Failure modes most likely in the first 90 days of operation]

---
*Paste this block as opening context for Run & Enhance engagement kickoff.*
*Run /project:deck managed-service-model to generate a service model presentation.*
```
