import React from 'react';
import { VisualizationContainer } from '../interactive/VisualizationContainer';

interface Visualization {
  type: string;
  data?: any;
  steps?: string[];
  items?: Array<{
    title: string;
    points: string[];
  }>;
}

interface ConceptCardProps {
  title: string;
  description: string;
  examples?: string[];
  keyPoints?: string[];
  visualization?: Visualization;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  description,
  examples = [],
  keyPoints = [],
  visualization
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>

        {visualization && (
          <div className="mb-6">
            <VisualizationContainer visualization={visualization} />
          </div>
        )}

        {keyPoints.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Key Points</h3>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {examples.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Examples</h3>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg text-gray-300 font-mono text-sm"
                >
                  {example}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
