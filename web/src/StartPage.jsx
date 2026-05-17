/* StartPage.jsx — Guided entry point. The primary action from the home page. */

function StartPage({ go }) {
  const [step, setStep] = React.useState('detect'); // detect | before | during | after
  const [surface, setSurface] = React.useState(null); // chat | code

  const entryColors = {
    before: 'var(--entry-before)',
    during: 'var(--entry-during)',
    after:  'var(--entry-after)',
  };

  const situations = [
    {
      id: 'before',
      label: 'Before',
      color: 'var(--entry-before)',
      situation: 'We\'re considering using AI for something.',
      sub: 'Starting fresh — haven\'t committed to an approach yet.',
    },
    {
      id: 'during',
      label: 'During',
      color: 'var(--entry-during)',
      situation: 'We\'re in the middle of an AI initiative.',
      sub: 'Something feels off, or we want to check that we\'re on track.',
    },
    {
      id: 'after',
      label: 'After',
      color: 'var(--entry-after)',
      situation: 'An AI initiative has concluded.',
      sub: 'We want to evaluate what happened and learn from it.',
    },
  ];

  const entryDetail = {
    before: {
      headline: 'Starting an AI initiative',
      summary: 'You\'ll work through six questions — one skill file at a time. Each one makes a single decision and hands off to the next.',
      sequence: [
        { file: 'problem-qualification.md', label: 'Is this worth solving with AI?', step: '01' },
        { file: 'ai-method-selection.md',   label: 'Which approach fits?',           step: '02' },
        { file: 'responsible-ai.md',        label: 'What are our ethical obligations?', step: '03' },
        { file: 'risk-mapping.md',          label: 'What could go wrong?',           step: '04' },
        { file: 'outcome-definition.md',    label: 'How will we know it worked?',    step: '05' },
        { file: 'readiness-audit.md',       label: 'Are we ready to proceed?',       step: '06' },
      ],
      startFile: 'problem-qualification.md',
      startCmd: '/project:diagnose',
    },
    during: {
      headline: 'Checking an active initiative',
      summary: 'One structured audit — detects drift across five categories and tells you to continue, pivot, or stop.',
      sequence: [
        { file: 'mid-project-audit.md',    label: 'Where has this drifted from the original intent?', step: '01' },
        { file: 'model-monitoring.md',     label: 'Is the AI system performing in production?',       step: '02' },
        { file: 'user-feedback-loops.md',  label: 'What are users actually experiencing?',            step: '03' },
      ],
      startFile: 'mid-project-audit.md',
      startCmd: '/project:audit',
    },
    after: {
      headline: 'Evaluating a completed initiative',
      summary: 'One retrospective — compares outcomes to intentions, audits process, and generates a feed-forward for the next project.',
      sequence: [
        { file: 'retrospective.md', label: 'Did we achieve what we set out to?', step: '01' },
        { file: 'maturity-model.md', label: 'How has our AI practice matured?', step: '02' },
      ],
      startFile: 'retrospective.md',
      startCmd: '/project:retro',
    },
  };

  const GHBase = 'https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/';

  // Step 1: Detect where they are
  if (step === 'detect') {
    return (
      <Page>
        <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
            <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Back</button>
            <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Getting Started</span>
          </div>
        </header>

        <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 48px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 20 }}>Step 1 of 2</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>
            Where are you right now?
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 48 }}>
            Pick the situation that matches. Everything else follows from this.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {situations.map(s => (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                style={{
                  width: '100%', textAlign: 'left', background: 'var(--card)',
                  border: '1px solid var(--border)', borderRadius: 10,
                  padding: '22px 24px', cursor: 'pointer',
                  transition: 'border-color 200ms, background 200ms',
                  display: 'flex', alignItems: 'flex-start', gap: 20,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = 'var(--elevated)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; }}
              >
                <div style={{ width: 6, height: 6, borderRadius: 999, background: s.color, flexShrink: 0, marginTop: 8 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{s.situation}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.sub}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.10em', textTransform: 'uppercase', paddingTop: 6, flexShrink: 0 }}>Select →</div>
              </button>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)', marginTop: 32, lineHeight: 1.6 }}>
            Not sure? Pick the one that's closest. Claude will recalibrate from your first message.
          </p>
        </div>
      </Page>
    );
  }

  // Step 2: Show the path + how to start
  const detail = entryDetail[step];
  const color = entryColors[step];

  return (
    <Page>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => setStep('detect')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Change</button>
          <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Getting Started</span>
          <div style={{ marginLeft: 'auto' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, padding: '4px 10px', borderRadius: 4 }}>{step.charAt(0).toUpperCase() + step.slice(1)}</span>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 48px 96px' }}>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 16 }}>Step 2 of 2 — Your path</div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 10 }}>
          {detail.headline}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 48, maxWidth: 560 }}>
          {detail.summary}
        </p>

        {/* Sequence */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 14 }}>Your skill sequence</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 48 }}>
          {detail.sequence.map((s, i) => (
            <div key={s.file} style={{ display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 16, padding: '14px 18px', background: i === 0 ? `color-mix(in srgb, ${color} 6%, var(--card))` : 'var(--card)', border: `1px solid ${i === 0 ? `color-mix(in srgb, ${color} 25%, var(--border))` : 'var(--border)'}`, borderRadius: 6, alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: i === 0 ? color : 'var(--border)' }}>{s.step}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 2 }}>{s.label}</div>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.04em' }}>{s.file}</code>
              </div>
              {i === 0 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, padding: '3px 8px', borderRadius: 3 }}>Start here</span>}
            </div>
          ))}
        </div>

        {/* Surface picker */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 14 }}>How are you using Claude?</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 32 }}>
          {[
            { id: 'chat', label: 'Claude Chat', sub: 'claude.ai — upload skill files to a conversation', icon: '⌨' },
            { id: 'code', label: 'Claude Code', sub: 'Command line — skill files load automatically', icon: '⌘' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setSurface(opt.id)}
              style={{
                textAlign: 'left', background: surface === opt.id ? `color-mix(in srgb, ${color} 8%, var(--card))` : 'var(--card)',
                border: `1px solid ${surface === opt.id ? color : 'var(--border)'}`,
                borderRadius: 8, padding: '16px 18px', cursor: 'pointer',
                transition: 'all 200ms',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{opt.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{opt.sub}</div>
            </button>
          ))}
        </div>

        {/* Instructions — conditional on surface */}
        {surface && (
          <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 10, padding: '24px 26px', background: `color-mix(in srgb, ${color} 4%, var(--card))` }}>

            {surface === 'chat' && (
              <>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: color, marginBottom: 16 }}>Claude Chat — 3 steps</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { n: '01', text: <>Download <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>{detail.startFile}</code> from the GitHub repo</> },
                    { n: '02', text: 'Open a new Claude Chat conversation and attach the file' },
                    { n: '03', text: 'Describe your situation — Claude detects the entry point and begins' },
                  ].map(step => (
                    <div key={step.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, flexShrink: 0, paddingTop: 1 }}>{step.n}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{step.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
                  <a href={GHBase + detail.startFile} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: `color-mix(in srgb, ${color} 20%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 40%, transparent)`, textDecoration: 'none', display: 'inline-block', transition: 'all 200ms' }}>
                    ↓ Download {detail.startFile}
                  </a>
                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', textDecoration: 'none', display: 'inline-block' }}>
                    Open Claude →
                  </a>
                </div>
              </>
            )}

            {surface === 'code' && (
              <>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: color, marginBottom: 16 }}>Claude Code — 2 steps</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { n: '01', text: <>Clone the repo and open it in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                    { n: '02', text: <>Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>{detail.startCmd}</code> — skill files load automatically</> },
                  ].map(step => (
                    <div key={step.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, flexShrink: 0, paddingTop: 1 }}>{step.n}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{step.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
                  <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: `color-mix(in srgb, ${color} 20%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 40%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                    Clone repo →
                  </a>
                </div>
              </>
            )}
          </div>
        )}

        {/* If they haven't picked a surface yet, still show a ghost CTA */}
        {!surface && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
            Select how you're using Claude to see exact steps.
          </p>
        )}

      </div>
    </Page>
  );
}

window.StartPage = StartPage;
