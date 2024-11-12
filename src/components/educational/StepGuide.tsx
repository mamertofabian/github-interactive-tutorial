import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Step {
  id: string;
  title: string;
  description: string;
  code?: string;
  isCompleted?: boolean;
}

interface StepGuideProps {
  steps: Step[];
  onStepComplete?: (stepId: string) => void;
}

export const StepGuide: React.FC<StepGuideProps> = ({
  steps,
  onStepComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepComplete = (index: number) => {
    if (index === currentStep && index < steps.length - 1) {
      setCurrentStep(index + 1);
      onStepComplete?.(steps[index].id);
    }
  };

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`bg-gray-800 rounded-lg p-6 ${
            index === currentStep ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${step.isCompleted ? 'bg-green-500/20' : 'bg-gray-700'}
            `}>
              {step.isCompleted ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              ) : (
                <span className="text-gray-300">{index + 1}</span>
              )}
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-gray-300 mb-4">{step.description}</p>
              
              {step.code && (
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-gray-300 font-mono text-sm">
                    {step.code}
                  </code>
                </pre>
              )}
              
              {index === currentStep && !step.isCompleted && (
                <button
                  onClick={() => handleStepComplete(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Complete Step
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};