import type { ReactNode } from 'react';

type StepContainerProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function StepContainer({ title, description, children }: StepContainerProps) {
  return (
    <section aria-labelledby="step-title" className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 id="step-title" className="text-3xl font-bold text-white mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-300">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}


