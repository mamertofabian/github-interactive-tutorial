import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
  progress: number;
  color?: 'blue' | 'green' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'blue',
  size = 'md',
  showLabel = false,
  className,
}) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
  };

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={clsx('w-full flex items-center gap-3', className)}>
      <div className="flex-grow">
        <div className={clsx('w-full bg-gray-600 rounded-full overflow-hidden border border-gray-500', sizes[size])}>
          <div
            className={clsx('transition-all duration-300 ease-in-out h-full', colors[color])}
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>
      </div>
      {showLabel && (
        <div className="text-sm text-gray-400 whitespace-nowrap">
          {normalizedProgress}%
        </div>
      )}
    </div>
  );
}
