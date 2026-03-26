type BadgeVariant =
  | 'flash' | 'standard' | 'enterprise'
  | 'lead' | 'analyst' | 'planner' | 'dev' | 'qa' | 'docops'
  | 'claude' | 'gemini' | 'copilot';

interface BadgeProps {
  variant: BadgeVariant;
  children?: string;
}

const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
  flash: { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' },
  standard: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6' },
  enterprise: { bg: 'rgba(139,92,246,0.15)', color: '#8b5cf6' },
  lead: { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' },
  analyst: { bg: 'rgba(34,211,238,0.15)', color: '#22d3ee' },
  planner: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6' },
  dev: { bg: 'rgba(16,185,129,0.15)', color: '#10b981' },
  qa: { bg: 'rgba(239,68,68,0.15)', color: '#ef4444' },
  docops: { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' },
  claude: { bg: 'rgba(249,115,22,0.15)', color: '#f97316' },
  gemini: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6' },
  copilot: { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' },
};

const defaultLabels: Record<BadgeVariant, string> = {
  flash: 'Flash', standard: 'Standard', enterprise: 'Enterprise',
  lead: 'Lead', analyst: 'Analyst', planner: 'Planner', dev: 'Dev', qa: 'QA', docops: 'DocOps',
  claude: 'Claude Code', gemini: 'Gemini', copilot: 'Copilot',
};

export function Badge({ variant, children }: BadgeProps) {
  const style = badgeColors[variant];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium font-mono"
      style={{ background: style.bg, color: style.color }}
    >
      {children ?? defaultLabels[variant]}
    </span>
  );
}
