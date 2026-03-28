import { Card } from '@/components/ui/Card';

export default function GettingStartedPage() {
  return (
    <div>
      <h1>Demarrage</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        Tout ce qu&apos;il faut pour installer AIDEN et lancer votre premiere feature.
      </p>
      <div className="grid gap-4 mt-6">
        <Card href="/getting-started/installation" title="Installation" description="Prerequis, installation et configuration initiale." icon="📦" />
        <Card href="/getting-started/quickstart" title="Quickstart" description="De zero a une feature livree en 5 minutes." icon="🚀" />
        <Card href="/getting-started/first-feature" title="Premiere feature" description="Tutoriel complet avec le mode standard." icon="✨" />
      </div>
    </div>
  );
}
