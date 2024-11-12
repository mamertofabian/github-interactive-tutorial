import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';

interface ExampleCodeProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
}

export const ExampleCode: React.FC<ExampleCodeProps> = ({
  code,
  language = 'bash',
  title,
  description,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {(title || description) && (
        <div className="p-4 border-b border-gray-700">
          {title && <h4 className="text-white font-semibold mb-1">{title}</h4>}
          {description && <p className="text-gray-300 text-sm">{description}</p>}
        </div>
      )}
      
      <div className="relative">
        <div className="absolute right-2 top-2">
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Copy to clipboard"
          >
            <ClipboardIcon className="h-5 w-5 text-gray-400 hover:text-white" />
          </button>
        </div>
        
        <pre className="bg-gray-900 p-4 overflow-x-auto">
          <code className="text-gray-300 font-mono text-sm">{code}</code>
        </pre>
        
        {language && (
          <div className="absolute bottom-2 right-2">
            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
              {language}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};