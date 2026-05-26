---
name: discovery
framework: ASPF — AI Strategy Practice Framework
pillar: All — prerequisite to all six pillars
entry-point: Before
description: Run a structured discovery across all six AI practice pillars — preparing for client conversations, facilitating the workshop, and synthesizing findings into a master client brief. Use this skill at the start of every client engagement before any pillar work begins. The discovery produces the authoritative context that all six pillars execute against. Triggers include "we have a new client", "we need to understand where the client is", "we're preparing for a discovery session", "we just came out of a client meeting and need to synthesize what we heard", or any engagement where the starting point, gaps, and sequencing of work need to be established.
ai_leverage: high
agents: [AI Strategy Lead, AI Practice Lead, Change & Enablement Lead, Ethics & Risk Advisor]
---

# Discovery

The prerequisite to all six pillars. Before any pillar work begins, the practitioner must understand where the client is, what's missing, and what needs to happen — across all six dimensions of AI-native readiness.

Discovery runs in three acts across the full engagement cycle: preparing the practitioner before the client conversation, structuring the workshop itself, and synthesizing findings into the master brief that all subsequent pillar work executes against.

## Goal

**Decision enabled:** Where the client is across all six pillars, what the gaps are, and in what sequence the work should proceed to move them toward AI-native operation.
**Output:** A Master Client Brief — authoritative current state assessment, gap analysis across all six pillars, prioritized roadmap, and a client-ready presentation.
**What this unlocks:** Every pillar engagement. No pillar work should begin without a discovery brief. The brief is the context that makes all subsequent ASPF sessions precise rather than generic.

## When to Use

- At the start of every new client engagement — before opening any pillar page
- When returning to an existing client after a significant gap
- When the scope of an engagement is expanding to new pillars
- When there is disagreement on the team or with the client about where to start

---

## Act 1: Pre-Meeting Preparation

Claude asks the practitioner what they already know. The practitioner answers. Claude produces a hypothesis brief and facilitation guide.

### What Claude asks:

**About the client:**
1. Who is the client — name, industry, approximate size (revenue, headcount), and geography?
2. What is the client's stated goal for this engagement — what did they ask for?
3. What do you already know about their current AI activity — what tools, initiatives, or experiments are underway?
4. Who are the key stakeholders you'll be meeting — roles, influence level, and known stance on AI?
5. What is the client's competitive pressure around AI — are they behind peers, ahead, or unclear?

**About the engagement:**
6. What service lines are in scope — S&T, BA, AO, BO, or some combination?
7. Is there a budget signal — enterprise-scale transformation, or a more contained initial engagement?
8. What is the timeline pressure — is there a board deadline, a competitive event, or regulatory trigger?
9. What does success look like at the end of this discovery phase — what does the client need to walk away believing?

**About prior knowledge:**
10. Have we worked with this client before — and if so, what do we know about what worked and what didn't?

### What Claude produces:

**Pillar Hypothesis Map** — for each of the six pillars, Claude states:
- Hypothesis: what it expects the current state to be, based on what the practitioner shared
- Confidence: High / Medium / Low — how much is known vs. assumed
- Key question: the single most important thing to find out in the workshop

**Facilitation Guide** — the structured question set for the client workshop (Act 2)

---

## Act 2: Workshop Facilitation Guide

The practitioner runs this session with the client. Claude does not run this — the practitioner does. This guide is the output of Act 1 that the practitioner carries into the room.

The workshop is structured around the six pillars. For each pillar, there is a current state probe, a gap probe, and a readiness probe. The practitioner uses these as a guide — not a script. The goal is to understand where the client is, not to audit them.

**Workshop opening (5 minutes):**
> "We're going to spend [X] hours understanding where you are across six dimensions of AI readiness. This isn't a test — it's a map. The goal is to be honest about where you are so we can be precise about what needs to happen next."

---

### Pillar 1 — AI Value & Tech Strategy

**Current state probe:**
- Do you have a documented AI strategy? If so, who owns it and when was it last reviewed?
- How does AI appear in your business case or investment planning?
- Who makes decisions about which AI initiatives get funded?

**Gap probe:**
- If you had to describe your AI strategy in two sentences right now, what would you say?
- What's the biggest thing blocking you from having a clear AI direction?

**Readiness probe:**
- On a scale of 1–5, how confident is your leadership team that they know where AI will create the most value for the organization?

---

### Pillar 2 — AI Data Foundation

