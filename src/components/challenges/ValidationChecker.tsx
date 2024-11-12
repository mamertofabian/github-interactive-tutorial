import React from 'react';
import { CheckCircleIcon, XCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';

interface Check {
  id: string;
  label: string;
  status: 'success' | 'error' | 'pending';
}

interface ValidationCheckerProps {
  checks: Check[];
}

export const ValidationChecker: React.FC<ValidationCheckerProps> = ({ checks }) => {
  const getStatusIcon = (status: Check['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      case 'error':
        return <XCircleIcon className="h-6 w-6 text-red-500" />;
      default:
        return <MinusCircleIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-2">
      {checks.map((check) => (
        <div
          key={check.id}
          className="flex items-center space-x-3 bg-gray-900 p-3 rounded-lg"
        >
          {getStatusIcon(check.status)}
          <span className="text-gray-300">{check.label}</span>
        </div>
      ))}
    </div>
  );
};