import React, { createContext, useContext, useReducer } from 'react';

interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
  showHints: boolean;
  autoComplete: boolean;
}

interface UserState {
  preferences: UserPreferences;
  isAuthenticated: boolean;
  username: string | null;
  email: string | null;
}

type UserAction =
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'SET_AUTH'; payload: boolean }
  | { type: 'SET_USER_INFO'; payload: { username: string; email: string } }
  | { type: 'CLEAR_USER' };

const initialState: UserState = {
  preferences: {
    theme: 'dark',
    fontSize: 'medium',
    showHints: true,
    autoComplete: false,
  },
  isAuthenticated: false,
  username: null,
  email: null,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
      };
    case 'SET_AUTH':
      return { ...state, isAuthenticated: action.payload };
    case 'SET_USER_INFO':
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    case 'CLEAR_USER':
      return {
        ...initialState,
        preferences: state.preferences,
      };
    default:
      return state;
  }
};

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
} | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};