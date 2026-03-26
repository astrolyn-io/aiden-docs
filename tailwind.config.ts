import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cta: {
          'bg-primary': '#0a0e1a',
          'bg-secondary': '#111827',
          'bg-card': '#1a2332',
          'accent-blue': '#3b82f6',
          'accent-green': '#10b981',
          'accent-yellow': '#f59e0b',
          'accent-red': '#ef4444',
          'accent-purple': '#8b5cf6',
          'text-primary': '#f1f5f9',
          'text-secondary': '#94a3b8',
          'text-muted': '#64748b',
          border: '#1e293b',
          'code-bg': '#0d1117',
          'terminal-green': '#4ade80',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        cta: '8px',
      },
      boxShadow: {
        cta: '0 4px 6px -1px rgba(0,0,0,0.3)',
        'cta-lg': '0 10px 15px -3px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
