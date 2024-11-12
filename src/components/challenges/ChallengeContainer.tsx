import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ValidationChecker } from './ValidationChecker';

interface ChallengeStep {
  instruction: string;
  validation: {
    command?: string;
    expected?: string;
    pattern?: string;
    type?: string;
    element?: string;
  };
}

interface Challenge {
  title: string;
  description: string;
  timeLimit?: number;
  setup?: {
    files?: Record<string, string>;
    branches?: Record<string, Record<string, string>>;
  };
  steps: ChallengeStep[];
}

interface ChallengeContainerProps {
  challenge: Challenge;
  onComplete: () => void;
}

export const ChallengeContainer: React.FC<ChallengeContainerProps> = ({
  challenge,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const step = challenge.steps[currentStep];

  const handleValidationComplete = (isValid: boolean) => {
    setIsValidating(false);

    if (isValid) {
      setFeedback('Correct! Moving to next step...');
      setTimeout(() => {
        if (currentStep === challenge.steps.length - 1) {
          // All steps completed
          onComplete();
        } else {
          setCurrentStep(prev => prev + 1);
          setUserInput('');
          setFeedback('');
        }
      }, 1500);
    } else {
      setFeedback('Not quite right. Please try again.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">{challenge.title}</h2>
        <p className="text-gray-300 mb-6">{challenge.description}</p>

        {challenge.timeLimit && (
          <div className="mb-4 text-yellow-300">
            Time Limit: {Math.floor(challenge.timeLimit / 60)} minutes
          </div>
        )}

        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Step {currentStep + 1} of {challenge.steps.length}
          </h3>
          <p className="text-gray-300 mb-4">{step.instruction}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full bg-gray-900 text-white p-4 rounded-lg font-mono"
                rows={4}
                placeholder="Enter your solution here..."
                disabled={isValidating}
              />
            </div>

            <div className="flex justify-between items-center">
              <Button 
                type="submit" 
                variant="primary"
                disabled={isValidating}
              >
                {isValidating ? 'Validating...' : 'Submit'}
              </Button>
            </div>
          </form>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${
              feedback.includes('Correct') 
                ? 'bg-green-800 text-green-100'
                : feedback.includes('Error')
                  ? 'bg-red-800 text-red-100'
                  : 'bg-blue-800 text-blue-100'
            }`}>
              {feedback}
            </div>
          )}
        </div>
      </div>

      {isValidating && (
        <ValidationChecker
          config={step.validation}
          input={userInput}
          onValidationComplete={handleValidationComplete}
        />
      )}
    </div>
  );
};
