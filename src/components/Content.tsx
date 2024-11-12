import React from 'react';
import { Terminal } from './Terminal';

export const Content: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-800 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Introduction to Git</h1>
        <p className="text-gray-300 mb-8">
          Learn the fundamentals of version control and why Git is essential for modern development.
        </p>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Git Repository Timeline</h2>
          <div className="h-40 bg-gray-800 rounded-lg"></div>
        </div>

        <Terminal 
          command="git init"
          output="Initialized empty Git repository in /project/.git/"
        />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Practice Challenge</h2>
          <p className="text-gray-300 mb-4">
            Create your first Git repository and make an initial commit.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
}