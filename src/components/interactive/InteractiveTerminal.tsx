import React, { useState } from 'react';

interface InteractiveTerminalProps {
  initialCommand?: string;
  onCommandSubmit: (command: string) => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  initialCommand = '',
  onCommandSubmit,
}) => {
  const [command, setCommand] = useState(initialCommand);
  const [history, setHistory] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      onCommandSubmit(command);
      setHistory([...history, command]);
      setCommand('');
    }
  };

  return (
    <div className="bg-gray-950 rounded-lg overflow-hidden">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4 font-mono text-sm">
        {history.map((cmd, index) => (
          <div key={index} className="text-gray-300">$ {cmd}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent text-white focus:outline-none"
            placeholder="Type your command..."
          />
        </form>
      </div>
    </div>
  );
};