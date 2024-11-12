import React from 'react';
import { NavigationBar } from './NavigationBar';
import { ProgressTracker } from './ProgressTracker';
import { TutorialContainer } from './TutorialContainer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationBar />
      <div className="flex">
        <ProgressTracker />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
