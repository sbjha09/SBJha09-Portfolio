import { useState, useEffect } from 'react';

const correctUserId = '8178469427';
const correctPassword = '8178469427';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = (userId, password) => {
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      if (userId === correctUserId && password === correctPassword) {
        setIsAuthenticated(true);
        sessionStorage.setItem('isAuthenticated', 'true');
      } else {
        setError('Invalid User ID or Password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    const session = sessionStorage.getItem('isAuthenticated');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, isLoading, error, login, logout };
};
