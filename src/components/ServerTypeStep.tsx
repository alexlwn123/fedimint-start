import { Cloud, Server, ChevronLeft } from 'lucide-react';
import StepContainer from './StepContainer';
import AccessibleCard from './AccessibleCard';

interface ServerTypeStepProps {
  onSelectType: (type: 'self-hosted' | 'cloud') => void;
  onBack: () => void;
}

export default function ServerTypeStep({ onSelectType, onBack }: ServerTypeStepProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <StepContainer
        title="Choose Your Hosting Option"
        description="Select how you'd like to deploy your fedimint federation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AccessibleCard onClick={() => onSelectType('self-hosted')} title="Self Hosted Server" className="hover:border-green-500/30">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-green-900/50 border border-green-500/30 rounded-xl flex items-center justify-center mr-4">
                  <Server className="w-7 h-7 text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Self Hosted Server</h3>
                  <p className="text-base text-gray-400">Complete control & privacy</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Full control over your infrastructure</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>No recurring hosting fees</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Maximum privacy and security</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Requires technical setup</div>
              </div>
              <div className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg text-center">Choose Self Hosted</div>
            </div>
          </AccessibleCard>

          <AccessibleCard onClick={() => onSelectType('cloud')} title="Cloud Hosted" className="hover:border-blue-500/30">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-900/50 border border-blue-500/30 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="w-7 h-7 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cloud Hosted</h3>
                  <p className="text-base text-gray-400">Quick & managed setup</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Instant deployment in minutes</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Automated backups & updates</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>24/7 monitoring & support</div>
                <div className="flex items-center text-base text-gray-300"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Monthly subscription required</div>
              </div>
              <div className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg text-center">Choose Cloud Hosted</div>
            </div>
          </AccessibleCard>
        </div>

        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            Back to Welcome
          </button>
        </div>
      </StepContainer>
    </div>
  );
}