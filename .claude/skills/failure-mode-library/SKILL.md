---
name: failure-mode-library
framework: ASPF — AI Strategy Practice Framework
entry-point: All — loaded by the Predictor in every session
description: A structured library of the most common AI strategy failure patterns, organized by when they appear and what signals them early. This skill is loaded automatically by the Predictor agent in every session — it is not typically invoked directly by users. The Predictor cross-references intake responses against this library to surface predictive warnings. Teams can also use this skill directly with the /predict command to run a standalone failure mode check at any point.
ai_leverage: high
agents: [Predictor — always active]
---

# Failure Mode Library

The Predictor's reference library. A catalogue of the most common ways AI strategy work fails — organized by phase, with early warning signals and intervention recommendations.

This library is the basis of ASPF's predictive capability. When the Orchestrator surfaces a risk before the team has encountered it, it is pattern-matching against the failures documented here.

---

## Failure Mode Index

Failures are organized by when they typically surface. Most have roots in earlier phases — which is why the Predictor looks for early signals even when the failure is still weeks away.

---

## Category 1: Problem Definition Failures

### FM-01: Solution-First Thinking
**When it surfaces:** Immediately — often the reason the team is having the conversation at all
**Pattern:** A team selects an AI tool, vendor, or approach before articulating the problem it solves. The problem statement is constructed *after* the solution is chosen to justify it.
**Early signals:**
- The conversation starts with a tool name ("we want to use ChatGPT for...") before a problem is named
- The problem statement contains the solution ("we need to use AI to...")
- The team cannot articulate what changes for users if the project succeeds

**Predictor warning:** *"This conversation started with a solution. No problem statement has been established yet. Redirect to problem-qualification.md before evaluating any tool or method."*

**Intervention:** Run problem-qualification.md fully before any tool or method discussion.

---

### FM-02: Problem-Outcome Disconnect
**When it surfaces:** Outcome definition, or retrospective when impact can't be demonstrated
**Pattern:** The team solves the stated problem but the solution doesn't produce meaningful business or user value. The problem was real but too small or too peripheral to matter.
**Early signals:**
- Primary metric is an AI system metric (accuracy, latency) rather than a user or business metric
- The team struggles to explain who benefits and how
- Stakeholder interest is low despite a well-defined problem

**Predictor warning:** *"The defined outcome is an AI system metric, not a user or business outcome. This initiative will be hard to justify when reviewed. Reconnect the metric to user behavior or business performance."*

**Intervention:** Return to outcome-definition.md. Trace from AI output → user behavior change → business outcome.

---

### FM-03: Scope Creep at Definition
**When it surfaces:** Method selection, readiness audit
**Pattern:** The problem expands during definition. What started as a narrow, qualified problem becomes a platform play or organizational transformation before anyone explicitly agreed to that scope.
**Early signals:**
- Problem statement grows longer each iteration
- New stakeholders are added who require their problems to be included
- Method selection discussion covers multiple distinct problem types

**Predictor warning:** *"The problem scope has expanded significantly since qualification. Expanded scope changes the AI fit score, data requirements, and timeline. Re-qualify before proceeding."*

**Intervention:** Re-run problem qualification on the current scope. Accept the scope expansion explicitly or cut back to the original.

---

## Category 2: Method & Technical Failures

### FM-04: Method-Problem Mismatch
**When it surfaces:** Pilot or early build — when outputs don't match expectations
**Pattern:** The team selects an AI method that doesn't fit the problem type. Most commonly: using an LLM for a prediction problem, or using a simple classifier for a generation problem.
**Early signals:**
- Method selection was driven by familiarity or trend, not problem type analysis
- The team cannot explain why this method fits this problem
- Multiple methods were considered and one was chosen without clear criteria

**Predictor warning:** *"The selected method has characteristics that don't match the primary problem type identified in qualification. Review ai-method-selection.md before building."*

**Intervention:** Return to ai-method-selection.md. Evaluate method against the five problem types explicitly.

---

### FM-05: Data Readiness Overestimation
**When it surfaces:** Early build — when the team tries to access or use data
**Pattern:** The team assumes data exists, is accessible, and is sufficient — without verifying. Reality: the data is fragmented, poorly labeled, access-controlled, or insufficient in volume.
**Early signals:**
- Data readiness dimension scored in readiness audit without direct verification
- "We have lots of data" without specificity about format, volume, freshness, or access
- Data owner has not been consulted

**Predictor warning:** *"Data readiness was assessed without direct verification. This is the most common cause of AI project failure. Verify data access, quality, and volume before committing to the approach."*

**Intervention:** Direct verification — pull a sample, confirm access, measure volume and quality.

---

### FM-06: Evaluation Gap
**When it surfaces:** Build and pilot — when the team can't determine whether the AI system is working
**Pattern:** The team builds an AI system with no reliable way to evaluate whether its outputs are correct. Common in generation tasks where "correct" is subjective.
**Early signals:**
- Outcome definition includes no measurement plan for AI output quality
- "We'll know it when we see it" is used to describe success criteria
- No human evaluation process has been designed alongside the AI system

