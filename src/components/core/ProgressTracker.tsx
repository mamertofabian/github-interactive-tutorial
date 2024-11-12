import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = [
  { id: 1, name: 'Git Basics', completed: true },
  { id: 2, name: 'Repositories', completed: true },
  { id: 3, name: 'Commits', completed: false },
  { id: 4, name: 'Branches', completed: false },
  { id: 5, name: 'Merging', completed: false },
];

export const ProgressTracker: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 p-4 min-h-screen">
      <h2 className="text-lg font-semibold text-white mb-4">Your Progress</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center space-x-3 text-gray-300"
          >
            <CheckCircleIcon
              className={`h-5 w-5 ${
                step.completed ? 'text-green-500' : 'text-gray-600'
              }`}
            />
            <span className={step.completed ? 'text-white' : ''}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};