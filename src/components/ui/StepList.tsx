import type { ReactNode } from 'react';

interface Step {
  title: string;
  children: ReactNode;
}

interface StepListProps {
  steps: Step[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0"
              style={{
                background: 'var(--aiden-accent-primary)',
                color: 'white',
              }}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-0.5 flex-1 my-1"
                style={{ background: 'var(--aiden-border)' }}
              />
            )}
          </div>
          <div className="pb-6 flex-1">
            <h4
              className="font-semibold text-sm mb-1"
              style={{ color: 'var(--aiden-text-primary)' }}
            >
              {step.title}
            </h4>
            <div className="text-sm" style={{ color: 'var(--aiden-text-secondary)' }}>
              {step.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
