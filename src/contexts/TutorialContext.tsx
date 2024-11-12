import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  sections: Array<{
    type: 'theory' | 'practice' | 'challenge';
    content: any;
  }>;
}

interface TutorialContextType {
  lessons: Lesson[];
  currentLesson: string | null;
  setCurrentLesson: (lessonId: string | null) => void;
  getLessonById: (id: string) => Lesson | undefined;
  updateProgress: (lessonId: string) => void;
}

const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

export const useTutorialContext = () => {
  const context = useContext(TutorialContext);
  if (context === undefined) {
    throw new Error('useTutorialContext must be used within a TutorialProvider');
  }
  return context;
};

interface TutorialProviderProps {
  children: ReactNode;
}

export const TutorialProvider: React.FC<TutorialProviderProps> = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  
  // Initial lessons data structure
  const [lessons] = useState<Lesson[]>([
    {
      id: 'intro-git',
      title: 'Introduction to Git and GitHub',
      description: 'Learn the basics of version control and GitHub\'s platform',
      duration: '30 mins',
      difficulty: 'Beginner',
      sections: [
        {
          type: 'theory',
          content: {
            title: 'What is Git?',
            description: 'Git is a distributed version control system...',
            // Additional content...
          }
        },
        // Additional sections...
      ]
    },
    {
      id: 'setup-environment',
      title: 'Setting Up Your Environment',
      description: 'Configure Git and create your GitHub account',
      duration: '20 mins',
      difficulty: 'Beginner',
      sections: [
        {
          type: 'practice',
          content: {
            title: 'Installing Git',
            steps: [
              'Download Git from git-scm.com',
              'Run the installer',
              'Verify installation with git --version'
            ]
          }
        },
        // Additional sections...
      ]
    },
    // Additional lessons...
  ]);

  const getLessonById = (id: string) => {
    return lessons.find(lesson => lesson.id === id);
  };

  const updateProgress = (lessonId: string) => {
    // Implementation for updating progress
    // This would typically interact with some form of storage
    console.log(`Progress updated for lesson: ${lessonId}`);
  };

  return (
    <TutorialContext.Provider
      value={{
        lessons,
        currentLesson,
        setCurrentLesson,
        getLessonById,
        updateProgress,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
