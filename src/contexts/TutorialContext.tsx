import React, { createContext, useContext, useReducer } from 'react';

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  type: 'concept' | 'interactive' | 'challenge';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: number;
  dependencies?: string[];
}

interface TutorialState {
  currentStep: number;
  steps: TutorialStep[];
  completedSteps: string[];
  isLoading: boolean;
  error: string | null;
}

type TutorialAction =
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'COMPLETE_STEP'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_TUTORIAL' };

const initialState: TutorialState = {
  currentStep: 0,
  steps: [],
  completedSteps: [],
  isLoading: false,
  error: null,
};

const tutorialReducer = (state: TutorialState, action: TutorialAction): TutorialState => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    case 'COMPLETE_STEP':
      return {
        ...state,
        completedSteps: [...state.completedSteps, action.payload],
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_TUTORIAL':
      return initialState;
    default:
      return state;
  }
};

const TutorialContext = createContext<{
  state: TutorialState;
  dispatch: React.Dispatch<TutorialAction>;
} | null>(null);

export const TutorialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(tutorialReducer, initialState);

  return (
    <TutorialContext.Provider value={{ state, dispatch }}>
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorial = () => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }
  return context;
};