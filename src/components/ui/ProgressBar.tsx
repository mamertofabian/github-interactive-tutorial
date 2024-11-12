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
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
  };

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={clsx('w-full', className)}>
      <div className={clsx('w-full bg-gray-700 rounded-full overflow-hidden', sizes[size])}>
        <div
          className={clsx('transition-all duration-300 ease-in-out', colors[color])}
          style={{ width: `${normalizedProgress}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-gray-400 text-right">
          {normalizedProgress}%
        </div>
      )}
    </div>
  );
}