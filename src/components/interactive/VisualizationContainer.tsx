import React from 'react';

interface Visualization {
  type: string;
  data?: any;
  steps?: string[];
  items?: Array<{
    title: string;
    points: string[];
  }>;
}

interface VisualizationContainerProps {
  visualization: Visualization;
}

export const VisualizationContainer: React.FC<VisualizationContainerProps> = ({
  visualization
}) => {
  const renderTimeline = (data: any) => {
    return (
      <div className="space-y-4">
        {data.points.map((point: any, index: number) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              {index + 1}
            </div>
            <div>
              <h4 className="text-white font-medium">{point.label}</h4>
              <p className="text-gray-300">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderDiagram = (data: any) => {
    return (
      <div className="relative p-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center mb-8">
          {data.center}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data.connections.map((connection: any, index: number) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-center">
              <p className="text-white font-medium">{connection.label}</p>
              <p className="text-gray-300 text-sm">{connection.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderComparison = (items: any) => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {items.map((item: any, index: number) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">{item.title}</h4>
            <ul className="space-y-2">
              {item.points.map((point: string, pointIndex: number) => (
                <li key={pointIndex} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderSteps = (steps: string[]) => {
    return (
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-blue-400 font-medium">{index + 1}.</span>
            <span className="text-gray-300">{step}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (visualization.type) {
      case 'timeline':
        return renderTimeline(visualization.data);
      case 'diagram':
        return renderDiagram(visualization.data);
      case 'comparison':
        return renderComparison(visualization.items || []);
      case 'screenshot':
        return (
          <div className="text-center">
            <p className="text-gray-300">Screenshot visualization placeholder</p>
          </div>
        );
      default:
        if (visualization.steps) {
          return renderSteps(visualization.steps);
        }
        return (
          <div className="text-center">
            <p className="text-gray-300">Unsupported visualization type: {visualization.type}</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      {renderContent()}
    </div>
  );
};
