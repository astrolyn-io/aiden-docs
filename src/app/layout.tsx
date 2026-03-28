import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TableOfContents } from '@/components/layout/TableOfContents';
import { SearchModal } from '@/components/ui/SearchModal';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIDEN — AI-Driven Engineering',
  description: 'Framework CLI pour le developpement assiste par IA en entreprise',
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
