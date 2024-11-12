import React from 'react';

interface VisualizationContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const VisualizationContainer: React.FC<VisualizationContainerProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-gray-300 mb-4">{description}</p>
      )}
      <div className="bg-gray-900 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};