/* HomePage.jsx — Pillar-first internal practice tool */

function HomePage({ go }) {
  const { pillars, aiNativeEnterprise, entryPoints } = window.ASPF_DATA;
  const [hoveredPillar, setHoveredPillar] = React.useState(null);
  const [hoveredEntry, setHoveredEntry] = React.useState(null);

  return (
    <Page>
      {/* Minimal internal header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark size={22} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-muted)', fontWeight: 500 }}>AI Strategy Practice Framework</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.08em', marginLeft: 4 }}>— Internal</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <button onClick={() => go('skills')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>Skills</button>
            <button onClick={() => go('foundation')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>Foundation</button>
            <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', textDecoration: 'none' }}>GitHub →</a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Orientation strip */}
        <div style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 10 }}>Practice Methodology</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
              Where are you working?
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5, maxWidth: 360 }}>
              Pick your pillar, then your lifecycle stage. ASPF routes you to the right skill and runs the session in Claude.
            </div>
          </div>
        </div>

        {/* Discovery — primary entry point */}
        <div style={{ paddingTop: 36, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', padding: '24px 28px', background: 'linear-gradient(135deg, rgba(134,59,255,0.08), rgba(233,129,12,0.06))', border: '1px solid rgba(134,59,255,0.2)', borderRadius: 10 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)', marginBottom: 8 }}>
                ● Start here — prerequisite to all six pillars
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 8, color: 'var(--fg)' }}>
                Discovery
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 600 }}>
                Before any pillar work begins, run a structured discovery across all six pillars — prepare for the client conversation, facilitate the workshop, then synthesize findings into a Master Client Brief that scopes the full engagement.
              </p>
              <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
                {[
                  { step: 'Act 1', label: 'Pre-meeting prep', desc: 'Hypothesis map + facilitation guide' },
                  { step: 'Act 2', label: 'Workshop', desc: 'Structured client discovery session' },
                  { step: 'Act 3', label: 'Synthesis', desc: 'Brief + gap analysis + roadmap + deck' },
                ].map((act, i) => (
                  <div key={act.step} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    {i > 0 && <span style={{ color: 'var(--fg-faint)', paddingTop: 2, fontFamily: 'var(--font-mono)', fontSize: 12 }}>→</span>}
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)', marginBottom: 2 }}>{act.step}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: 'var(--fg)' }}>{act.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-muted)' }}>{act.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => go('discovery')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '12px 22px', borderRadius: 6, background: 'linear-gradient(135deg, rgba(134,59,255,0.28), rgba(233,129,12,0.20))', color: 'var(--fg)', border: '1px solid rgba(134,59,255,0.4)', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 0 20px rgba(134,59,255,0.15)' }}>
              Start a Discovery →
            </button>
          </div>
        </div>

        {/* Six pillars — delivery layer */}
        <div style={{ paddingTop: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, marginBottom: 2 }}>
            {pillars.map(pillar => {
              const isHov = hoveredPillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => go(`pillar-${pillar.id}`)}
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  style={{
                    background: isHov ? `color-mix(in srgb, ${pillar.color} 10%, var(--card))` : 'var(--card)',
                    border: `1px solid ${isHov ? `color-mix(in srgb, ${pillar.color} 40%, var(--border))` : 'var(--border)'}`,
                    borderRadius: '8px 8px 0 0',
                    padding: '20px 16px 18px',
                    cursor: 'pointer',
                    transition: 'all 180ms',
                    textAlign: 'left',
                    display: 'flex', flexDirection: 'column', gap: 10,
                    minHeight: 140,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: pillar.color, opacity: isHov ? 1 : 0.5, transition: 'opacity 180ms' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: isHov ? pillar.color : 'var(--border)', lineHeight: 1, transition: 'color 180ms' }}>{pillar.number}</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: isHov ? 'var(--fg)' : 'var(--fg-muted)', lineHeight: 1.3, transition: 'color 180ms' }}>{pillar.name}</div>
                  <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: isHov ? pillar.color : 'var(--fg-faint)', letterSpacing: '0.08em', transition: 'color 180ms' }}>
                    {[
                      ...(pillar.skills.before || []),
                      ...(pillar.skills.during || []),
                      ...(pillar.skills.after || []),
                    ].filter((v, i, a) => a.indexOf(v) === i).length} skills →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hover detail panel */}
          <div style={{ minHeight: 80, padding: '20px 24px', background: 'var(--card)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 8px 8px', transition: 'all 200ms' }}>
            {hoveredPillar ? (() => {
              const p = pillars.find(p => p.id === hoveredPillar);
              return (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: p.color, marginBottom: 6 }}>{p.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5, maxWidth: 600 }}>{p.desc}</div>
                  </div>
                  <button onClick={() => go(`pillar-${p.id}`)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 20px', borderRadius: 6, background: `color-mix(in srgb, ${p.color} 15%, transparent)`, color: p.color, border: `1px solid color-mix(in srgb, ${p.color} 35%, transparent)`, cursor: 'pointer', flexShrink: 0 }}>
                    Open pillar →
                  </button>
                </div>
              );
            })() : (
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
                Hover a pillar to see details — click to open.
              </div>
            )}
          </div>
        </div>

        {/* Lifecycle entry points — secondary axis */}
        <div style={{ paddingTop: 48 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>
            Or start by lifecycle stage
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { id: 'before',  color: 'var(--entry-before)', label: 'Before', q: 'Starting or scoping an engagement', desc: 'Qualify, plan, and prepare before committing resources. Runs problem qualification, method selection, responsible AI, risk mapping, outcome definition, and readiness audit.' },
              { id: 'during',  color: 'var(--entry-during)', label: 'During', q: 'Active engagement — checking in', desc: 'Audit progress, detect drift, surface risks before they become failures. Runs mid-project audit, model monitoring, and user feedback loops.' },
              { id: 'after',   color: 'var(--entry-after)',  label: 'After',  q: 'Engagement concluded — evaluating', desc: 'Measure outcomes against intentions, extract lessons, feed forward to the next engagement. Runs retrospective and maturity model.' },
            ].map(ep => {
              const isHov = hoveredEntry === ep.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => go(ep.id)}
                  onMouseEnter={() => setHoveredEntry(ep.id)}
                  onMouseLeave={() => setHoveredEntry(null)}
                  style={{ padding: '20px 22px', background: isHov ? 'var(--elevated)' : 'var(--card)', border: `1px solid ${isHov ? ep.color : 'var(--border)'}`, borderRadius: 8, cursor: 'pointer', transition: 'all 180ms', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: ep.color, opacity: isHov ? 1 : 0.35 }} />
                  <Tag color={ep.color} dot>{ep.label}</Tag>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3 }}>{ep.q}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{ep.desc}</div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 10 }}>
            <button onClick={() => go('diagnose')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', cursor: 'pointer' }}>
              Not sure where to start — run the diagnostic →
            </button>
          </div>
        </div>

        {/* AI-Native Enterprise — foundational context */}
        <div style={{ paddingTop: 56, paddingBottom: 64 }}>
          <GradRule />
          <div style={{ paddingTop: 48 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>North Star</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 14 }}>
                  What is an AI-native enterprise?
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65 }}>
                  {aiNativeEnterprise.definition}
                </p>
                <button onClick={() => go('foundation')} style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  View foundation →
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {aiNativeEnterprise.shifts.map((shift, i) => (
                  <div key={shift.id} style={{ padding: '18px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>Shift {i + 1}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', lineHeight: 1.3 }}>{shift.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{shift.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer go={go} />
    </Page>
  );
}

window.HomePage = HomePage;
