import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/getting-started/first-feature.mdx';
import Fr from '@/content/fr/getting-started/first-feature.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'First Standard Feature — 4 AI Agents in Action', description: 'Complete tutorial: Analyst analyzes code, Planner creates specs, Dev implements, QA reviews. Step by step.' },
    fr: { title: 'Premiere feature standard — 4 agents IA en action', description: 'Tutoriel complet : Analyst analyse le code, Planner cree les specs, Dev implemente, QA review.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
