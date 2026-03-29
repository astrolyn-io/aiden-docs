import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Guides — Maitriser chaque aspect d\'AIDEN',
  description:
    'Guides detailles : modes flash/standard/enterprise, 6 agents IA, configuration multi-provider, skills, regles d\'entreprise et troubleshooting.',
};

export default function GuidesPage() {
  return (
    <div>
      <h1>Guides</h1>
      <p style={{ color: 'var(--aiden-text-secondary)' }}>
        Vous savez installer AIDEN. Maintenant, apprenez a en tirer le maximum.
        Chaque guide repond a une question concrete.
      </p>
      <div className="grid gap-4 mt-6">
        <Card
          href="/guides/modes"
          title="Modes"
          description="Flash, Standard ou Enterprise ? Comment choisir — et comment changer en cours de route sans rien perdre."
          icon="&#128260;"
        />
        <Card
          href="/guides/agents"
          title="Agents"
          description="6 agents IA specialises qui collaborent comme une equipe dev. Qui fait quoi, et comment ils se passent le relais."
          icon="&#129302;"
        />
        <Card
          href="/guides/providers"
          title="Providers"
          description="Claude, Gemini, Copilot, Ollama local... Connectez votre LLM prefere et laissez AIDEN router intelligemment."
          icon="&#128268;"
        />
        <Card
          href="/guides/configuration"
          title="Configuration"
          description="5 niveaux de config, du defaut global au flag CLI. 4 lignes suffisent pour demarrer, 50 pour tout controller."
          icon="&#9881;&#65039;"
        />
        <Card
          href="/guides/rules-and-templates"
          title="Regles & Templates"
          description="Codifiez vos conventions d'equipe. Les agents les respectent automatiquement a chaque feature."
          icon="&#128208;"
        />
        <Card
          href="/guides/skills"
          title="Skills"
          description="Packages plug-and-play pour ajouter compliance RGPD, sync Jira, ou vos propres regles metier en 5 minutes."
          icon="&#129513;"
        />
        <Card
          href="/guides/troubleshooting"
          title="Troubleshooting"
          description="Ca ne marche pas ? Provider timeout, feature bloquee, circuit breaker... Les solutions rapides sont ici."
          icon="&#128295;"
        />
      </div>
    </div>
  );
}
