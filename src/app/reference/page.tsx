import { Card } from '@/components/ui/Card';

export default function ReferencePage() {
  return (
    <div>
      <h1>Reference</h1>
      <p style={{ color: 'var(--cta-text-secondary)' }}>
        Documentation technique complete de CTA.
      </p>
      <div className="grid gap-4 mt-6">
        <Card href="/reference/cli" title="CLI" description="Toutes les commandes CTA documentees." icon="⌨️" />
        <Card href="/reference/config" title="Configuration" description="Schema complet de cta.config.yaml." icon="📄" />
        <Card href="/reference/artefacts" title="Artefacts" description="Format et structure des artefacts generes." icon="📎" />
        <Card href="/reference/glossary" title="Glossaire" description="Terminologie CTA de A a Z." icon="📚" />
      </div>
    </div>
  );
}
