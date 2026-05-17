---
name: problem-qualification
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Determine whether a problem is worth solving with AI before any method, tool, or resource is committed. Use this skill at the very start of a project or initiative when a team is considering using AI. Triggers include questions like "should we use AI for this?", "is this a good AI use case?", "would AI help here?", or any moment where the team is evaluating whether to bring AI into a problem space. Also triggers when a team has already decided to use AI but hasn't clearly defined the problem it's solving. Do not proceed to method selection until problem qualification is complete.
ai_leverage: high
agents: [AI Strategy Lead, AI Product Manager, AI Researcher]
---

# Problem Qualification

Determine whether a problem is genuinely worth solving with AI before committing any method, tool, or resource.

The most common failure mode in AI strategy is solution-first thinking — teams adopt AI tools before they've defined the problem. This skill forces the problem to be named, scoped, and validated before anything else moves.

## Goal

**Decision enabled:** Go / No-go on using AI for this problem.
**Output:** A Problem Qualification Record — a scored, documented decision with rationale that the team can stand behind and revisit.
**What this unlocks:** Method selection. No AI method discussion happens until this record exists. The qualification record also becomes the first input to the APDF handoff brief — it is the foundation every subsequent skill builds on.

If this skill produces a "Poor fit" or "Weak fit" classification, it also unlocks the most valuable outcome of all: not wasting time and money on an AI approach that was never going to work.

## When to Use

- A team is considering AI for a new project or feature
- Someone has proposed using a specific AI tool without a clear problem statement
- Leadership has asked the team to "explore AI" without defined outcomes
- A previous AI initiative failed and the team wants to start fresh
- The team is unsure whether AI is the right approach or whether a simpler solution exists

## Qualification Workflow

### Step 1: Name the Problem

Before evaluating AI's fit, the problem must be stated clearly. Ask:

- What specific outcome are we trying to improve?
- Who experiences this problem, and how often?
- What does the current state look like — how is this handled today?
- What evidence do we have that this is a real problem worth solving?

If the team cannot answer these questions, stop. The problem is not ready for AI evaluation.

Produce a one-sentence problem statement:

```
[User/role] struggles to [action/task] because [root cause],
which results in [measurable negative outcome].
```

### Step 2: Apply the AI Fit Test

Evaluate the problem against five qualification criteria:

**1. Data availability**
Does sufficient, relevant, and accessible data exist to support an AI approach?
- Pass: Clean, structured data exists at sufficient volume
- Caution: Data exists but needs significant preparation
- Fail: No relevant data, or data is inaccessible or too sensitive

**2. Pattern dependency**
Does solving this problem require recognizing patterns across large or complex data?
- Pass: The problem is fundamentally about finding patterns humans struggle to see at scale
- Caution: Patterns exist but are simple enough for rules-based logic
- Fail: The problem is novel, one-off, or doesn't benefit from pattern recognition

**3. Scale requirement**
Would the value of this solution increase meaningfully at scale?
- Pass: Significant volume — solving this manually is a bottleneck
- Caution: Moderate volume — automation helps but isn't critical
- Fail: Low volume — human judgment is faster and more appropriate

**4. Human judgment replaceability**
Can the decisions required be made without nuanced ethical, relational, or contextual human judgment?
- Pass: Decisions are routine and rule-like
- Caution: Decisions require some judgment but can be structured
- Fail: Decisions require deep contextual wisdom, ethical judgment, or relationship trust

**5. Error tolerance**
Can the system tolerate errors from AI without catastrophic or high-stakes consequences?
- Pass: Errors are low-stakes and recoverable
- Caution: Errors have moderate consequences — human review loop needed
- Fail: Errors are high-stakes — AI risk exceeds potential value

### Step 3: Score and Classify

Score each criterion: Pass = 2, Caution = 1, Fail = 0. Maximum score: 10.

```
AI Fit Score:

Data Availability:           [ ] Pass  [ ] Caution  [ ] Fail
Pattern Dependency:          [ ] Pass  [ ] Caution  [ ] Fail
Scale Requirement:           [ ] Pass  [ ] Caution  [ ] Fail
Human Judgment:              [ ] Pass  [ ] Caution  [ ] Fail
Error Tolerance:             [ ] Pass  [ ] Caution  [ ] Fail

Total: __ / 10

Classification:
8–10  → Strong AI fit. Proceed to ai-method-selection.md.
5–7   → Conditional fit. Proceed with constraints noted.
3–4   → Weak fit. Consider simpler alternatives first.
0–2   → Poor fit. AI is likely the wrong approach for this problem.
```

### Step 4: Document the Qualification Decision

Produce a Problem Qualification Record:

```
# Problem Qualification Record
## Problem Statement
[One-sentence problem statement]

## Evidence of Problem
[What data, research, or observation confirms this is real]

## Current State
[How this is handled today — manual process, existing tool, workaround]

## AI Fit Score: __ / 10
[Score breakdown with one-line rationale per criterion]

## Classification: [Strong / Conditional / Weak / Poor]

## Decision
[ ] Proceed to AI Method Selection
[ ] Proceed with constraints: [list constraints]
[ ] Explore simpler alternatives first
[ ] Do not proceed — AI is not the right approach

## Constraints & Conditions
[Any conditions that must be met before proceeding]

## Open Questions
[What we still need to know before committing]
```

## Simpler Alternatives Check

Before qualifying AI, confirm the team has considered:
- **Rules-based logic** — can this be solved with if/then rules?
- **Better tooling** — does an existing tool already solve this?
- **Process change** — would a workflow change remove the problem?
- **More data / better data** — is the problem actually a data quality issue?

AI should be chosen because it's the best approach — not because it's novel.

## Quality Checklist

Before delivering the qualification record:
- [ ] Problem statement is specific enough to be falsifiable
- [ ] All five criteria scored with rationale
- [ ] Simpler alternatives considered and documented
- [ ] Classification matches score
- [ ] Decision is clear and actionable

---

## Handoff Block

At the close of Problem Qualification, generate this block and paste it as the **opening message** for AI Method Selection.

```
## Handoff: Problem Qualification → AI Method Selection
### Project: [PROJECT NAME]
### Team: [TEAM / ROLES INVOLVED]
### Date: [DATE]

---

### Problem Statement
[One-sentence problem statement]

### AI Fit Score: __ / 10
- Data Availability: [Pass / Caution / Fail]
- Pattern Dependency: [Pass / Caution / Fail]
- Scale Requirement: [Pass / Caution / Fail]
- Human Judgment: [Pass / Caution / Fail]
- Error Tolerance: [Pass / Caution / Fail]

### Classification: [Strong / Conditional / Weak / Poor]

### Constraints to Carry Forward
[Any conditions or limitations that must shape method selection]

### Open Questions
[What still needs to be resolved]

### Active Risk Flags
[Any risks surfaced by the Predictor during this session]

---
*Paste this block as your first message when opening ai-method-selection.md.*
```
