'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);

  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between h-14 px-6"
      style={{
        background: 'var(--cta-bg-primary)',
        borderBottom: '1px solid var(--cta-border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <nav className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            {i > 0 && (
              <span style={{ color: 'var(--cta-text-muted)' }}>/</span>
            )}
            <Link
              href={crumb.href}
              style={{
                color:
                  i === breadcrumbs.length - 1
                    ? 'var(--cta-text-primary)'
                    : 'var(--cta-text-muted)',
              }}
            >
              {crumb.label}
            </Link>
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <kbd
          className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs rounded"
          style={{
            background: 'var(--cta-bg-card)',
            color: 'var(--cta-text-muted)',
            border: '1px solid var(--cta-border)',
          }}
        >
          Ctrl+K
        </kbd>
        <a
          href="https://github.com/edf-dev/cta"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--cta-text-secondary)' }}
          className="text-sm hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function buildBreadcrumbs(pathname: string): Array<{ label: string; href: string }> {
  if (pathname === '/') return [{ label: 'CTA', href: '/' }];

  const parts = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'CTA', href: '/' }];

  let path = '';
  for (const part of parts) {
    path += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      href: path,
    });
  }

  return crumbs;
}
