import React, { createContext, useContext, useState, ReactNode } from 'react';
import basicContent from '../data/tutorial-content.json';
import advancedContent from '../data/tutorial-content-advanced.json';
import finalContent from '../data/tutorial-content-final.json';

// Make visualization type more flexible
interface BaseVisualization {
  type: string;
  [key: string]: any; // Allow any additional properties
}

type Visualization = BaseVisualization;

interface PracticeStep {
  action: string;
  command?: string;
  explanation?: string;
  steps?: string[];
}

interface ChallengeStep {
  instruction: string;
  validation: {
    command?: string;
    expected?: string;
    pattern?: string;
    type?: string;
    element?: string;
  };
}

interface Practice {
  title?: string;
  steps: PracticeStep[];
}

interface Example {
  type?: string;
  template?: {
    title: string;
    description: string;
    steps?: string[];
    labels?: string[];
  };
  columns?: {
    name: string;
    items: string[];
  }[];
}

interface Feature {
  title: string;
  description: string;
  examples?: Example[];
}

interface Challenge {
  title: string;
  description: string;
  timeLimit?: number;
  setup?: {
    files?: Record<string, string>;
    branches?: Record<string, Record<string, string>>;
  };
  steps: ChallengeStep[];
}

interface Concept {
  title: string;
  description: string;
  visualization?: Visualization;
  practice?: Practice;
  steps?: string[];
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

interface Guideline {
  title: string;
  guidelines: string[];
}

interface Command {
  command: string;
  description: string;
  example: string;
}

interface Section {
  id: string;
  title: string;
  content: {
    overview: string;
    concepts?: Concept[];
    keyTerms?: KeyTerm[];
    steps?: Step[];
    practice?: Practice;
    commands?: Command[];
    bestPractices?: Guideline[];
    features?: Feature[];
    challenges?: Challenge[];
  };
}

interface TutorialContent {
  sections: Section[];
  title?: string;
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
  
  // Combine all content
  const combinedContent: TutorialContent = {
    title: basicContent.title,
    sections: [...basicContent.sections, ...advancedContent.sections, ...finalContent.sections]
  };
  
  const [content] = useState<TutorialContent>(combinedContent);

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