**Current state probe:**
- What does your current data infrastructure look like — cloud, on-prem, hybrid?
- Do you have a data governance function? What does it actually govern?
- When an agent or model needs data from your systems, how hard is it to get?

**Gap probe:**
- What data do you know you need for AI but can't currently access or trust?
- Has a data quality issue ever blocked or damaged an AI initiative?

**Readiness probe:**
- If we needed to ground an AI agent in your business context today, how long would it take to get the right data in the right format?

---

### Pillar 3 — AI Innovation Garage

**Current state probe:**
- Have you run AI pilots or proofs of concept? What happened to them?
- How long does it typically take from "let's try this AI idea" to something running in production?
- Who runs your AI experiments — a central team, individual business units, or external vendors?

**Gap probe:**
- What's the biggest AI initiative you've tried that didn't make it to production? What stopped it?
- What's the backlog of AI ideas that haven't been tried yet — and why haven't they been?

**Readiness probe:**
- If we needed to have working AI agents in production within 8 weeks, what would the biggest obstacle be?

---

### Pillar 4 — AI Governance

**Current state probe:**
- Do you have AI-specific policies in place — responsible AI, model inventory, risk controls?
- Who is accountable when an AI system makes a harmful or incorrect decision?
- How are regulatory requirements (EU AI Act, GDPR, sector-specific) affecting your AI plans?

**Gap probe:**
- Have you had an AI incident — an output that caused harm, embarrassment, or required rollback?
- What keeps your legal or compliance team up at night about AI?

**Readiness probe:**
- If an AI agent made a significant error tomorrow, do you know exactly who would handle it and how?

---

### Pillar 5 — AI Factory

**Current state probe:**
- Do you have any AI systems running reliably in production at scale — not pilots, actual production?
- How are your AI models deployed, monitored, and updated? Is this process automated or manual?
- Do you have reusable AI components that different teams can leverage, or does every team build from scratch?

**Gap probe:**
- What breaks most often in your AI systems in production?
- What would need to be true for you to deploy AI reliably across multiple business units simultaneously?

**Readiness probe:**
- If we needed to scale a working AI pilot to 10x the current usage in 90 days, what would fail first?

---

### Pillar 6 — Run & Enhance

**Current state probe:**
- For AI systems currently in production, who is responsible for their ongoing performance?
- How do you know if an AI system is still working as intended three months after launch?
- Do you have SLAs for your AI systems? Who owns them?

**Gap probe:**
- What AI systems have degraded silently since launch — where the results got worse but no one noticed until users complained?
- What does your continuous improvement process look like for AI?

**Readiness probe:**
- If we handed off a fully built AI system today, could your team operate and improve it without us? What would be missing?

---

### Workshop close (10 minutes):

**Priority probe:**
> "If you could only fix one of these six areas in the next 90 days, which would have the biggest impact — and why?"

**North star probe:**
> "What does your organization look like in 3 years if AI goes well? And what does it look like if you get it wrong?"

**Blocker probe:**
> "What's the single biggest thing inside your organization that could prevent this from succeeding — that we should know about now?"

---

## Act 3: Post-Meeting Synthesis

The practitioner feeds what they heard back into Claude. Claude synthesizes the full picture.

### What the practitioner provides:

```
Post-Meeting Input:

Client: [Name]
Meeting date: [Date]
Attendees: [Roles present]

For each pillar, summarize:
- What you heard about current state
- What gaps surfaced
- Confidence level in what you heard (High / Medium / Low)
- Any surprising or contradictory signals
- Direct quotes worth capturing

Pillar 1 — Strategy: [Summary]
Pillar 2 — Data: [Summary]
Pillar 3 — Innovation: [Summary]
Pillar 4 — Governance: [Summary]
Pillar 5 — Factory: [Summary]
Pillar 6 — Run: [Summary]

Priority signal: [What the client said when asked which pillar matters most]
North star: [How they described success in 3 years]
Blockers: [What they said could prevent this from working]
Open questions: [What was unclear or contradictory]
```

### What Claude produces:

**Master Client Brief** (see schema below)

---

## Master Client Brief Schema

