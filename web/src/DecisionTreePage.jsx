/* DecisionTreePage.jsx */

function DecisionTreePage({ go }) {
  const { entryPoints, skills, agents } = window.ASPF_DATA;
  const [selectedEntry, setSelectedEntry] = React.useState(null);
  const [selectedSkill, setSelectedSkill] = React.useState(null);

  const entryColors = { before: 'var(--entry-before)', during: 'var(--entry-during)', after: 'var(--entry-after)' };

  const beforeSkills = skills.filter(s => s.entryPoint === 'before').sort((a, b) => a.step - b.step);
  const duringSkills = skills.filter(s => s.entryPoint === 'during');
  const afterSkills  = skills.filter(s => s.entryPoint === 'after');
  const alwaysSkills = skills.filter(s => s.entryPoint === 'all');

  const skillsByEntry = { before: beforeSkills, during: duringSkills, after: afterSkills };

  const relevantAgents = selectedEntry
    ? agents.filter(a => a.alwaysActive || a.commands.some(c => {
        if (selectedEntry === 'before') return c.includes('diagnose');
        if (selectedEntry === 'during') return c.includes('audit');
        if (selectedEntry === 'after') return c.includes('retro');
        return false;
      }))
    : [];

  const layers = [
    { label: 'Layer 0', name: 'Entry Detection', desc: 'Passive language signal detection from opening message. Fallback to one clarifying question if ambiguous.', color: 'var(--fg-dim)' },
    { label: 'Layer 1', name: 'Context Snapshot', desc: 'Three questions: domain, team composition, prior decisions. Predictor first sweep runs immediately after.', color: 'var(--brand-orange)' },
    { label: 'Layer 2', name: 'Branch Intake', desc: 'Framing questions together, then adaptive follow-ups. Agents activated by need. Skills routed in sequence.', color: 'var(--brand-purple-soft)' },
    { label: 'Layer 3', name: 'Synthesis', desc: 'Session closes: agents activated, skills run, Predictor flags, open questions, one explicit next action.', color: 'var(--fg)' },
  ];

  return (
    <Page>
      <Header active="tree" go={go} />
      <Container style={{ paddingTop: 32, paddingBottom: 96 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <Button onClick={() => go('home')}>← Home</Button>
        </div>

        <Eyebrow style={{ marginBottom: 16 }}>Framework</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 12 }}>
          The Decision Tree
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 640, marginBottom: 48 }}>
          Claude runs four layers every session — detecting your entry point, collecting context, running the branch intake, and synthesizing outputs. Select an entry point to explore the path.
        </p>

        {/* Layers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginBottom: 48 }}>
          {layers.map((l, i) => (
            <div key={l.label} style={{ padding: '20px 20px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: 8, position: 'relative' }}>
              {i < layers.length - 1 && (
                <div style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-faint)' }}>→</div>
              )}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 8 }}>{l.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: l.color, marginBottom: 8 }}>{l.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{l.desc}</div>
            </div>
          ))}
        </div>

        <GradRule />

        {/* Entry Point selector */}
        <div style={{ marginTop: 48, marginBottom: 32 }}>
          <Eyebrow style={{ marginBottom: 16 }}>Select your entry point</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {entryPoints.map(ep => {
              const isSelected = selectedEntry === ep.id;
              const c = entryColors[ep.id];
              return (
                <button key={ep.id} onClick={() => { setSelectedEntry(isSelected ? null : ep.id); setSelectedSkill(null); }} style={{ padding: '20px 22px', border: `1px solid ${isSelected ? c : 'var(--border)'}`, borderRadius: 10, background: isSelected ? `color-mix(in srgb, ${c} 8%, var(--card))` : 'var(--card)', cursor: 'pointer', textAlign: 'left', transition: 'all 200ms', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Tag color={c} dot>{ep.label}</Tag>
                    {isSelected && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: c, letterSpacing: '0.10em', textTransform: 'uppercase' }}>Selected</span>}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: isSelected ? 'var(--fg)' : 'var(--fg-muted)', lineHeight: 1.3 }}>{ep.question}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: isSelected ? c : 'var(--fg-faint)', letterSpacing: '0.08em' }}>
                    {skillsByEntry[ep.id]?.length} skill{skillsByEntry[ep.id]?.length !== 1 ? 's' : ''} in sequence
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill sequence for selected entry */}
        {selectedEntry && (
          <div style={{ marginBottom: 40 }}>
            <Eyebrow style={{ marginBottom: 16, color: entryColors[selectedEntry] }}>
              ● {selectedEntry.toUpperCase()} — Skill Sequence
            </Eyebrow>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {skillsByEntry[selectedEntry].map((skill, idx) => {
                const isSelected = selectedSkill === skill.id;
                const ec = entryColors[selectedEntry];
                return (
                  <div key={skill.id}>
                    <button onClick={() => setSelectedSkill(isSelected ? null : skill.id)} style={{ width: '100%', textAlign: 'left', padding: '16px 20px', border: `1px solid ${isSelected ? ec : 'var(--border)'}`, borderRadius: isSelected ? '8px 8px 0 0' : 8, background: isSelected ? `color-mix(in srgb, ${ec} 6%, var(--card))` : 'var(--card)', cursor: 'pointer', display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 16, alignItems: 'center', transition: 'all 200ms' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: isSelected ? ec : 'var(--border)' }}>
                        {String(skill.step).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: isSelected ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 2 }}>{skill.file}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-dim)', lineHeight: 1.4 }}>{skill.desc}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)' }}>{isSelected ? '▴' : '▾'}</span>
                    </button>

                    {isSelected && (
                      <div style={{ padding: '20px 22px 20px 84px', border: `1px solid ${ec}`, borderTop: 'none', borderRadius: '0 0 8px 8px', background: `color-mix(in srgb, ${ec} 4%, var(--card))`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                          <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', display: 'block', marginBottom: 4 }}>Goal</span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: ec, lineHeight: 1.5 }}>{skill.goal}</span>
                          </div>
                          <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', display: 'block', marginBottom: 4 }}>Output</span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{skill.output}</span>
                          </div>
                          <div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', display: 'block', marginBottom: 4 }}>Unlocks</span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{skill.unlocks}</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
                          <Button href={`https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/${skill.file}`}>↓ Download skill file</Button>
                          <Button href={`https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/${skill.file}`}>View on GitHub →</Button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* APDF bridge for Before */}
            {selectedEntry === 'before' && (
              <div style={{ marginTop: 2, padding: '18px 20px', border: '1px solid color-mix(in srgb, var(--brand-purple) 30%, var(--border))', borderRadius: 8, background: 'rgba(134,59,255,0.06)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 2, height: 40, background: 'var(--grad-brand)', borderRadius: 1, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-purple-soft)', marginBottom: 4 }}>APDF Bridge — Terminal Step</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                    When the Before session closes, <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 5px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>/project:handoff</code> generates an APDF-ready brief — carrying the problem statement, method decision, risk constraints, and outcome metrics into the design workflow.
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Agents activated by this entry */}
        {selectedEntry && relevantAgents.length > 0 && (
          <div>
            <GradRule />
            <div style={{ paddingTop: 40 }}>
              <Eyebrow style={{ marginBottom: 16 }}>Agents activated in a {selectedEntry} session</Eyebrow>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {relevantAgents.map(agent => (
                  <div key={agent.id} style={{ padding: '14px 16px', border: `1px solid color-mix(in srgb, ${agent.color} 25%, var(--border))`, borderRadius: 8, background: 'var(--card)', display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: agent.color }} />
                    {agent.alwaysActive && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: agent.color }}>Always active</span>
                    )}
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: agent.color }}>{agent.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-dim)', lineHeight: 1.4 }}>{agent.sub}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-dim)', marginTop: 12, fontStyle: 'italic' }}>
                These agents may all be active simultaneously — the Orchestrator synthesizes their perspectives into a single recommendation.
              </p>
            </div>
          </div>
        )}

        {/* Predictor always-on section */}
        {!selectedEntry && (
          <div style={{ marginTop: 16, padding: '24px 28px', border: '1px solid rgba(168,162,158,0.2)', borderRadius: 10, background: 'rgba(168,162,158,0.04)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--role-predictor)', marginTop: 6, flexShrink: 0, boxShadow: '0 0 8px rgba(168,162,158,0.6)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--role-predictor)', marginBottom: 6 }}>Predictor — Always Active</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Pattern-matching against failure modes — across every session</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 640 }}>
                The Predictor runs alongside every agent in every session. It cross-references your inputs against 11 documented failure modes and surfaces warnings at the decision point where they're most actionable — not all at once at session open.
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <Button onClick={() => go('skills')}>View failure mode library →</Button>
              </div>
            </div>
          </div>
        )}

      </Container>
      <Footer />
    </Page>
  );
}

window.DecisionTreePage = DecisionTreePage;
