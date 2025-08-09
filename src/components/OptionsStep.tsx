import { ChevronLeft, Terminal, Package, Link as Linux, Layers } from 'lucide-react';
import StepContainer from './StepContainer';
import AccessibleCard from './AccessibleCard';

interface OptionsStepProps {
  serverType: 'self-hosted' | 'cloud';
  onBack: () => void;
}

export default function OptionsStep({ serverType, onBack }: OptionsStepProps) {
  const cloudOptions = [
    {
      name: 'AWS',
      description: 'Deploy on Amazon Web Services',
      icon: Package,
      price: 'Starting at $49/month',
      features: ['Global infrastructure', 'Auto-scaling', 'Enterprise support']
    },
    {
      name: 'DigitalOcean',
      description: 'Simple cloud computing',
      icon: Package,
      price: 'Starting at $29/month',
      features: ['Developer-friendly', 'Predictable pricing', 'SSD storage']
    },
    {
      name: 'Google Cloud',
      description: 'Deploy on Google Cloud Platform',
      icon: Package,
      price: 'Starting at $39/month',
      features: ['Advanced AI/ML', 'Global network', 'Pay-as-you-go']
    }
  ];

  const selfHostedOptions = [
    {
      name: 'Start9',
      description: 'Personal server OS for self-hosting',
      icon: Package,
      difficulty: 'Beginner',
      features: ['One-click install', 'Web interface', 'Automatic updates']
    },
    {
      name: 'Umbrel',
      description: 'Personal server dashboard',
      icon: Layers,
      difficulty: 'Beginner',
      features: ['App store', 'Beautiful UI', 'Bitcoin-focused']
    },
    {
      name: 'Linux',
      description: 'Direct installation on Linux server',
      icon: Linux,
      difficulty: 'Advanced',
      features: ['Maximum flexibility', 'Command line', 'Custom setup']
    },
    {
      name: 'Nix',
      description: 'Declarative package manager',
      icon: Terminal,
      difficulty: 'Expert',
      features: ['Reproducible builds', 'Rollbacks', 'Functional approach']
    }
  ];

  const options = serverType === 'cloud' ? cloudOptions : selfHostedOptions;

  return (
    <div className="max-w-6xl mx-auto">
      <StepContainer
        title={serverType === 'cloud' ? 'Choose Cloud Provider' : 'Choose Platform'}
        description={
          serverType === 'cloud'
            ? 'Select your preferred cloud hosting provider'
            : "Select how you'd like to install and manage your federation"
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {options.map((option) => (
            <AccessibleCard key={option.name} title={option.name}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 border border-gray-600 rounded-xl flex items-center justify-center mr-3">
                    <option.icon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{option.name}</h3>
                    {serverType === 'self-hosted' && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        (option as any).difficulty === 'Beginner' ? 'bg-green-900/50 text-green-400 border border-green-500/30' :
                        (option as any).difficulty === 'Advanced' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-900/50 text-red-400 border border-red-500/30'
                      }`}>
                        {(option as any).difficulty}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4">{option.description}</p>

                {serverType === 'cloud' && (
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-white mb-2">
                      {(option as any).price}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  {serverType === 'cloud' ? 'Deploy Now' : 'Get Instructions'}
                </button>
              </div>
            </AccessibleCard>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            Back to Hosting Options
          </button>
        </div>
      </StepContainer>
    </div>
  );
}