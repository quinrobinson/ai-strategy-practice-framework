/* DiscoveryPage.jsx — three-act discovery: prep → workshop → synthesis */

function DiscoveryPage({ go }) {
  const [activeAct, setActiveAct] = React.useState('overview');
  const [surface, setSurface] = React.useState(null);

  const acts = [
    {
      id: 'act1',
      label: 'Act 1',
      name: 'Pre-Meeting Prep',
      color: 'var(--brand-purple-soft)',
      desc: 'Claude asks 10 structured questions about the client and engagement. You answer. Claude produces a Pillar Hypothesis Map and a Facilitation Guide to carry into the client workshop.',
      output: 'Pillar Hypothesis Map + Facilitation Guide',
      duration: '20–30 min',
    },
    {
      id: 'act15',
      label: 'Act 1.5',
      name: 'Stakeholder Interviews',
      color: '#A78BFA',
      desc: 'Individual 30-minute calls with key stakeholders before the group workshop. Surfaces what people won\'t say in a room together. When not possible, the framework generates role-based assumptions clearly labeled as such.',
      output: 'Stakeholder Intelligence Brief — profiles, fault lines, workshop positioning',
      duration: '30 min per stakeholder (recommended)',
    },
    {
      id: 'act2',
      label: 'Act 2',
      name: 'Workshop Facilitation',
      color: 'var(--entry-during)',
      desc: 'You run the client session using the facilitation guide. Claude does not attend. Capture what you hear — notes, recording, whiteboard photos. The guide structures questions across all six pillars.',
      output: 'Your notes / recording / synthesis',
      duration: '2–4 hours (client session)',
    },
    {
      id: 'act3',
      label: 'Act 3',
      name: 'Post-Meeting Synthesis',
      color: 'var(--entry-before)',
      desc: 'Feed what you heard back into Claude. Claude produces the Master Client Brief — six-pillar current state assessment, gap analysis with blocking relationships, prioritized roadmap, and client communication points.',
      output: 'Master Client Brief + /project:deck discovery',
      duration: '30–60 min',
    },
  ];

  const chatPrompt = `You are running the AI Strategy Practice Framework (ASPF) — the internal practice methodology for AI consulting engagements.

I need to run a DISCOVERY session for a new client engagement. This is the prerequisite to all six pillar engagements.

The discovery runs in three acts:
- Act 1: You ask me structured questions about the client and engagement. I answer. You produce a Pillar Hypothesis Map and Facilitation Guide.
- Act 2: I run the client workshop using the facilitation guide (you are not present).
- Act 3: I feed my notes back to you. You produce the Master Client Brief — six-pillar assessment, gap analysis, prioritized roadmap, and client communication points.

BEGIN ACT 1 NOW.

Ask me the following 10 questions together in a single message:

ABOUT THE CLIENT:
1. Who is the client — name, industry, approximate size (revenue or headcount), and geography?
2. What is the client's stated goal for this engagement — what did they ask for?
3. What do you already know about their current AI activity — what tools, initiatives, or experiments are underway?
4. Who are the key stakeholders you will be meeting — roles, influence level, and known stance on AI?
5. What is the client's competitive pressure around AI — are they behind peers, ahead, or unclear?

ABOUT THE ENGAGEMENT:
6. What service lines are in scope — Strategy & Transformation, Business Applications, Applications Operations, Business Operations, or some combination?
7. Is there a budget signal — enterprise-scale transformation, or a more contained initial engagement?
8. What is the timeline pressure — is there a board deadline, a competitive event, or a regulatory trigger?
9. What does success look like at the end of this discovery phase — what does the client need to walk away believing?

ABOUT PRIOR KNOWLEDGE:
10. Have we worked with this client before — and if so, what do we know about what worked and what didn't?

After I answer, produce:
1. A Pillar Hypothesis Map — for each of the six pillars, state: hypothesis (what you expect to find), confidence (High/Medium/Low), and the single most important question to ask in the workshop.
2. A Facilitation Guide — the structured question set for the client workshop, organized by pillar.`;

  const briefTemplate = `## Post-Meeting Input for Master Client Brief

Client: [Name]
Meeting date: [Date]
Attendees: [Roles present]

For each pillar, summarize what you heard:

Pillar 1 — AI Value & Tech Strategy:
- Current state: [What you heard]
- Gaps surfaced: [What's missing]
- Confidence: [High / Medium / Low]
- Surprising signals: [Anything unexpected]

Pillar 2 — AI Data Foundation:
[Same structure]

Pillar 3 — AI Innovation Garage:
[Same structure]

Pillar 4 — AI Governance:
[Same structure]

Pillar 5 — AI Factory:
[Same structure]

Pillar 6 — Run & Enhance:
[Same structure]

Priority signal: [What the client said when asked which pillar matters most]
North star: [How they described success in 3 years]
Blockers: [What they said could prevent this from working]
Open questions: [What was unclear or contradictory]`;

  const workshopQuestions = [
    {
      pillar: 'P1 — AI Value & Tech Strategy',
      color: '#6366F1',
      questions: [
        'Do you have a documented AI strategy? Who owns it and when was it last reviewed?',
        'How does AI appear in your business case or investment planning?',
        'If you had to describe your AI strategy in two sentences right now, what would you say?',
        'On a scale of 1–5, how confident is your leadership team that they know where AI will create the most value?',
      ],
    },
    {
      pillar: 'P2 — AI Data Foundation',
      color: '#0EA5E9',
      questions: [
        'What does your current data infrastructure look like — cloud, on-prem, hybrid?',
        'When an agent or model needs data from your systems, how hard is it to get?',
        'Has a data quality issue ever blocked or damaged an AI initiative?',
        'If we needed to ground an AI agent in your business context today, how long would it take?',
      ],
    },
    {
      pillar: 'P3 — AI Innovation Garage',
      color: '#10B981',
      questions: [
        'Have you run AI pilots or proofs of concept? What happened to them?',
        'How long does it typically take from "let\'s try this AI idea" to something in production?',
        'What\'s the biggest AI initiative you\'ve tried that didn\'t make it to production? What stopped it?',
        'If we needed working AI agents in production within 8 weeks, what would the biggest obstacle be?',
      ],
    },
    {
      pillar: 'P4 — AI Governance',
      color: '#F59E0B',
      questions: [
        'Do you have AI-specific policies in place — responsible AI, model inventory, risk controls?',
        'Who is accountable when an AI system makes a harmful or incorrect decision?',
        'Have you had an AI incident — an output that caused harm, embarrassment, or required rollback?',
        'If an AI agent made a significant error tomorrow, do you know exactly who would handle it and how?',
      ],
    },
    {
      pillar: 'P5 — AI Factory',
      color: '#EF4444',
      questions: [
        'Do you have AI systems running reliably in production at scale — not pilots, actual production?',
        'How are your AI models deployed, monitored, and updated? Is this automated or manual?',
        'What breaks most often in your AI systems in production?',
        'If we needed to scale a working pilot to 10x current usage in 90 days, what would fail first?',
      ],
    },
    {
      pillar: 'P6 — Run & Enhance',
      color: '#8B5CF6',
      questions: [
        'For AI systems currently in production, who is responsible for their ongoing performance?',
        'How do you know if an AI system is still working as intended three months after launch?',
        'What AI systems have degraded silently since launch — where results got worse but no one noticed?',
        'If we handed off a fully built AI system today, could your team operate and improve it without us?',
      ],
    },
  ];

  return (
    <Page>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Home</button>
          <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)' }}>Discovery</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>— Prerequisite to all six pillars</span>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)', marginBottom: 14 }}>Discovery</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
              Understand where the client is<br />before any work begins.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65 }}>
              The six pillars are all foundational. Before engaging any of them, the practice needs a clear picture of the client's current state across all six — what exists, what's missing, and what needs to happen in what sequence to move them toward AI-native operation.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 28 }}>
            {acts.map((act, i) => (
              <div key={act.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 14, padding: '14px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6, alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: act.color, marginBottom: 2 }}>{act.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.06em' }}>{act.duration}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>{act.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{act.desc}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: act.color, marginTop: 5, letterSpacing: '0.06em' }}>→ {act.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Act tabs */}
        <div style={{ paddingTop: 36 }}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            {[
              { id: 'act1',  label: 'Act 1 — Prep',                    color: 'var(--brand-purple-soft)' },
              { id: 'act15', label: 'Act 1.5 — Stakeholder Interviews', color: '#A78BFA' },
              { id: 'act2',  label: 'Act 2 — Workshop',                 color: 'var(--entry-during)' },
              { id: 'act3',  label: 'Act 3 — Synthesis',                color: 'var(--entry-before)' },
            ].map(tab => {
              const isActive = activeAct === tab.id;
              return (
                <button key={tab.id} onClick={() => { setActiveAct(tab.id); setSurface(null); }} style={{ flex: 1, padding: '12px 16px', background: isActive ? `color-mix(in srgb, ${tab.color} 8%, var(--card))` : 'var(--card)', border: `1px solid ${isActive ? `color-mix(in srgb, ${tab.color} 30%, var(--border))` : 'var(--border)'}`, borderBottom: isActive ? `1px solid ${`color-mix(in srgb, ${tab.color} 30%, var(--border))`}` : '1px solid transparent', borderRadius: '8px 8px 0 0', cursor: 'pointer', transition: 'all 180ms', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: isActive ? tab.color : 'var(--fg-muted)' }}>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Act 1 */}
          {activeAct === 'act1' && (
            <div style={{ border: '1px solid color-mix(in srgb, var(--brand-purple-soft) 20%, var(--border))', borderRadius: '0 0 10px 10px', background: 'color-mix(in srgb, var(--brand-purple-soft) 3%, var(--card))', padding: '28px', borderTop: 'none' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 24, maxWidth: 600 }}>
                Claude asks you 10 structured questions about the client and engagement. You answer. Claude synthesizes a Pillar Hypothesis Map — what it expects to find in each of the six pillars — and a Facilitation Guide you carry into the client workshop.
              </p>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>How are you running Claude?</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
                {[
                  { id: 'chat', label: 'Claude Chat', sub: 'Copy the Act 1 kickoff prompt' },
                  { id: 'code', label: 'Claude Code', sub: 'Run /project:discover' },
                ].map(opt => (
                  <button key={opt.id} onClick={() => setSurface(opt.id)} style={{ textAlign: 'left', background: surface === opt.id ? 'rgba(134,59,255,0.08)' : 'var(--card)', border: `1px solid ${surface === opt.id ? 'var(--brand-purple-soft)' : 'var(--border)'}`, borderRadius: 7, padding: '12px 14px', cursor: 'pointer', transition: 'all 180ms' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 2 }}>{opt.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>

              {surface === 'chat' && (
                <div style={{ border: '1px solid color-mix(in srgb, var(--brand-purple-soft) 20%, var(--border))', borderRadius: 8, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Act 1 kickoff prompt — paste into Claude Chat</span>
                    <CopyButton text={chatPrompt} color="var(--brand-purple-soft)" />
                  </div>
                  <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', lineHeight: 1.6, padding: '12px', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 220, overflowY: 'auto', background: 'var(--bg)' }}>{chatPrompt}</pre>
                  <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: 'rgba(134,59,255,0.15)', color: 'var(--brand-purple-soft)', border: '1px solid rgba(134,59,255,0.3)', textDecoration: 'none', display: 'inline-block' }}>
                      Open Claude →
                    </a>
                  </div>
                </div>
              )}

              {surface === 'code' && (
                <div style={{ border: '1px solid color-mix(in srgb, var(--brand-purple-soft) 20%, var(--border))', borderRadius: 8, padding: '16px' }}>
                  {[
                    { n: '01', content: <>Open the project in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                    { n: '02', content: <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-purple-soft)' }}>/project:discover</code> — Claude begins Act 1 automatically</> },
                  ].map(s => (
                    <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--brand-purple-soft)', flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Act 1.5 — Stakeholder Interviews */}
          {activeAct === 'act15' && (
            <div style={{ border: '1px solid color-mix(in srgb, #A78BFA 20%, var(--border))', borderRadius: '0 0 10px 10px', background: 'color-mix(in srgb, #A78BFA 3%, var(--card))', padding: '28px', borderTop: 'none' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 8, maxWidth: 640 }}>
                Individual 30-minute calls with key stakeholders before the group workshop. Group sessions surface positions. Individual conversations surface truth. What people say privately — their real diagnosis, their actual fear, what they'll defend — changes everything about how you facilitate the workshop.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 28, maxWidth: 640 }}>
                When interviews aren't possible, the framework generates role-based assumptions clearly labeled as such. Either way, you walk in knowing the room.
              </p>

              {/* Three modes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 28 }}>
                {[
                  { mode: 'Mode A', label: 'Full Interviews', desc: '30-min individual calls with each key stakeholder. Practitioner feeds notes to ASPF. Full synthesis produced.', color: '#A78BFA' },
                  { mode: 'Mode B', label: 'Partial Access', desc: 'Some stakeholders interviewed, others not. ASPF fills gaps with role-based assumptions, clearly flagged.', color: 'var(--entry-during)' },
                  { mode: 'Mode C', label: 'No Access', desc: 'No interviews possible. ASPF generates a complete role-based hypothesis map from the brief alone. Everything labeled as assumed.', color: 'var(--fg-dim)' },
                ].map(m => (
                  <div key={m.mode} style={{ padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 7 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: m.color, marginBottom: 5 }}>{m.mode}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 5 }}>{m.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                ))}
              </div>

              {/* Interview structure */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>30-minute interview structure</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 28 }}>
                {[
                  { block: 'Open', time: '2 min', desc: 'Set the frame — confidentiality signal, purpose of the call, not a pitch.' },
                  { block: 'Block 1', time: '8 min', desc: 'Their view of the business problem — private diagnosis, not company line. What do they think most people get wrong?' },
                  { block: 'Block 2', time: '8 min', desc: 'Their experience with technology and change — prior trauma, what they\'ll defend, what triggers resistance.' },
                  { block: 'Block 3', time: '8 min', desc: 'Their stake in the outcome — what success and failure mean for them personally, not just organizationally.' },
                  { block: 'Close', time: '4 min', desc: '"Is there anything you think we need to know that I haven\'t asked — or that won\'t come up in the group?" This produces the most valuable information in the call.' },
                ].map(b => (
                  <div key={b.block} style={{ display: 'grid', gridTemplateColumns: '64px 48px 1fr', gap: 14, padding: '12px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6, alignItems: 'start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#A78BFA', letterSpacing: '0.08em' }}>{b.block}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{b.time}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{b.desc}</span>
                  </div>
                ))}
              </div>

              {/* Output */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 20 }}>
                {[
                  { label: 'Individual profiles', desc: 'Goals, concerns, private diagnosis, trust triggers, resistance triggers per stakeholder' },
                  { label: 'Fault line map', desc: 'Where stakeholders genuinely disagree — named specifically, not generically' },
                  { label: 'Workshop positioning', desc: 'Who to call on first, what to avoid, the thing nobody will say in the group' },
                ].map(o => (
                  <div key={o.label} style={{ padding: '14px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 7 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: '#A78BFA', marginBottom: 4 }}>{o.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{o.desc}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ padding: '14px 16px', border: '1px solid color-mix(in srgb, #A78BFA 25%, var(--border))', borderRadius: 7, background: 'rgba(167,139,250,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>
                  Full interview guide, role-based assumption library, and output schema in <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>stakeholder-interviews.md</code>
                </div>
                <a href="https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/stakeholder-interviews.md" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '8px 14px', borderRadius: 5, background: 'rgba(167,139,250,0.15)', color: '#A78BFA', border: '1px solid rgba(167,139,250,0.3)', textDecoration: 'none', display: 'inline-block', flexShrink: 0 }}>
                  View skill file →
                </a>
              </div>
            </div>
          )}

          {/* Act 2 — Workshop */}
          {activeAct === 'act2' && (
            <div style={{ border: '1px solid color-mix(in srgb, var(--entry-during) 20%, var(--border))', borderRadius: '0 0 10px 10px', background: 'color-mix(in srgb, var(--entry-during) 3%, var(--card))', padding: '28px', borderTop: 'none' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 28, maxWidth: 600 }}>
                You run the client session. Claude does not attend. Use the Facilitation Guide from Act 1 to structure the conversation. Capture what you hear in whatever format works — notes, recording, whiteboard photos. Below is the question set organized by pillar.
              </p>

              <div style={{ marginBottom: 20, padding: '12px 16px', border: '1px solid color-mix(in srgb, var(--entry-during) 25%, var(--border))', borderRadius: 7, background: 'rgba(245,158,11,0.04)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Workshop opening</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "We're going to spend [X] hours understanding where you are across six dimensions of AI readiness. This isn't a test — it's a map. The goal is to be honest about where you are so we can be precise about what needs to happen next."
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {workshopQuestions.map(pillar => (
                  <div key={pillar.pillar} style={{ border: '1px solid var(--border)', borderRadius: 7, overflow: 'hidden' }}>
                    <div style={{ padding: '10px 16px', background: `color-mix(in srgb, ${pillar.color} 8%, var(--card))`, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: pillar.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', color: pillar.color, fontWeight: 500 }}>{pillar.pillar}</span>
                    </div>
                    <div style={{ padding: '12px 16px', background: 'var(--card)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {pillar.questions.map((q, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', flexShrink: 0, paddingTop: 3, letterSpacing: '0.04em' }}>{String(i+1).padStart(2,'0')}</span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20, padding: '14px 16px', border: '1px solid color-mix(in srgb, var(--entry-during) 25%, var(--border))', borderRadius: 7, background: 'rgba(245,158,11,0.04)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 8 }}>Workshop close (ask all three)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    'If you could only fix one of these six areas in the next 90 days, which would have the biggest impact — and why?',
                    'What does your organization look like in 3 years if AI goes well? And what does it look like if you get it wrong?',
                    'What\'s the single biggest thing inside your organization that could prevent this from succeeding — that we should know about now?',
                  ].map((q, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--entry-during)', flexShrink: 0, paddingTop: 3 }}>→</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5, fontStyle: 'italic' }}>"{q}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Act 3 — Synthesis */}
          {activeAct === 'act3' && (
            <div style={{ border: '1px solid color-mix(in srgb, var(--entry-before) 20%, var(--border))', borderRadius: '0 0 10px 10px', background: 'color-mix(in srgb, var(--entry-before) 3%, var(--card))', padding: '28px', borderTop: 'none' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 24, maxWidth: 600 }}>
                Feed what you heard back into Claude using the template below. Claude synthesizes a Master Client Brief — six-pillar assessment, gap analysis with blocking relationships, prioritized roadmap, and client communication points. Then run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-orange-soft)' }}>/project:deck discovery</code> to generate the client presentation.
              </p>

              <div style={{ border: '1px solid color-mix(in srgb, var(--entry-before) 20%, var(--border))', borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Post-meeting input template — paste into Claude after the workshop</span>
                  <CopyButton text={briefTemplate} color="var(--entry-before)" />
                </div>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', lineHeight: 1.6, padding: '12px', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 260, overflowY: 'auto', background: 'var(--bg)' }}>{briefTemplate}</pre>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {[
                  { label: 'Six-Pillar Assessment', desc: 'Current state with confidence level and key finding per pillar' },
                  { label: 'Gap Analysis', desc: 'Gaps with severity and blocking relationships between pillars' },
                  { label: 'Prioritized Roadmap', desc: 'Phase 1 / 2 / 3 with sequence rationale' },
                  { label: 'Client Communication Points', desc: 'Where you are, what needs to happen, why this sequence' },
                  { label: 'Open Questions', desc: 'What remains unclear and requires follow-up' },
                  { label: 'Client Deck', desc: 'Run /project:deck discovery to generate the PowerPoint' },
                ].map(item => (
                  <div key={item.label} style={{ padding: '14px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 7 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20, padding: '14px 16px', border: '1px solid var(--border)', borderRadius: 7, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>Master brief saved</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>Brief persists at <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)' }}>.aspf/clients/[client]/brief.md</code> — all pillar engagements load it as opening context.</div>
                </div>
                <button onClick={() => go('home')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', cursor: 'pointer', flexShrink: 0 }}>
                  Open a pillar →
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ height: 64 }} />
      </div>
      <Footer go={go} />
    </Page>
  );
}

window.DiscoveryPage = DiscoveryPage;
