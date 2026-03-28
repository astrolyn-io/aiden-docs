import { Card } from '@/components/ui/Card';

export default function GuidesPage() {
  return (
    <div>
      <h1>Guides</h1>
      <p style={{ color: 'var(--cta-text-secondary)' }}>
        Apprenez a utiliser chaque aspect de CTA en profondeur.
      </p>
      <div className="grid gap-4 mt-6">
        <Card href="/guides/modes" title="Modes" description="Flash, Standard, Enterprise: quand utiliser quoi." icon="🔄" />
        <Card href="/guides/agents" title="Agents" description="Les 6 agents CTA et leurs roles." icon="🤖" />
        <Card href="/guides/providers" title="Providers" description="Claude Code, Gemini, Copilot: configuration et routage." icon="🔌" />
        <Card href="/guides/configuration" title="Configuration" description="Les 5 niveaux de configuration." icon="⚙️" />
        <Card href="/guides/rules-and-templates" title="Regles & Templates" description="Personnaliser les regles et templates." icon="📐" />
        <Card href="/guides/skills" title="Skills" description="Extensibilite enterprise : instructions, regles et hooks par package." icon="🧩" />
        <Card href="/guides/troubleshooting" title="Troubleshooting" description="Problemes courants et solutions." icon="🔧" />
      </div>
    </div>
  );
}
