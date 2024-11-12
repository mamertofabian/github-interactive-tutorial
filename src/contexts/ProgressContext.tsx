import React, { createContext, useContext, useReducer } from 'react';

interface Progress {
  totalLessons: number;
  completedLessons: number;
  currentModule: string;
  achievements: string[];
  lastActivity: Date | null;
}

type ProgressAction =
  | { type: 'COMPLETE_LESSON'; payload: number }
  | { type: 'SET_CURRENT_MODULE'; payload: string }
  | { type: 'ADD_ACHIEVEMENT'; payload: string }
  | { type: 'UPDATE_LAST_ACTIVITY' }
  | { type: 'RESET_PROGRESS' };

const initialState: Progress = {
  totalLessons: 0,
  completedLessons: 0,
  currentModule: '',
  achievements: [],
  lastActivity: null,
};

const progressReducer = (state: Progress, action: ProgressAction): Progress => {
  switch (action.type) {
    case 'COMPLETE_LESSON':
      return {
        ...state,
        completedLessons: Math.min(state.completedLessons + 1, state.totalLessons),
      };
    case 'SET_CURRENT_MODULE':
      return { ...state, currentModule: action.payload };
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, action.payload],
      };
    case 'UPDATE_LAST_ACTIVITY':
      return { ...state, lastActivity: new Date() };
    case 'RESET_PROGRESS':
      return initialState;
    default:
      return state;
  }
};

const ProgressContext = createContext<{
  state: Progress;
  dispatch: React.Dispatch<ProgressAction>;
} | null>(null);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  return (
    <ProgressContext.Provider value={{ state, dispatch }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};