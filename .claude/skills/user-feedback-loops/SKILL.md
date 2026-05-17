---
name: user-feedback-loops
framework: ASPF — AI Strategy Practice Framework
entry-point: During
description: Design and operate structured feedback mechanisms that capture how users experience an AI system in production — and route that signal back into improvement cycles. Use this skill when a team needs to systematically collect, analyze, and act on user feedback about an AI system. Triggers include "how do we know if users trust this AI?", "we're getting complaints but don't know why", "users aren't adopting the AI feature", "we need to know what's working", or any moment where user signal about an AI system needs to be structured and acted on. Pairs with model-monitoring.md for complete operational coverage.
ai_leverage: high
agents: [AI Researcher, Change & Enablement Lead, AI Product Manager]
---

# User Feedback Loops

Design the mechanisms that capture how users actually experience the AI system — and close the loop from feedback to improvement.

Model metrics tell you how the system performs technically. User feedback tells you whether the system works for people. These are different things. A model can be statistically accurate while creating experiences that erode trust, generate workarounds, or cause harm in ways that never appear in a confusion matrix. Without structured user feedback, teams optimize for metrics that don't match what users actually need.

## Goal

**Decision enabled:** Whether the AI system is working for users — and if not, what needs to change in the system, the interface, or the surrounding process.
**Output:** A User Feedback Plan — defining what to collect, how to collect it, how to analyze it, and how to close the loop from feedback to action.
**What this unlocks:** The human signal layer that model monitoring can't provide. Prevents FM-09 (Change Resistance) from becoming permanent by catching adoption and trust issues early. Generates the qualitative data that makes the retrospective meaningful.

## When to Use

- At deployment — design feedback mechanisms before launch
- When adoption is lower than expected
- When user complaints are arriving informally (through support, through managers) without structure
- When the team has model metrics but no user signal
- As part of any mid-project audit

---

## Feedback Loop Design

### Layer 1: In-System Feedback

The simplest and highest-volume feedback mechanism — signals collected directly from user interactions with the AI system.

**Explicit feedback mechanisms:**
- **Thumbs up / thumbs down** — simple binary signal on AI outputs. Low friction, high volume, limited signal.
- **Star ratings** — slightly richer signal, more friction.
- **Correction interfaces** — user can correct or override the AI output. Most valuable signal: what the AI got wrong and what the right answer was.
- **Free-text feedback** — open comment field. Low volume, high signal.
- **Report / flag** — for harmful, biased, or incorrect outputs.

**Implicit behavioral signals:**
- **Output acceptance rate** — did the user use the AI output or ignore it?
- **Edit rate** — how often do users modify AI outputs before using them?
- **Abandonment rate** — how often do users start an AI-assisted flow and abandon it?
- **Task completion** — do users complete their intended task when the AI is involved?
- **Re-request rate** — how often do users ask for a new output after receiving the first?

```
In-system feedback design:
Explicit mechanisms: [List what will be built]
Implicit signals to track: [List behavioral events to log]
Collection volume expected: [Per day / week]
Storage: [Where feedback is stored]
```

---

### Layer 2: Structured User Research

Periodic, deliberate research to go deeper than in-system signals.

**Methods:**

**Brief intercept surveys (in-product)**
- 2-4 questions, shown after a key AI interaction
- Sample: "How confident were you in this recommendation? / How much did you change the AI's output?"
- Frequency: Continuous, rotating sample — not every user every time

**Usage diaries**
- Ask a small cohort (5-10 users) to log their AI system interactions for 1-2 weeks
- Captures the full context of how the AI fits into their workflow — not just the interaction moment

**Usability sessions**
- Moderated observation of users working with the AI system
- Focus on: where do they hesitate? Where do they override? Where do they trust blindly?
- Frequency: Monthly or after significant changes

**Longitudinal interviews**
- 30-minute interviews with a rotating set of 5-8 users
- Focus on: how has their relationship with the AI system changed over time? What have they learned to trust and not trust?
- Frequency: Quarterly

```
Research calendar:
[Month]: [Method] — [Sample size] — [Focus question]
[Month+1]: [Method] — [Sample size] — [Focus question]
...
```

---

### Layer 3: Proxy Signal Monitoring

Signals from systems adjacent to the AI — that reveal how the AI is affecting broader outcomes without direct user feedback.

**Support ticket analysis:**
- Tag and track support tickets related to AI system outputs
- Monitor volume, sentiment, and issue category over time
- Alert if AI-related ticket volume increases significantly

