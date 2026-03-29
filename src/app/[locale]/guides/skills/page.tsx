import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/skills.mdx';
import Fr from '@/content/fr/guides/skills.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'AIDEN Skills — Extensible Packages for Enterprise Teams', description: 'Skills: plug-and-play packages (YAML + Markdown) for GDPR compliance, Jira sync, strict code review.' },
    fr: { title: 'Skills AIDEN — Packages extensibles pour equipes enterprise', description: 'Skills : packages plug-and-play pour compliance RGPD, sync Jira, code review strict.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
