/* SkillsPage.jsx */

function SkillsPage({ go }) {
  const { skills, failureModes } = window.ASPF_DATA;
  const [activeEntry, setActiveEntry] = React.useState('all');

  const entryOptions = [
    { id: 'all',    label: 'All Skills',  color: 'var(--fg-muted)' },
    { id: 'before', label: 'Before',      color: 'var(--entry-before)' },
    { id: 'during', label: 'During',      color: 'var(--entry-during)' },
    { id: 'after',  label: 'After',       color: 'var(--entry-after)'  },
    { id: 'all-ep', label: 'Always',      color: 'var(--role-predictor)' },
  ];

  const filtered = skills.filter(s =>
    activeEntry === 'all' ? true :
    activeEntry === 'all-ep' ? s.entryPoint === 'all' :
    s.entryPoint === activeEntry
  );

  const entryColors = { before: 'var(--entry-before)', during: 'var(--entry-during)', after: 'var(--entry-after)', all: 'var(--role-predictor)' };

  return (
    <Page>
      <Header active="skills" go={go} />
      <Container style={{ paddingTop: 32, paddingBottom: 96 }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <Button onClick={() => go('home')}>← Home</Button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-dim)' }}>{skills.length} skill files</span>
        </div>

        <Eyebrow style={{ marginBottom: 16 }}>Framework</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 32 }}>
          Skills Library
        </h1>

        {/* What is a skill file callout */}
        <div style={{ padding: '20px 24px', border: '1px solid color-mix(in srgb, var(--entry-before) 20%, var(--border))', borderRadius: 10, background: 'rgba(59,130,246,0.04)', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40, maxWidth: 900 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>What is a Skill file?</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-muted)' }}>
            Skill files are <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '2px 6px', borderRadius: 4, background: 'var(--card)', border: '1px solid var(--border)' }}>.md</code> files you attach to a Claude conversation — or load automatically in Claude Code via <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '2px 6px', borderRadius: 4, background: 'var(--card)', border: '1px solid var(--border)' }}>.claude/skills/</code>. They give Claude the context, workflows, templates, and quality checklists for a specific decision — so every session is grounded in the framework rather than generic advice.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 4 }}>
            {['Download or clone the repo', 'Load or upload the .md file', 'Run the session — Claude has full context'].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--entry-before)', letterSpacing: '0.06em', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {entryOptions.map(opt => (
            <button key={opt.id} onClick={() => setActiveEntry(opt.id)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 5, border: '1px solid var(--border)', background: activeEntry === opt.id ? 'rgba(255,255,255,0.04)' : 'transparent', color: activeEntry === opt.id ? opt.color : 'var(--fg-muted)', cursor: 'pointer', transition: 'all 120ms' }}>
              {opt.id !== 'all' && <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: 999, background: opt.color, marginRight: 7, verticalAlign: 'middle' }} />}
              {opt.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {filtered.map(skill => {
            const ec = entryColors[skill.entryPoint];
            const isPredictor = skill.entryPoint === 'all';
            return (
              <div key={skill.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 260, position: 'relative' }}>
                {skill.step && (
                  <div style={{ position: 'absolute', top: 16, right: 18, fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 600, color: 'var(--border)', letterSpacing: '-0.02em' }}>
                    {String(skill.step).padStart(2, '0')}
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
                  <EntryTag id={skill.entryPoint} />
                  {isPredictor && <Tag color="var(--role-predictor)" dot>Predictor</Tag>}
                </div>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg)', letterSpacing: '0.02em' }}>{skill.file}</code>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, color: 'var(--fg-muted)' }}>{skill.desc}</div>

                <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)', paddingTop: 2, flexShrink: 0 }}>Goal</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: ec, lineHeight: 1.4 }}>{skill.goal}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-faint)', paddingTop: 2, flexShrink: 0 }}>Output</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{skill.output}</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
                  <Button href={`https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/${skill.file}`}>↓ Download</Button>
                  <Button href={`https://github.com/quinrobinson/ai-strategy-practice-framework/blob/main/skills/${skill.file}`}>View →</Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Failure mode library special card */}
        <div style={{ marginTop: 48 }}>
          <GradRule />
          <div style={{ marginTop: 48 }}>
            <Eyebrow style={{ marginBottom: 8, color: 'var(--role-predictor)' }}>● Always Active — Loaded by Predictor</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>Failure Mode Library</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {failureModes.map(fm => (
                <div key={fm.id} style={{ padding: '16px 18px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>{fm.id}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{fm.when}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{fm.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-dim)', fontStyle: 'italic', lineHeight: 1.4 }}>Signal: {fm.signal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
      <Footer />
    </Page>
  );
}

window.SkillsPage = SkillsPage;
