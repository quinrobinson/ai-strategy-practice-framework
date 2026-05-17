---
name: data-strategy
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Define a data strategy for an AI initiative — covering governance, lineage, consent, quality, and privacy by design — before any model or system is built. Use this skill when a team needs to move beyond "do we have data?" to "is our data ready to power AI responsibly and sustainably?". Triggers include "what data do we need?", "is our data good enough?", "who owns our data?", "what are our data obligations?", or any moment where data is the critical dependency for an AI initiative. Run after problem-qualification and method-selection — the method determines what data strategy is needed.
ai_leverage: high
agents: [ML/AI Engineer, Ethics & Risk Advisor, AI Product Manager]
---

# Data Strategy

Define how data will be sourced, governed, used, and maintained to power an AI initiative — before any model or system is built.

Data readiness is the most common reason AI projects fail silently. Teams assume their data is sufficient, discover mid-build that it isn't, and either ship a broken system or waste the investment. This skill moves teams from "we have data" to "our data is ready to power AI responsibly and sustainably."

## Goal

**Decision enabled:** Whether the data strategy is sufficient to proceed — and if not, what data work must happen before or alongside the AI build.
**Output:** A Data Strategy Document — covering data inventory, governance, lineage, consent, quality plan, and privacy by design controls.
**What this unlocks:** Confidence that the AI system's data foundation is sound before engineering begins. Prevents FM-05 (Data Readiness Overestimation) — the most common cause of AI project failure — and ensures the data approach satisfies responsible AI and regulatory obligations.

## When to Use

- After AI method is selected — method determines data requirements
- Before any significant data engineering, labeling, or procurement work begins
- When a team is unsure whether existing data is sufficient for the intended AI approach
- When operating under data privacy regulations (GDPR, HIPAA, CCPA)
- When the AI system will use personal or sensitive data

---

## Data Strategy Workflow

### Step 1: Data Inventory

Map every data source the AI system will use — for training, inference, evaluation, and monitoring.

For each data source:

```
Data Source: [Name / System / Origin]
Type: [Structured / Unstructured / Semi-structured]
Volume: [Approximate size — rows, records, GB]
Format: [CSV, JSON, database table, text, image, audio, etc.]
Freshness: [How often updated — real-time, daily, quarterly, static]
Current location: [Where it lives — database, data warehouse, file system, third party]
Access status: [Available / Requires approval / Not yet accessible / To be sourced]
Owner: [Team or individual responsible for this data]
Contains PII: [Yes / No / Unknown]
Contains sensitive categories: [Yes / No — race, health, financial, biometric, etc.]
```

### Step 2: Data Governance

Define who owns, controls, and is accountable for the data used in this initiative.

**Ownership and stewardship:**
- Who is the data owner for each source? (accountable for data quality and appropriate use)
- Who is the data steward? (responsible for day-to-day management)
- Is there a central data governance body that must approve AI use of this data?

**Access and controls:**
- Who can access the training data? Are access controls documented?
- How are access permissions granted and revoked?
- Is access logged and auditable?

**Retention and deletion:**
- How long is each data source retained?
- What is the deletion schedule and mechanism?
- Does the AI system create derivative data that needs its own retention policy?

**Cross-border data flows:**
- Does data cross jurisdictional boundaries? (EU → US, etc.)
- Are appropriate transfer mechanisms in place? (SCCs, BCRs, adequacy decisions)

```
Data Governance Summary:
Data owner: [Name / Role]
Data steward: [Name / Role]
Governance body approval required: [Yes / No / In progress]
Access controls documented: [Yes / No]
Retention policy defined: [Yes / No / Summary]
Cross-border transfers: [Yes / No / Mechanism]
```

### Step 3: Data Lineage

Document where data comes from and how it flows through the system.

Data lineage answers: if something goes wrong with the AI system's outputs, can we trace it back to the data that caused it?

```
Lineage Map:
[Source A] → [Transformation/processing step] → [Training dataset] → [Model]
[Source B] → [Transformation/processing step] → [Training dataset] → [Model]
[Model] → [Output] → [Downstream system or user]

Key transformation steps documented: [Yes / No]
Lineage tooling in place: [Yes / No / Tool name]
Can we identify which training records influenced a specific output: [Yes / No / Partially]
```

### Step 4: Consent and Legal Basis

Every data use in an AI system requires a legal basis. "We collected it" is not sufficient.

For each data source, document:

**Legal basis for AI use:**
- Consent: did individuals explicitly consent to their data being used to train or operate an AI system?
- Legitimate interest: is there a documented legitimate interest assessment?
- Contract: is AI use of data covered by the terms of service or data processing agreement?
- Legal obligation: is there a legal requirement driving this data use?
- Vital interest / public task: are these applicable?

