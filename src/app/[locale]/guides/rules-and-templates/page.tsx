import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/rules-and-templates.mdx';
import Fr from '@/content/fr/guides/rules-and-templates.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Rules and Templates — Codify Your Team Conventions', description: 'Enterprise rules in Markdown injected into AI agents. Customizable Handlebars templates.' },
    fr: { title: 'Regles et Templates — Codifiez les conventions de votre equipe', description: 'Regles d\'entreprise en Markdown injectees dans les agents IA. Templates Handlebars personnalisables.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
