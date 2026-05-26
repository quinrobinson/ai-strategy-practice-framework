/* PillarPage.jsx
   Configuration screen: Pillar × Service Line × Lifecycle
   Resolves to a precise engagement cell with AI Practice role,
   deliverable, outcome, skills, and kickoff prompt.
*/

function PillarPage({ go, pillarId }) {
  const { pillars, skills: allSkills } = window.ASPF_DATA;
  const { serviceLines, cells } = window.ASPF_MATRIX;
  const pillar = pillars.find(p => p.id === pillarId);

  const [selectedSL,        setSL]        = React.useState(null);
  const [selectedLifecycle, setLifecycle] = React.useState(null);
  const [surface,           setSurface]   = React.useState(null);

  if (!pillar) return null;

  const pillarColor  = pillar.color;
  const pillarCells  = cells[pillarId] || {};

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

  // Derive the active cell
  const activeCell = selectedSL ? pillarCells[selectedSL] : null;
  const isNA       = activeCell?.na;

  // Resolve skills for this cell × lifecycle
  const resolveSkills = () => {
    if (!activeCell || isNA) return [];
    if (!selectedLifecycle) return activeCell.skills || [];
    // Filter by lifecycle
    const skillObjects = (activeCell.skills || [])
      .map(id => allSkills.find(s => s.id === id))
      .filter(Boolean)
      .filter(s => {
        if (selectedLifecycle === 'before') return s.entryPoint === 'before' || s.entryPoint === 'all';
        if (selectedLifecycle === 'during') return s.entryPoint === 'during' || s.entryPoint === 'all';
        if (selectedLifecycle === 'after')  return s.entryPoint === 'after'  || s.entryPoint === 'all';
        return true;
      });
    // If filtering leaves nothing, return all for this cell
    return skillObjects.length > 0 ? skillObjects
      : (activeCell.skills || []).map(id => allSkills.find(s => s.id === id)).filter(Boolean);
  };

  const resolvedSkills = resolveSkills();

  // Kickoff prompt — precise cell context
  const buildPrompt = () => {
    const sl   = serviceLines.find(s => s.id === selectedSL);
    const lc   = selectedLifecycle;
    const cell = activeCell;
    if (!sl || !cell || isNA) return '';

    return `You are running the AI Strategy Practice Framework (ASPF) — the internal practice methodology for AI consulting engagements.

ENGAGEMENT CONTEXT
Pillar: ${pillar.number} — ${pillar.name}
Service Line: ${sl.name} (${sl.shortName})
Lifecycle stage: ${lc ? lc.toUpperCase() : 'BEFORE'}

AI PRACTICE ROLE IN THIS CELL
Deliverable: ${cell.deliverable}
AI Practice: ${cell.practice}
${cell.serviceLine ? `Service Line: ${cell.serviceLine}` : ''}
Expected outcome: ${cell.outcome || ''}

SKILLS FOR THIS ENGAGEMENT
${resolvedSkills.map((s, i) => `${String(i+1).padStart(2,'0')} — ${s.file}: ${s.goal}`).join('\n')}

START WITH THESE THREE CONTEXT QUESTIONS (ask together in one message):
1. What is the client's industry and organization size?
2. What has already been scoped, decided, or delivered for this engagement?
3. What is the primary stakeholder expecting as the deliverable from this pillar?

Then begin with the first skill in the sequence above. Work through one skill at a time. At the end of each skill, produce a structured artifact and confirm readiness before moving on.

When a skill output is stakeholder-ready, suggest running /project:deck [skill-name] to generate a PowerPoint.`;
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Page>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', cursor: 'pointer' }}>← Pillars</button>
          <div style={{ width: 1, height: 16, background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: pillarColor, letterSpacing: '0.10em' }}>{pillar.number}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{pillar.name}</span>
          {selectedSL && activeCell && !isNA && (
            <>
              <span style={{ color: 'var(--fg-faint)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: serviceLines.find(s=>s.id===selectedSL)?.color, letterSpacing: '0.08em' }}>
                {serviceLines.find(s=>s.id===selectedSL)?.shortName}
              </span>
              {selectedLifecycle && (
                <>
                  <span style={{ color: 'var(--fg-faint)' }}>/</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: lifecycleColors[selectedLifecycle], letterSpacing: '0.08em', textTransform: 'uppercase' }}>{selectedLifecycle}</span>
                </>
              )}
            </>
          )}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 16 }}>
            <button onClick={() => go('skills')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', cursor: 'pointer', letterSpacing: '0.12em', textTransform: 'uppercase' }}>All Skills</button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Pillar header — compact */}
        <div style={{ paddingTop: 36, paddingBottom: 28, borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: pillarColor, letterSpacing: '0.14em', marginBottom: 8 }}>Pillar {pillar.number}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: 8 }}>{pillar.name}</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{pillar.desc}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'flex-start', paddingTop: 28 }}>
            {pillar.focus.map(f => (
              <div key={f} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', width: '100%' }}>
                <div style={{ width: 3, height: 3, borderRadius: 999, background: pillarColor, flexShrink: 0, marginTop: 6, opacity: 0.5 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONFIGURATION SCREEN ─────────────────────────────────────────── */}
        <div style={{ paddingTop: 32 }}>

          {/* Row label */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 16 }}>
            Configure your engagement
          </div>

          {/* Two-column: Service Line + Lifecycle */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 2 }}>

            {/* Service Line selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', padding: '0 0 8px 0' }}>Service Line</div>
              {serviceLines.map(sl => {
                const cell = pillarCells[sl.id];
                const isSelected = selectedSL === sl.id;
                const isNACell   = cell?.na;
                return (
                  <button
                    key={sl.id}
                    onClick={() => { setSL(isSelected ? null : sl.id); setSurface(null); }}
                    style={{
                      textAlign: 'left', padding: '14px 16px',
                      background: isSelected ? `color-mix(in srgb, ${sl.color} 8%, var(--card))` : 'var(--card)',
                      border: `1px solid ${isSelected ? `color-mix(in srgb, ${sl.color} 35%, var(--border))` : 'var(--border)'}`,
                      borderRadius: 6, cursor: 'pointer', transition: 'all 180ms',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                      opacity: isNACell ? 0.4 : 1,
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 3 }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: sl.color, flexShrink: 0, opacity: isSelected ? 1 : 0.5 }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: isSelected ? sl.color : 'var(--fg-muted)', fontWeight: 500 }}>{sl.shortName}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{sl.name}</span>
                      </div>
                      {isSelected && cell && !isNACell && (
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: sl.color, lineHeight: 1.4, paddingLeft: 14 }}>{cell.deliverable}</div>
                      )}
                      {isNACell && (
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.08em', paddingLeft: 14 }}>N/A for this pillar</div>
                      )}
                    </div>
                    {isSelected && !isNACell && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: sl.color }}>✓</span>}
                  </button>
                );
              })}
            </div>

            {/* Lifecycle selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-faint)', padding: '0 0 8px 0' }}>Lifecycle Stage</div>
              {['before', 'during', 'after'].map(lc => {
                const lcc = lifecycleColors[lc];
                const isSelected = selectedLifecycle === lc;
                return (
                  <button
                    key={lc}
                    onClick={() => { setLifecycle(isSelected ? null : lc); setSurface(null); }}
                    style={{
                      textAlign: 'left', padding: '14px 16px', flex: 1,
                      background: isSelected ? `color-mix(in srgb, ${lcc} 8%, var(--card))` : 'var(--card)',
                      border: `1px solid ${isSelected ? `color-mix(in srgb, ${lcc} 30%, var(--border))` : 'var(--border)'}`,
                      borderRadius: 6, cursor: 'pointer', transition: 'all 180ms',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: lcc, flexShrink: 0, opacity: isSelected ? 1 : 0.4 }} />
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: isSelected ? lcc : 'var(--fg-muted)', fontWeight: 500 }}>{lc.charAt(0).toUpperCase() + lc.slice(1)}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{lifecycleLabels[lc]}</div>
                      </div>
                    </div>
                    {isSelected && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: lcc }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── CELL RESOLUTION PANEL ──────────────────────────────────────── */}
          {!selectedSL && (
            <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '0 0 8px 8px', background: 'var(--card)', borderTop: 'none' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-faint)', fontStyle: 'italic' }}>
                Select a service line to see your AI Practice role and engagement deliverable.
              </div>
            </div>
          )}

          {selectedSL && isNA && (
            <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '0 0 8px 8px', background: 'var(--card)', borderTop: 'none' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                {pillarCells[selectedSL]?.practice}
              </div>
            </div>
          )}

          {selectedSL && activeCell && !isNA && (() => {
            const sl     = serviceLines.find(s => s.id === selectedSL);
            const slColor = sl?.color || pillarColor;
            const prompt  = buildPrompt();

            return (
              <div style={{ border: `1px solid color-mix(in srgb, ${slColor} 20%, var(--border))`, borderRadius: '0 0 10px 10px', background: `color-mix(in srgb, ${slColor} 3%, var(--card))`, padding: '28px', borderTop: 'none' }}>

                {/* Cell content */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--border-soft)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 6 }}>AI Practice role</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{activeCell.practice}</div>
                  </div>
                  {activeCell.serviceLine && (
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 6 }}>Service Line role</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{activeCell.serviceLine}</div>
                    </div>
                  )}
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 6 }}>Expected outcome</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: slColor, lineHeight: 1.55, fontWeight: 500 }}>{activeCell.outcome}</div>
                  </div>
                </div>

                {/* Skills for this cell */}
                {resolvedSkills.length > 0 && (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 10 }}>
                      Skills for this engagement {selectedLifecycle ? `— ${selectedLifecycle}` : ''}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {resolvedSkills.map((skill, i) => (
                        <div key={skill.id} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, padding: '10px 14px', background: i === 0 ? `color-mix(in srgb, ${slColor} 8%, var(--bg))` : 'var(--bg)', border: `1px solid ${i === 0 ? `color-mix(in srgb, ${slColor} 25%, var(--border))` : 'var(--border)'}`, borderRadius: 5, alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: i === 0 ? slColor : 'var(--border)' }}>{String(i+1).padStart(2,'0')}</span>
                          <div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', marginBottom: 1 }}>{skill.goal}</div>
                            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>{skill.file}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Surface picker + prompt */}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 10 }}>Start the session</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {[
                    { id: 'chat', label: 'Claude Chat', sub: 'Copy the kickoff prompt below' },
                    { id: 'code', label: 'Claude Code', sub: 'Run /project:diagnose in the repo' },
                  ].map(opt => (
                    <button key={opt.id} onClick={() => setSurface(opt.id)} style={{ textAlign: 'left', background: surface === opt.id ? `color-mix(in srgb, ${slColor} 10%, var(--card))` : 'var(--card)', border: `1px solid ${surface === opt.id ? slColor : 'var(--border)'}`, borderRadius: 7, padding: '12px 14px', cursor: 'pointer', transition: 'all 180ms' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 2 }}>{opt.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)' }}>{opt.sub}</div>
                    </button>
                  ))}
                </div>

                {surface === 'chat' && (
                  <div style={{ border: `1px solid color-mix(in srgb, ${slColor} 20%, var(--border))`, borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
                        Kickoff prompt — P{pillar.number} × {sl?.shortName}{selectedLifecycle ? ` × ${selectedLifecycle}` : ''}
                      </span>
                      <CopyButton text={prompt} color={slColor} />
                    </div>
                    <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', lineHeight: 1.6, padding: '12px', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 200, overflowY: 'auto', background: 'var(--bg)' }}>{prompt}</pre>
                    <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
                      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: `color-mix(in srgb, ${slColor} 15%, transparent)`, color: slColor, border: `1px solid color-mix(in srgb, ${slColor} 30%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                        Open Claude →
                      </a>
                    </div>
                  </div>
                )}

                {surface === 'code' && (
                  <div style={{ border: `1px solid color-mix(in srgb, ${slColor} 20%, var(--border))`, borderRadius: 8, padding: '16px' }}>
                    {[
                      { n: '01', content: <>Open project in Claude Code: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)' }}>claude</code></> },
                      { n: '02', content: <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: slColor }}>/project:diagnose</code> — describe Pillar {pillar.number} × {sl?.shortName}{selectedLifecycle ? ` × ${selectedLifecycle}` : ''}</> },
                      { n: '03', content: <><code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 4px', borderRadius: 3, background: 'var(--elevated)', border: '1px solid var(--border)', color: 'var(--brand-orange-soft)' }}>/project:deck [skill]</code> — generate stakeholder PowerPoint from any artifact</> },
                    ].map(s => (
                      <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: slColor, flexShrink: 0, paddingTop: 2 }}>{s.n}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.5 }}>{s.content}</span>
                      </div>
                    ))}
                    <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: `color-mix(in srgb, ${slColor} 15%, transparent)`, color: slColor, border: `1px solid color-mix(in srgb, ${slColor} 30%, transparent)`, textDecoration: 'none', display: 'inline-block' }}>
                      Clone repo →
                    </a>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Other pillars */}
        <div style={{ paddingTop: 40, paddingBottom: 64 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-faint)', marginBottom: 12 }}>Other pillars</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {pillars.filter(p => p.id !== pillarId).map(p => (
              <button key={p.id} onClick={() => go(`pillar-${p.id}`)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 150ms' }}
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
