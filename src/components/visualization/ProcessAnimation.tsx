import React, { useState } from 'react';

interface AnimationStep {
  id: string;
  title: string;
  description: string;
}

interface ProcessAnimationProps {
  steps: AnimationStep[];
  speed?: number;
  autoStart?: boolean;
}

export const ProcessAnimation: React.FC<ProcessAnimationProps> = ({
  steps = [],
  autoStart = false,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoStart);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="bg-gray-900 rounded min-h-[200px] p-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Process Animation Placeholder</p>
          {steps[currentStep] && (
            <div className="text-white">
              <h4 className="font-semibold">{steps[currentStep].title}</h4>
              <p className="text-gray-300 mt-2">{steps[currentStep].description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setCurrentStep(0)}
        >
          Reset
        </button>
      </div>
      <div className="mt-4 bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
