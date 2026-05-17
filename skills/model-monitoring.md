---
name: model-monitoring
framework: ASPF — AI Strategy Practice Framework
entry-point: During
description: Design and run an ongoing monitoring plan for an AI system in production — covering model performance, data drift, output quality, and incident detection. Use this skill when an AI system has been deployed and needs ongoing operational oversight. Triggers include "how do we know if the model is still working?", "our AI outputs seem different lately", "we haven't checked performance since launch", or any moment where operational health of a deployed AI system needs to be assessed or structured. Pairs with user-feedback-loops.md for complete operational coverage.
ai_leverage: medium
agents: [ML/AI Engineer, AI Practice Lead, AI Product Manager]
---

# Model Monitoring

Design and run the ongoing monitoring plan that keeps a deployed AI system healthy — before it fails silently.

AI systems degrade in ways traditional software doesn't. A standard application fails loudly — errors, crashes, alerts. An AI system fails quietly — outputs drift, quality degrades, bias amplifies — while the system continues to run and appear functional. Without structured monitoring, teams discover these failures only when users complain or auditors flag them. By then, harm has already occurred.

## Goal

**Decision enabled:** Whether the AI system is performing as intended in production — and if degradation is detected, what to do about it.
**Output:** A Model Monitoring Plan — defining what to measure, at what frequency, with what thresholds, and what happens when a threshold is crossed.
**What this unlocks:** Proactive operational control. Prevents FM-06 (Evaluation Gap) in production — where teams have no reliable way to determine if the system is working. Gives the team the signal to catch FM-08 (Pilot Trap) before production conditions diverge too far from pilot conditions.

## When to Use

- At deployment — design the monitoring plan before launch, not after
- 30 days post-deployment — first structured health check
- When AI outputs have changed noticeably without a system change
- When user complaints or feedback suggest performance degradation
- Before scaling a system from pilot to broader production
- As part of any mid-project audit

---

## Monitoring Framework

### Layer 1: Input Monitoring (Data Drift)

Monitor the data the model receives in production — does it still look like what it was trained on?

**What to measure:**
- **Feature distribution shift** — are the statistical distributions of input features changing? (mean, variance, skew for numeric features; frequency distributions for categorical)
- **Missing value rates** — are inputs arriving with more nulls or blanks than expected?
- **Out-of-distribution inputs** — are inputs arriving that fall outside the training data range?
- **Volume anomalies** — is the request rate significantly different from expected?

**Monitoring approach:**
```
Input monitoring:
Feature [A]:  Baseline distribution: [stats] | Alert if: [threshold]
Feature [B]:  Baseline distribution: [stats] | Alert if: [threshold]
Missing rate: Baseline: [%] | Alert if: > [threshold]%
Volume:       Baseline: [requests/period] | Alert if: < [min] or > [max]

Frequency: [Real-time / Hourly / Daily]
Tool: [Monitoring platform or custom implementation]
```

---

### Layer 2: Output Monitoring (Prediction Drift)

Monitor what the model is producing — are predictions or outputs shifting over time?

**What to measure:**
- **Prediction distribution** — for classifiers: are class prediction rates changing? For regression: is the prediction range shifting?
- **Confidence scores** — for probabilistic models: is average confidence changing?
- **Output quality proxies** — measurable signals that correlate with output quality even without ground truth labels (e.g., user acceptance rate, downstream system behavior)
- **Anomalous outputs** — outputs that fall outside expected ranges, are internally inconsistent, or violate known constraints

**Monitoring approach:**
```
Output monitoring:
Metric [A]:  Baseline: [value/distribution] | Alert if: [threshold]
Metric [B]:  Baseline: [value/distribution] | Alert if: [threshold]

Frequency: [Real-time / Hourly / Daily]
Alert channel: [Slack / PagerDuty / Email / Dashboard]
```

---

### Layer 3: Performance Monitoring (Ground Truth Comparison)

Where ground truth labels become available with a delay (e.g., loan defaults, click-through rates), compare predictions against actuals.

**What to measure:**
- **Primary metric** — the metric defined in outcome-definition.md, measured in production
- **Model performance metrics** — accuracy, precision, recall, F1, AUC, RMSE — whichever apply
- **Guardrail metrics** — the metrics defined in outcome-definition.md that must not degrade
- **Segment performance** — does the model perform consistently across demographic groups and use case segments?

**Monitoring approach:**
```
Performance monitoring:
Primary metric:      Baseline: [value] | Target: [value] | Alert if: [threshold]
Guardrail [A]:       Must stay [above/below]: [threshold] | Current: [value]
Segment performance: Monitor groups: [list] | Max acceptable gap: [%]

Ground truth lag: [How long before actuals are available — hours, days, weeks]
Evaluation frequency: [How often to run evaluation — aligns with ground truth lag]
```

