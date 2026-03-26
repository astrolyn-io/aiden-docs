'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent ?? '',
      level: el.tagName === 'H2' ? 2 : 3,
    }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      className="hidden xl:block sticky top-20 w-56 max-h-[calc(100vh-6rem)] overflow-y-auto text-sm"
      aria-label="Table of contents"
    >
      <h4
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: 'var(--cta-text-muted)' }}
      >
        Sur cette page
      </h4>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '0.75rem' : 0 }}>
            <a
              href={`#${h.id}`}
              className="block py-1 transition-colors text-xs"
              style={{
                color:
                  activeId === h.id
                    ? 'var(--cta-accent-blue)'
                    : 'var(--cta-text-muted)',
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
