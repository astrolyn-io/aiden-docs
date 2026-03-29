import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/reference/glossary.mdx';
import Fr from '@/content/fr/reference/glossary.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'AIDEN Glossary — All Terms Explained Simply', description: 'Complete glossary: Agent, Artefact, Brief, Circuit breaker, Quality gate, Retex, Routing, Skill, Story.' },
    fr: { title: 'Glossaire AIDEN — Tous les termes expliques simplement', description: 'Glossaire complet : Agent, Artefact, Brief, Circuit breaker, Quality gate, Retex, Routing, Skill, Story.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
