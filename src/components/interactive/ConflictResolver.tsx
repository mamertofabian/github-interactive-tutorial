import React, { useState } from 'react';

interface ConflictFile {
  path: string;
  currentChanges: string;
  incomingChanges: string;
}

interface ConflictResolverProps {
  conflicts: ConflictFile[];
  onResolve: (resolutions: { [path: string]: string }) => void;
}

export const ConflictResolver: React.FC<ConflictResolverProps> = ({
  conflicts,
  onResolve,
}) => {
  const [resolutions, setResolutions] = useState<{ [path: string]: string }>({});

  const handleResolution = (path: string, choice: 'current' | 'incoming' | 'both') => {
    const conflict = conflicts.find(c => c.path === path);
    if (!conflict) return;

    let resolution = '';
    switch (choice) {
      case 'current':
        resolution = conflict.currentChanges;
        break;
      case 'incoming':
        resolution = conflict.incomingChanges;
        break;
      case 'both':
        resolution = `${conflict.currentChanges}\n${conflict.incomingChanges}`;
        break;
    }

    setResolutions({ ...resolutions, [path]: resolution });
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Merge Conflicts</h3>
      <div className="space-y-4">
        {conflicts.map((conflict) => (
          <div key={conflict.path} className="bg-gray-800 rounded p-4">
            <h4 className="text-white font-mono mb-2">{conflict.path}</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-950 p-2 rounded">
                <div className="text-green-400 text-sm mb-1">Current Changes</div>
                <pre className="text-gray-300 text-sm">{conflict.currentChanges}</pre>
              </div>
              <div className="bg-gray-950 p-2 rounded">
                <div className="text-blue-400 text-sm mb-1">Incoming Changes</div>
                <pre className="text-gray-300 text-sm">{conflict.incomingChanges}</pre>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleResolution(conflict.path, 'current')}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                Keep Current
              </button>
              <button
                onClick={() => handleResolution(conflict.path, 'incoming')}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                Keep Incoming
              </button>
              <button
                onClick={() => handleResolution(conflict.path, 'both')}
                className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
              >
                Keep Both
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => onResolve(resolutions)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Resolve Conflicts
      </button>
    </div>
  );
};