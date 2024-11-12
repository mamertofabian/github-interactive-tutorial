import React from 'react';
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { ProgressBar } from '../ui/ProgressBar';

export const NavigationBar: React.FC = () => {
  const { setCurrentSection, content, completedSections } = useTutorialContext();
  const progress = Math.round((completedSections.size / content.sections.length) * 100);

  const handleHomeClick = () => {
    // Navigate to the first section
    if (content.sections.length > 0) {
      setCurrentSection(content.sections[0].id);
    }
  };

  const handleLessonsClick = () => {
    // Navigate to the first section, same as home
    if (content.sections.length > 0) {
      setCurrentSection(content.sections[0].id);
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-14">
          <button 
            onClick={handleHomeClick}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <HomeIcon className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-lg font-semibold text-white">Git Tutorial</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-48">
              <ProgressBar progress={progress} color="blue" size="sm" showLabel />
            </div>
            <button 
              onClick={handleLessonsClick}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <BookOpenIcon className="h-5 w-5" />
              <span>Lessons</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
