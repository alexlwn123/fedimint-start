import React, { useState } from 'react';
import WelcomeStep from './components/WelcomeStep';
import ServerTypeStep from './components/ServerTypeStep';
import OptionsStep from './components/OptionsStep';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {currentStep === 'welcome' && (
          <div className="animate-fade-in">
            <WelcomeStep onGetStarted={handleGetStarted} />
          </div>
        )}

        {currentStep === 'server-type' && (
          <div className="animate-fade-in">
            <ServerTypeStep 
              onSelectType={handleSelectServerType}
              onBack={handleBackToWelcome}
            />
          </div>
        )}

        {currentStep === 'options' && selectedServerType && (
          <div className="animate-fade-in">
            <OptionsStep 
              serverType={selectedServerType}
              onBack={handleBackToServerType}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;