import React, { useState } from 'react';

interface Command {
  command: string;
  description: string;
  expectedOutput?: string;
}

interface CommandExecutorProps {
  availableCommands: Command[];
  onExecute: (command: string) => void;
  showHints?: boolean;
}

export const CommandExecutor: React.FC<CommandExecutorProps> = ({
  availableCommands,
  onExecute,
  showHints = true,
}) => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      onExecute(command);
      setHistory([...history, command]);
      setCommand('');
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Git Command Terminal</h3>
        <div className="bg-gray-950 rounded p-4 font-mono">
          {history.map((cmd, index) => (
            <div key={index} className="text-gray-300 mb-1">$ {cmd}</div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent text-white focus:outline-none"
              placeholder="Enter git command..."
            />
          </form>
        </div>
      </div>
      {showHints && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Available Commands:</h4>
          <div className="grid grid-cols-2 gap-2">
            {availableCommands.map((cmd) => (
              <div
                key={cmd.command}
                className="text-sm text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setCommand(cmd.command)}
              >
                {cmd.command}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};