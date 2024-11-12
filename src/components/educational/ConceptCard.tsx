import React from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

interface ConceptCardProps {
  title: string;
  description: string;
  examples?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  description,
  examples = [],
  difficulty = 'beginner',
}) => {
  const difficultyColors = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-500/10 rounded-lg p-2">
          <LightBulbIcon className="h-6 w-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <span className={`text-sm ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{description}</p>
          {examples.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
              <ul className="space-y-2">
                {examples.map((example, index) => (
                  <li key={index} className="text-gray-300">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};