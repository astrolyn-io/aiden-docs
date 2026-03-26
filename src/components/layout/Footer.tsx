'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function Footer() {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);

  return (
    <footer className="mt-16 pt-8" style={{ borderTop: '1px solid var(--cta-border)' }}>
      <div className="flex justify-between items-center">
        {prev ? (
          <Link
            href={prev.href}
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'var(--cta-text-secondary)' }}
          >
            <span>←</span>
            <span>{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={next.href}
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'var(--cta-accent-blue)' }}
          >
            <span>{next.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
      <p
        className="mt-6 text-xs text-center"
        style={{ color: 'var(--cta-text-muted)' }}
      >
        CTA - Core Team AI v0.1.0
      </p>
    </footer>
  );
}

function getPrevNext(pathname: string): {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
} {
  const allItems = navigation.flatMap((s) => s.items);
  const idx = allItems.findIndex((item) => item.href === pathname);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? allItems[idx - 1] : undefined,
    next: idx < allItems.length - 1 ? allItems[idx + 1] : undefined,
  };
}
