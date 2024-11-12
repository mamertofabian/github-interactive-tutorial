import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface Step {
  id: string;
  description: string;
  content: React.ReactNode;
}

interface VisualizationContainerProps {
  type: 'timeline' | 'diagram' | 'animation';
  title: string;
  description: string;
  steps: Step[];
}

export const VisualizationContainer: React.FC<VisualizationContainerProps> = ({
  type,
  title,
  description,
  steps = []
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentStep === steps.length - 1) {
      setCurrentStep(0);
    }
  };

  useEffect(() => {
    let timer: number | undefined;
    if (isPlaying) {
      timer = window.setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000); // Adjust timing as needed
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isPlaying, currentStep, steps.length]);

  // Early return if no steps
  if (!steps || steps.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="bg-gray-900 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
            <p className="text-gray-300">No visualization steps available.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        {/* Visualization Area */}
        <div className="bg-gray-900 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
          {currentStepData?.content || <p className="text-gray-300">No content available for this step.</p>}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="secondary"
                size="sm"
              >
                Previous
              </Button>
              <Button
                onClick={handlePlayPause}
                variant="primary"
                size="sm"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                variant="secondary"
                size="sm"
              >
                Next
              </Button>
            </div>
            <span className="text-gray-400 text-sm">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>

          {/* Step Description */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-300">
              {currentStepData?.description || 'No description available for this step.'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
