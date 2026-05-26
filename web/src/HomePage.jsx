/* HomePage.jsx — mode-aware: Product Team | AI Strategist */

function HomePage({ go, mode, onModeToggle }) {
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

  // ── AI Strategist mode ──────────────────────────────────────────
  if (mode === 'strategist') {
    const strategistEntries = [
      {
        id: 'assess',
        color: 'var(--brand-purple-soft)',
        label: 'Assess',
        question: 'Where does our AI practice stand today?',
        desc: 'Evaluate maturity across strategy, data, risk, measurement, and culture. Know exactly where to invest.',
        skills: ['maturity-model', 'readiness-audit', 'data-strategy'],
      },
      {
        id: 'govern',
        color: 'var(--brand-orange)',
        label: 'Govern',
        question: 'How do we build responsible AI practice across the org?',
        desc: 'Establish governance structures, responsible AI policies, stakeholder alignment, and risk frameworks.',
        skills: ['responsible-ai', 'stakeholder-alignment', 'risk-mapping'],
      },
      {
        id: 'advance',
        color: 'var(--entry-before)',
        label: 'Advance',
        question: 'How do we demonstrate value and scale the practice?',
        desc: 'Define outcomes, measure ROI across initiatives, and build the case for continued AI investment.',
        skills: ['outcome-definition', 'retrospective', 'phase-routing'],
      },
    ];

    return (
      <Page ambient>
        <Header active="home" go={go} mode={mode} onModeToggle={onModeToggle} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)', marginBottom: 12 }}>
            For AI Strategists
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.5vw, 72px)', lineHeight: 1.04, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: 860, marginBottom: 0 }}>
            Build, govern, and advance<br />
            <span style={{ background: 'linear-gradient(90deg, #C084FC 0%, #E9810C 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>your AI practice.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)', maxWidth: 560, marginTop: 32 }}>
            ASPF gives AI Strategists a structured methodology for assessing organizational AI maturity, establishing governance, and demonstrating compounding value across initiatives.
          </p>

          {/* Strategist-specific problem framing */}
          <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
            {[
              { label: 'The portfolio problem', desc: 'Multiple initiatives, no common way to evaluate them.' },
              { label: 'The governance gap', desc: 'AI is moving faster than policy and oversight.' },
              { label: 'The ROI question', desc: 'Leadership wants proof the practice is paying off.' },
            ].map(p => (
              <div key={p.label} style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{p.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Three strategist entry points */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 24 }}>
            What are you working on?
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {strategistEntries.map(ep => (
              <div
                key={ep.id}
                onClick={() => go('strategist')}
                onMouseEnter={() => setHovered(ep.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === ep.id ? 'var(--elevated)' : 'var(--card)',
                  border: `1px solid ${hovered === ep.id ? ep.color : 'var(--border)'}`,
                  borderRadius: 10, padding: '28px 24px 24px',
                  cursor: 'pointer', transition: 'all 200ms var(--ease-out)',
                  display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: ep.color, opacity: hovered === ep.id ? 1 : 0.4, transition: 'opacity 200ms' }} />
                <Tag color={ep.color} dot>{ep.label}</Tag>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, lineHeight: 1.25, color: 'var(--fg)' }}>
                  {ep.question}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                  {ep.desc}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ep.skills.map(s => (
                    <code key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.04em', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 3 }}>{s}.md</code>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button variant="strategist" onClick={() => go('strategist')}>
              View the AI Strategist toolkit →
            </Button>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)' }}>
              Curated skills, kickoff prompts, and deck templates for your role.
            </span>
          </div>
        </div>

        {/* How it serves the strategist role */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px 96px' }}>
          <GradRule />
          <div style={{ paddingTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <Eyebrow style={{ marginBottom: 16 }}>Built for the role</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, lineHeight: 1.2, marginBottom: 14 }}>
                The framework runs in Claude.<br />The outputs go to leadership.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 14 }}>
                Every skill session produces a structured artifact — risk register, readiness score, responsible AI assessment, outcome brief. Run <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/project:deck</code> to generate a stakeholder-ready PowerPoint from any artifact.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                ASPF is also upstream of APDF — when an initiative is ready to move into product design, <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/project:handoff</code> carries the full strategic context into the design workflow.
              </p>
              <div style={{ marginTop: 28 }}>
                <Button onClick={() => go('strategist')}>Open the AI Strategist toolkit →</Button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { skill: 'maturity-model.md', role: 'Assess', out: 'Six-dimension maturity score + 12-month improvement roadmap' },
                { skill: 'stakeholder-alignment.md', role: 'Govern', out: 'Stakeholder map + leadership case for AI investment' },
                { skill: 'responsible-ai.md', role: 'Govern', out: 'Five-principle assessment + regulatory compliance record' },
                { skill: 'outcome-definition.md', role: 'Advance', out: 'Measurable outcome brief with baselines and guardrails' },
                { skill: 'retrospective.md', role: 'Advance', out: 'ROI measurement + feed-forward to next initiative' },
              ].map(r => (
                <div key={r.skill} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, padding: '12px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6, alignItems: 'start' }}>
                  <div>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-orange-soft)' }}>{r.skill}</code>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4, marginTop: 3 }}>{r.out}</div>
                  </div>
                  <Tag color={r.role === 'Assess' ? 'var(--brand-purple-soft)' : r.role === 'Govern' ? 'var(--brand-orange)' : 'var(--entry-before)'}>{r.role}</Tag>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer go={go} />
      </Page>
    );
  }

  // ── Product Team mode (default) ─────────────────────────────────
  return (
    <Page ambient>
      <Header active="home" go={go} mode={mode} onModeToggle={onModeToggle} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 48px 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 28 }}>
          AI Strategy Practice Framework
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1.04, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: 900, marginBottom: 0 }}>
          Stop starting with tools.<br />
          <span style={{ background: 'linear-gradient(90deg, #C084FC 0%, #E9810C 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Start with the right question.</span>
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)', maxWidth: 580, marginTop: 32 }}>
          ASPF is a decision framework for product teams — run by Claude. It tells you whether to use AI, how to use it, and whether it's working.
        </p>
      </div>

      {/* Three entry points */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 48px 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 24 }}>
          Where are you right now?
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {entryPoints.map(ep => {
            const color = entryColors[ep.id];
            const isHov = hovered === ep.id;
            return (
              <div
                key={ep.id}
                onClick={() => go(ep.id)}
                onMouseEnter={() => setHovered(ep.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? 'var(--elevated)' : 'var(--card)',
                  border: `1px solid ${isHov ? color : 'var(--border)'}`,
                  borderRadius: ep.id === 'before' ? '12px 4px 4px 12px' : ep.id === 'after' ? '4px 12px 12px 4px' : '4px',
                  padding: '32px 28px 28px', cursor: 'pointer',
                  transition: 'all 200ms var(--ease-out)',
                  display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, opacity: isHov ? 1 : 0.4, transition: 'opacity 200ms' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: color, fontWeight: 500 }}>{ep.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 600, color: 'var(--border)', lineHeight: 1 }}>
                    {ep.id === 'before' ? '01' : ep.id === 'during' ? '02' : '03'}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: 'var(--fg)' }}>{ep.question}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {entrySteps[ep.id].map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: 999, background: color, opacity: 0.5, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1 }}>{step}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{entryFiles[ep.id]}</code>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: isHov ? color : 'var(--fg-muted)', letterSpacing: '0.10em', textTransform: 'uppercase', transition: 'color 200ms' }}>Start →</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button variant="primary" onClick={() => go('diagnose')} style={{ fontSize: 12 }}>
            I don't know where to start →
          </Button>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)' }}>
            Answer two questions — we'll place you.
          </span>
        </div>
      </div>

      {/* How it works */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 48px 0' }}>
        <GradRule />
        <div style={{ paddingTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Eyebrow style={{ marginBottom: 16 }}>How it works</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: 16 }}>
              The framework defines the questions.<br />Claude runs them.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              The methodology — skill files, decision logic, failure mode library — exists independently. Claude executes it conversationally and adaptively. Describe your situation. Claude places you, routes the session, and flags risks before you hit them.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 10 }}>
              <Button onClick={() => go('diagnose')}>Get started</Button>
              <Button onClick={() => go('skills')} style={{ color: 'var(--fg-muted)' }}>View skill files</Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { num: '00', title: 'Entry detection', desc: 'Reads your opening message. Identifies Before, During, or After.' },
              { num: '01', title: 'Context snapshot', desc: 'Three questions. Domain, team, prior decisions. Predictor starts scanning.' },
              { num: '02', title: 'Guided intake', desc: 'Framing questions, then adaptive follow-ups. Routes to the right skill in sequence.' },
              { num: '03', title: 'Clear output', desc: 'Every session ends with a recommendation, a decision, and one next action.' },
            ].map(l => (
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

      {/* APDF + footer */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px 96px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 20px', border: '1px solid var(--border)', borderRadius: 8 }}>
          <div style={{ width: 1, height: 32, background: 'var(--grad-brand)', borderRadius: 1, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Companion to APDF.</strong> ASPF answers whether and how to use AI. APDF executes the design work. Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/project:handoff</code> to bridge them.
          </span>
          <a href="https://github.com/quinrobinson/Agentic-Product-Design-Framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', textDecoration: 'none', flexShrink: 0 }}>APDF →</a>
        </div>
      </div>

      <Footer go={go} />
    </Page>
  );
}

window.HomePage = HomePage;
