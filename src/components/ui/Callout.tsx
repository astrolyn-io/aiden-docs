import type { ReactNode } from 'react';

type CalloutType = 'info' | 'tip' | 'warning' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { color: string; bg: string; icon: string }> = {
  info: { color: 'var(--cta-accent-blue)', bg: 'rgba(59,130,246,0.08)', icon: 'ℹ️' },
  tip: { color: 'var(--cta-accent-green)', bg: 'rgba(16,185,129,0.08)', icon: '💡' },
  warning: { color: 'var(--cta-accent-yellow)', bg: 'rgba(245,158,11,0.08)', icon: '⚠️' },
  danger: { color: 'var(--cta-accent-red)', bg: 'rgba(239,68,68,0.08)', icon: '🚨' },
};

const defaultTitles: Record<CalloutType, string> = {
  info: 'Information',
  tip: 'Astuce',
  warning: 'Attention',
  danger: 'Danger',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[type];

  return (
    <div
      className="my-4 rounded-cta p-4"
      style={{
        background: style.bg,
        borderLeft: `3px solid ${style.color}`,
      }}
    >
      <div className="flex items-center gap-2 mb-2 font-semibold text-sm" style={{ color: style.color }}>
        <span>{style.icon}</span>
        <span>{title ?? defaultTitles[type]}</span>
      </div>
      <div className="text-sm" style={{ color: 'var(--cta-text-secondary)' }}>
        {children}
      </div>
    </div>
  );
}
