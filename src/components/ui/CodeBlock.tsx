'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  highlight?: string;
}

export function CodeBlock({ children, language: _language, filename, highlight }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightLines = highlight
    ? highlight.split(',').map((n) => parseInt(n.trim(), 10))
    : [];

  const lines = children.trim().split('\n');

  return (
    <div
      className="rounded-xl overflow-hidden my-4"
      style={{ background: 'var(--aiden-terminal-bg)', border: '1px solid var(--aiden-border)' }}
    >
      {filename && (
        <div
          className="flex items-center justify-between px-4 py-2 text-xs"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            color: '#7f8ea3',
          }}
        >
          <span>{filename}</span>
          <button
            onClick={handleCopy}
            className="px-2 py-0.5 rounded text-xs transition-colors cursor-pointer"
            style={{ color: '#7f8ea3' }}
          >
            {copied ? '✓ Copie' : 'Copier'}
          </button>
        </div>
      )}
      {!filename && (
        <div className="flex justify-end px-3 pt-2">
          <button
            onClick={handleCopy}
            className="text-xs transition-colors cursor-pointer"
            style={{ color: '#7f8ea3' }}
          >
            {copied ? '✓' : '📋'}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className="block"
              style={{
                background: highlightLines.includes(i + 1)
                  ? 'rgba(232, 93, 4, 0.08)'
                  : 'transparent',
                borderLeft: highlightLines.includes(i + 1)
                  ? '2px solid var(--aiden-accent-primary)'
                  : '2px solid transparent',
                paddingLeft: '0.75rem',
                color: '#e2e8f0',
              }}
            >
              {line || ' '}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
