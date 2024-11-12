import React from 'react';

interface Branch {
  name: string;
  commits: string[];
  isActive: boolean;
}

interface BranchVisualizerProps {
  branches: Branch[];
  onBranchSelect: (branchName: string) => void;
}

export const BranchVisualizer: React.FC<BranchVisualizerProps> = ({
  branches,
  onBranchSelect,
}) => {
  return (
    <div className="space-y-4">
      {branches.map((branch) => (
        <div
          key={branch.name}
          className={`p-4 rounded-lg cursor-pointer transition-colors ${
            branch.isActive ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
          onClick={() => onBranchSelect(branch.name)}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold">{branch.name}</h4>
            <span className="text-gray-300 text-sm">
              {branch.commits.length} commits
            </span>
          </div>
          <div className="mt-2 flex space-x-2">
            {branch.commits.map((commit) => (
              <div
                key={commit}
                className="w-2 h-2 rounded-full bg-gray-400"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};