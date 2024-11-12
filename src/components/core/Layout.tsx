import React from 'react';
import { NavigationBar } from './NavigationBar';
import { ProgressTracker } from './ProgressTracker';
import { TutorialContainer } from './TutorialContainer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationBar />
      <div className="flex">
        <ProgressTracker />
        <main className="flex-1">
          <TutorialContainer>
            {children}
          </TutorialContainer>
        </main>
      </div>
    </div>
  );
};