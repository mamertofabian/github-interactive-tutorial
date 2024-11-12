import React from 'react';
import { HomeIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <HomeIcon className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Git Tutorial</span>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-white">
              <BookOpenIcon className="h-5 w-5 mr-1" />
              Lessons
            </button>
            <button className="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-white">
              <AcademicCapIcon className="h-5 w-5 mr-1" />
              Progress
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};