**Key questions:**
- Was data collected for a purpose compatible with AI training and inference? (purpose limitation)
- If consent was the original basis, does it extend to AI use — or does new consent need to be obtained?
- For third-party data: what does the data license permit?
- For scraped or public data: what are the terms of use and copyright implications?

```
Consent & Legal Basis:
Source [A]: Legal basis: [Consent / Legitimate interest / Contract / Other]
            Purpose compatibility: [Compatible / Requires new consent / Unknown]
            License / terms reviewed: [Yes / No]

Open consent issues: [List any sources without a clear legal basis]
```

### Step 5: Data Quality Plan

Define what "good enough" data looks like for this initiative — and how you'll get there.

**Quality dimensions to assess:**

| Dimension | Definition | Current state | Minimum required | Gap |
|---|---|---|---|---|
| Completeness | % of required fields populated | [%] | [%] | [Gap] |
| Accuracy | % of records that are correct | [%] | [%] | [Gap] |
| Consistency | % of records consistent across sources | [%] | [%] | [Gap] |
| Timeliness | How current is the data | [Age] | [Requirement] | [Gap] |
| Representativeness | Coverage across all relevant groups | [Assessment] | [Requirement] | [Gap] |
| Volume | Total records available | [Count] | [Minimum] | [Gap] |

**For labeled / annotated data (supervised learning):**
- How is labeling being done — human annotators, automated, derived from behavior?
- What is the inter-annotator agreement rate?
- Are annotators representative of the affected population?
- Is there a process to handle label disagreements and ambiguous cases?

**Quality remediation plan:**
For each gap identified:
```
Gap: [Description]
Remediation: [What will be done]
Owner: [Who is responsible]
Timeline: [When it will be resolved]
Blocker: [Yes / No — does this gap block proceeding?]
```

### Step 6: Privacy by Design

Privacy by design means privacy controls are built into the system from the start — not added after.

**Data minimization:**
- Does the system collect and use only the data it strictly needs?
- Is there any data currently planned for use that could be excluded without meaningful loss?

**Anonymization and pseudonymization:**
- Can training data be anonymized or pseudonymized without losing necessary signal?
- Is inference data pseudonymized where possible?
- Is re-identification risk assessed for "anonymized" data?

**Purpose limitation:**
- Is the AI system's use of data limited to the defined purpose?
- Are there controls preventing data from being used for other purposes?

**Security:**
- Is training data encrypted at rest and in transit?
- Are inference inputs and outputs protected appropriately?
- Is model access controlled — who can query the model?

**Individual rights:**
- If a user requests deletion of their data (right to erasure), can the model be retrained or unlearned?
- Is there a process for responding to data subject access requests that includes AI-derived data?

---

## Data Strategy Document

```
# Data Strategy
## Project: [PROJECT NAME]
## AI Method: [From method selection]
## Date: [DATE]

### Data Inventory Summary
[Table of all data sources with key attributes]

### Data Readiness Score
Completeness:       __ / 5
Accuracy:           __ / 5
Representativeness: __ / 5
Legal basis:        __ / 5
Governance:         __ / 5
Total:              __ / 25

### Classification
21–25: Data ready. Proceed.
15–20: Mostly ready. Address gaps on timeline.
10–14: Significant gaps. Data work required before build.
0–9:   Data not ready. Do not proceed until resolved.

### Critical Data Gaps
[Any gaps that are project blockers]

### Consent & Legal Basis Status
[Summary by data source]

### Privacy by Design Controls
[List of controls implemented or planned]

### Data Quality Remediation Plan
[Table: Gap / Remediation / Owner / Timeline / Blocker?]

### Recommendation
[ ] Proceed — data strategy is sufficient
[ ] Proceed with conditions: [list gaps that must be tracked]
[ ] Pause — data work required before build begins
[ ] Stop — data strategy cannot be resolved with current approach
```

## Quality Checklist

- [ ] Every data source inventoried with access status confirmed
- [ ] Legal basis documented for every data source
- [ ] Data lineage mapped from source to model to output
- [ ] Quality dimensions assessed with specific gaps identified
- [ ] Privacy by design controls defined — not deferred to later
- [ ] Recommendation is unambiguous

---

## Handoff Block

```
## Handoff: Data Strategy → Readiness Audit
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Data Readiness Score: __ / 25
### Classification: [Ready / Mostly ready / Significant gaps / Not ready]

### Critical Data Gaps (blockers)
[List gaps that must be resolved before build]

### Consent Issues
[Any data sources without clear legal basis]

### Privacy by Design Controls Required
[Controls that must be built into the system — carry into technical requirements]

### Data Quality Remediation Timeline
[When gaps will be closed and by whom]

---
*Paste this block as opening context when running readiness-audit.md.*
*Data dimension scores from this skill should inform the Data Readiness dimension of the audit.*
```
