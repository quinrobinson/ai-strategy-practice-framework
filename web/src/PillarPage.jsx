/* PillarPage.jsx — per-pillar view with Before/During/After skill routing */

function PillarPage({ go, pillarId }) {
  const { pillars, skills, aiNativeEnterprise } = window.ASPF_DATA;
  const pillar = pillars.find(p => p.id === pillarId);
  const [activeLifecycle, setActiveLifecycle] = React.useState('before');
  const [surface, setSurface] = React.useState(null);

  if (!pillar) return null;

  const color = pillar.color;

  const lifecycleSkills = (stage) => {
    const ids = pillar.skills[stage] || [];
    return ids.map(id => skills.find(s => s.id === id)).filter(Boolean);
  };

  const allSkillIds = [
    ...(pillar.skills.before || []),
    ...(pillar.skills.during || []),
    ...(pillar.skills.after || []),
  ].filter((v, i, a) => a.indexOf(v) === i);

  const totalSkills = allSkillIds.length;
  const gaps = pillar.gaps || [];

  const lifecycleColors = {
    before: 'var(--entry-before)',
    during: 'var(--entry-during)',
    after:  'var(--entry-after)',
  };

  const lifecycleLabels = {
    before: 'Before — Starting or scoping',
    during: 'During — Active engagement',
    after:  'After — Evaluating outcomes',
  };

  const chatPrompts = {
    before: `You are running the AI Strategy Practice Framework (ASPF) — an internal practice methodology for AI consulting engagements.

Pillar: ${pillar.number} — ${pillar.name}
Lifecycle stage: BEFORE — Starting or scoping an engagement

Pillar description: ${pillar.desc}

Skills available for this pillar at the Before stage:
${(pillar.skills.before || []).map((id, i) => `${String(i+1).padStart(2,'0')} — ${id}.md`).join('\n')}

Start by asking me three context questions together:
1. What is the client's industry and organizational size?
2. What has already been scoped or decided for this engagement?
3. What is the primary deliverable the client expects from this pillar?

Then begin with the first skill in sequence. Work through one skill at a time. At the end of each skill, produce a structured artifact and ask if I'm ready to proceed to the next step. When a skill output is stakeholder-ready, suggest running /project:deck to generate a PowerPoint.`,

    during: `You are running the AI Strategy Practice Framework (ASPF) — an internal practice methodology for AI consulting engagements.

Pillar: ${pillar.number} — ${pillar.name}
Lifecycle stage: DURING — Active engagement, checking in

Pillar description: ${pillar.desc}

Skills available for this pillar at the During stage:
${(pillar.skills.during || []).map((id, i) => `${String(i+1).padStart(2,'0')} — ${id}.md`).join('\n')}

Start by asking me three context questions together:
1. What is the AI system or initiative currently doing?
2. What were you expecting at this stage of the engagement?
3. What prompted this check-in — a specific concern or routine audit?

Then begin with the mid-project-audit. Produce a clear Continue / Pivot / Stop recommendation with owned actions.`,

    after: `You are running the AI Strategy Practice Framework (ASPF) — an internal practice methodology for AI consulting engagements.

Pillar: ${pillar.number} — ${pillar.name}
Lifecycle stage: AFTER — Engagement concluded, evaluating outcomes

Pillar description: ${pillar.desc}

Skills available for this pillar at the After stage:
${(pillar.skills.after || []).map((id, i) => `${String(i+1).padStart(2,'0')} — ${id}.md`).join('\n')}

Start by asking me three context questions together:
1. What was the scope of this engagement and how long did it run?
2. Do you have the original outcome statement or success criteria?
3. How would you describe the result in your own words?

Then begin with the retrospective. Produce a feed-forward block at the close — lessons that should carry into the next engagement on this pillar.`,
  };

  return (
    <Page>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Pillars</button>
          <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, letterSpacing: '0.08em' }}>{pillar.number}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{pillar.name}</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 16 }}>
            <button onClick={() => go('skills')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', cursor: 'pointer', letterSpacing: '0.12em', textTransform: 'uppercase' }}>All Skills</button>
            <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', textDecoration: 'none' }}>GitHub →</a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Pillar header */}
        <div style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: color, letterSpacing: '0.14em', marginBottom: 12 }}>Pillar {pillar.number}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
                {pillar.name}
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65 }}>{pillar.desc}</p>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>Focus areas</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {pillar.focus.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 4, height: 4, borderRadius: 999, background: color, flexShrink: 0, marginTop: 6, opacity: 0.6 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              {pillar.products && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 8 }}>Specific products</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {pillar.products.map(p => (
                      <Tag key={p} color={color}>{p}</Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lifecycle tabs */}
        <div style={{ paddingTop: 40 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>
            Select lifecycle stage
          </div>

          <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
            {['before', 'during', 'after'].map(stage => {
              const lc = lifecycleColors[stage];
              const isActive = activeLifecycle === stage;
              const count = (pillar.skills[stage] || []).length;
              return (
                <button
                  key={stage}
                  onClick={() => { setActiveLifecycle(stage); setSurface(null); }}
                  style={{
                    flex: 1, padding: '14px 20px', textAlign: 'left',
                    background: isActive ? `color-mix(in srgb, ${lc} 7%, var(--card))` : 'var(--card)',
                    border: `1px solid ${isActive ? `color-mix(in srgb, ${lc} 30%, var(--border))` : 'var(--border)'}`,
                    borderBottom: isActive ? `1px solid ${`color-mix(in srgb, ${lc} 30%, var(--border))`}` : '1px solid transparent',
                    borderRadius: '8px 8px 0 0', cursor: 'pointer', transition: 'all 180ms',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: lc, flexShrink: 0, opacity: isActive ? 1 : 0.4 }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: isActive ? 'var(--fg)' : 'var(--fg-muted)' }}>{lifecycleLabels[stage]}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: isActive ? lc : 'var(--fg-faint)' }}>{count} skill{count !== 1 ? 's' : ''}</span>
                </button>
              );
            })}
          </div>

          {/* Active lifecycle content */}
          <div style={{ border: `1px solid color-mix(in srgb, ${lifecycleColors[activeLifecycle]} 20%, var(--border))`, borderRadius: '0 0 10px 10px', background: `color-mix(in srgb, ${lifecycleColors[activeLifecycle]} 3%, var(--card))`, padding: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

              {/* Skills */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 14 }}>Skill sequence</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {lifecycleSkills(activeLifecycle).map((skill, i) => (
                    <div key={skill.id} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, padding: '12px 14px', background: i === 0 ? `color-mix(in srgb, ${color} 7%, var(--bg))` : 'var(--bg)', border: `1px solid ${i === 0 ? `color-mix(in srgb, ${color} 25%, var(--border))` : 'var(--border)'}`, borderRadius: 6, alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: i === 0 ? color : 'var(--border)' }}>{String(i+1).padStart(2,'0')}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 2 }}>{skill.goal}</div>
                        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{skill.file}</code>
                      </div>
                    </div>
                  ))}
                  {lifecycleSkills(activeLifecycle).length === 0 && (
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)', fontStyle: 'italic', padding: '12px 0' }}>No skills mapped to this stage yet.</div>
                  )}
                </div>
              </div>

              {/* Surface + prompt */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 14 }}>How are you running Claude?</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                  {[
                    { id: 'chat', label: 'Claude Chat', sub: 'claude.ai — copy the kickoff prompt' },
                    { id: 'code', label: 'Claude Code', sub: 'Command line — skill files load automatically' },
                  ].map(opt => (
                    <button key={opt.id} onClick={() => setSurface(opt.id)} style={{ textAlign: 'left', background: surface === opt.id ? `color-mix(in srgb, ${color} 8%, var(--card))` : 'var(--card)', border: `1px solid ${surface === opt.id ? color : 'var(--border)'}`, borderRadius: 7, padding: '12px 14px', cursor: 'pointer', transition: 'all 180ms' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 2 }}>{opt.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                    </button>
                  ))}
                </div>

                {surface === 'chat' && (
                  <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Kickoff prompt — paste into Claude Chat</span>
                      <CopyButton text={chatPrompts[activeLifecycle]} color={color} />
                    </div>
                    <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', lineHeight: 1.6, padding: '12px', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 160, overflowY: 'auto', background: 'var(--bg)' }}>{chatPrompts[activeLifecycle]}</pre>
                    <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
                      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: `color-mix(in srgb, ${color} 15%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                        Open Claude →
                      </a>
                    </div>
                  </div>
                )}

                {surface === 'code' && (
                  <div style={{ border: `1px solid color-mix(in srgb, ${color} 20%, var(--border))`, borderRadius: 8, padding: '16px' }}>
                    {[
                      { n: '01', content: <>Open project in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                      { n: '02', content: <>{activeLifecycle === 'before' ? <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>/project:diagnose</code> — specify pillar {pillar.number}</> : activeLifecycle === 'during' ? <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>/project:audit</code> — describe the current state</> : <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: color }}>/project:retro</code> — describe what concluded</>}</> },
                      { n: '03', content: <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-orange-soft)' }}>/project:deck [skill]</code> to generate a stakeholder PowerPoint</> },
                    ].map(s => (
                      <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: color, flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                      </div>
                    ))}
                    <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: `color-mix(in srgb, ${color} 15%, transparent)`, color: color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                      Clone repo →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Gaps */}
            {gaps.length > 0 && (
              <div style={{ marginTop: 24, padding: '14px 16px', border: '1px dashed var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>Skills in progress</span>
                {gaps.map(g => <code key={g} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', border: '1px dashed var(--border)', padding: '2px 7px', borderRadius: 3 }}>{g}.md</code>)}
              </div>
            )}
          </div>
        </div>

        {/* Pillar navigation — quick jump to others */}
        <div style={{ paddingTop: 40, paddingBottom: 64 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 14 }}>Other pillars</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {pillars.filter(p => p.id !== pillarId).map(p => (
              <button key={p.id} onClick={() => go(`pillar-${p.id}`)} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: 'transparent', color: 'var(--fg-muted)', border: `1px solid var(--border)`, cursor: 'pointer', transition: 'all 150ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
              >
                {p.number} — {p.shortName}
              </button>
            ))}
          </div>
        </div>

      </div>
      <Footer go={go} />
    </Page>
  );
}

window.PillarPage = PillarPage;
