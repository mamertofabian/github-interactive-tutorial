import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useUserContext } from './UserContext';

interface Progress {
  completedLessons: string[];
  totalLessons: number;
  nextLesson?: {
    id: string;
    title: string;
  };
}

interface ProgressContextType {
  progress: Progress | null;
  updateProgress: (lessonId: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgressContext must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
  totalLessons: number;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children, totalLessons }) => {
  const { user } = useUserContext();
  const [progress, setProgress] = useState<Progress | null>(null);

  // Initialize progress from user data
  useEffect(() => {
    if (user?.progress) {
      setProgress({
        completedLessons: user.progress.completedLessons,
        totalLessons,
        nextLesson: user.progress.currentLesson ? {
          id: user.progress.currentLesson,
          title: 'Next Lesson' // This would typically come from your lesson data
        } : undefined
      });
    } else {
      setProgress({
        completedLessons: [],
        totalLessons,
        nextLesson: {
          id: 'intro-git',
          title: 'Introduction to Git and GitHub'
        }
      });
    }
  }, [user, totalLessons]);

  const updateProgress = (lessonId: string) => {
    setProgress(prev => {
      if (!prev) return null;

      const completedLessons = [...prev.completedLessons];
      if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
      }

      // This is a simplified example - you'd typically determine the next lesson
      // based on your lesson structure
      const nextLessonId = 'next-lesson-id';
      const nextLessonTitle = 'Next Lesson';

      return {
        ...prev,
        completedLessons,
        nextLesson: {
          id: nextLessonId,
          title: nextLessonTitle
        }
      };
    });
  };

  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      totalLessons,
      nextLesson: {
        id: 'intro-git',
        title: 'Introduction to Git and GitHub'
      }
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
