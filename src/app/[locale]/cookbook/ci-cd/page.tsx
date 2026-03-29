import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/cookbook/ci-cd.mdx';
import Fr from '@/content/fr/cookbook/ci-cd.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'AIDEN in CI/CD — GitHub Actions, GitLab CI, Metrics', description: 'Integrate AIDEN in CI/CD: artefact validation, automatic metrics, non-interactive flash, dashboards.' },
    fr: { title: 'AIDEN en CI/CD — GitHub Actions, GitLab CI, metriques', description: 'Integrez AIDEN dans vos pipelines CI/CD : validation des artefacts, metriques automatiques.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
