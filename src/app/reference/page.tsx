import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Reference technique — CLI, config, artefacts',
  description:
    'Documentation technique complete d\'AIDEN : toutes les commandes CLI, schema aiden.config.yaml, format des artefacts generes, et glossaire.',
};

export default function ReferencePage() {
  return (
    <div>
      <h1>Reference technique</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        La doc exhaustive. Chaque commande, chaque option, chaque format.
        Pour quand vous savez ce que vous cherchez.
      </p>
      <div className="grid gap-4 mt-6">
        <Card
          href="/reference/cli"
          title="CLI"
          description="Toutes les commandes avec arguments, options et exemples. De aiden init a aiden retex search."
          icon="&#9000;&#65039;"
        />
        <Card
          href="/reference/config"
          title="Configuration"
          description="Le schema complet de aiden.config.yaml : providers, routing, budget, pipeline, securite."
          icon="&#128196;"
        />
        <Card
          href="/reference/artefacts"
          title="Artefacts"
          description="Les 7 types de fichiers generes par les agents : brief, spec, stories, review, ADR et plus."
          icon="&#128206;"
        />
        <Card
          href="/reference/glossary"
          title="Glossaire"
          description="Agent, Retex, Quality gate, Circuit breaker... Tous les termes AIDEN expliques simplement."
          icon="&#128218;"
        />
      </div>
    </div>
  );
}
