/* AgentsPage.jsx */

function AgentsPage({ go }) {
  const { agents } = window.ASPF_DATA;

  return (
    <Page>
      <Header active="agents" go={go} />
      <Container style={{ paddingTop: 32, paddingBottom: 96 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <Button onClick={() => go('home')}>← Home</Button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-dim)' }}>{agents.length} agents</span>
        </div>

        <Eyebrow style={{ marginBottom: 16 }}>Framework</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 12 }}>
          Role Agents
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 640, marginBottom: 48 }}>
          Agents are activated by need — not pre-assigned. Multiple agents can be active in a single session. The Orchestrator synthesizes their perspectives into a single recommendation.
        </p>

        {/* Activation principle callout */}
        <div style={{ display: 'flex', gap: 16, padding: '18px 24px', border: '1px solid color-mix(in srgb, var(--brand-purple) 25%, var(--border))', borderRadius: 10, background: 'rgba(134,59,255,0.04)', marginBottom: 40, maxWidth: 900 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--brand-purple-soft)', flexShrink: 0, marginTop: 6 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Need-driven activation</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              You describe your situation. Claude detects which agents' perspectives are most relevant and activates them. You don't pick a role — you describe the problem. The framework surfaces who should be in the room.
            </div>
          </div>
        </div>

        {/* Agent rows — APDF matrix style */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {agents.map((agent, idx) => {
            const isPredictor = agent.alwaysActive;
            return (
              <div key={agent.id} style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 2 }}>

                {/* Identity card */}
                <div style={{ position: 'relative', padding: '22px 24px 22px 20px', background: isPredictor ? 'rgba(168,162,158,0.06)' : 'var(--card)', border: `1px solid ${isPredictor ? 'rgba(168,162,158,0.2)' : 'var(--border)'}`, borderRadius: '0 10px 10px 0', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 6, minHeight: 160 }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: agent.color }} />
                  {isPredictor && (
                    <div style={{ position: 'absolute', right: 14, top: 14 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--role-predictor)', border: '1px solid rgba(168,162,158,0.3)', padding: '2px 8px', borderRadius: 3 }}>Always On</span>
                    </div>
                  )}
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: agent.color, lineHeight: 1.2 }}>{agent.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-dim)' }}>{agent.sub}</span>
                  {agent.commands.length > 0 && (
                    <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {agent.commands.map(c => (
                        <code key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--brand-orange-soft)', letterSpacing: '0.02em', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 3, background: 'var(--elevated)' }}>{c}</code>
                      ))}
                    </div>
                  )}
                </div>

                {/* Activated when */}
                <div style={{ padding: '22px 22px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Eyebrow color="var(--fg-muted)">● Activated when</Eyebrow>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{agent.activatedWhen}</div>
                </div>

                {/* Role context */}
                <div style={{ padding: '22px 22px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Eyebrow color="var(--fg-dim)">ⓘ Role in session</Eyebrow>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontStyle: 'italic', color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                    {isPredictor
                      ? 'Runs continuously alongside every agent — cross-references all intake responses against the failure mode library. Surfaces warnings at the decision point they\'re most actionable.'
                      : `When activated, brings the ${agent.name.toLowerCase()} perspective to the current decision — its outputs are synthesized by the Orchestrator alongside any other active agents.`
                    }
                  </div>
                  {isPredictor && (
                    <Button style={{ marginTop: 4, alignSelf: 'flex-start' }} onClick={() => go('skills')}>View failure mode library →</Button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Multi-agent callout */}
        <div style={{ marginTop: 48, padding: '24px 28px', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--card)', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Multi-agent sessions</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 560 }}>
              A "Should we use AI for this research method?" question might activate the AI Researcher <em>and</em> the ML / AI Engineer simultaneously — one evaluating methodological fit, the other evaluating feasibility. The Orchestrator synthesizes both into a single coherent recommendation.
            </div>
          </div>
          <Button variant="primary" onClick={() => go('tree')}>Start the decision tree →</Button>
        </div>

      </Container>
      <Footer />
    </Page>
  );
}

window.AgentsPage = AgentsPage;
