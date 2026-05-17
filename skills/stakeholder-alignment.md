---
name: stakeholder-alignment
framework: ASPF — AI Strategy Practice Framework
entry-point: Before
description: Map stakeholders, identify resistance, and build the leadership case for an AI initiative before resources are committed. Use this skill when a team needs to navigate the political and organizational landscape around an AI decision. Triggers include "how do we get leadership buy-in?", "there's resistance to this AI initiative", "who needs to approve this?", "how do we present this to the board?", or any moment where human alignment — not technical decisions — is the blocker. Run before or alongside problem-qualification.
ai_leverage: medium
agents: [AI Strategy Lead, Change & Enablement Lead, AI Practice Lead]
---

# Stakeholder Alignment

Map the human landscape around an AI initiative and build the case that gets it funded, approved, and supported — before committing resources to build.

Most AI initiatives that fail organizationally were technically sound. They failed because the right people weren't brought in early enough, resistance wasn't surfaced and addressed, or the business case wasn't framed in terms leadership cared about. This skill addresses the human side of AI strategy that no technical framework covers.

## Goal

**Decision enabled:** Whether the organization is aligned enough to proceed — and if not, what stakeholder work must happen first.
**Output:** A Stakeholder Alignment Map and a Leadership Case — who needs to be on board, what they care about, where the resistance is, and how to frame the initiative in terms that move decisions forward.
**What this unlocks:** Organizational permission to proceed. Technical readiness without stakeholder alignment stalls in approval cycles or dies post-launch due to resistance. This skill prevents FM-09 (Change Resistance) before it takes root.

## When to Use

- Before presenting an AI initiative to leadership or a governance body
- When an AI initiative has stalled despite being technically sound
- When multiple departments or teams need to collaborate on an AI initiative
- When there is known or suspected resistance to the initiative
- Before any significant resource commitment — budget, headcount, or external vendor

---

## Stakeholder Mapping Workflow

### Step 1: Identify All Stakeholders

List every person or group who has influence over, is affected by, or must approve this initiative. Cast wide — missing a stakeholder is worse than including one who turns out to be peripheral.

Categories to consider:
- **Decision makers** — who approves the budget, the approach, the deployment
- **Influencers** — who shapes the views of decision makers without having formal authority
- **Implementers** — who builds, operates, or maintains the system
- **Affected parties** — whose work or experience changes because of this system
- **Gatekeepers** — legal, compliance, security, privacy — whose sign-off is required
- **External stakeholders** — customers, regulators, partners who are affected

### Step 2: Map Each Stakeholder

For each stakeholder, assess four dimensions:

```
Stakeholder: [Name / Role]
Department: [Team / Function]

Interest level: [High / Medium / Low]
— How much does this initiative affect their work or goals?

Influence level: [High / Medium / Low]
— How much power do they have to advance or block this initiative?

Current stance: [Champion / Supporter / Neutral / Skeptic / Blocker]
— Champion: actively advocates for it
— Supporter: in favor, not actively promoting
— Neutral: no strong view, open to persuasion
— Skeptic: has concerns, not yet convinced
— Blocker: actively opposed or will use authority to prevent progress

Primary concern: [What they most care about — stated or inferred]
Engagement approach: [How to involve them — inform / consult / collaborate / lead]
```

### Step 3: Identify the Critical Path

From the stakeholder map, identify:

**Champions to activate** — High influence, positive stance. These people can open doors and lend credibility. Engage early and give them a role in shaping the narrative.

**Skeptics to convert** — High influence, negative stance. These are the highest-priority conversations. Do not present to leadership until you understand and can address their concerns.

**Neutral influencers to move** — High influence, neutral stance. These people will follow evidence and peer signals. Demonstrate early wins and get champions to brief them.

**Blockers to manage** — Formal gatekeepers (legal, compliance, security) with objections. Engage directly — understand their specific concern, address it, get them to a neutral or supportive position before the decision point.

### Step 4: Understand What Each Stakeholder Needs to Hear

Different stakeholders need different framings of the same initiative. The technical case that convinces an ML engineer will not convince a CFO.

| Stakeholder type | What they care about | Frame the initiative in terms of |
|---|---|---|
| **C-Suite / Board** | Business outcomes, competitive position, risk | Revenue impact, cost reduction, market differentiation, regulatory compliance |
| **CFO** | ROI, cost, risk exposure | Payback period, cost of inaction, risk mitigation value |
| **Legal / Compliance** | Risk, liability, regulatory exposure | Controls in place, compliance framework, incident response |
| **Engineering / IT** | Feasibility, maintenance, technical debt | Architecture fit, integration approach, operational burden |
| **End users / Operators** | Their daily work, job security, ease of use | How it helps them, what changes, what training is provided |
| **HR** | People impact, change management, skills | Upskilling plan, role changes, communication approach |
| **External customers** | Trust, experience, data use | Privacy controls, transparency, opt-out mechanisms |

