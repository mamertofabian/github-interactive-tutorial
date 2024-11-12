import React from 'react';
import { FolderIcon } from '@heroicons/react/24/outline';

interface Module {
  title: string;
  lessons: string[];
}

const modules: Module[] = [
  {
    title: 'Module 1: Basics',
    lessons: ['Introduction to Git', 'Setting Up Git']
  },
  {
    title: 'Module 2: Commands',
    lessons: ['Basic Commands', 'Advanced Usage']
  }
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-gray-100 h-screen p-4">
      <h1 className="text-xl font-bold mb-6">Git Tutorial</h1>
      <nav>
        {modules.map((module, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <FolderIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">{module.title}</span>
            </div>
            <ul className="ml-7">
              {module.lessons.map((lesson, lessonIndex) => (
                <li
                  key={lessonIndex}
                  className="py-1 text-gray-300 hover:text-white cursor-pointer"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}