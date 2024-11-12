import React, { Suspense as ReactSuspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface SuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const Suspense: React.FC<SuspenseProps> = ({
  children,
  fallback = <LoadingSpinner size="lg" className="p-8" />,
}) => {
  return (
    <ReactSuspense fallback={fallback}>
      {children}
    </ReactSuspense>
  );
}