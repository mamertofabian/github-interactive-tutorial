import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface FeedbackDisplayProps {
  message?: string;
  type?: 'success' | 'error' | 'info';
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
  message = 'Complete the challenge to see feedback',
  type = 'info',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500/10';
      case 'error':
        return 'bg-red-500/10';
      default:
        return 'bg-blue-500/10';
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-green-500/20';
      case 'error':
        return 'border-red-500/20';
      default:
        return 'border-blue-500/20';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${getBgColor()} ${getBorderColor()} border rounded-lg p-4`}
    >
      <div className="flex items-start">
        {getIcon()}
        <div className="ml-3 flex-1">
          <p className="text-white">{message}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};