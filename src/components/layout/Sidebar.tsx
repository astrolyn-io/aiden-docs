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
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg"
        style={{ background: 'var(--aiden-bg-card)', border: '1px solid var(--aiden-border)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 overflow-y-auto transition-transform md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'var(--aiden-bg-sidebar)',
          borderRight: '1px solid var(--aiden-border)',
        }}
      >
        <div className="p-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8 no-underline">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'var(--aiden-accent-primary)' }}
            >
              C
            </div>
            <div>
              <span className="font-bold text-sm" style={{ color: 'var(--aiden-text-primary)' }}>
                AIDEN
              </span>
              <span className="ml-1.5 text-xs" style={{ color: 'var(--aiden-text-muted)' }}>
                v0.7.0
              </span>
            </div>
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
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
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
        className="text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
        style={{ color: 'var(--aiden-text-muted)' }}
      >
        <span>{sectionIcons[section.icon] ?? '📄'}</span>
        {section.title}
      </h3>
      <ul className="space-y-0.5">
        {section.items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-1.5 rounded-md text-[13px] transition-all no-underline"
                style={{
                  color: isActive
                    ? 'var(--aiden-accent-primary)'
                    : 'var(--aiden-text-secondary)',
                  background: isActive ? 'var(--aiden-accent-primary-light)' : 'transparent',
                  fontWeight: isActive ? 500 : 400,
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
