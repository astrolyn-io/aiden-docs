import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { locales, type Locale } from '@/i18n/config';

interface ContentPageOptions {
  content: Record<Locale, ComponentType>;
  metadata: Record<Locale, Metadata>;
}

export function createContentPage(options: ContentPageOptions) {
  const { content, metadata } = options;

  function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    return metadata[locale as Locale] ?? metadata.en;
  }

  async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const Content = content[locale as Locale] ?? content.en;
    return <Content />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
