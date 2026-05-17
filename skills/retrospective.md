---
name: retrospective
framework: ASPF — AI Strategy Practice Framework
entry-point: After
description: Evaluate an AI initiative after it has run — comparing outcomes to intentions, extracting lessons, and generating inputs for the next cycle. Use this skill at the close of an AI project or after a meaningful phase of AI deployment. Triggers include "the pilot is complete", "we've been running this for X months, how is it doing?", "we want to learn from this before we do it again", or any post-delivery evaluation of an AI initiative. Output feeds directly back into the Before entry point for the next project.
ai_leverage: high
agents: [AI Practice Lead, AI Product Manager, AI Researcher, AI Strategy Lead]
---

# Retrospective

Evaluate what actually happened — and turn it into intelligence for the next AI initiative.

Most teams skip retrospectives on AI work because the work moves fast and there's always something next. This is why the same failures repeat. A structured retrospective closes the learning loop — turning one team's lived experience into the pattern library that prevents the next team from failing in the same way.

## Goal

**Decision enabled:** What to carry forward, what to change, and what to watch for in the next AI initiative.
**Output:** A Retrospective Report — an outcome measurement against the original brief, a process adherence audit, top lessons with next-initiative implications, and failure mode library contributions.
**What this unlocks:** Compounding improvement. A team that retrospects well gets measurably better at AI strategy work with each cycle. The feed-forward block at the end of the retrospective becomes the opening context for the next Before session — closing the loop between what was learned and what gets applied. Without this, every project starts from zero.

## When to Use

- A pilot has concluded — success or failure
- An AI system has been in production for a meaningful period (30, 60, 90 days)
- An AI initiative is being wound down or handed off
- Leadership has asked whether the AI investment paid off
- The team is planning its next AI initiative and wants to build on what it learned

## Retrospective Workflow

### Step 1: Reconstruct the Intention

Before evaluating what happened, reconstruct what was intended. Pull from the outcome-definition.md output if available. If not, interview the team.

```
### Original Intention
- Problem statement: [What problem were we solving?]
- AI method: [What approach did we use?]
- Primary metric: [What were we trying to move?]
- Target: [What was the goal?]
- Timeline: [When did we expect to hit it?]
- Definition of success: [How did we define "it worked"?]
```

If no outcome brief was produced at the start of the project, document this as a process failure in the retrospective.

### Step 2: Measure Actual Outcomes

Compare intention to reality across the full metric set.

```
### Outcome Measurement

Primary Metric
- Intended: [Target]
- Actual: [Measured result]
- Delta: [Difference — direction and magnitude]
- Assessment: [Exceeded / Met / Missed / Cannot determine]

Supporting Metrics
| Metric | Intended | Actual | Assessment |
|--------|----------|--------|------------|
| [Metric 1] | | | |
| [Metric 2] | | | |

Guardrail Metrics
| Metric | Threshold | Actual | Status |
|--------|-----------|--------|--------|
| [Metric 1] | Must stay [above/below X] | | [Held / Breached] |

### Overall Outcome: [Exceeded / Met / Partially met / Missed / Cannot determine]
```

If "cannot determine" — document why. This is itself a critical finding (evaluation gap — FM-06).

### Step 3: Audit the Process

Evaluate how well ASPF's own process was followed. Honest process audits generate the most useful lessons.

**Problem definition**
- Was a problem qualification run? [ ] Yes [ ] No [ ] Partial
- Was the problem statement specific and measurable? [ ] Yes [ ] No
- Did the solution remain focused on the original problem throughout? [ ] Yes [ ] No — if no, what changed and why?

**Method selection**
- Was the method chosen based on problem type analysis? [ ] Yes [ ] No
- Did the method match the problem type? [ ] Yes [ ] No — if no, what was the mismatch?
- Was the build/buy/integrate decision made deliberately? [ ] Yes [ ] No

**Risk management**
- Was a risk register produced? [ ] Yes [ ] No
- Did any risks from the register materialize? [ ] Yes [ ] No — if yes, which ones?
- Did any risks materialize that were NOT in the register? [ ] Yes [ ] No — if yes, which ones?

