import React from 'react';
import { BranchVisualizer } from './BranchVisualizer';
import { ConflictResolver } from './ConflictResolver';

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

  const renderBranchFlow = (data: any) => {
    const branches = [
      {
        name: data.mainBranch,
        commits: ['Initial commit'],
        isActive: true
      },
      ...data.branches.map((branch: any) => ({
        name: branch.name,
        commits: branch.changes,
        isActive: false
      }))
    ];

    return (
      <div className="space-y-6">
        <BranchVisualizer
          branches={branches}
          onBranchSelect={(branchName) => {
            console.log(`Selected branch: ${branchName}`);
          }}
        />
        <div className="mt-4">
          {data.branches.map((branch: any, index: number) => (
            <div key={index} className="mt-4 border-l-2 border-blue-500 pl-4">
              <h5 className="text-blue-400 font-medium">Branch: {branch.name}</h5>
              <p className="text-gray-300 text-sm">Starting from: {branch.startPoint}</p>
              <div className="mt-2 space-y-1">
                {branch.changes.map((change: string, changeIndex: number) => (
                  <div key={changeIndex} className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">+</span>
                    {change}
                  </div>
                ))}
              </div>
              {branch.mergeBack && (
                <div className="mt-2 text-green-400 text-sm">
                  ↩ Merges back to {data.mainBranch}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderConflictExample = (data: any) => {
    const conflicts = [
      {
        path: 'example.js',
        currentChanges: data.yourChange,
        incomingChanges: data.theirChange
      }
    ];

    return (
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">Original Code</h4>
          <pre className="bg-gray-800 p-2 rounded text-gray-300 font-mono text-sm">
            {data.original}
          </pre>
        </div>
        <ConflictResolver
          conflicts={conflicts}
          onResolve={(resolutions) => {
            console.log('Resolved conflicts:', resolutions);
          }}
        />
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
      case 'branchFlow':
        return renderBranchFlow(visualization.data);
      case 'conflictExample':
        return renderConflictExample(visualization.data);
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
