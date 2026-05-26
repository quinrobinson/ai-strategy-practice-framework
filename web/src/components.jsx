/* components.jsx — shared shell components */
/* Adapted from APDF Design System UI Kit */

const { useState } = React;

// ── Mode context — persists across pages ─────────────────────────────────────
// Simple global so mode survives navigation without prop drilling
window.ASPF_MODE = window.ASPF_MODE || 'team'; // 'team' | 'strategist'

function Mark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <rect width="32" height="32" rx="8" fill="url(#aspf-grad)" />
      <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 18 L21 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="aspf-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#863BFF" />
          <stop offset="100%" stopColor="#E9810C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ModeToggle({ mode, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 3, gap: 2 }}>
      {[
        { id: 'team',       label: 'Product Team' },
        { id: 'strategist', label: 'AI Strategist' },
      ].map(opt => (
        <button
          key={opt.id}
          onClick={() => onToggle(opt.id)}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em',
            textTransform: 'uppercase', padding: '6px 12px', borderRadius: 6,
            border: 'none', cursor: 'pointer', fontWeight: 500,
            transition: 'all 150ms',
            background: mode === opt.id ? mode === 'strategist' ? 'linear-gradient(135deg, rgba(134,59,255,0.25), rgba(233,129,12,0.18))' : 'var(--elevated)' : 'transparent',
            color: mode === opt.id ? 'var(--fg)' : 'var(--fg-faint)',
            boxShadow: mode === opt.id && opt.id === 'strategist' ? '0 0 12px rgba(134,59,255,0.2)' : 'none',
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Header({ active, go, mode, onModeToggle }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand */}
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Mark size={24} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)', fontWeight: 500 }}>ASPF</span>
        </button>

        {/* Center — mode toggle */}
        {onModeToggle && (
          <ModeToggle mode={mode || 'team'} onToggle={onModeToggle} />
        )}

        {/* Right — nav */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button onClick={() => go('skills')} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: active === 'skills' ? 'var(--fg)' : 'var(--fg-muted)', cursor: 'pointer' }}>Skills</button>
          <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', textDecoration: 'none' }}>GitHub →</a>
        </div>
      </div>
    </header>
  );
}

function Page({ children, ambient }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', position: 'relative', overflowX: 'hidden' }}>
      {ambient && <div aria-hidden style={{ position: 'fixed', inset: 0, background: 'var(--grad-brand-glow)', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} />}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

function Container({ children, style }) {
  return <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', ...style }}>{children}</div>;
}

function Eyebrow({ children, color, style }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: color || 'var(--fg-dim)', fontWeight: 500, ...style }}>
      {children}
    </div>
  );
}

function Button({ children, variant = 'ghost', onClick, style, href }) {
  const base = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, cursor: 'pointer', fontWeight: 500, transition: 'border-color 200ms, background 200ms, color 200ms', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' };
  const variants = {
    ghost:   { background: 'transparent', color: 'var(--fg)', border: '1px solid var(--border)' },
    soft:    { background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)' },
    primary: { background: 'linear-gradient(135deg, rgba(134,59,255,0.32) 0%, rgba(184,76,180,0.20) 50%, rgba(233,129,12,0.22) 100%)', color: 'var(--fg)', border: '1px solid rgba(134,59,255,0.4)', boxShadow: '0 0 28px rgba(134,59,255,0.22), inset 0 1px 0 rgba(255,255,255,0.04)' },
    strategist: { background: 'linear-gradient(135deg, rgba(134,59,255,0.28), rgba(233,129,12,0.20))', color: 'var(--fg)', border: '1px solid rgba(134,59,255,0.5)', boxShadow: '0 0 20px rgba(134,59,255,0.18)' },
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={{ ...base, ...variants[variant], ...style }}>{children}</a>;
  return <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>{children}</button>;
}

function Tag({ color, children, dot, style }) {
  const c = color || 'var(--fg-muted)';
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '4px 8px', borderRadius: 4, border: `1px solid color-mix(in srgb, ${c} 35%, transparent)`, color: c, display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', ...style }}>
      {dot && <span style={{ width: 5, height: 5, borderRadius: 999, background: c, flexShrink: 0 }} />}
      {children}
    </span>
  );
}

function EntryTag({ id }) {
  const map = {
    before: { color: 'var(--entry-before)', label: 'Before' },
    during: { color: 'var(--entry-during)', label: 'During' },
    after:  { color: 'var(--entry-after)',  label: 'After'  },
    all:    { color: 'var(--fg-dim)',        label: 'All'    },
  };
  const e = map[id] || map.all;
  return <Tag color={e.color} dot>{e.label}</Tag>;
}

function GradRule() {
  return <div aria-hidden style={{ height: 1, background: 'var(--grad-brand)', opacity: 0.35 }} />;
}

function CopyButton({ text, color }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={handleCopy} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4, border: `1px solid ${copied ? color : 'var(--border)'}`, background: copied ? `color-mix(in srgb, ${color || 'var(--fg)'} 12%, transparent)` : 'transparent', color: copied ? (color || 'var(--fg)') : 'var(--fg-muted)', cursor: 'pointer', transition: 'all 200ms' }}>
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  );
}

function Footer({ go }) {
  return (
    <>
      <GradRule />
      <footer style={{ padding: '36px 48px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark size={20} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)' }}>ASPF</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', textDecoration: 'none' }}>GitHub →</a>
            <a href="https://github.com/quinrobinson/Agentic-Product-Design-Framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', textDecoration: 'none' }}>APDF →</a>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)' }}>Built by Quin Robinson</span>
          </div>
        </div>
      </footer>
    </>
  );
}

Object.assign(window, { Mark, ModeToggle, Header, Page, Container, Eyebrow, Button, Tag, EntryTag, GradRule, Footer, CopyButton });
