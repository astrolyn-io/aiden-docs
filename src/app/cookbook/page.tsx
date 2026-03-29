import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Cookbook — Recettes concretes pour AIDEN en production',
  description:
    'Scenarios reels : integrer AIDEN dans un projet existant, deployer en equipe, automatiser via CI/CD, migrer depuis BMAD.',
};

export default function CookbookPage() {
  return (
    <div>
      <h1>Cookbook</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        La theorie, c&apos;est fait. Voici les recettes testees sur le terrain
        pour deployer AIDEN dans des situations reelles.
      </p>
      <div className="grid gap-4 mt-6">
        <Card
          href="/cookbook/brownfield"
          title="Projet existant (Brownfield)"
          description="Votre codebase a 3 ans et 200K lignes ? Parfait. AIDEN est concu pour ca — voici comment l'integrer sans tout casser."
          icon="&#127959;&#65039;"
        />
        <Card
          href="/cookbook/team"
          title="AIDEN en equipe"
          description="De 5 a 50+ devs : regles partagees, workflow Git, onboarding en 30 min, metriques d'adoption."
          icon="&#128101;"
        />
        <Card
          href="/cookbook/ci-cd"
          title="CI/CD"
          description="Validez les artefacts dans GitHub Actions, collectez les metriques, lancez des flash automatiques en pipeline."
          icon="&#128260;"
        />
        <Card
          href="/cookbook/migration-bmad"
          title="Migration depuis BMAD"
          description="De 12h a 30 min pour la premiere feature, de 31K a 8K tokens. Le tableau d'equivalences pour migrer en douceur."
          icon="&#128256;"
        />
      </div>
    </div>
  );
}
