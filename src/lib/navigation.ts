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
      { title: 'Providers', href: '/guides/providers' },
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
