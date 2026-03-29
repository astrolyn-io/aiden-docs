import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Demarrage rapide — AIDEN en 5 minutes',
  description:
    'Installez AIDEN, initialisez votre projet et livrez votre premiere feature assistee par IA en moins de 5 minutes. Guide pas a pas.',
};

export default function GettingStartedPage() {
  return (
    <div>
      <h1>De zero a votre premiere feature IA</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        Pas de slides, pas de meetings. En 5 minutes, vous aurez un agent IA qui code pour vous.
        Suivez le guide.
      </p>
      <div className="grid gap-4 mt-6">
        <Card
          href="/getting-started/installation"
          title="Installation"
          description="3 commandes et c'est pret. Node.js, un provider IA, AIDEN. Le reste est automatique."
          icon="&#128230;"
        />
        <Card
          href="/getting-started/quickstart"
          title="Quickstart (5 min)"
          description="Creez un projet, lancez un flash, et regardez AIDEN ecrire le code et les tests pour vous."
          icon="&#128640;"
        />
        <Card
          href="/getting-started/first-feature"
          title="Premiere feature complete"
          description="Le workflow standard de A a Z : analyse, planification, code, tests, review. 4 agents en action."
          icon="&#10024;"
        />
      </div>
    </div>
  );
}
