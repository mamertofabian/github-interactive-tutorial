import React from 'react';

interface CommitStage {
  name: string;
  description: string;
  isComplete: boolean;
}

interface CommitFlowProps {
  stages: CommitStage[];
  currentStage: number;
}

export const CommitFlow: React.FC<CommitFlowProps> = ({
  stages,
  currentStage,
}) => {
  return (
    <div className="space-y-6">
      {stages.map((stage, index) => (
        <div
          key={stage.name}
          className={`relative pl-8 ${
            index !== stages.length - 1 ? 'pb-6 border-l-2 border-gray-700' : ''
          }`}
        >
          <div
            className={`absolute left-0 w-4 h-4 rounded-full -translate-x-1/2 ${
              stage.isComplete
                ? 'bg-green-500'
                : index === currentStage
                ? 'bg-blue-500'
                : 'bg-gray-700'
            }`}
          ></div>
          <h4 className="text-white font-semibold mb-1">{stage.name}</h4>
          <p className="text-gray-300 text-sm">{stage.description}</p>
        </div>
      ))}
    </div>
  );
};