```
# Master Client Brief
## Client: [CLIENT NAME]
## Industry: [Industry]
## Size: [Revenue / Headcount]
## Discovery date: [Date]
## Practitioner: [Name]
## Version: 1.0

---

## Client Context
[2-3 sentences: who they are, what they're trying to achieve with AI, what's driving urgency]

## Engagement Scope
Service lines in scope: [S&T / BA / AO / BO]
Budget signal: [Enterprise transformation / Contained initial / Unknown]
Timeline pressure: [What's driving urgency]
Success definition: [What the client needs to believe at discovery close]

---

## Six-Pillar Current State Assessment

### Pillar 1 — AI Value & Tech Strategy
Current state: [What exists today]
Confidence: [High / Medium / Low]
Key finding: [Most important thing learned]
Gap: [What's missing relative to AI-native readiness]
Severity: [Critical / Significant / Moderate / Minor]

### Pillar 2 — AI Data Foundation
[Same structure]

### Pillar 3 — AI Innovation Garage
[Same structure]

### Pillar 4 — AI Governance
[Same structure]

### Pillar 5 — AI Factory
[Same structure]

### Pillar 6 — Run & Enhance
[Same structure]

---

## Gap Analysis Summary

| Pillar | Gap | Severity | Blocks |
|--------|-----|----------|--------|
| P1 Strategy | [Gap] | Critical | P3, P5 |
| P2 Data | [Gap] | Critical | P3, P4, P5 |
| P3 Innovation | [Gap] | Significant | P5 |
| P4 Governance | [Gap] | Significant | P5, P6 |
| P5 Factory | [Gap] | Moderate | P6 |
| P6 Run | [Gap] | Minor | — |

Blocking relationships: [Which pillar gaps prevent other pillars from proceeding]

---

## Prioritized Roadmap

### Phase 1 — Foundation (Months 1–3)
Must-do before anything else. These gaps block all other work.
- [Pillar] — [Specific work] — [Expected outcome]

### Phase 2 — Build (Months 3–9)
Core delivery work. Depends on Phase 1 being underway.
- [Pillar] — [Specific work] — [Expected outcome]

### Phase 3 — Scale & Operate (Months 9–18)
Industrialization and continuous improvement.
- [Pillar] — [Specific work] — [Expected outcome]

Rationale: [Why this sequence — what makes Phase 1 the right starting point]

---

## Client Communication Points

### Where you are
[3 bullet points — honest, specific, non-judgmental assessment of current state]

### What needs to happen
[3 bullet points — the work at the highest level]

### Why this sequence
[2-3 sentences — why the prioritization is what it is]

### What success looks like
[North star statement — how we'll know the transformation is working]

---

## Open Questions
[What remains unclear after the discovery — what follow-up is needed]

## Risks to the Engagement
[Organizational, political, or technical risks surfaced during discovery]

## Next Steps
[ ] Share this brief with the client for alignment
[ ] Initiate Phase 1 pillar engagements
[ ] Schedule follow-up discovery session for [specific unclear area]
[ ] Run /project:deck discovery to generate client-ready presentation
```

---

## Per-Engagement Brief (derived from Master)

When a pillar engagement begins, generate a scoped brief from the master:

```
# Engagement Brief
## Client: [CLIENT NAME]
## Pillar: [Number and name]
## Service Line: [S&T / BA / AO / BO]
## Lifecycle: [Before / During / After]
## Derived from: Master Client Brief v[X] — [Date]

---

## Relevant Context from Discovery
[What the master brief says about this specific pillar — current state, gap, severity]

## Deliverable for This Engagement
[From the matrix: deliverable name, AI Practice role, expected outcome]

## Constraints from Other Pillars
[Any blocking or dependency relationships that affect this engagement]

## Client Communication Reminders
[Key points from the master brief that should shape how we communicate with this client]
```

## Quality Checklist

- [ ] All six pillars assessed — no pillar skipped even if confidence is low
- [ ] Gap severity is honest — not all gaps are Critical
- [ ] Blocking relationships are mapped — which pillar gaps prevent others
- [ ] Roadmap sequence is justified — not just P1 through P6 in order
- [ ] Client communication points are specific — not generic AI consulting language
- [ ] Open questions are named — discovery is never fully complete after one session

---

## Handoff Block

```
## Discovery Complete → All Pillar Engagements
### Client: [CLIENT NAME]
### Discovery date: [DATE]
### Master brief version: [X]

---

### Phase 1 Priority Pillars
[Pillars where work must begin first — with rationale]

### Blocking Gaps
[Gaps that prevent other work from proceeding until resolved]

### Client Alignment Status
[ ] Brief shared and approved by client
[ ] Roadmap presented and prioritization agreed
[ ] Phase 1 scope confirmed

### Predictor Flags from Discovery
[Failure modes surfaced during the discovery session]

---
*Paste this block as opening context when opening any pillar engagement.*
*The master brief lives at .aspf/clients/[client-name]/brief.md*
```
