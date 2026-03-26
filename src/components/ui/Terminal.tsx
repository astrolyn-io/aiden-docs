'use client';

interface TerminalProps {
  children: string;
  title?: string;
}

export function Terminal({ children, title }: TerminalProps) {
  const lines = children.trim().split('\n');

  return (
    <div
      className="rounded-cta overflow-hidden my-4 font-mono"
      style={{
        background: '#0d1117',
        border: '1px solid var(--cta-border)',
        boxShadow: 'var(--cta-shadow)',
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{ background: 'var(--cta-bg-card)', borderBottom: '1px solid var(--cta-border)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#10b981' }} />
        {title && (
          <span className="ml-2 text-xs" style={{ color: 'var(--cta-text-muted)' }}>
            {title}
          </span>
        )}
      </div>
      <div className="p-4 text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i}>
            {line.startsWith('$ ') ? (
              <>
                <span style={{ color: 'var(--cta-terminal-green)' }}>$ </span>
                <span style={{ color: 'var(--cta-text-primary)' }}>
                  {line.slice(2)}
                </span>
              </>
            ) : line.startsWith('CTA ') ? (
              <span style={{ color: 'var(--cta-accent-blue)' }}>{line}</span>
            ) : (
              <span style={{ color: 'var(--cta-text-secondary)' }}>{line || ' '}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
