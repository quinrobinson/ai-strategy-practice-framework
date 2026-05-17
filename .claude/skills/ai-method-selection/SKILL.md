---
name: ai-method-selection
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Select the right AI approach for a qualified problem. Use this skill after problem-qualification.md has confirmed AI is worth pursuing. Triggers include questions like "what kind of AI should we use?", "should we build or buy?", "is this a generative AI problem or something else?", "what AI methods exist for this?", or any moment where the team needs to choose between AI approaches. Do not use this skill before problem qualification is complete.
ai_leverage: high
agents: [AI Product Manager, ML/AI Engineer, AI Strategy Lead]
---

# AI Method Selection

Select the right AI approach for a validated problem — before any build, buy, or pilot decision is made.

Method selection is where most teams lose time. They default to the newest or most visible AI approach rather than the one that fits the problem. This skill maps problem characteristics to AI methods systematically.

## Goal

**Decision enabled:** Which AI method to use, and whether to build, buy, or integrate it.
**Output:** An AI Method Selection Brief — a documented method decision with rationale, data requirements, build/buy/integrate recommendation, and method-specific risks.
**What this unlocks:** Risk mapping and readiness audit. Both depend on knowing the method — you cannot map risks you haven't named, and you cannot assess readiness without knowing what you're building toward. The method decision also anchors the APDF handoff brief — it tells the design team what kind of AI system they're designing for.

## When to Use

- Problem Qualification is complete and AI has been confirmed as the right direction
- The team is debating between AI approaches (generative vs. predictive, build vs. buy, etc.)
- A vendor or engineer has proposed a specific method and the team needs to evaluate it
- An existing AI approach isn't working and the team needs to reconsider the method

## Method Selection Workflow

### Step 1: Characterize the Problem Type

Map the qualified problem to one of five problem types. Most problems fit one primary type with secondary traits.

| Problem Type | Characteristics | Example |
|---|---|---|
| **Generation** | Create new content, code, or artifacts from inputs | Draft copy, generate code, summarize documents |
| **Classification** | Assign inputs to predefined categories | Sentiment analysis, content moderation, intent detection |
| **Prediction** | Forecast outcomes from historical patterns | Churn risk, demand forecasting, anomaly detection |
| **Recommendation** | Surface relevant options from a large set | Product recommendations, content personalization |
| **Extraction** | Pull structured information from unstructured data | Entity recognition, form parsing, data structuring |

A problem can span multiple types. Name the primary type and any secondary types.

### Step 2: Map to AI Method

Match problem type to the appropriate AI method:

**Generation problems** → Large Language Models (LLMs), diffusion models, code generation
- Best for: content creation, summarization, translation, code assistance
- Watch for: hallucination risk, output consistency, evaluation difficulty

**Classification problems** → Traditional ML (supervised learning), fine-tuned LLMs, rule-based classifiers
- Best for: routing, tagging, filtering, quality control at scale
- Watch for: training data quality, class imbalance, drift over time

**Prediction problems** → Regression models, time-series forecasting, gradient boosting
- Best for: numerical outcomes, risk scoring, demand planning
- Watch for: data freshness requirements, feature engineering complexity

**Recommendation problems** → Collaborative filtering, content-based filtering, hybrid systems
- Best for: personalization, discovery, next-best-action
- Watch for: cold start problem, popularity bias, feedback loops

**Extraction problems** → NLP pipelines, fine-tuned models, structured prompting with LLMs
- Best for: document processing, data entry automation, knowledge extraction
- Watch for: schema consistency, edge cases, confidence scoring

### Step 3: Build vs. Buy vs. Integrate

For each candidate method, evaluate the build/buy/integrate decision:

```
Build (custom model/system)
  When: Highly specific domain, proprietary data advantage, core competitive differentiator
  Cost: High — engineering time, data infrastructure, ongoing maintenance
  Risk: High — requires ML expertise, long time to value
  Best for: Problems where off-the-shelf solutions don't exist or can't be differentiated

Buy (vendor AI product)
  When: Standard use case well-served by market, speed to value matters, team lacks ML capability
  Cost: Licensing + integration — predictable but ongoing
  Risk: Medium — vendor dependency, data privacy considerations, limited customization
  Best for: Commodity AI tasks — transcription, translation, basic classification

Integrate (API / foundation model)
  When: LLM-solvable problem, want flexibility without full build, team has engineering capacity
  Cost: API usage costs + engineering integration time
  Risk: Medium — model updates, rate limits, prompt engineering maintenance
  Best for: Generation, summarization, extraction — tasks where LLMs excel out of the box
```

### Step 4: Produce the Method Selection Brief

```
# AI Method Selection Brief
## Project: [PROJECT NAME]
## Date: [DATE]

### Problem Statement (from Qualification)
[Carried forward from problem-qualification.md]

### Primary Problem Type: [Generation / Classification / Prediction / Recommendation / Extraction]
Secondary type (if applicable): [Type]

### Recommended AI Method
[Specific method — e.g., "Fine-tuned LLM for classification" or "Gradient boosting for churn prediction"]

### Rationale
[2-3 sentences explaining why this method fits the problem type and constraints]

### Build / Buy / Integrate Decision: [Build / Buy / Integrate]
Rationale: [Why this approach is right given team capability, timeline, and budget]

### Candidate Vendors / Models (if Buy or Integrate)
1. [Option] — [Key differentiator / consideration]
2. [Option] — [Key differentiator / consideration]

### Data Requirements
- Training data: [What's needed, what exists]
- Inference data: [What the system needs at runtime]
- Data gaps: [What needs to be sourced or created]

### Technical Constraints
[Engineering requirements, infrastructure needs, existing stack considerations]

### Method Risks
[Specific risks from this method — e.g., hallucination, drift, cold start]

### Evaluation Approach
[How will we know this method is working? What metrics?]
```

## Method Evaluation Criteria

When comparing methods, evaluate on five dimensions:

**Fit** — How well does this method match the problem type?
**Feasibility** — Can the team actually build or integrate this given skill and time?
**Data readiness** — Does sufficient, quality data exist for this method?
**Explainability** — Can we explain the outputs to users, stakeholders, or regulators?
**Evolvability** — Can this method adapt as the problem or data changes?

## Quality Checklist

- [ ] Problem type is named and justified
- [ ] Method is specific — not just "AI" or "machine learning"
- [ ] Build/buy/integrate decision is documented with rationale
- [ ] Data requirements are explicit
- [ ] Method-specific risks are named
- [ ] Evaluation approach is defined

---

## Handoff Block

```
## Handoff: AI Method Selection → Risk Mapping
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Problem Statement
[Carried forward]

### Selected Method
[Specific AI method]

### Build / Buy / Integrate: [Decision]

### Data Requirements Summary
[What data is needed and what gaps exist]

### Method-Specific Risks to Evaluate
[Risks identified during method selection that risk-mapping should examine]

### Active Risk Flags
[Predictor flags from this session]

---
*Paste this block as your first message when opening risk-mapping.md.*
```
