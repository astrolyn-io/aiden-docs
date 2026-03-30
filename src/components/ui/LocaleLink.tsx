'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n/config';

/**
 * MDX link component that auto-prefixes internal hrefs with the current locale.
 * Handles: /guides/foo → /en/guides/foo (if current page is under /en/)
 */
export function LocaleLink(props: ComponentPropsWithoutRef<'a'>) {
  const pathname = usePathname();
  const isExternal = props.href?.startsWith('http');
  const isAnchor = props.href?.startsWith('#');

  let href = props.href;

  if (href && !isExternal && !isAnchor) {
    const segments = pathname.split('/').filter(Boolean);
    // Account for basePath: after basePath stripping, first segment is locale
    const localeSegment = segments.find((s) => locales.includes(s as (typeof locales)[number]));
    if (localeSegment && !href.startsWith(`/${localeSegment}/`)) {
      href = `/${localeSegment}${href.startsWith('/') ? href : `/${href}`}`;
    }
  }

  return (
    <a
      {...props}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {props.children}
      {isExternal && <span className="text-xs ml-1">↗</span>}
    </a>
  );
}
