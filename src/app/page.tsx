import { Card } from '@/components/ui/Card';
import { Terminal } from '@/components/ui/Terminal';
import { AgentFlow } from '@/components/ui/AgentFlow';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="text-center py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 font-mono"
          style={{ color: 'var(--cta-accent-blue)' }}
        >
          CTA
        </h1>
        <p className="text-xl mb-2" style={{ color: 'var(--cta-text-primary)' }}>
          Core Team AI
        </p>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--cta-text-secondary)' }}>
          Framework CLI pour le developpement assiste par IA en entreprise.
          Orchestrez des agents IA specialises a travers des workflows adaptatifs.
        </p>
      </section>

      {/* Quick start terminal */}
      <Terminal title="Demarrage rapide">
        {`$ pnpm add -g @edf/cta
$ cta init
CTA Lead > Projet initialise dans .cta/
$ cta flash "Ajouter GET /health"
CTA Lead > Mode flash. Agents: lead, dev
CTA Dev > Implementation en cours...
CTA Dev > Done. 2 fichiers modifies, 1 test ajoute.`}
      </Terminal>

      {/* 3 modes */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--cta-text-primary)' }}>
          3 modes adaptatifs
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/guides/modes"
            title="Flash"
            description="Bug fixes, petites features. < 30 min."
            icon={<span style={{ color: '#f59e0b' }}>⚡</span>}
          />
          <Card
            href="/guides/modes"
            title="Standard"
            description="Features moyennes avec specs et review. 2h - 1 jour."
            icon={<span style={{ color: '#3b82f6' }}>📋</span>}
          />
          <Card
            href="/guides/modes"
            title="Enterprise"
            description="Projets critiques, compliance, documentation complete."
            icon={<span style={{ color: '#8b5cf6' }}>🏢</span>}
          />
        </div>
      </section>

      {/* Agent flow */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--cta-text-primary)' }}>
          6 agents specialises
        </h2>
        <p className="text-center mb-6" style={{ color: 'var(--cta-text-secondary)' }}>
          Chaque agent a un role precis. Le Lead orchestre le tout.
        </p>
        <AgentFlow />
      </section>

      {/* Why CTA */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--cta-text-primary)' }}>
          Pourquoi CTA ?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: '🎯', title: 'Simple', desc: 'Commencez en 5 min. La complexite est opt-in.' },
            { icon: '🔄', title: 'Adaptatif', desc: '3 modes, passage dynamique sans perte de travail.' },
            { icon: '🤖', title: 'Multi-provider', desc: 'Claude Code, Gemini, Copilot. Routage intelligent.' },
            { icon: '🏗️', title: 'Enterprise-ready', desc: 'Regles, templates, hooks, metriques, compliance.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: 'var(--cta-text-primary)' }}>
                  {title}
                </h3>
                <p className="text-xs" style={{ color: 'var(--cta-text-muted)' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting started links */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--cta-text-primary)' }}>
          Commencer
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/getting-started/installation"
            title="Installation"
            description="Installer et configurer CTA."
            icon="📦"
          />
          <Card
            href="/getting-started/quickstart"
            title="Quickstart"
            description="Votre premiere feature en 5 min."
            icon="🚀"
          />
          <Card
            href="/getting-started/first-feature"
            title="Premiere feature"
            description="Tutoriel complet mode standard."
            icon="✨"
          />
        </div>
      </section>
    </div>
  );
}
