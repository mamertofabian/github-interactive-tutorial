import React, { useState } from 'react';

interface TutorialContainerProps {
  children: React.ReactNode;
}

export const TutorialContainer: React.FC<TutorialContainerProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="p-6 bg-gray-800 rounded-lg m-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Current Progress</h2>
          <p className="text-gray-300">Step {currentStep + 1} of 10</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};