**Predictor warning:** *"No evaluation methodology has been defined for this AI system's outputs. You will not be able to determine whether the system is working. Define evaluation before building."*

**Intervention:** Define a human evaluation rubric. Establish quality benchmarks before deployment.

---

## Category 3: Organizational Failures

### FM-07: Accountability Gap
**When it surfaces:** Production — when something goes wrong
**Pattern:** The AI system produces a harmful or embarrassing output and no one knows who is responsible for addressing it, communicating about it, or preventing it in future.
**Early signals:**
- No named owner for the AI system in production
- Process readiness — decision rights scored low in readiness audit
- Incident response process does not exist or excludes AI-specific scenarios

**Predictor warning:** *"No clear owner or incident response process has been defined for this AI system. When (not if) an AI error occurs in production, the team will not know who decides, who communicates, or how to respond."*

**Intervention:** Define decision rights and incident response before deployment. Name an owner.

---

### FM-08: The Pilot Trap
**When it surfaces:** Scaling — when the pilot is declared a success but production fails
**Pattern:** The pilot works because it runs in controlled conditions — curated data, high-attention team, forgiving user base. Production fails because those conditions don't hold.
**Early signals:**
- Pilot scope is significantly narrower than production scope
- Success criteria for the pilot are different from production success criteria
- Readiness audit wasn't run for production conditions, only pilot conditions

**Predictor warning:** *"This pilot is running in conditions significantly different from production. Pilot success will not predict production success. Define production readiness criteria explicitly before scaling."*

**Intervention:** Run the readiness audit against production conditions, not pilot conditions. Define a scale readiness gate.

---

### FM-09: Change Resistance
**When it surfaces:** Activation — when adoption is low despite a working system
**Pattern:** The AI system works technically but users, operators, or the team don't use it. Adoption stalls because the change wasn't managed — people weren't prepared, consulted, or given a reason to change.
**Early signals:**
- People readiness — change readiness scored low in readiness audit
- No Change & Enablement Lead involved in planning
- Rollout plan focuses on technical deployment, not user behavior change

**Predictor warning:** *"No change management plan has been developed for this initiative. Technical success without adoption is not success. Engage Change & Enablement before deployment planning."*

**Intervention:** Activate the Change & Enablement Lead agent. Build a change management plan alongside the technical deployment plan.

---

## Category 4: Ethics & Fairness Failures

### FM-10: Undetected Bias
**When it surfaces:** Production — often surfaced by users or press, not the team
**Pattern:** The AI system performs worse for certain demographic groups or produces outputs with disparate impact. The team didn't evaluate for bias because no one was responsible for it.
**Early signals:**
- Ethics & Risk Advisor agent was not activated in risk mapping
- Training data demographic composition was not reviewed
- Risk register has no bias or fairness entries

**Predictor warning:** *"No bias evaluation has been conducted for this AI system. If the system's outputs affect people differently based on demographic characteristics, this will surface in production — and after the fact is the worst time to address it."*

**Intervention:** Activate Ethics & Risk Advisor. Conduct bias evaluation before deployment using representative test data.

---

### FM-11: Opacity at Scale
**When it surfaces:** Production — when users or regulators ask "why did the AI do that?"
**Pattern:** The AI system makes consequential decisions that users can't understand, contest, or opt out of. As scale increases, so does the harm and the regulatory exposure.
**Early signals:**
- No explainability requirement in method selection
- User-facing communication about AI involvement not designed
- Operating in a domain with regulatory AI transparency requirements (EU AI Act, GDPR)

**Predictor warning:** *"This AI system makes consequential decisions with no explainability or user recourse mechanism. At scale, this creates regulatory risk and erodes user trust. Design for transparency before deployment."*

**Intervention:** Define explainability requirements. Design user-facing communication about AI involvement and recourse options.

---

## Using the Library

When running /predict standalone, the Predictor:
1. Reviews the current session context — entry point, problem type, method, scores from any completed skills
2. Cross-references against all failure modes in this library
3. Surfaces every failure mode with an early signal present in the current context
4. Ranks by proximity — failures that are most imminent come first
5. Provides a warning and an intervention for each

The output format is:

```
# Predictive Risk Report
## Project: [PROJECT NAME]
## Generated: [DATE]
## Entry Point: [Before / During / After]

### Imminent Risks (signals present now)
[FM-XX] [Failure Mode Name]
Signal detected: [What in the current context triggered this]
Warning: [Predictor warning text]
Intervention: [What to do]

### Emerging Risks (conditions forming)
[FM-XX] [Failure Mode Name]
Condition: [What is forming that could lead to this failure]
Watch for: [What to monitor]

### No Evidence of Risk
[FM-XX through FM-XX]: No signals detected for these failure modes given current context.
```
