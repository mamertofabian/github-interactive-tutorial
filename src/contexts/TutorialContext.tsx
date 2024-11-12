import React, { createContext, useContext, useState, ReactNode } from 'react';
import tutorialContent from '../data/tutorial-content.json';

// Make visualization type more flexible
interface BaseVisualization {
  type: string;
}

interface DataVisualization extends BaseVisualization {
  data: any;
}

interface StepsVisualization extends BaseVisualization {
  steps: string[];
}

type Visualization = DataVisualization | StepsVisualization;

interface Concept {
  title: string;
  description: string;
  visualization?: Visualization;
}

interface KeyTerm {
  term: string;
  definition: string;
}

interface InstallStep {
  os: string;
  steps: string[];
}

interface Step {
  title: string;
  instructions?: InstallStep[];
  steps?: string[];
  visualization?: Visualization;
}

interface Section {
  id: string;
  title: string;
  content: {
    overview: string;
    concepts?: Concept[];
    keyTerms?: KeyTerm[];
    steps?: Step[];
    practice?: {
      title: string;
      steps: Array<{
        action: string;
        command: string;
        explanation: string;
      }>;
    };
  };
}

interface TutorialContent {
  title: string;
  sections: Section[];
}

interface TutorialContextType {
  content: TutorialContent;
  currentSection: string | null;
  setCurrentSection: (sectionId: string | null) => void;
  getSectionById: (id: string) => Section | undefined;
  updateProgress: (sectionId: string) => void;
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
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [content] = useState<TutorialContent>(tutorialContent);

  const getSectionById = (id: string) => {
    return content.sections.find(section => section.id === id);
  };

  const updateProgress = (sectionId: string) => {
    // Implementation for updating progress
    console.log(`Progress updated for section: ${sectionId}`);
  };

  return (
    <TutorialContext.Provider
      value={{
        content,
        currentSection,
        setCurrentSection,
        getSectionById,
        updateProgress,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
