---
name: outcome-definition
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Define measurable outcomes and success criteria for an AI initiative before any build begins. Use this skill when a team needs to answer "how will we know if this worked?" Triggers include questions about success metrics, KPIs for AI features, how to measure AI impact, or how to make the case for AI ROI. Also triggers when a team has a working AI system but no definition of success. Do not proceed to readiness audit or delivery without a defined outcome.
ai_leverage: high
agents: [AI Product Manager, AI Strategy Lead, AI Researcher]
---

# Outcome Definition

Define what success looks like — before any AI is built, bought, or deployed.

Outcome definition is the least glamorous and most skipped step in AI strategy. Teams rush to build because defining success feels slower than starting. It isn't. Projects without defined outcomes drift, overspend, and can't defend their value when questioned.

## Goal

**Decision enabled:** What success looks like — stated specifically enough that any stakeholder can independently determine whether the initiative succeeded or failed.
**Output:** An Outcome Brief — a hypothesis-format outcome statement, a primary metric with baseline and target, supporting metrics, guardrail metrics, and an explicit definition of failure.
**What this unlocks:** Accountability. Once an outcome brief exists, the team can no longer move the goalposts. It also makes the readiness audit meaningful — you can only assess readiness relative to a defined destination. And it gives leadership a clear ROI frame without requiring the team to oversell.

If this skill cannot be completed — because the team genuinely cannot define what success looks like — that is itself a critical signal: the initiative is not ready to proceed.

## When to Use

- Before starting any AI initiative — lock in what "done" looks like
- When leadership asks "what's the ROI of this AI work?"
- When a pilot has completed and the team isn't sure whether it succeeded
- When an AI system is running but no one can articulate what it's improving
- When two stakeholders disagree on whether the AI initiative is working

## Outcome Definition Workflow

### Step 1: Separate Output from Outcome

Most teams define outputs — what the AI produces. Outcomes are what changes as a result.

| Output (what AI does) | Outcome (what changes) |
|---|---|
| Generates summaries | Analysts spend 2 fewer hours per week on reporting |
| Classifies support tickets | First-response time drops from 4h to 45min |
| Recommends next action | Conversion rate increases by 8% |
| Flags anomalies | Critical incidents detected 3x faster |

The outcome is always about change in human behavior, business performance, or user experience — not about the AI system itself.

### Step 2: Write the Outcome Statement

Use this structure — adapted from IBM Hills and Lean UX hypothesis format:

```
We believe that [AI approach]
will help [user/team]
to [behavior change / new capability]
which will result in [measurable business or user outcome]
we'll know this is true when [specific signal or metric changes by X within Y timeframe].
```

Example:
```
We believe that an AI-assisted ticket classification system
will help the support team
to route incoming requests without manual review
which will result in a 40% reduction in first-response time
we'll know this is true when average first-response time drops below 2 hours
within 60 days of full deployment.
```

### Step 3: Define the Metric Set

Every outcome needs three types of metrics:

**Primary metric** — the single number that determines success or failure
- Must be measurable before the AI system launches (baseline) and after
- Must be directly influenced by the AI system's behavior
- Must be meaningful to leadership, not just to the team

**Supporting metrics** — 2-4 indicators that explain movement in the primary metric
- Help diagnose whether the primary metric is moving for the right reasons
- Surface unintended consequences

**Guardrail metrics** — indicators that must not degrade
- Protect against the AI system optimizing for the primary metric in harmful ways
- Examples: user satisfaction, error rate, time-to-correction, bias indicators

```
# Metric Definition

## Primary Metric
- Name: [Metric name]
- Definition: [Exact formula or measurement method]
- Baseline: [Current value before AI]
- Target: [Expected value after AI — be specific]
- Timeline: [When we expect to hit the target]
- Data source: [Where this is measured]

## Supporting Metrics
1. [Metric] — [Definition] — [Baseline] — [Direction: ↑ or ↓]
2. [Metric] — [Definition] — [Baseline] — [Direction]
3. [Metric] — [Definition] — [Baseline] — [Direction]

## Guardrail Metrics (must not degrade)
1. [Metric] — [Threshold: must stay above/below X]
2. [Metric] — [Threshold]
```

### Step 4: Classify the Outcome Type

Use Teresa Torres's outcome typing to clarify what level of impact is being claimed:

**Business outcome** — financial or operational metric the organization cares about
Examples: revenue, cost reduction, churn, time-to-market

**Product outcome** — user behavior change that drives business outcomes
Examples: feature adoption, session depth, task completion rate

**Traction metric** — leading indicator that a product outcome is likely
Examples: activation rate, return visits, usage frequency

Most AI initiatives operate at the product outcome or traction metric level initially. Be honest about this — overclaiming business outcomes for early-stage AI work damages credibility.

### Step 5: Produce the Outcome Brief

```
# Outcome Brief
## Project: [PROJECT NAME]
## AI Method: [From method selection]
## Date: [DATE]

### Outcome Statement
[Full hypothesis-format statement]

### Outcome Type: [Business / Product / Traction]

### Primary Metric
- Name: [Metric]
- Baseline: [Current value]
- Target: [Goal]
- Timeline: [Timeframe]
- Source: [Where measured]

### Supporting Metrics
[2-4 metrics with baselines and directions]

### Guardrail Metrics
[1-3 metrics that must not degrade]

### Measurement Plan
- How will we collect baseline data? [Method]
- How will we measure post-launch? [Method]
- How often will we review? [Cadence]
- Who reviews and makes decisions? [Owner]

### Definition of Failure
[At what point do we conclude the AI approach isn't working and reassess?]
```

## Common Mistakes

**Vanity metrics** — measuring what's easy to measure, not what matters
*Fix: Always trace the metric back to a business or user outcome*

**Overclaiming** — attributing business outcomes to an AI feature that only moves a traction metric
*Fix: Be explicit about outcome type and the causal chain between levels*

**No baseline** — launching without measuring the current state first
*Fix: Baseline must be established before any AI is deployed*

**Single metric** — optimizing for one number without guardrails
*Fix: Always define at least one guardrail metric alongside the primary*

## Quality Checklist

- [ ] Outcome is stated as change, not as AI capability
- [ ] Hypothesis format is complete with a specific, measurable signal
- [ ] Primary metric has a baseline, target, and timeline
- [ ] At least two supporting metrics defined
- [ ] At least one guardrail metric defined
- [ ] Outcome type classified honestly
- [ ] Definition of failure is stated

---

## Handoff Block

```
## Handoff: Outcome Definition → Readiness Audit
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Outcome Statement
[Full statement]

### Primary Metric
[Name — Baseline → Target within Timeline]

### Guardrail Metrics
[List]

### Definition of Failure
[Statement]

### Open Measurement Questions
[What still needs to be resolved before measurement can begin]

### Active Predictor Flags
[Risks or failure patterns surfaced during this session]

---
*Paste this block as your first message when opening readiness-audit.md.*
```
