import { Card } from '@/components/ui/Card';

export default function CookbookPage() {
  return (
    <div>
      <h1>Cookbook</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        Recettes et scenarios concrets pour tirer le meilleur de AIDEN.
      </p>
      <div className="grid gap-4 mt-6">
        <Card href="/cookbook/brownfield" title="Brownfield" description="Ajouter AIDEN a un projet existant." icon="🏗️" />
        <Card href="/cookbook/team" title="Equipe" description="AIDEN en equipe: conventions et bonnes pratiques." icon="👥" />
        <Card href="/cookbook/ci-cd" title="CI/CD" description="AIDEN dans vos pipelines d'integration continue." icon="🔄" />
        <Card href="/cookbook/migration-bmad" title="Migration BMAD" description="Migrer de BMAD vers AIDEN." icon="🔀" />
      </div>
    </div>
  );
}
