
import { createContext, useContext } from 'react';
import { useAuth } from './useAuth';

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  error: '',
  login: (userId, password) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