**Workaround detection:**
- Are users creating processes to bypass the AI system?
- Are there informal channels (Slack, email threads) where users share tips for getting around the AI?
- Workarounds are the most important signal the AI system is failing — users don't complain, they route around

**Downstream outcome tracking:**
- What happens after users act on AI outputs?
- Track downstream business metrics that the AI is meant to improve
- Connect model outputs to downstream outcomes to build the causal case

```
Proxy signal monitoring:
Support ticket tracking: [Tag / category to monitor]
Workaround signals: [How to detect — support, Slack monitoring, manager conversations]
Downstream outcome: [Metric] — [How tracked] — [Frequency]
```

---

## Feedback Analysis Protocol

### Weekly Analysis (High Volume Signals)

- Review thumbs down / flag rate vs. previous week
- Scan free-text feedback for new themes
- Check behavioral signal dashboard for anomalies
- Flag anything unusual for deeper investigation

### Monthly Analysis (Structured Research)

- Aggregate intercept survey results — look for trends
- Code and theme free-text feedback from the month
- Compare edit rate and acceptance rate to baselines
- Review support ticket analysis for AI-related themes
- Produce a one-page summary: what's working, what's not, what changed

### Quarterly Analysis (Strategic Review)

- Interview cohort synthesis — what are users learning and unlearning?
- Longitudinal trend analysis across all signal types
- Fairness lens: are certain user groups having systematically different experiences?
- Recommend changes to the AI system, the interface, or the surrounding process

---

## Closing the Loop

Collecting feedback without acting on it is worse than not collecting it — it signals to users that their input doesn't matter.

**The feedback-to-action cycle:**

```
1. Signal collected
2. Weekly review — is this a new pattern or a known issue?
3. If new pattern: investigate root cause (AI issue / interface issue / process issue / expectation mismatch)
4. Root cause identified: assign to owner with timeline
5. Change made: [Model retrain / interface update / process change / communication]
6. Impact measured: did the feedback pattern change after the intervention?
7. Users notified: if appropriate, close the loop with users who flagged the issue
```

**Communication back to users:**
- When a user's feedback leads to a change, tell them — "We noticed X and changed Y"
- This is the most powerful trust-building mechanism available
- Even a monthly summary ("here's what we improved based on your feedback") increases trust significantly

---

## User Feedback Plan Output

```
# User Feedback Plan
## System: [AI SYSTEM NAME]
## Date: [DATE]
## Feedback Owner: [Role]

---

## Feedback Mechanism Summary
| Layer | Mechanism | Volume | Frequency | Owner |
|-------|-----------|--------|-----------|-------|
| In-system | [Mechanism] | [Expected] | Continuous | [Role] |
| Research | [Method] | [Sample] | [Cadence] | [Role] |
| Proxy | [Signal] | [Source] | [Cadence] | [Role] |

## Key Metrics to Track
1. [Metric] — Baseline: [Value] — Alert if: [Threshold]
2. [Metric] — Baseline: [Value] — Alert if: [Threshold]
3. [Metric] — Baseline: [Value] — Alert if: [Threshold]

## Analysis Cadence
Weekly: [What, who, how long]
Monthly: [What, who, output]
Quarterly: [What, who, output]

## Action Protocol
Feedback threshold to trigger investigation: [Definition]
Investigation owner: [Role]
Typical response time: [Days]
User communication plan: [How users are informed of changes]

## Current Feedback Health
As of [DATE]:
Acceptance rate: [%] vs baseline [%]
Edit rate: [%] vs baseline [%]
Explicit negative rate: [%] vs baseline [%]
Open themes: [List]
```

## Quality Checklist

- [ ] All three feedback layers designed before deployment — not reactive
- [ ] Behavioral signals defined and instrumented in the system
- [ ] Research calendar scheduled and resourced
- [ ] Proxy signals identified and monitored
- [ ] Analysis protocol documented with named owners
- [ ] Feedback-to-action cycle has clear accountability
- [ ] User communication plan exists for when feedback leads to changes

---

## Escalation to Mid-Project Audit

When feedback signals indicate a systemic issue beyond operational fixes:

```
Feedback Escalation → Mid-Project Audit
Triggered by: [What pattern or threshold triggered escalation]
Affected users: [Who and how many are experiencing the issue]
Actions already taken: [What was tried at the operational level]
Hypothesis: [What we think is causing this]

→ Open mid-project-audit.md and paste this as opening context.
```
