import React from 'react';
import { VisualizationContainer } from '../interactive/VisualizationContainer';

interface InstallStep {
  os: string;
  steps: string[];
}

interface Visualization {
  type: string;
  data?: any;
  steps?: string[];
  items?: Array<{
    title: string;
    points: string[];
  }>;
}

interface StepGuideProps {
  title: string;
  steps?: string[];
  instructions?: InstallStep[];
  visualization?: Visualization;
}

export const StepGuide: React.FC<StepGuideProps> = ({
  title,
  steps,
  instructions,
  visualization
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>

      {instructions && (
        <div className="space-y-6 mb-6">
          {instructions.map((instruction, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">For {instruction.os}</h4>
              <ol className="list-decimal list-inside space-y-2">
                {instruction.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-gray-300">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {steps && (
        <div className="space-y-2 mb-6">
          <ol className="list-decimal list-inside space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="text-gray-300">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {visualization && (
        <div className="mt-6">
          <VisualizationContainer visualization={visualization} />
        </div>
      )}
    </div>
  );
};
