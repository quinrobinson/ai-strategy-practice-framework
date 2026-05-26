/* StrategistPage.jsx — AI Strategist dedicated toolkit */

function StrategistPage({ go, mode, onModeToggle }) {
  const [activeEntry, setActiveEntry] = React.useState('assess');
  const [surface, setSurface] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const entries = [
    {
      id: 'assess',
      label: 'Assess',
      color: 'var(--brand-purple-soft)',
      question: 'Where does our AI practice stand today?',
      desc: 'Evaluate current maturity, identify capability gaps, and build a prioritized improvement roadmap.',
      skills: [
        { file: 'maturity-model.md', label: 'Six-dimension AI practice maturity assessment' },
        { file: 'readiness-audit.md', label: 'Initiative-level readiness across people, data, tooling, process' },
        { file: 'data-strategy.md', label: 'Data governance, lineage, consent, and quality audit' },
      ],
      startFile: 'maturity-model.md',
      startCmd: '/project:diagnose',
    },
    {
      id: 'govern',
      label: 'Govern',
      color: 'var(--brand-orange)',
      question: 'How do we build responsible AI practice across the org?',
      desc: 'Establish governance structures, align stakeholders, map risks, and create a responsible AI record.',
      skills: [
        { file: 'responsible-ai.md', label: 'Five-principle responsible AI checklist with regulatory mapping' },
        { file: 'stakeholder-alignment.md', label: 'Stakeholder map, resistance analysis, and leadership case' },
        { file: 'risk-mapping.md', label: 'AI risk register across technical, ethical, org, and legal dimensions' },
      ],
      startFile: 'stakeholder-alignment.md',
      startCmd: '/project:diagnose',
    },
    {
      id: 'advance',
      label: 'Advance',
      color: 'var(--entry-before)',
      question: 'How do we demonstrate value and scale the practice?',
      desc: 'Define measurable outcomes, evaluate initiative ROI, and build the compounding case for AI investment.',
      skills: [
        { file: 'outcome-definition.md', label: 'Hypothesis-format outcomes with baselines, targets, and guardrails' },
        { file: 'retrospective.md', label: 'ROI measurement against original intent, feed-forward to next initiative' },
        { file: 'phase-routing.md', label: 'Bridge strategy outputs into APDF for design execution' },
      ],
      startFile: 'outcome-definition.md',
      startCmd: '/project:diagnose',
    },
  ];

  const active = entries.find(e => e.id === activeEntry);

  const strategistChatPrompts = {
    assess: `You are running the AI Strategy Practice Framework (ASPF) in AI Strategist mode.

My focus is: ASSESS — I need to evaluate our organization's current AI practice maturity and identify where to invest.

Start by asking me three context questions together:
1. What industry or domain are you operating in?
2. How many AI initiatives has your organization run in the past 12 months?
3. Who is your primary audience for this assessment — the board, a leadership team, or an internal practice team?

Then begin with the maturity-model skill. Work through each of the six dimensions (strategy, problem definition, data, risk, measurement, culture) and produce a scored assessment with a prioritized 12-month improvement roadmap.

At the end, ask if I want to generate a stakeholder-ready PowerPoint deck from the output.`,

    govern: `You are running the AI Strategy Practice Framework (ASPF) in AI Strategist mode.

My focus is: GOVERN — I need to establish responsible AI governance and align stakeholders around our AI practice.

Start by asking me three context questions together:
1. What is the scope — a single team, a department, or the whole organization?
2. Are there specific regulatory or compliance requirements in play (EU AI Act, GDPR, HIPAA, etc.)?
3. Who are the key stakeholders I need to move — and what is their current stance on AI?

Then begin with the stakeholder-alignment skill, followed by responsible-ai, then risk-mapping. Each produces a structured artifact. At the end of each session, I will use /project:deck to generate a governance presentation.`,

    advance: `You are running the AI Strategy Practice Framework (ASPF) in AI Strategist mode.

My focus is: ADVANCE — I need to define measurable outcomes for AI initiatives and demonstrate the value of the AI practice to leadership.

Start by asking me three context questions together:
1. Are you defining outcomes for a new initiative, or measuring outcomes for a completed one?
2. Who needs to see these results — the board, a VP, or a team lead?
3. What does leadership currently believe about the ROI of AI in your organization?

Then begin with outcome-definition (for new initiatives) or retrospective (for completed ones). Every output should be framed in business terms — not AI system metrics. At the end, I will use /project:deck to generate a leadership presentation.`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(strategistChatPrompts[activeEntry]).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const color = active.color;

  return (
    <Page>
      <Header active="strategist" go={go} mode={mode} onModeToggle={onModeToggle} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>

        {/* Back + breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 28, marginBottom: 40 }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Home</button>
          <span style={{ color: 'var(--fg-faint)' }}>/</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)' }}>AI Strategist</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <Eyebrow color="var(--brand-purple-soft)" style={{ marginBottom: 14 }}>AI Strategist Toolkit</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Your structured methodology<br />for building AI practice.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 560 }}>
            Fifteen skill files organized around the three jobs of an AI Strategist — assess the current state, establish governance, and advance the practice. Every skill produces a stakeholder-ready artifact.
          </p>
        </div>

        <GradRule />

        {/* Three entry tabs */}
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            {entries.map(e => (
              <button
                key={e.id}
                onClick={() => { setActiveEntry(e.id); setSurface(null); }}
                style={{
                  flex: 1, padding: '16px 20px', textAlign: 'left',
                  background: activeEntry === e.id ? `color-mix(in srgb, ${e.color} 8%, var(--card))` : 'var(--card)',
                  border: `1px solid ${activeEntry === e.id ? `color-mix(in srgb, ${e.color} 35%, var(--border))` : 'var(--border)'}`,
                  borderBottom: activeEntry === e.id ? `1px solid ${`color-mix(in srgb, ${e.color} 35%, var(--border))`}` : '1px solid transparent',
                  borderRadius: '8px 8px 0 0', cursor: 'pointer', transition: 'all 200ms',
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}
              >
                <Tag color={e.color} dot style={{ alignSelf: 'flex-start' }}>{e.label}</Tag>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: activeEntry === e.id ? 'var(--fg)' : 'var(--fg-muted)', lineHeight: 1.3 }}>{e.question}</div>
              </button>
            ))}
          </div>

          {/* Active entry detail */}
          <div style={{ border: `1px solid color-mix(in srgb, ${color} 25%, var(--border))`, borderRadius: '0 0 10px 10px', background: `color-mix(in srgb, ${color} 4%, var(--card))`, padding: '28px 28px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 24, maxWidth: 600 }}>{active.desc}</p>

            {/* Skills for this entry */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
              {active.skills.map((s, i) => (
                <div key={s.file} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14, padding: '14px 16px', background: i === 0 ? `color-mix(in srgb, ${color} 8%, var(--bg))` : 'var(--bg)', border: `1px solid ${i === 0 ? `color-mix(in srgb, ${color} 25%, var(--border))` : 'var(--border)'}`, borderRadius: 6, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: i === 0 ? color : 'var(--border)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 2 }}>{s.label}</div>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{s.file}</code>
                  </div>
                </div>
              ))}
            </div>

            {/* Surface picker */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>
              How are you using Claude?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 24 }}>
              {[
                { id: 'chat', label: 'Claude Chat', sub: 'claude.ai — copy the kickoff prompt' },
                { id: 'code', label: 'Claude Code', sub: 'Command line — skill files load from the repo' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSurface(opt.id)}
                  style={{
                    textAlign: 'left',
                    background: surface === opt.id ? `color-mix(in srgb, ${color} 10%, var(--card))` : 'var(--card)',
                    border: `1px solid ${surface === opt.id ? color : 'var(--border)'}`,
                    borderRadius: 8, padding: '14px 16px', cursor: 'pointer', transition: 'all 200ms',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>{opt.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                </button>
              ))}
            </div>

            {/* Instructions */}
            {surface === 'chat' && (
              <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Strategist kickoff prompt — {active.label}</span>
                  <CopyButton text={strategistChatPrompts[activeEntry]} color={color} />
                </div>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.6, padding: '14px', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 200, overflowY: 'auto', background: 'var(--bg)' }}>{strategistChatPrompts[activeEntry]}</pre>
                <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 6, background: `color-mix(in srgb, ${color} 18%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 35%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                    Open Claude →
                  </a>
                </div>
              </div>
            )}

            {surface === 'code' && (
              <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 8, padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                  {[
                    { n: '01', content: <>Clone the repo and open in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                    { n: '02', content: <>Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>{active.startCmd}</code> and describe your {active.label.toLowerCase()} focus</> },
                    { n: '03', content: <>Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-orange-soft)' }}>/project:deck [skill]</code> to generate a stakeholder-ready PowerPoint</> },
                  ].map(s => (
                    <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                    </div>
                  ))}
                </div>
                <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: `color-mix(in srgb, ${color} 18%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 35%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                  Clone repo →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* PowerPoint callout */}
        <div style={{ marginTop: 48, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Every artifact generates a deck.</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-orange-soft)' }}>/project:deck [skill]</code> in Claude Code to generate a .pptx file from any skill output. Claude Chat users get a structured prompt to paste into a new conversation.
            </div>
          </div>
          <Button onClick={() => go('skills')} style={{ flexShrink: 0 }}>View all skills →</Button>
        </div>

        {/* Bottom padding */}
        <div style={{ height: 96 }} />
      </div>

      <Footer go={go} />
    </Page>
  );
}

window.StrategistPage = StrategistPage;