**Readiness**
- Was a readiness audit conducted? [ ] Yes [ ] No
- Were critical gaps identified in advance? [ ] Yes [ ] No
- Did gaps that weren't identified surface during execution? [ ] Yes [ ] No — if yes, which dimension?

**Outcomes**
- Was an outcome brief produced before work began? [ ] Yes [ ] No
- Was a baseline established before deployment? [ ] Yes [ ] No
- Was measurement automated or manual? [ ] Automated [ ] Manual [ ] Not measured

### Step 4: Extract Lessons

Structure lessons in three categories — what worked, what failed, and what was missing.

```
### What Worked
[Specific practices, decisions, or approaches that produced good results]
1. [Practice] — [Why it worked / what it produced]
2. ...

### What Failed
[Specific practices, decisions, or approaches that produced poor results or were skipped]
1. [Practice / decision] — [What happened / what it cost]
2. ...

### What Was Missing
[Capabilities, skills, tools, or processes that didn't exist and should]
1. [Gap] — [What difference it would have made]
2. ...
```

### Step 5: Generate Failure Mode Contributions

The retrospective's most important output for the organization is its contribution back to the failure mode library — new patterns discovered during this project that should inform future projects.

```
### New Failure Patterns Discovered

#### [Pattern Name]
- Phase where it appeared: [Before / During / After]
- How it manifested: [Description]
- Early signal that was missed: [What could have been seen earlier]
- How to prevent: [Recommended intervention]
- Should this be added to the failure mode library? [ ] Yes [ ] No
```

### Step 6: Produce the Retrospective Report

```
# AI Initiative Retrospective
## Project: [PROJECT NAME]
## AI Method: [Method used]
## Duration: [Start → End date]
## Team: [Roles involved]
## Report date: [DATE]

---

## Summary
[2–3 sentences: what we tried, what happened, what we learned]

## Outcome Assessment: [Exceeded / Met / Partially met / Missed / Cannot determine]

### Primary Metric
[Intended → Actual → Delta]

### Guardrail Status: [All held / [N] breached]

---

## Process Audit Summary
- Problem definition: [Strong / Adequate / Weak / Skipped]
- Method selection: [Strong / Adequate / Weak / Skipped]
- Risk management: [Strong / Adequate / Weak / Skipped]
- Readiness audit: [Strong / Adequate / Weak / Skipped]
- Outcome definition: [Strong / Adequate / Weak / Skipped]

---

## Top 3 Lessons
1. [Lesson — what it means for next time]
2. [Lesson — what it means for next time]
3. [Lesson — what it means for next time]

---

## Recommendations for Next Initiative
[Specific changes the team should make to their process or approach]

---

## Failure Mode Library Contributions
[New patterns identified — with recommendation on whether to add to library]

---

## ASPF Process Score: __ / 5
[Honest rating of how well ASPF was followed — 5 = fully, 1 = barely at all]
Key factor: [What most determined the score]
```

## Quality Checklist

- [ ] Original intention reconstructed accurately (not revised retrospectively)
- [ ] All metrics measured — primary, supporting, and guardrails
- [ ] "Cannot determine" instances documented and explained
- [ ] Process audit is honest — failure to follow ASPF is documented, not hidden
- [ ] Lessons are specific — not "communicate better" but "establish a named incident response owner before deployment"
- [ ] Failure mode contributions are structured for reuse

---

## Feed-Forward Block

The retrospective outputs feed directly back into the Before entry point for the next initiative.

```
## Feed-Forward: Retrospective → Next Project (Before Entry Point)
### From Project: [PROJECT NAME]
### Date: [DATE]

---

### What to carry forward
[Practices and decisions that should be repeated]

### What to change
[Specific process changes for the next initiative]

### Watch list — failure modes to flag early
[Patterns from this project that the Predictor should watch for in the next one]

### Readiness gaps to address before next initiative
[Capability or infrastructure gaps identified that need to be closed]

---
*Paste this block as context when beginning the next AI initiative's Before session.*
*The Predictor will load the watch list into its active pattern set.*
```
