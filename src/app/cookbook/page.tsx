import { Card } from '@/components/ui/Card';

export default function CookbookPage() {
  return (
    <div>
      <h1>Cookbook</h1>
      <p style={{ color: 'var(--cta-text-secondary)' }}>
        Recettes et scenarios concrets pour tirer le meilleur de CTA.
      </p>
      <div className="grid gap-4 mt-6">
        <Card href="/cookbook/brownfield" title="Brownfield" description="Ajouter CTA a un projet existant." icon="🏗️" />
        <Card href="/cookbook/team" title="Equipe" description="CTA en equipe: conventions et bonnes pratiques." icon="👥" />
        <Card href="/cookbook/ci-cd" title="CI/CD" description="CTA dans vos pipelines d'integration continue." icon="🔄" />
        <Card href="/cookbook/migration-bmad" title="Migration BMAD" description="Migrer de BMAD vers CTA." icon="🔀" />
      </div>
    </div>
  );
}
