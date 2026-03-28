import Link from 'next/link';
import type { ReactNode } from 'react';

interface CardProps {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export function Card({ href, title, description, icon }: CardProps) {
  return (
    <Link
      href={href}
      className="group block p-5 rounded-xl transition-all no-underline hover:translate-y-[-2px]"
      style={{
        background: 'var(--aiden-bg-card)',
        border: '1px solid var(--aiden-border)',
        boxShadow: 'var(--aiden-shadow)',
      }}
    >
      <div className="flex items-start gap-3">
        {icon && <span className="text-xl mt-0.5">{icon}</span>}
        <div>
          <h3
            className="font-semibold text-sm mb-1 transition-colors"
            style={{ color: 'var(--aiden-text-primary)' }}
          >
            {title}
            <span
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: 'var(--aiden-accent-primary)' }}
            >
              →
            </span>
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--aiden-text-muted)' }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
