/* components.jsx — shared shell components */
/* Adapted from APDF Design System UI Kit */

const { useState } = React;

function Mark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <rect width="32" height="32" rx="8" fill="url(#grad)" />
      <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 18 L21 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#863BFF" />
          <stop offset="100%" stopColor="#E9810C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Header({ active, go }) {
  const s = {
    header: { position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,15,15,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' },
    inner:  { maxWidth: 1280, margin: '0 auto', padding: '0 64px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    brand:  { display: 'flex', alignItems: 'center', gap: 12, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 },
    wordmark: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)', fontWeight: 500 },
    nav:    { display: 'flex', alignItems: 'center', gap: 4 },
    divider:{ color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)', margin: '0 8px', fontSize: 11 },
  };
  const navBtn = (label, key) => (
    <button key={key} onClick={() => go(key)} style={{ background: 'transparent', border: active === key ? '1px solid var(--border)' : '1px solid transparent', borderRadius: 6, padding: '7px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, color: active === key ? 'var(--fg)' : 'var(--fg-muted)', transition: 'color 120ms, border-color 120ms' }}>
      {label}
    </button>
  );
  return (
    <header style={s.header}>
      <div style={s.inner}>
        <button onClick={() => go('home')} style={s.brand}>
          <Mark size={28} />
          <span style={s.wordmark}>AI Strategy Practice Framework</span>
        </button>
        <nav style={s.nav}>
          {navBtn('Skills', 'skills')}
          {navBtn('Agents', 'agents')}
          {navBtn('Decision Tree', 'tree')}
          <span style={s.divider}>|</span>
          <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid transparent', borderRadius: 6, padding: '7px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, color: 'var(--fg-muted)', textDecoration: 'none', display: 'inline-block' }}>GitHub</a>
        </nav>
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
  return <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', ...style }}>{children}</div>;
}

function Eyebrow({ children, color, style }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: color || 'var(--fg-dim)', fontWeight: 500, ...style }}>
      {children}
    </div>
  );
}

function Button({ children, variant = 'ghost', onClick, style, as: As = 'button', href }) {
  const base = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 6, cursor: 'pointer', fontWeight: 500, transition: 'border-color 200ms, background 200ms, color 200ms', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' };
  const variants = {
    ghost:   { background: 'transparent', color: 'var(--fg)', border: '1px solid var(--border)' },
    soft:    { background: 'transparent', color: 'var(--fg-muted)', border: '1px solid var(--border)' },
    primary: { background: 'linear-gradient(135deg, rgba(134,59,255,0.32) 0%, rgba(184,76,180,0.20) 50%, rgba(233,129,12,0.22) 100%)', color: 'var(--fg)', border: '1px solid rgba(134,59,255,0.4)', boxShadow: '0 0 28px rgba(134,59,255,0.22), inset 0 1px 0 rgba(255,255,255,0.04)' },
  };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ ...base, ...variants[variant], ...style }}>{children}</a>;
  }
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
  return <div aria-hidden style={{ height: 1, background: 'var(--grad-brand)', opacity: 0.35, margin: '0 0' }} />;
}

function Footer() {
  return (
    <>
      <GradRule />
      <footer style={{ padding: '36px 64px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark size={20} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)' }}>AI Strategy Practice Framework</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="https://github.com/quinrobinson/ai-strategy-practice-framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.08em', textDecoration: 'none' }}>GitHub →</a>
            <a href="https://github.com/quinrobinson/Agentic-Product-Design-Framework" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.08em', textDecoration: 'none' }}>APDF →</a>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>Built by Quin Robinson</span>
          </div>
        </div>
      </footer>
    </>
  );
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

Object.assign(window, { Mark, Header, Page, Container, Eyebrow, Button, Tag, EntryTag, GradRule, Footer, CopyButton });
