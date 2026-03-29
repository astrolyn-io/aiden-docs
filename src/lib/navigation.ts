export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  icon: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: 'Demarrage',
    icon: 'rocket',
    items: [
      { title: 'Installation', href: '/getting-started/installation' },
      { title: 'Quickstart', href: '/getting-started/quickstart' },
      { title: 'Premiere feature', href: '/getting-started/first-feature' },
    ],
  },
  {
    title: 'Guides',
    icon: 'book',
    items: [
      { title: 'Modes', href: '/guides/modes' },
      { title: 'Agents', href: '/guides/agents' },
      { title: 'Providers', href: '/guides/providers', children: [
        { title: 'Claude Code', href: '/guides/providers/claude-code' },
        { title: 'Gemini CLI', href: '/guides/providers/gemini' },
        { title: 'OpenCode', href: '/guides/providers/opencode' },
        { title: 'GitHub Copilot', href: '/guides/providers/copilot' },
        { title: 'API custom', href: '/guides/providers/custom-api' },
      ] },
      { title: 'Configuration', href: '/guides/configuration' },
      { title: 'Regles & Templates', href: '/guides/rules-and-templates' },
      { title: 'Skills', href: '/guides/skills' },
      { title: 'Troubleshooting', href: '/guides/troubleshooting' },
    ],
  },
  {
    title: 'Reference',
    icon: 'terminal',
    items: [
      { title: 'CLI', href: '/reference/cli' },
      { title: 'Configuration', href: '/reference/config' },
      { title: 'Artefacts', href: '/reference/artefacts' },
      { title: 'Glossaire', href: '/reference/glossary' },
    ],
  },
  {
    title: 'Tutorial',
    icon: 'rocket',
    items: [
      { title: 'Le terrain de jeu', href: '/tutorial/setup' },
      { title: 'Mode flash', href: '/tutorial/flash' },
      { title: 'Mode standard', href: '/tutorial/standard' },
      { title: 'Mode enterprise', href: '/tutorial/enterprise' },
      { title: 'Boite a outils', href: '/tutorial/toolbox' },
    ],
  },
  {
    title: 'Cookbook',
    icon: 'code',
    items: [
      { title: 'Brownfield', href: '/cookbook/brownfield' },
      { title: 'Equipe', href: '/cookbook/team' },
      { title: 'CI/CD', href: '/cookbook/ci-cd' },
      { title: 'Migration BMAD', href: '/cookbook/migration-bmad' },
    ],
  },
];
