import { ChevronLeft, Terminal, Package, Layers, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import StepContainer from './StepContainer';
import AccessibleCard from './AccessibleCard';

interface OptionsStepProps {
  serverType: 'self-hosted' | 'cloud';
  onBack: () => void;
}

export default function OptionsStep({ serverType, onBack }: OptionsStepProps) {
  type CloudOption = {
    name: string;
    description: string;
    icon: LucideIcon;
    price: string;
    features: string[];
  };

  type SelfHostedOption = {
    name: string;
    description: string;
    icon: LucideIcon;
    difficulty: 'Beginner' | 'Advanced' | 'Expert';
    features: string[];
  };

  type Option = CloudOption | SelfHostedOption;

  const isSelfHosted = (option: Option): option is SelfHostedOption => 'difficulty' in option;
  const isCloud = (option: Option): option is CloudOption => 'price' in option;

  const cloudOptions: CloudOption[] = [
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

  const selfHostedOptions: SelfHostedOption[] = [
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
      name: 'Docker',
      description: 'Run a Fedimint Guardian server in a Docker container',
      icon: Database,
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

  const options: Option[] = serverType === 'cloud' ? cloudOptions : selfHostedOptions;

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
        <div
          className={
            `grid grid-cols-1 md:grid-cols-2 ${serverType === 'cloud' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-8 mb-8 items-stretch`
          }
        >
          {options.map((option) => (
            <AccessibleCard key={option.name} title={option.name} className="h-full">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gray-700 border border-gray-600 rounded-xl flex items-center justify-center mr-4">
                    <option.icon className="w-7 h-7 text-gray-300" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{option.name}</h3>
                  {serverType === 'self-hosted' && isSelfHosted(option) && (
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        option.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-400 border border-green-500/30' :
                        option.difficulty === 'Advanced' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-900/50 text-red-400 border border-red-500/30'
                      }`}>
                        {option.difficulty}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-base text-gray-400 mb-4">{option.description}</p>

                {serverType === 'cloud' && isCloud(option) && (
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-white mb-2">
                      {option.price}
                    </div>
                  </div>
                )}

                <div className="space-y-3 flex-1">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-base text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
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