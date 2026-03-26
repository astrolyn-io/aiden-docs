import type { ComponentPropsWithoutRef } from 'react';
import { CodeBlock } from '../ui/CodeBlock';
import { Terminal } from '../ui/Terminal';
import { Callout } from '../ui/Callout';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { StepList } from '../ui/StepList';
import { ComparisonTable } from '../ui/ComparisonTable';
import { AgentFlow } from '../ui/AgentFlow';
import { slugifyHeading } from '@/lib/mdx';

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Tag = `h${level}` as const;
  return function Heading(props: ComponentPropsWithoutRef<typeof Tag>) {
    const text = typeof props.children === 'string' ? props.children : '';
    const id = slugifyHeading(text);
    return (
      <Tag id={id} {...props}>
        <a href={`#${id}`} className="no-underline hover:underline">
          {props.children}
        </a>
      </Tag>
    );
  };
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => {
    const child = props.children as React.ReactElement<{ children: string; className?: string }> | undefined;
    if (child && typeof child === 'object' && 'props' in child) {
      const lang = child.props.className?.replace('language-', '') ?? '';
      return <CodeBlock language={lang}>{child.props.children}</CodeBlock>;
    }
    return <pre {...props} />;
  },
  a: (props: ComponentPropsWithoutRef<'a'>) => {
    const isExternal = props.href?.startsWith('http');
    return (
      <a
        {...props}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {props.children}
        {isExternal && <span className="text-xs ml-1">↗</span>}
      </a>
    );
  },
  Terminal,
  Callout,
  Badge,
  Card,
  StepList,
  ComparisonTable,
  AgentFlow,
};
