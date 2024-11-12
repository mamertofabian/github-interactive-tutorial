import React from 'react';
import { Timer } from './Timer';
import { ValidationChecker } from './ValidationChecker';
import { FeedbackDisplay } from './FeedbackDisplay';

interface ChallengeContainerProps {
  title: string;
  description: string;
  timeLimit?: number;
  children: React.ReactNode;
  onComplete?: () => void;
}

export const ChallengeContainer: React.FC<ChallengeContainerProps> = ({
  title,
  description,
  timeLimit,
  children,
  onComplete,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-gray-300 mt-1">{description}</p>
        </div>
        {timeLimit && <Timer duration={timeLimit} onComplete={onComplete} />}
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        {children}
      </div>

      <div className="space-y-4">
        <ValidationChecker
          checks={[
            { id: 'check1', label: 'Repository initialized', status: 'pending' },
            { id: 'check2', label: 'First commit made', status: 'pending' },
          ]}
        />
        <FeedbackDisplay />
      </div>
    </div>
  );
};