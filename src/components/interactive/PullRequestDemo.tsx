import React, { useState } from 'react';

interface PullRequest {
  title: string;
  description: string;
  sourceBranch: string;
  targetBranch: string;
  files: Array<{
    path: string;
    changes: string;
  }>;
}

interface PullRequestDemoProps {
  availableBranches: string[];
  onSubmit: (pr: PullRequest) => void;
}

export const PullRequestDemo: React.FC<PullRequestDemoProps> = ({
  availableBranches,
  onSubmit,
}) => {
  const [pullRequest, setPullRequest] = useState<PullRequest>({
    title: '',
    description: '',
    sourceBranch: '',
    targetBranch: 'main',
    files: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(pullRequest);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Create Pull Request</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Title
          </label>
          <input
            type="text"
            value={pullRequest.title}
            onChange={(e) => setPullRequest({ ...pullRequest, title: e.target.value })}
            className="w-full bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter PR title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Description
          </label>
          <textarea
            value={pullRequest.description}
            onChange={(e) => setPullRequest({ ...pullRequest, description: e.target.value })}
            className="w-full bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            placeholder="Describe your changes..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Source Branch
            </label>
            <select
              value={pullRequest.sourceBranch}
              onChange={(e) => setPullRequest({ ...pullRequest, sourceBranch: e.target.value })}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select branch</option>
              {availableBranches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Target Branch
            </label>
            <select
              value={pullRequest.targetBranch}
              onChange={(e) => setPullRequest({ ...pullRequest, targetBranch: e.target.value })}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {availableBranches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Pull Request
          </button>
        </div>
      </form>
    </div>
  );
};