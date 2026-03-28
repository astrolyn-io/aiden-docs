import { Card } from '@/components/ui/Card';
import { Terminal } from '@/components/ui/Terminal';
import { AgentFlow } from '@/components/ui/AgentFlow';
import { AidenLogo } from '@/components/ui/AidenLogo';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="text-center py-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{
            background: 'var(--aiden-accent-primary-light)',
            color: 'var(--aiden-accent-primary)',
            border: '1px solid var(--aiden-accent-primary)',
            borderColor: 'transparent',
          }}
        >
          v0.7.0 — Multi-Provider & Retex
        </div>
        <div className="flex justify-center mb-4">
          <AidenLogo size={80} />
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--aiden-text-primary)', letterSpacing: '-0.03em' }}
        >
          AIDEN{' '}
          <span className="text-2xl md:text-3xl font-normal" style={{ color: 'var(--aiden-accent-primary)' }}>AI-Driven Engineering</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--aiden-text-secondary)' }}>
          Framework CLI pour le développement assisté par IA en entreprise.
          Orchestrez des agents IA spécialisés à travers des workflows adaptatifs.
        </p>
      </section>

      {/* Quick start terminal */}
      <Terminal title="Démarrage rapide">
        {`$ npm add -g @astrolyn/aiden
$ aiden init
AIDEN Lead > Projet initialisé dans .aiden/
$ aiden flash "Ajouter GET /health"
AIDEN Lead > Mode flash. Agents: lead, dev
AIDEN Dev > Implémentation en cours...
AIDEN Dev > Done. 2 fichiers modifiés, 1 test ajouté.`}
      </Terminal>

      {/* 3 modes */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: 'var(--aiden-text-primary)', borderBottom: 'none', letterSpacing: '-0.02em' }}
        >
          3 modes adaptatifs
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Du bug fix au projet enterprise, AIDEN s&apos;adapte.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/guides/modes"
            title="Flash"
            description="Bug fixes, petites features. < 30 min."
            icon={<span style={{ color: 'var(--aiden-accent-yellow)' }}>⚡</span>}
          />
          <Card
            href="/guides/modes"
            title="Standard"
            description="Features moyennes avec specs et review. 2h - 1 jour."
            icon={<span style={{ color: 'var(--aiden-accent-primary)' }}>📋</span>}
          />
          <Card
            href="/guides/modes"
            title="Enterprise"
            description="Projets critiques, compliance, documentation complète."
            icon={<span style={{ color: 'var(--aiden-accent-purple)' }}>🏢</span>}
          />
        </div>
      </section>

      {/* Agent flow */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: 'var(--aiden-text-primary)', borderBottom: 'none', letterSpacing: '-0.02em' }}
        >
          6 agents spécialisés
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Chaque agent a un rôle précis. Le Lead orchestre le tout.
        </p>
        <AgentFlow />
      </section>

      {/* Why AIDEN */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-8"
          style={{ color: 'var(--aiden-text-primary)', borderBottom: 'none', letterSpacing: '-0.02em' }}
        >
          Pourquoi AIDEN ?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: '🎯', title: 'Simple', desc: 'Commencez en 5 min. La complexité est opt-in.' },
            { icon: '🔄', title: 'Adaptatif', desc: '3 modes, passage dynamique sans perte de travail.' },
            { icon: '🤖', title: 'Multi-provider', desc: 'Claude Code, Gemini, Copilot. Routage intelligent.' },
            { icon: '🧩', title: 'Extensible', desc: 'Skills, règles, hooks et templates pour votre équipe.' },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-3 p-4 rounded-xl"
              style={{ background: 'var(--aiden-bg-secondary)' }}
            >
              <span className="text-xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--aiden-text-primary)' }}>
                  {title}
                </h3>
                <p className="text-xs" style={{ color: 'var(--aiden-text-muted)' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting started links */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: 'var(--aiden-text-primary)', borderBottom: 'none', letterSpacing: '-0.02em' }}
        >
          Commencer
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/getting-started/installation"
            title="Installation"
            description="Installer et configurer AIDEN."
            icon="📦"
          />
          <Card
            href="/getting-started/quickstart"
            title="Quickstart"
            description="Votre première feature en 5 min."
            icon="🚀"
          />
          <Card
            href="/getting-started/first-feature"
            title="Première feature"
            description="Tutoriel complet mode standard."
            icon="✨"
          />
        </div>
      </section>
    </div>
  );
}
