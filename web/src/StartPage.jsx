/* StartPage.jsx
   Two modes:
   - Direct: entry point known (before/during/after) — skip situation picker, show path immediately
   - Diagnose: entry point unknown — two-question guided placement, then path
*/

function StartPage({ go, entry }) {
  // If entry is passed (before/during/after), skip straight to path
  const [step, setStep] = React.useState(entry ? 'path' : 'q1');
  const [selectedEntry, setSelectedEntry] = React.useState(entry || null);
  const [surface, setSurface] = React.useState(null);

  // Q1: What's going on?
  const [q1Answer, setQ1Answer] = React.useState(null);

  const entryColors = {
    before: 'var(--entry-before)',
    during: 'var(--entry-during)',
    after:  'var(--entry-after)',
  };

  const entryDetail = {
    before: {
      headline: 'Starting an AI initiative',
      summary: 'Six decisions — one skill file at a time. Each one produces a clear answer and hands off to the next.',
      sequence: [
        { file: 'problem-qualification.md', label: 'Is this worth solving with AI?',      step: '01' },
        { file: 'ai-method-selection.md',   label: 'Which approach fits?',                step: '02' },
        { file: 'responsible-ai.md',        label: 'What are our ethical obligations?',   step: '03' },
        { file: 'risk-mapping.md',          label: 'What could go wrong?',                step: '04' },
        { file: 'outcome-definition.md',    label: 'How will we know it worked?',         step: '05' },
        { file: 'readiness-audit.md',       label: 'Are we ready to proceed?',            step: '06' },
      ],
      startFile: 'problem-qualification.md',
      startCmd: '/project:diagnose',
    },
    during: {
      headline: 'Checking an active initiative',
      summary: 'One structured audit — detects drift, surfaces emerging risks, and tells you to continue, pivot, or stop.',
      sequence: [
        { file: 'mid-project-audit.md',   label: 'Where has this drifted from the original intent?', step: '01' },
        { file: 'model-monitoring.md',    label: 'Is the AI system still performing correctly?',      step: '02' },
        { file: 'user-feedback-loops.md', label: 'What are users actually experiencing?',            step: '03' },
      ],
      startFile: 'mid-project-audit.md',
      startCmd: '/project:audit',
    },
    after: {
      headline: 'Evaluating a completed initiative',
      summary: 'One retrospective — compares outcomes to intentions, audits process, and feeds forward to the next project.',
      sequence: [
        { file: 'retrospective.md',   label: 'Did we achieve what we set out to?', step: '01' },
        { file: 'maturity-model.md',  label: 'How has our AI practice matured?',   step: '02' },
      ],
      startFile: 'retrospective.md',
      startCmd: '/project:retro',
    },
  };

  const GHBase = 'https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/';

  // Shared header
  const Header = ({ onBack, backLabel }) => (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← {backLabel}</button>
        {selectedEntry && (
          <>
            <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: entryColors[selectedEntry], border: `1px solid color-mix(in srgb, ${entryColors[selectedEntry]} 30%, transparent)`, padding: '3px 10px', borderRadius: 4 }}>
              {selectedEntry.charAt(0).toUpperCase() + selectedEntry.slice(1)}
            </span>
          </>
        )}
      </div>
    </header>
  );

  // ── DIAGNOSTIC FLOW ──────────────────────────────────────────────

  // Q1: Situational placement in plain language
  if (step === 'q1') {
    const options = [
      { id: 'before', label: 'We\'re thinking about using AI for something.', sub: 'Haven\'t committed to an approach or method yet.' },
      { id: 'during', label: 'We\'re in the middle of an AI initiative.',     sub: 'Something feels off — or we just want to check in.' },
      { id: 'after',  label: 'An AI initiative has recently concluded.',       sub: 'We want to evaluate what happened and learn from it.' },
    ];

    return (
      <Page>
        <Header onBack={() => go('home')} backLabel="Home" />
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 20 }}>
            Question 1 of 2
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 10 }}>
            What's going on right now?
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 40 }}>
            Pick the one that's closest to your situation.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {options.map(opt => (
              <button
                key={opt.id}
                onClick={() => { setQ1Answer(opt.id); setSelectedEntry(opt.id); setStep('q2'); }}
                style={{ width: '100%', textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '20px 22px', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 16, transition: 'all 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = entryColors[opt.id]; e.currentTarget.style.background = 'var(--elevated)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; }}
              >
                <div style={{ width: 6, height: 6, borderRadius: 999, background: entryColors[opt.id], flexShrink: 0, marginTop: 7 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>{opt.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Page>
    );
  }

  // Q2: Surface — how are they running Claude?
  if (step === 'q2') {
    return (
      <Page>
        <Header onBack={() => { setStep('q1'); setSelectedEntry(null); setSurface(null); }} backLabel="Back" />
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 20 }}>
            Question 2 of 2
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 10 }}>
            How are you using Claude?
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 40 }}>
            This changes the setup steps.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
            {[
              { id: 'chat', label: 'Claude Chat', sub: 'claude.ai — you\'ll upload a skill file to a conversation' },
              { id: 'code', label: 'Claude Code', sub: 'Command line — skill files load from the repo automatically' },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => { setSurface(opt.id); setStep('path'); }}
                style={{ width: '100%', textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '20px 22px', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 16, transition: 'all 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = entryColors[selectedEntry]; e.currentTarget.style.background = 'var(--elevated)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>{opt.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Page>
    );
  }

  // ── PATH VIEW — shown for direct entry OR after diagnostic ───────
  const detail = entryDetail[selectedEntry];
  const color = entryColors[selectedEntry];

  return (
    <Page>
      <Header onBack={entry ? () => go('home') : () => { setStep('q2'); setSurface(null); }} backLabel={entry ? 'Home' : 'Back'} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 48px 96px' }}>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 8 }}>
          {detail.headline}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 48, maxWidth: 520 }}>
          {detail.summary}
        </p>

        {/* Skill sequence */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>
          Your skill sequence
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 48 }}>
          {detail.sequence.map((s, i) => (
            <div key={s.file} style={{ display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 16, padding: '14px 18px', background: i === 0 ? `color-mix(in srgb, ${color} 7%, var(--card))` : 'var(--card)', border: `1px solid ${i === 0 ? `color-mix(in srgb, ${color} 30%, var(--border))` : 'var(--border)'}`, borderRadius: 6, alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: i === 0 ? color : 'var(--border)' }}>{s.step}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 2 }}>{s.label}</div>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{s.file}</code>
              </div>
              {i === 0 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, padding: '3px 8px', borderRadius: 3, flexShrink: 0 }}>Start here</span>}
            </div>
          ))}
        </div>

        {/* Surface picker — shown if not yet chosen (direct entry) */}
        {!surface && (
          <>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>
              How are you using Claude?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 32 }}>
              {[
                { id: 'chat', label: 'Claude Chat', sub: 'claude.ai — upload skill file to a conversation' },
                { id: 'code', label: 'Claude Code', sub: 'Command line — skill files load automatically' },
              ].map(opt => (
                <button key={opt.id} onClick={() => setSurface(opt.id)} style={{ textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '16px 18px', cursor: 'pointer', transition: 'all 200ms' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = 'var(--elevated)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{opt.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Instructions — shown once surface is known */}
        {surface && (
          <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 10, padding: '24px 26px', background: `color-mix(in srgb, ${color} 4%, var(--card))` }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: color, marginBottom: 20 }}>
              {surface === 'chat' ? 'Claude Chat — 3 steps' : 'Claude Code — 2 steps'}
            </div>

            {surface === 'chat' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {[
                  { n: '01', content: <>Download <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>{detail.startFile}</code> from the GitHub repo</> },
                  { n: '02', content: 'Open a new Claude Chat conversation and attach the file' },
                  { n: '03', content: 'Describe your situation — Claude detects the entry point and begins' },
                ].map(s => (
                  <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                  </div>
                ))}
              </div>
            )}

            {surface === 'code' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {[
                  { n: '01', content: <>Clone the repo, then open it in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                  { n: '02', content: <>Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>{detail.startCmd}</code> — skill files load automatically</> },
                ].map(s => (
                  <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: 10 }}>
              {surface === 'chat' && (
                <>
                  <a href={GHBase + detail.startFile} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: `color-mix(in srgb, ${color} 18%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 35%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                    ↓ Download {detail.startFile}
                  </a>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', textDecoration: 'none', display: 'inline-block' }}>
                    Open Claude →
                  </a>
                </>
              )}
              {surface === 'code' && (
                <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: `color-mix(in srgb, ${color} 18%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 35%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                  Clone repo →
                </a>
              )}
              {/* Switch surface */}
              <button onClick={() => setSurface(null)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: 'transparent', color: 'var(--fg-faint)', border: 'none', cursor: 'pointer' }}>
                Switch surface
              </button>
            </div>
          </div>
        )}

      </div>
    </Page>
  );
}

window.StartPage = StartPage;
