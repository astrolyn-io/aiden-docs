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
      className="block p-5 rounded-cta transition-all hover:translate-y-[-2px]"
      style={{
        background: 'var(--cta-bg-card)',
        border: '1px solid var(--cta-border)',
        boxShadow: 'var(--cta-shadow)',
      }}
    >
      <div className="flex items-start gap-3">
        {icon && <span className="text-2xl mt-0.5">{icon}</span>}
        <div>
          <h3
            className="font-semibold text-sm mb-1"
            style={{ color: 'var(--cta-text-primary)' }}
          >
            {title}
          </h3>
          <p className="text-xs" style={{ color: 'var(--cta-text-muted)' }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
