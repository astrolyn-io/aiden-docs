'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, type NavSection } from '@/lib/navigation';

const sectionIcons: Record<string, string> = {
  rocket: '🚀',
  book: '📖',
  terminal: '⌨️',
  code: '🧑‍🍳',
};

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-cta"
        style={{ background: 'var(--cta-bg-card)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 overflow-y-auto transition-transform md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'var(--cta-bg-secondary)',
          borderRight: '1px solid var(--cta-border)',
        }}
      >
        <div className="p-5">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <span
              className="text-xl font-bold font-mono"
              style={{ color: 'var(--cta-accent-blue)' }}
            >
              CTA
            </span>
            <span style={{ color: 'var(--cta-text-muted)' }} className="text-sm">
              v0.1.0
            </span>
          </Link>

          <nav className="space-y-6">
            {navigation.map((section) => (
              <SidebarSection
                key={section.title}
                section={section}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

function SidebarSection({
  section,
  pathname,
}: {
  section: NavSection;
  pathname: string;
}) {
  return (
    <div>
      <h3
        className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
        style={{ color: 'var(--cta-text-muted)' }}
      >
        <span>{sectionIcons[section.icon] ?? '📄'}</span>
        {section.title}
      </h3>
      <ul className="space-y-1">
        {section.items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-1.5 rounded-md text-sm transition-colors"
                style={{
                  color: isActive
                    ? 'var(--cta-accent-blue)'
                    : 'var(--cta-text-secondary)',
                  background: isActive ? 'var(--cta-bg-card)' : 'transparent',
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
