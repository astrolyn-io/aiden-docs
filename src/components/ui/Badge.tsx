type BadgeVariant =
  | 'flash' | 'standard' | 'enterprise'
  | 'lead' | 'analyst' | 'planner' | 'dev' | 'qa' | 'docops'
  | 'claude' | 'gemini' | 'copilot';

interface BadgeProps {
  variant: BadgeVariant;
  children?: string;
}

const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
  flash: { bg: 'var(--aiden-accent-yellow-light)', color: 'var(--aiden-accent-yellow)' },
  standard: { bg: 'var(--aiden-accent-blue-light)', color: 'var(--aiden-accent-blue)' },
  enterprise: { bg: 'var(--aiden-accent-purple-light)', color: 'var(--aiden-accent-purple)' },
  lead: { bg: 'var(--aiden-accent-yellow-light)', color: 'var(--aiden-accent-yellow)' },
  analyst: { bg: 'var(--aiden-accent-blue-light)', color: 'var(--aiden-accent-blue)' },
  planner: { bg: 'var(--aiden-accent-blue-light)', color: 'var(--aiden-accent-blue)' },
  dev: { bg: 'var(--aiden-accent-green-light)', color: 'var(--aiden-accent-green)' },
  qa: { bg: 'var(--aiden-accent-red-light)', color: 'var(--aiden-accent-red)' },
  docops: { bg: 'var(--aiden-bg-secondary)', color: 'var(--aiden-text-muted)' },
  claude: { bg: 'var(--aiden-accent-primary-light)', color: 'var(--aiden-accent-primary)' },
  gemini: { bg: 'var(--aiden-accent-blue-light)', color: 'var(--aiden-accent-blue)' },
  copilot: { bg: 'var(--aiden-bg-secondary)', color: 'var(--aiden-text-muted)' },
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
