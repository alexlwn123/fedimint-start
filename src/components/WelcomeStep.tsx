import React from 'react';
import { ChevronRight, Shield } from 'lucide-react';

interface WelcomeStepProps {
  onGetStarted: () => void;
}

export default function WelcomeStep({ onGetStarted }: WelcomeStepProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-6">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Fedimint
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Create your own federated ecash mint in just a few simple steps. 
        </p>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/50 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-400 font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-200">Choose Hosting</h3>
            <p className="text-sm text-gray-400">Self-hosted or cloud</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/50 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-400 font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-200">Select Platform</h3>
            <p className="text-sm text-gray-400">Pick your setup method</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/50 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-400 font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-200">Deploy</h3>
            <p className="text-sm text-gray-400">Launch your federation</p>
          </div>
        </div> */}

        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg shadow-lg"
        >
          Get Started
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}