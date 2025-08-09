import React from 'react';
import { Cloud, Server, ChevronLeft } from 'lucide-react';

interface ServerTypeStepProps {
  onSelectType: (type: 'self-hosted' | 'cloud') => void;
  onBack: () => void;
}

export default function ServerTypeStep({ onSelectType, onBack }: ServerTypeStepProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          Choose Your Hosting Option
        </h1>
        <p className="text-lg text-gray-300">
          Select how you'd like to deploy your fedimint federation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Self Hosted Option */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-900/50 border border-green-500/30 rounded-xl flex items-center justify-center mr-4">
                <Server className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Self Hosted Server</h3>
                <p className="text-sm text-gray-400">Complete control & privacy</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Full control over your infrastructure
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                No recurring hosting fees
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Maximum privacy and security
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Requires technical setup
              </div>
            </div>

            <button
              onClick={() => onSelectType('self-hosted')}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg"
            >
              Choose Self Hosted
            </button>
          </div>
        </div>

        {/* Cloud Hosted Option */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-900/50 border border-blue-500/30 rounded-xl flex items-center justify-center mr-4">
                <Cloud className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Cloud Hosted</h3>
                <p className="text-sm text-gray-400">Quick & managed setup</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Instant deployment in minutes
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Automated backups & updates
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                24/7 monitoring & support
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Monthly subscription required
              </div>
            </div>

            <button
              onClick={() => onSelectType('cloud')}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg"
            >
              Choose Cloud Hosted
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Welcome
        </button>
      </div>
    </div>
  );
}