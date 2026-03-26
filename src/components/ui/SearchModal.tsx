'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const allItems = navigation.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      section: section.title,
    })),
  );

  const filtered = query
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.section.toLowerCase().includes(query.toLowerCase()),
      )
    : allItems;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (!open) return;

      if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        router.push(filtered[selectedIndex].href);
        setOpen(false);
        setQuery('');
      }
    },
    [open, filtered, selectedIndex, router],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="fixed inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />
      <div
        className="relative w-full max-w-lg rounded-cta overflow-hidden"
        style={{
          background: 'var(--cta-bg-secondary)',
          border: '1px solid var(--cta-border)',
          boxShadow: 'var(--cta-shadow-lg)',
        }}
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher dans la documentation..."
          className="w-full px-4 py-3 text-sm bg-transparent outline-none"
          style={{
            color: 'var(--cta-text-primary)',
            borderBottom: '1px solid var(--cta-border)',
          }}
        />
        <div className="max-h-72 overflow-y-auto">
          {filtered.map((item, i) => (
            <button
              key={item.href}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
                setQuery('');
              }}
              className="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors"
              style={{
                background:
                  i === selectedIndex ? 'var(--cta-bg-card)' : 'transparent',
                color: 'var(--cta-text-secondary)',
              }}
            >
              <span>{item.title}</span>
              <span className="text-xs" style={{ color: 'var(--cta-text-muted)' }}>
                {item.section}
              </span>
            </button>
          ))}
          {filtered.length === 0 && (
            <p
              className="px-4 py-6 text-sm text-center"
              style={{ color: 'var(--cta-text-muted)' }}
            >
              Aucun resultat pour &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
