import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/opencode.mdx';
import Fr from '@/content/fr/guides/providers/opencode.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'OpenCode — Open Source Provider for Local LLM', description: 'OpenCode CLI: multi-backend open source provider. Connect Ollama, LiteLLM or any LLM. 100% local pipeline.' },
    fr: { title: 'OpenCode — Provider open source pour LLM local', description: 'OpenCode CLI : provider open source multi-backend. Branchez Ollama, LiteLLM ou n\'importe quel LLM.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
