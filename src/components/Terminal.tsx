import React from 'react';

interface TerminalProps {
  command: string;
  output: string;
}

export const Terminal: React.FC<TerminalProps> = ({ command, output }) => {
  return (
    <div className="bg-gray-950 rounded-lg overflow-hidden">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex">
          <span className="text-green-400">$</span>
          <span className="text-white ml-2">{command}</span>
        </div>
        <div className="text-gray-300 mt-1">{output}</div>
      </div>
    </div>
  );
}