---

### Layer 4: Fairness Monitoring

Monitor for disparate impact and bias amplification over time — not just at launch.

**What to measure:**
- **Demographic parity** — are prediction rates similar across demographic groups?
- **Equal opportunity** — are true positive rates similar across groups?
- **Calibration** — are confidence scores equally reliable across groups?
- **Adverse action rates** — for systems that deny or restrict access: are rates disproportionate by group?

**Monitoring approach:**
```
Fairness monitoring:
Protected characteristics to monitor: [List]
Fairness metric: [Demographic parity / Equal opportunity / Calibration / Other]
Baseline gap: [Acceptable disparity at launch]
Alert if gap exceeds: [Threshold]

Frequency: [Weekly / Monthly — depends on volume and stakes]
Reviewer: [Ethics & Risk Advisor / Legal / Designated fairness reviewer]
```

---

### Layer 5: Operational Monitoring

Monitor the system's operational health — availability, latency, error rates.

**What to measure:**
- **Latency** — p50, p95, p99 response times
- **Error rates** — system errors, model errors, downstream failures
- **Availability** — uptime, degraded service periods
- **Throughput** — requests processed per unit time

```
Operational monitoring:
Latency p95: Baseline: [ms] | Alert if: > [threshold]ms
Error rate:  Baseline: [%] | Alert if: > [threshold]%
Availability: Target: [%] | Alert if: < [threshold]%

Tool: [APM platform / custom / cloud provider monitoring]
```

---

## Alert and Response Protocol

For each alert threshold, define what happens when it fires:

```
Alert: [Description of what triggered]
Severity: [P1 Critical / P2 High / P3 Medium / P4 Low]
Immediate response: [Who is notified, within what timeframe]
Investigation owner: [Role responsible for root cause]
Escalation path: [If not resolved in X hours, escalate to Y]
Resolution options:
  [ ] Retrain model on updated data
  [ ] Roll back to previous model version
  [ ] Adjust decision threshold
  [ ] Add human review gate
  [ ] Pause system — route to manual process
  [ ] Escalate to AI Practice Lead for strategic decision
```

---

## Model Monitoring Plan Output

```
# Model Monitoring Plan
## System: [AI SYSTEM NAME]
## Version: [Model version]
## Deployment date: [DATE]
## Monitoring owner: [Role]

---

## Monitoring Dashboard
[Link to live dashboard or describe where metrics are visible]

## Alert Summary
| Layer | Metric | Baseline | Alert Threshold | Frequency | Owner |
|-------|--------|----------|-----------------|-----------|-------|
| Input | [Metric] | [Value] | [Threshold] | [Freq] | [Role] |
| Output | [Metric] | [Value] | [Threshold] | [Freq] | [Role] |
| Performance | [Metric] | [Value] | [Threshold] | [Freq] | [Role] |
| Fairness | [Metric] | [Value] | [Threshold] | [Freq] | [Role] |
| Operational | [Metric] | [Value] | [Threshold] | [Freq] | [Role] |

## Retraining Trigger
Retrain the model when: [Specific condition — e.g., performance metric drops below X for Y consecutive days]
Retraining owner: [Role]
Retraining cadence (scheduled): [Monthly / Quarterly / As triggered]

## Review Cadence
Weekly: [What is reviewed weekly and by whom]
Monthly: [What is reviewed monthly and by whom]
Quarterly: [Full monitoring plan review — is this still the right set of metrics?]

## Current Health Status
As of [DATE]:
Input drift: [Green / Yellow / Red]
Output drift: [Green / Yellow / Red]
Performance: [Green / Yellow / Red]
Fairness:    [Green / Yellow / Red]
Operational: [Green / Yellow / Red]
```

## Quality Checklist

- [ ] All five monitoring layers defined with specific metrics
- [ ] Baselines established at deployment — cannot monitor without a baseline
- [ ] Alert thresholds are specific numbers, not vague descriptions
- [ ] Response protocol defined for each severity level
- [ ] Retraining trigger defined
- [ ] Fairness monitoring includes segment-level analysis
- [ ] Review cadence scheduled in a calendar, not just documented

---

## Escalation to Mid-Project Audit

When monitoring surfaces a significant or sustained alert that the operational team cannot resolve, escalate to a full mid-project audit:

```
Monitoring Escalation → Mid-Project Audit
Triggered by: [What alert or pattern triggered escalation]
Duration of issue: [How long has this been detected]
Actions already taken: [What was tried]
Current system status: [Running normally / Degraded / Suspended]

→ Open mid-project-audit.md and paste this as opening context.
```
