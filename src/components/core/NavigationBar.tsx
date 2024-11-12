import React from 'react';
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useTutorialContext } from '../../contexts/TutorialContext';

export const NavigationBar: React.FC = () => {
  const { setCurrentSection, content } = useTutorialContext();

  const handleHomeClick = () => {
    // Navigate to the first section
    if (content.sections.length > 0) {
      setCurrentSection(content.sections[0].id);
    }
  };

  const handleLessonsClick = () => {
    // Navigate to the lesson selection section
    if (content.sections.length > 0) {
      setCurrentSection('lesson-selection');
    }
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={handleHomeClick}
            className="flex items-center hover:opacity-80"
          >
            <HomeIcon className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Git Tutorial</span>
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={handleLessonsClick}
              className="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <BookOpenIcon className="h-5 w-5 mr-1" />
              Lessons
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
