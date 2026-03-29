import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TableOfContents } from '@/components/layout/TableOfContents';
import { SearchModal } from '@/components/ui/SearchModal';
import './globals.css';

const siteUrl = process.env.SITE_URL || 'https://astrolyn.github.io/aiden';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AIDEN — Framework CLI d\'ingenierie IA pour equipes dev',
    template: '%s | AIDEN Docs',
  },
  description:
    'Orchestrez 6 agents IA specialises (Analyst, Planner, Dev, QA...) via une CLI. 3 modes adaptatifs, multi-provider (Claude, Gemini, Copilot), integration enterprise. Open source.',
  keywords: [
    'AIDEN',
    'AI development',
    'CLI framework',
    'AI agents',
    'Claude Code',
    'Gemini CLI',
    'GitHub Copilot',
    'developer tools',
    'AI engineering',
    'code generation',
    'enterprise AI',
    'multi-provider AI',
    'orchestration IA',
    'developpement assiste IA',
  ],
  authors: [{ name: 'Astrolyn' }],
  creator: 'Astrolyn',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'AIDEN Documentation',
    title: 'AIDEN — Framework CLI d\'ingenierie IA pour equipes dev',
    description:
      'Orchestrez 6 agents IA specialises via une CLI. Du bug fix en 30s a l\'architecture enterprise. Open source, multi-provider.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIDEN — Framework CLI d\'ingenierie IA',
    description:
      'Orchestrez 6 agents IA specialises via une CLI. Du bug fix en 30s a l\'architecture enterprise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'AIDEN',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Windows, macOS, Linux',
              description:
                'Framework CLI open source pour orchestrer des agents IA specialises dans le developpement logiciel en entreprise.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              author: { '@type': 'Organization', name: 'Astrolyn' },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('aiden-theme');
                if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
              })();
            `,
          }}
        />
      </head>
      <body>
        <Sidebar />
        <SearchModal />
        <div className="md:ml-64">
          <Header />
          <div className="flex">
            <main className="flex-1 max-w-3xl mx-auto px-6 py-8 prose-aiden">
              {children}
              <Footer />
            </main>
            <TableOfContents />
          </div>
        </div>
      </body>
    </html>
  );
}
