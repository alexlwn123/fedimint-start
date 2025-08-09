import type { ReactNode } from 'react';
import { Shield } from 'lucide-react';

type LayoutProps = {
  children: ReactNode;
  stepLabels?: string[];
  currentStepIndex?: number;
};

export default function Layout({ children, stepLabels, currentStepIndex = 0 }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="border-b border-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-white font-semibold leading-tight">Fedimint Start</span>
              <span className="block text-xs text-gray-400 leading-tight">Create your federated ecash mint</span>
            </div>
          </div>

          {stepLabels && stepLabels.length > 0 && (
            <nav aria-label="Progress" className="hidden md:block">
              <ol className="flex items-center gap-6">
                {stepLabels.map((label, index) => {
                  const isCompleted = index < (currentStepIndex ?? 0);
                  const isCurrent = index === (currentStepIndex ?? 0);
                  return (
                    <li key={label} className="flex items-center gap-3">
                      <div
                        className={
                          `w-8 h-8 rounded-full grid place-items-center border text-xs font-semibold ` +
                          (isCompleted
                            ? 'bg-green-600/90 border-green-500 text-white'
                            : isCurrent
                            ? 'bg-blue-600/90 border-blue-500 text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-400')
                        }
                        aria-current={isCurrent ? 'step' : undefined}
                      >
                        {index + 1}
                      </div>
                      <span className={isCurrent ? 'text-white font-medium' : 'text-gray-400'}>
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        {children}
      </main>

      <footer className="mt-10 py-8 border-t border-gray-800/80 text-center text-xs text-gray-500">
        <div className="container mx-auto px-4">
          Built with ❤️ for the Fedimint community
        </div>
      </footer>
    </div>
  );
}


