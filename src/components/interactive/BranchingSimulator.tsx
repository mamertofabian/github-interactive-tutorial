import React, { useState } from 'react';

interface Branch {
  name: string;
  commits: string[];
  parent?: string;
}

interface BranchingSimulatorProps {
  initialBranch?: string;
  onBranchCreate?: (branchName: string, fromBranch: string) => void;
  onCommit?: (branch: string, message: string) => void;
  onCheckout?: (branch: string) => void;
}

export const BranchingSimulator: React.FC<BranchingSimulatorProps> = ({
  initialBranch = 'main',
  onBranchCreate,
  onCommit,
  onCheckout,
}) => {
  const [currentBranch, setCurrentBranch] = useState(initialBranch);
  const [branches, setBranches] = useState<Branch[]>([
    { name: initialBranch, commits: [] },
  ]);
  const [newBranchName, setNewBranchName] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  const handleCreateBranch = () => {
    if (newBranchName && !branches.find(b => b.name === newBranchName)) {
      const newBranch: Branch = {
        name: newBranchName,
        commits: [],
        parent: currentBranch,
      };
      setBranches([...branches, newBranch]);
      onBranchCreate?.(newBranchName, currentBranch);
      setNewBranchName('');
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Git Branching Simulator</h3>
      
      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Current Branch:</div>
        <div className="text-white font-mono bg-gray-800 px-3 py-2 rounded">
          {currentBranch}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Create New Branch</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newBranchName}
              onChange={(e) => setNewBranchName(e.target.value)}
              placeholder="Branch name"
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCreateBranch}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Make Commit</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              placeholder="Commit message"
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                if (commitMessage) {
                  onCommit?.(currentBranch, commitMessage);
                  setCommitMessage('');
                }
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Commit
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Available Branches</h4>
        <div className="grid grid-cols-2 gap-2">
          {branches.map((branch) => (
            <div
              key={branch.name}
              onClick={() => {
                setCurrentBranch(branch.name);
                onCheckout?.(branch.name);
              }}
              className={`px-3 py-2 rounded cursor-pointer ${
                branch.name === currentBranch
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {branch.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};