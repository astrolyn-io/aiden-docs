import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/reference/cli.mdx';
import Fr from '@/content/fr/reference/cli.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'CLI Reference — All AIDEN Commands', description: 'Complete reference: aiden init, flash, standard, enterprise, status, resume, abort, agent, provider, metrics.' },
    fr: { title: 'Reference CLI AIDEN — Toutes les commandes', description: 'Reference complete : aiden init, flash, standard, enterprise, status, resume, abort, agent, provider, metrics.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