### Step 5: Build the Leadership Case

The leadership case is not a technical brief. It is a business argument structured around outcomes, not capabilities.

```
# Leadership Case: [AI Initiative Name]
## Prepared by: [Role]
## For: [Audience — Board / Executive Team / Steering Committee]
## Date: [DATE]

---

## The Situation
[1-2 sentences: what problem exists today and what it costs]

## The Opportunity
[1-2 sentences: what AI enables that wasn't possible or affordable before]

## The Approach
[2-3 sentences: what we're proposing to do, at what scope, over what timeline]

## The Business Case
Primary metric: [What moves — revenue / cost / time / risk]
Baseline today: [Current state]
Expected outcome: [Target state]
Timeline to value: [When we expect to see results]
Investment required: [Budget, headcount, timeline]
Cost of inaction: [What happens if we don't do this]

## The Risks — and How We're Managing Them
[2-3 top risks from the risk register, each with a named mitigation]

## What We're Asking For
[Specific decision, resource, or approval needed from this group]

## What Happens Next
[Next 3 actions if approved — concrete and time-bound]
```

### Step 6: Design the Engagement Sequence

Before any formal presentation, the alignment work happens in conversations. Map the sequence:

```
Engagement Sequence:

Week [N]: [Stakeholder] — [Purpose of conversation] — [What we need from them]
Week [N+1]: [Stakeholder] — [Purpose] — [Need]
...

Pre-presentation gate: [List every stakeholder who must be at neutral or above before formal presentation]

Formal presentation: [Date] — [Audience] — [Decision sought]
```

Do not present formally until every high-influence skeptic has been briefed individually and their concerns have been addressed or explicitly acknowledged.

---

## Common Resistance Patterns and Responses

**"AI will replace jobs"**
Response: Name specifically what changes and what doesn't. If roles change, describe the transition plan. If jobs are eliminated, address it directly — ambiguity makes this worse, not better.

**"We tried AI before and it didn't work"**
Response: Ask what happened. Identify whether the failure was a problem definition issue, a data issue, a change management issue, or a technical issue. Show how this initiative addresses that root cause specifically.

**"We don't have the data for this"**
Response: Bring the readiness audit. Either it confirms the concern (and you adjust the scope) or it shows the data situation is better than assumed.

**"This isn't a priority right now"**
Response: Frame the cost of inaction. What gets worse if this waits 6 months? What opportunity is missed?

**"Legal / compliance will never approve this"**
Response: Engage legal early and directly. Do not assume their position — bring the responsible AI assessment and the risk register and ask them to identify their specific concerns.

**"Leadership won't fund this"**
Response: Reframe around the primary business metric they care about. If you can't connect the initiative to something leadership is measured on, the initiative scope may need to change.

---

## Stakeholder Alignment Output

```
# Stakeholder Alignment Map
## Project: [PROJECT NAME]
## Date: [DATE]

### Stakeholder Map
| Stakeholder | Role | Interest | Influence | Stance | Primary Concern | Approach |
|-------------|------|----------|-----------|--------|-----------------|----------|
| [Name] | [Role] | H/M/L | H/M/L | [Stance] | [Concern] | [Approach] |

### Critical Path Summary
Champions to activate: [Names]
Skeptics to convert: [Names + concern + approach]
Blockers to manage: [Names + specific objection + resolution path]

### Engagement Sequence
[Week-by-week plan to reach alignment]

### Pre-Presentation Gate
[List of stakeholders who must be at neutral+ before formal presentation]

### Alignment Status: [Ready to present / Pre-work required / Significant work required]
```

## Quality Checklist

- [ ] All stakeholder categories considered — not just obvious ones
- [ ] High-influence skeptics identified by name with specific concerns documented
- [ ] Leadership case framed in business terms, not technical terms
- [ ] Engagement sequence planned before any formal presentation
- [ ] Pre-presentation gate defined — not presenting until it's cleared

---

## Handoff Block

```
## Handoff: Stakeholder Alignment → Problem Qualification
### Project: [PROJECT NAME]
### Date: [DATE]

---

### Alignment Status: [Ready / Pre-work required / Significant work required]

### Key Stakeholder Concerns to Address in Problem Definition
[Concerns raised by stakeholders that should shape how the problem is framed]

### Constraints Surfaced by Stakeholders
[Budget caps, timeline requirements, scope limitations, or non-negotiables]

### Champions Available to Support
[Names and roles of confirmed champions — useful when presenting qualification results]

### Active Risk Flags
[Organizational risks surfaced — carry into risk-mapping.md]

---
*Paste this block as opening context when running problem-qualification.md.*
```
