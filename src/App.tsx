import { useMemo, useState } from 'react';
import WelcomeStep from './components/WelcomeStep';
import ServerTypeStep from './components/ServerTypeStep';
import OptionsStep from './components/OptionsStep';
import Layout from './components/Layout';

type Step = 'welcome' | 'server-type' | 'options';
type ServerType = 'self-hosted' | 'cloud' | null;

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [selectedServerType, setSelectedServerType] = useState<ServerType>(null);

  const handleGetStarted = () => {
    setCurrentStep('server-type');
  };

  const handleSelectServerType = (type: 'self-hosted' | 'cloud') => {
    setSelectedServerType(type);
    setCurrentStep('options');
  };

  const handleBackToWelcome = () => {
    setCurrentStep('welcome');
    setSelectedServerType(null);
  };

  const handleBackToServerType = () => {
    setCurrentStep('server-type');
  };

  const handleHomeClick = () => {
    setCurrentStep('welcome');
    setSelectedServerType(null);
  };

  const stepLabels: string[] = useMemo(() => ['Welcome', 'Hosting', 'Options'], []);
  const currentStepIndex: number = useMemo(() => {
    if (currentStep === 'welcome') return 0;
    if (currentStep === 'server-type') return 1;
    return 2;
  }, [currentStep]);

  const showHeader = currentStep !== 'welcome';

  return (
    <Layout stepLabels={stepLabels} currentStepIndex={currentStepIndex} onHomeClick={handleHomeClick} showHeader={showHeader}>
      {currentStep === 'welcome' && <WelcomeStep onGetStarted={handleGetStarted} />}

      {currentStep === 'server-type' && (
        <ServerTypeStep onSelectType={handleSelectServerType} onBack={handleBackToWelcome} />
      )}

      {currentStep === 'options' && selectedServerType && (
        <OptionsStep serverType={selectedServerType} onBack={handleBackToServerType} />
      )}
    </Layout>
  );
}

export default App;