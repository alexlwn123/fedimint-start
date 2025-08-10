import type { ReactNode } from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';
import fedimintIcon from '../../assets/icon.png';

type LayoutProps = {
  children: ReactNode;
  stepLabels?: string[];
  currentStepIndex?: number;
  onHomeClick?: () => void;
  showHeader?: boolean;
};

export default function Layout({ children, stepLabels, currentStepIndex = 0, onHomeClick, showHeader = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {showHeader && (
        <header className="border-b border-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={onHomeClick}
              className="flex items-center gap-3 group rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Go to start"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-blue-400/40 transition-colors">
                <img src={fedimintIcon} alt="Fedimint logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <span className="block text-white font-semibold leading-tight group-hover:text-white">Fedimint Start</span>
                <span className="block text-sm text-gray-400 leading-tight group-hover:text-gray-300">Create your federated ecash mint</span>
              </div>
            </button>

            {/* {stepLabels && stepLabels.length > 0 && (
              <nav aria-label="Progress" className="hidden md:block">
                <ol className="flex items-center gap-6">
                  {stepLabels.map((label, index) => {
                    const isCompleted = index < (currentStepIndex ?? 0);
                    const isCurrent = index === (currentStepIndex ?? 0);
                    return (
                      <li key={label} className="flex items-center gap-3">
                        <div
                          className={
                            `w-8 h-8 rounded-full grid place-items-center border text-sm font-semibold ` +
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
            )} */}
          </div>
        </header>
      )}

      <main className="container mx-auto px-4 py-10">
        {children}
      </main>

      <footer className="mt-10 py-8 border-t border-gray-800/80 text-sm text-gray-500">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div>Built with ❤️ for the Fedimint community</div>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://github.com/fedimint/fedimint"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-md p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://chat.fedimint.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="rounded-md p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <MessageSquare className="w-5 h-5 text-gray-400 hover:text-white transition-colors" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/fedimint"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="rounded-md p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}


