'use client';

import { useState } from 'react';

type FlowMode = 'flash' | 'standard' | 'enterprise';

interface Agent {
  name: string;
  label: string;
  color: string;
  modes: FlowMode[];
}

const agents: Agent[] = [
  { name: 'lead', label: 'Lead', color: '#f59e0b', modes: ['flash', 'standard', 'enterprise'] },
  { name: 'analyst', label: 'Analyst', color: '#22d3ee', modes: ['standard', 'enterprise'] },
  { name: 'planner', label: 'Planner', color: '#3b82f6', modes: ['standard', 'enterprise'] },
  { name: 'dev', label: 'Dev', color: '#10b981', modes: ['flash', 'standard', 'enterprise'] },
  { name: 'qa', label: 'QA', color: '#ef4444', modes: ['standard', 'enterprise'] },
  { name: 'docops', label: 'DocOps', color: '#94a3b8', modes: ['enterprise'] },
];

export function AgentFlow() {
  const [mode, setMode] = useState<FlowMode>('standard');

  const modeColors: Record<FlowMode, string> = {
    flash: '#f59e0b',
    standard: '#3b82f6',
    enterprise: '#8b5cf6',
  };

  return (
    <div className="my-8">
      <div className="flex gap-2 mb-6 justify-center">
        {(['flash', 'standard', 'enterprise'] as FlowMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: mode === m ? modeColors[m] : 'var(--cta-bg-card)',
              color: mode === m ? 'white' : 'var(--cta-text-muted)',
              border: `1px solid ${mode === m ? modeColors[m] : 'var(--cta-border)'}`,
            }}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        {agents.map((agent, i) => {
          const active = agent.modes.includes(mode);
          return (
            <div key={agent.name} className="flex items-center gap-2">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full text-xs font-bold transition-all"
                style={{
                  background: active ? `${agent.color}20` : 'var(--cta-bg-card)',
                  border: `2px solid ${active ? agent.color : 'var(--cta-border)'}`,
                  color: active ? agent.color : 'var(--cta-text-muted)',
                  opacity: active ? 1 : 0.3,
                }}
              >
                {agent.label}
              </div>
              {i < agents.length - 1 && (
                <svg width="24" height="12" viewBox="0 0 24 12" className="shrink-0">
                  <path
                    d="M0 6h18M14 1l6 5-6 5"
                    stroke={active && agents[i + 1]?.modes.includes(mode) ? 'var(--cta-text-secondary)' : 'var(--cta-border)'}
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
