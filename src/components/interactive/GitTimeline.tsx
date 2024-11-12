import React from 'react';

interface Commit {
  id: string;
  message: string;
  author: string;
  timestamp: string;
}

interface GitTimelineProps {
  commits: Commit[];
}

export const GitTimeline: React.FC<GitTimelineProps> = ({ commits }) => {
  return (
    <div className="space-y-4">
      {commits.map((commit) => (
        <div
          key={commit.id}
          className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg"
        >
          <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="text-white font-mono">{commit.id.slice(0, 7)}</h4>
              <span className="text-gray-400 text-sm">{commit.timestamp}</span>
            </div>
            <p className="text-gray-300 mt-1">{commit.message}</p>
            <p className="text-gray-400 text-sm mt-1">by {commit.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};