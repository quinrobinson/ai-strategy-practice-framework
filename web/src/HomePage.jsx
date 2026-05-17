/* HomePage.jsx — Guided experience, not information distribution */

function HomePage({ go }) {
  const { entryPoints } = window.ASPF_DATA;
  const [hovered, setHovered] = React.useState(null);

  const entryColors = {
    before: 'var(--entry-before)',
    during: 'var(--entry-during)',
    after:  'var(--entry-after)',
  };

  const entrySteps = {
    before: ['Qualify the problem', 'Select a method', 'Map risks', 'Define outcomes', 'Audit readiness'],
    during: ['Detect drift', 'Surface emerging risks', 'Course-correct'],
    after:  ['Measure outcomes', 'Audit the process', 'Feed forward'],
  };

  const entryFiles = {
    before: 'problem-qualification.md',
    during: 'mid-project-audit.md',
    after:  'retrospective.md',
  };

  return (
    <Page ambient>
      {/* Minimal nav — just the mark and a GitHub link */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark size={24} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>ASPF</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <button onClick={() => go('skills')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>Skills</button>
            <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', textDecoration: 'none' }}>GitHub →</a>
          </div>
        </div>
      </header>

      {/* Hero — tight, one idea */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 48px 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 28 }}>
          AI Strategy Practice Framework
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1.04, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: 900, marginBottom: 0 }}>
          Stop starting with tools.<br />
          <span style={{ background: 'linear-gradient(90deg, #C084FC 0%, #E9810C 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Start with the right question.</span>
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)', maxWidth: 580, marginTop: 32, marginBottom: 0 }}>
          ASPF is a decision framework for product teams — powered by Claude. It tells you whether to use AI, how to use it, and whether it's working. Three questions. One for each stage.
        </p>
      </div>

      {/* The three entry points — the primary action */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 48px 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 24 }}>
          Where are you right now?
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {entryPoints.map((ep) => {
            const color = entryColors[ep.id];
            const isHov = hovered === ep.id;
            return (
              <div
                key={ep.id}
                onClick={() => go('start')}
                onMouseEnter={() => setHovered(ep.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? 'var(--elevated)' : 'var(--card)',
                  border: `1px solid ${isHov ? color : 'var(--border)'}`,
                  borderRadius: ep.id === 'before' ? '12px 4px 4px 12px' : ep.id === 'after' ? '4px 12px 12px 4px' : '4px',
                  padding: '32px 28px 28px',
                  cursor: 'pointer',
                  transition: 'all 200ms var(--ease-out)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, opacity: isHov ? 1 : 0.4, transition: 'opacity 200ms' }} />

                {/* Label + number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: color, fontWeight: 500 }}>
                    {ep.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 600, color: 'var(--border)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {ep.id === 'before' ? '01' : ep.id === 'during' ? '02' : '03'}
                  </span>
                </div>

                {/* The question — the core of this card */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: 'var(--fg)' }}>
                  {ep.question}
                </div>

                {/* Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {entrySteps[ep.id].map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: 999, background: color, opacity: 0.5, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1 }}>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Start file */}
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.04em' }}>{entryFiles[ep.id]}</code>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: isHov ? color : 'var(--fg-muted)', letterSpacing: '0.10em', textTransform: 'uppercase', transition: 'color 200ms' }}>
                    Start →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single CTA below cards */}
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button variant="primary" onClick={() => go('start')} style={{ fontSize: 12 }}>
            I don't know where to start →
          </Button>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)' }}>
            Claude will ask three questions and place you.
          </span>
        </div>
      </div>

      {/* How Claude works — minimal, one section */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 48px 0' }}>
        <GradRule />
        <div style={{ paddingTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 20 }}>How it works</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: 16 }}>
              Claude is the framework.<br />Not a tool that runs it.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              Describe your situation. Claude detects where you are, activates the right perspective, routes you through the right questions, and flags risks before you hit them.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7, marginTop: 12 }}>
              No preset path. Every session adapts to your context.
            </p>

            <div style={{ marginTop: 32, display: 'flex', gap: 10 }}>
              <Button onClick={() => go('start')}>Get started</Button>
              <Button onClick={() => go('skills')} style={{ color: 'var(--fg-muted)' }}>View skill files</Button>
            </div>
          </div>

          {/* The four layers — compact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { num: '00', title: 'Entry detection', desc: 'Reads your opening message. Identifies whether you\'re before, during, or after an initiative.' },
              { num: '01', title: 'Context snapshot', desc: 'Three questions. Domain, team, prior decisions. Predictor starts scanning immediately.' },
              { num: '02', title: 'Guided intake', desc: 'Framing questions, then adaptive follow-ups. Routes to the right skill in the right sequence.' },
              { num: '03', title: 'Clear output', desc: 'Every session ends with a recommendation, a decision, and one explicit next action.' },
            ].map((l, i) => (
              <div key={l.num} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, padding: '16px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--border)', paddingTop: 2 }}>{l.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{l.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{l.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* APDF relationship — small, at the bottom */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px 96px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 20px', border: '1px solid var(--border)', borderRadius: 8, background: 'transparent' }}>
          <div style={{ width: 1, height: 32, background: 'var(--grad-brand)', borderRadius: 1, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Companion to APDF.</strong> ASPF answers whether and how to use AI. APDF executes the design work. Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/project:handoff</code> to bridge them.
          </span>
          <a href="https://github.com/quinrobinson/Agentic-Product-Design-Framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-muted)', textDecoration: 'none', flexShrink: 0 }}>APDF →</a>
        </div>
      </div>

      <Footer />
    </Page>
  );
}

window.HomePage = HomePage;
