type BadgeVariant =
  | 'flash' | 'standard' | 'enterprise'
  | 'lead' | 'analyst' | 'planner' | 'dev' | 'qa' | 'docops'
  | 'claude' | 'gemini' | 'copilot';

interface BadgeProps {
  variant: BadgeVariant;
  children?: string;
}

const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
  flash: { bg: 'var(--cta-accent-yellow-light)', color: 'var(--cta-accent-yellow)' },
  standard: { bg: 'var(--cta-accent-blue-light)', color: 'var(--cta-accent-blue)' },
  enterprise: { bg: 'var(--cta-accent-purple-light)', color: 'var(--cta-accent-purple)' },
  lead: { bg: 'var(--cta-accent-yellow-light)', color: 'var(--cta-accent-yellow)' },
  analyst: { bg: 'var(--cta-accent-blue-light)', color: 'var(--cta-accent-blue)' },
  planner: { bg: 'var(--cta-accent-blue-light)', color: 'var(--cta-accent-blue)' },
  dev: { bg: 'var(--cta-accent-green-light)', color: 'var(--cta-accent-green)' },
  qa: { bg: 'var(--cta-accent-red-light)', color: 'var(--cta-accent-red)' },
  docops: { bg: 'var(--cta-bg-secondary)', color: 'var(--cta-text-muted)' },
  claude: { bg: 'var(--cta-accent-primary-light)', color: 'var(--cta-accent-primary)' },
  gemini: { bg: 'var(--cta-accent-blue-light)', color: 'var(--cta-accent-blue)' },
  copilot: { bg: 'var(--cta-bg-secondary)', color: 'var(--cta-text-muted)' },
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
      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium font-mono"
      style={{ background: style.bg, color: style.color }}
    >
      {children ?? defaultLabels[variant]}
    </span>
  );
}
