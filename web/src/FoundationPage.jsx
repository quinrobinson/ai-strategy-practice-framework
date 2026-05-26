/* FoundationPage.jsx — AI-Native Enterprise foundation and six pillars */

function FoundationPage({ go }) {
  const { aiNativeEnterprise, pillars } = window.ASPF_DATA;

  return (
    <Page>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Home</button>
          <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Foundation</span>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* What is an AI-native enterprise */}
        <div style={{ paddingTop: 56, paddingBottom: 48, borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>North Star</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
                What is an AI-native enterprise?
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                {aiNativeEnterprise.definition}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7, marginTop: 14 }}>
                It is a new model where agents are the default workers across front, middle, and back-office processes. Every engagement we run should move a client measurably toward this state.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>Three defining shifts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {aiNativeEnterprise.shifts.map((shift, i) => (
                  <div key={shift.id} style={{ padding: '20px 22px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: 'var(--border)', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{String(i+1).padStart(2,'0')}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{shift.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--brand-purple-soft)', marginBottom: 6 }}>{shift.sub}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{shift.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Six pillars overview */}
        <div style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 8 }}>Practice Architecture</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.015em' }}>
              6 AI Practice Pillars
            </h2>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>The single thread of AI across all service lines</div>
          </div>

          {/* Full pillar matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, marginBottom: 24 }}>
            {pillars.map(p => (
              <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Number header */}
                <div style={{ padding: '10px 14px', background: `color-mix(in srgb, ${p.color} 12%, var(--card))`, border: `1px solid color-mix(in srgb, ${p.color} 25%, var(--border))`, borderBottom: 'none', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: p.color }}>{p.number}</span>
                </div>
                {/* Name + desc */}
                <div style={{ padding: '14px 14px', background: 'var(--card)', border: `1px solid color-mix(in srgb, ${p.color} 15%, var(--border))`, borderTop: 'none', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: 'var(--fg)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8, lineHeight: 1.2 }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</div>
                </div>
                {/* Focus */}
                <div style={{ padding: '12px 14px', background: 'var(--card)', border: `1px solid color-mix(in srgb, ${p.color} 15%, var(--border))`, borderTop: 'none' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 8 }}>Focus</div>
                  {p.focus.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 5 }}>
                      <div style={{ width: 3, height: 3, borderRadius: 999, background: p.color, flexShrink: 0, marginTop: 5, opacity: 0.6 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
                {/* Products if any */}
                {p.products && (
                  <div style={{ padding: '10px 14px', background: 'var(--card)', border: `1px solid color-mix(in srgb, ${p.color} 15%, var(--border))`, borderTop: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 6 }}>Products</div>
                    {p.products.map(prod => (
                      <div key={prod} style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: p.color, marginBottom: 3, lineHeight: 1.3 }}>• {prod}</div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <button onClick={() => go(`pillar-${p.id}`)} style={{ padding: '10px 14px', background: `color-mix(in srgb, ${p.color} 8%, var(--card))`, border: `1px solid color-mix(in srgb, ${p.color} 20%, var(--border))`, borderTop: 'none', borderRadius: '0 0 8px 8px', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, textAlign: 'center', transition: 'all 150ms' }}>
                  Open pillar →
                </button>
              </div>
            ))}
          </div>

          <div style={{ padding: '14px 20px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)' }}>The AI practice is the single thread of AI across all service lines and partners.</span>
            <button onClick={() => go('home')} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 6, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', cursor: 'pointer' }}>
              Back to pillars →
            </button>
          </div>
        </div>

      </div>
      <Footer go={go} />
    </Page>
  );
}

window.FoundationPage = FoundationPage;
