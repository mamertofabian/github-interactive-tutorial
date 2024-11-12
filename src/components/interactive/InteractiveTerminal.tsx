import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface Command {
  command: string;
  description: string;
  expectedOutput?: string;
}

interface InteractiveTerminalProps {
  title: string;
  description: string;
  commands: Command[];
  onComplete: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  title,
  description,
  commands = [],
  onComplete
}) => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commands || commands.length === 0 || currentStep >= commands.length) {
      return;
    }

    const trimmedCommand = currentCommand.trim();
    const expectedCommand = commands[currentStep].command;
    
    setCommandHistory([...commandHistory, trimmedCommand]);
    
    if (trimmedCommand === expectedCommand) {
      // Successful command
      setOutputHistory([
        ...outputHistory,
        commands[currentStep].expectedOutput || 'Command executed successfully.'
      ]);
      
      if (currentStep === commands.length - 1) {
        // All commands completed
        onComplete();
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Incorrect command
      setOutputHistory([
        ...outputHistory,
        `Error: Expected "${expectedCommand}". Try again.`
      ]);
    }
    
    setCurrentCommand('');
  };

  // Early return if no commands
  if (!commands || commands.length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="p-4">
          <p className="text-gray-300">No commands available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Terminal Output */}
      <div className="p-4 font-mono text-sm">
        <div className="bg-black rounded-lg p-4 h-64 overflow-y-auto">
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-2">
              <div className="text-green-400">$ {cmd}</div>
              {outputHistory[index] && (
                <div className="text-gray-300 whitespace-pre-wrap">
                  {outputHistory[index]}
                </div>
              )}
            </div>
          ))}
          
          {/* Current command prompt */}
          <div className="flex items-center text-green-400">
            <span>$&nbsp;</span>
            <form onSubmit={handleCommandSubmit} className="flex-1">
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                className="w-full bg-transparent outline-none"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="p-4 border-t border-gray-700">
        <h4 className="text-sm font-semibold text-white mb-2">Current Task</h4>
        <p className="text-gray-300 text-sm mb-4">
          {currentStep < commands.length ? commands[currentStep].description : 'All tasks completed!'}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Step {currentStep + 1} of {commands.length}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              if (currentStep < commands.length) {
                setCurrentCommand(commands[currentStep].command);
              }
            }}
          >
            Show Command
          </Button>
        </div>
      </div>
    </div>
  );
};
