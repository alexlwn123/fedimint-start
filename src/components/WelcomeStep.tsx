import { ChevronRight } from 'lucide-react';
import StepContainer from './StepContainer';
import fedimintIcon from '../../assets/icon.png';

interface WelcomeStepProps {
  onGetStarted: () => void;
}

export default function WelcomeStep({ onGetStarted }: WelcomeStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <StepContainer
        title="Welcome to Fedimint"
        description="Create your federated ecash mint in a few guided steps."
      >
        <div className="text-center mb-8">
            <div className="w-40 h-40 inline-flex items-center justify-center rounded-xl overflow-hidden">
              <img src={fedimintIcon} alt="Fedimint logo" className="w-full h-full object-contain" />
            </div>
        </div>

          <button
            onClick={onGetStarted}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Get Started
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
      </StepContainer>
    </div>
  );
}