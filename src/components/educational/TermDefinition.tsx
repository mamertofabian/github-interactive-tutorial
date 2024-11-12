import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface TermDefinitionProps {
  term: string;
  definition: string;
  examples?: string[];
  relatedTerms?: string[];
}

export const TermDefinition: React.FC<TermDefinitionProps> = ({
  term,
  definition,
  examples = [],
  relatedTerms = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="text-blue-400 border-b border-dotted border-blue-400 hover:text-blue-300 flex items-center"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {term}
        <InformationCircleIcon className="h-4 w-4 ml-1" />
      </button>

      {isExpanded && (
        <div className="absolute z-10 mt-2 w-72 bg-gray-800 rounded-lg shadow-lg p-4">
          <h4 className="text-white font-semibold mb-2">{term}</h4>
          <p className="text-gray-300 text-sm mb-3">{definition}</p>
          
          {examples.length > 0 && (
            <div className="mb-3">
              <h5 className="text-gray-400 text-xs font-semibold mb-1">Examples:</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                {examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          )}

          {relatedTerms.length > 0 && (
            <div>
              <h5 className="text-gray-400 text-xs font-semibold mb-1">Related Terms:</h5>
              <div className="flex flex-wrap gap-2">
                {relatedTerms.map((term, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};