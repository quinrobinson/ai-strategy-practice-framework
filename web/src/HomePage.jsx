/* HomePage.jsx */

function HomePage({ go }) {
  const { entryPoints, commands, failureModes } = window.ASPF_DATA;

  const entryColors = { before: 'var(--entry-before)', during: 'var(--entry-during)', after: 'var(--entry-after)' };

  // Isometric cube illustration for entry cards
  const CubeIllo = ({ color }) => (
    <svg viewBox="0 0 180 140" style={{ position: 'absolute', right: 12, bottom: 12, width: 160, height: 124, opacity: 0.25 }}>
      <g fill="none" stroke={color || '#404040'} strokeWidth="1" strokeLinejoin="round">
        <path d="M30 90 L70 70 L110 90 L70 110 Z" />
        <path d="M30 90 L30 115 L70 135 L70 110" />
        <path d="M70 110 L110 90 L110 115 L70 135" />
        <path d="M80 50 L120 30 L160 50 L120 70 Z" strokeOpacity="0.5" />
        <path d="M80 50 L80 75 L120 95 L120 70" strokeOpacity="0.5" />
      </g>
    </svg>
  );

  const cardBase = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 260, position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 200ms, background 200ms' };

  return (
    <Page ambient>
      <Header active="home" go={go} />

      {/* Hero */}
      <Container style={{ paddingTop: 80, paddingBottom: 96 }}>
        <Eyebrow style={{ marginBottom: 24 }}>AI Strategy Practice Framework</Eyebrow>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6.5vw, 86px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, marginBottom: 0, maxWidth: 1080, textWrap: 'balance' }}>
          The decision framework for<br />
          <span style={{ background: 'linear-gradient(90deg, #C084FC 0%, #E9810C 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>AI strategy in product teams</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--fg-muted)', lineHeight: 1.3, marginTop: 8 }}>
          before, during, and after every initiative.
        </p>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg-muted)', maxWidth: 680, marginTop: 40 }}>
          Most AI initiatives fail because teams start with tools instead of problems, can't connect AI to business outcomes, and run pilots that never scale. ASPF fixes the sequence — Claude is the decision tree.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
          <Button variant="primary" onClick={() => go('tree')}>Start the decision tree →</Button>
          <Button onClick={() => go('skills')}>Browse skill files</Button>
        </div>

        {/* APDF bridge callout */}
        <div style={{ marginTop: 64, display: 'flex', alignItems: 'center', gap: 24, padding: '18px 24px', border: '1px solid color-mix(in srgb, var(--brand-purple) 30%, var(--border))', borderRadius: 10, background: 'linear-gradient(120deg, rgba(134,59,255,0.06), rgba(233,129,12,0.04))', maxWidth: 720 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)' }}>Companion to APDF</span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, marginTop: 4 }}>
              ASPF answers whether and how to use AI. APDF executes the design work. Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, padding: '2px 6px', borderRadius: 4, background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--fg)' }}>/project:handoff</code> to bridge strategy to design.
            </p>
          </div>
          <Button style={{ flexShrink: 0 }} href="https://github.com/quinrobinson/Agentic-Product-Design-Framework">APDF →</Button>
        </div>
      </Container>

      <GradRule />

      {/* Three Entry Points */}
      <Container style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Eyebrow style={{ marginBottom: 8 }}>Three entry points</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 32 }}>
          Where are you in your initiative?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {entryPoints.map(ep => (
            <div key={ep.id} style={cardBase} onClick={() => go('tree')}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: entryColors[ep.id] }} />
              <Tag color={entryColors[ep.id]} dot>{ep.label}</Tag>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3 }}>
                {ep.question}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                {ep.desc}
              </div>
              <CubeIllo color={entryColors[ep.id]} />
              <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{ep.cta}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <GradRule />

      {/* How it works — The decision tree */}
      <Container style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Eyebrow style={{ marginBottom: 8 }}>How it works</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 12 }}>
          Claude is the decision tree
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 640, marginBottom: 48 }}>
          Not a tool that helps you use the framework — the engine that runs it. You describe your situation. Claude diagnoses, routes, predicts, and synthesizes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {[
            { num: '00', title: 'Entry Detection', desc: 'Passive language signal detection from your opening message. One clarifying question if ambiguous.', color: 'var(--fg-dim)' },
            { num: '01', title: 'Context Snapshot', desc: 'Three questions: domain, team composition, prior decisions. Predictor first sweep runs immediately.', color: 'var(--brand-orange)' },
            { num: '02', title: 'Branch Intake', desc: 'Framing questions together, then adaptive follow-ups. Agents activated by need — not pre-assigned.', color: 'var(--brand-purple-soft)' },
            { num: '03', title: 'Synthesis', desc: 'Every session closes with agents activated, skills run, Predictor flags, and one explicit next action.', color: 'var(--fg)' },
          ].map(l => (
            <div key={l.num} style={{ padding: '24px 22px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: 8 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 600, color: l.color, marginBottom: 10, opacity: 0.5 }}>{l.num}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 8 }}>{l.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{l.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
          <Button variant="primary" onClick={() => go('tree')}>Explore the decision tree →</Button>
          <Button onClick={() => go('agents')}>Meet the agents</Button>
        </div>
      </Container>

      <GradRule />

      {/* Predictor — Failure Mode Preview */}
      <Container style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Eyebrow style={{ marginBottom: 8, color: 'var(--role-predictor)' }}>● Predictor — Always Active</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 12 }}>
          Failure modes caught before you hit them
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
          The Predictor pattern-matches your inputs against 11 documented AI strategy failure modes and surfaces warnings at the moment they're most actionable — not all at once.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {failureModes.slice(0, 6).map(fm => (
            <div key={fm.id} style={{ padding: '18px 20px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>{fm.id}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-faint)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 3 }}>{fm.category}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{fm.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.04em', fontStyle: 'italic' }}>Signal: {fm.signal}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: '14px 20px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.08em' }}>+ 5 more failure modes in the library</span>
          <Button onClick={() => go('skills')}>View failure mode library →</Button>
        </div>
      </Container>

      {/* Commands quick reference */}
      <Container style={{ paddingBottom: 96 }}>
        <GradRule />
        <div style={{ paddingTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <Eyebrow style={{ marginBottom: 16 }}>Quick start — Claude Code</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {commands.slice(0, 6).map(c => (
                <div key={c.cmd} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--border-soft)', alignItems: 'start' }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brand-orange-soft)', letterSpacing: '0.02em' }}>{c.cmd}</code>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow style={{ marginBottom: 16 }}>Quick start — Claude Chat</Eyebrow>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '20px 22px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                Upload the relevant skill file from <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '2px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/skills/</code> to a new Claude conversation. Claude detects your entry point and begins the intake.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['Before', 'problem-qualification.md', 'var(--entry-before)'],
                  ['During', 'mid-project-audit.md', 'var(--entry-during)'],
                  ['After',  'retrospective.md', 'var(--entry-after)'],
                ].map(([label, file, color]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Tag color={color} dot>{label}</Tag>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)' }}>{file}</code>
                  </div>
                ))}
              </div>
              <Button style={{ marginTop: 16 }} onClick={() => go('skills')}>Browse all skill files →</Button>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </Page>
  );
}

window.HomePage = HomePage;
