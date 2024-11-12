import React from 'react';

interface TermDefinitionProps {
  term: string;
  definition: string;
}

export const TermDefinition: React.FC<TermDefinitionProps> = ({ term, definition }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <h4 className="text-white font-medium mb-2">{term}</h4>
      <p className="text-gray-300">{definition}</p>
    </div>
  );
};
