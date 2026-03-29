import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Terminal } from '@/components/ui/Terminal';
import { AgentFlow } from '@/components/ui/AgentFlow';
import { AidenLogo } from '@/components/ui/AidenLogo';

export const metadata: Metadata = {
  title: 'AIDEN — Vos agents IA codent, analysent et reviewent a votre place',
  description:
    'Framework CLI open source qui orchestre 6 agents IA (Analyst, Planner, Dev, QA, DocOps) pour livrer des features completes. Multi-provider : Claude, Gemini, Copilot. Du bug fix en 30s au projet enterprise.',
};

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
          Arretez de coder seul.{' '}
          <span
            className="block text-2xl md:text-3xl font-normal mt-2"
            style={{ color: 'var(--aiden-accent-primary)' }}
          >
            Vos 6 agents IA prennent le relais.
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--aiden-text-secondary)' }}>
          AIDEN orchestre des agents IA specialises — analyse, planification, code, tests, review — dans
          une seule commande CLI. <strong>Du bug fix en 30 secondes au projet enterprise en une
          semaine.</strong>
        </p>
      </section>

      {/* Quick start terminal */}
      <Terminal title="30 secondes pour votre premiere feature">
        {`$ npm add -g @astrolyn/aiden
$ aiden init
AIDEN Lead > Projet initialise dans .aiden/
$ aiden flash "Ajouter GET /health"
AIDEN Lead > Mode flash. Agents: lead, dev
AIDEN Dev > Implementation en cours...
AIDEN Dev > Done. 2 fichiers modifies, 1 test ajoute.`}
      </Terminal>

      {/* Social proof / key numbers */}
      <section className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '6', label: 'Agents specialises' },
            { value: '3', label: 'Modes adaptatifs' },
            { value: '5+', label: 'Providers IA' },
            { value: '<8K', label: 'Tokens par workflow' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="p-4 rounded-xl"
              style={{ background: 'var(--aiden-bg-secondary)' }}
            >
              <div
                className="text-2xl font-bold"
                style={{ color: 'var(--aiden-accent-primary)' }}
              >
                {value}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--aiden-text-muted)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 modes - with better descriptions */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{
            color: 'var(--aiden-text-primary)',
            borderBottom: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Un mode pour chaque situation
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Pas la peine de sortir l&apos;artillerie lourde pour un bug fix. AIDEN s&apos;adapte.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/guides/modes"
            title="Flash — le chirurgien"
            description="Bug fix, typo, petite feature. 2 agents, 30 secondes, zero bureaucratie."
            icon={<span style={{ color: 'var(--aiden-accent-yellow)' }}>&#9889;</span>}
          />
          <Card
            href="/guides/modes"
            title="Standard — l'architecte"
            description="Nouvelle API, integration, refactoring. Analyse, plan, code, review automatique."
            icon={<span style={{ color: 'var(--aiden-accent-primary)' }}>&#128203;</span>}
          />
          <Card
            href="/guides/modes"
            title="Enterprise — le blindage"
            description="Migration critique, compliance RGPD. Documentation, approbation humaine, audit trail."
            icon={<span style={{ color: 'var(--aiden-accent-purple)' }}>&#127970;</span>}
          />
        </div>
      </section>

      {/* Agent flow */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{
            color: 'var(--aiden-text-primary)',
            borderBottom: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          6 agents, chacun expert dans son domaine
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Comme une equipe dev complete, mais qui tourne en CLI. Le Lead orchestre, les autres
          executent.
        </p>
        <AgentFlow />
      </section>

      {/* Why AIDEN - rewritten as pain points */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{
            color: 'var(--aiden-text-primary)',
            borderBottom: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Ce qui change concretement
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Vous connaissez le probleme. Voici la solution.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: '\u23F1\uFE0F',
              title: '5 min pour demarrer',
              desc: 'install, init, flash. Pas de config XML de 200 lignes. La complexite est opt-in.',
            },
            {
              icon: '\uD83D\uDD00',
              title: 'Changement de mode sans perte',
              desc: 'Commence en flash, bascule en standard si ca se complique. Zero travail perdu.',
            },
            {
              icon: '\uD83E\uDD16',
              title: 'Votre LLM, votre choix',
              desc: 'Claude, Gemini, Copilot, Ollama local. Routage intelligent par tache.',
            },
            {
              icon: '\uD83D\uDCCB',
              title: 'Tracabilite totale',
              desc: 'Brief, spec, stories, review, decisions. Chaque choix IA est documente et auditable.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-3 p-4 rounded-xl"
              style={{ background: 'var(--aiden-bg-secondary)' }}
            >
              <span className="text-xl">{icon}</span>
              <div>
                <h3
                  className="font-semibold text-sm mb-0.5"
                  style={{ color: 'var(--aiden-text-primary)' }}
                >
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

      {/* Getting started links - with urgency */}
      <section className="my-12">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{
            color: 'var(--aiden-text-primary)',
            borderBottom: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Pret a essayer ?
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: 'var(--aiden-text-muted)' }}>
          Choisissez votre rythme. 5 minutes suffisent pour voir AIDEN en action.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href="/getting-started/installation"
            title="Installation"
            description="Node.js, un provider IA, et c'est parti."
            icon="&#128230;"
          />
          <Card
            href="/getting-started/quickstart"
            title="Quickstart (5 min)"
            description="De zero a une feature livree. La preuve que ca marche."
            icon="&#128640;"
          />
          <Card
            href="/getting-started/first-feature"
            title="Premiere vraie feature"
            description="Le workflow standard complet : analyse, plan, code, review."
            icon="&#10024;"
          />
        </div>
      </section>
    </div>
  );
}
