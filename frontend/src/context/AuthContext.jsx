import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const[userRole,setUserRole]=useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        setIsAuthenticated(true);
        setUserRole(userData.role);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const { token, user } = response;
      
      localStorage.setItem('token', token);
      setUser(user);
      setIsAuthenticated(true);
      setUserRole(user.role)
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    console.log("in auth context register", userData);
    try {
      const response = await authService.register(userData);
      const { token, user } = response;
      
      localStorage.setItem('token', token);
      setUser(user);
      setIsAuthenticated(true);
      setUserRole(user.role);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    userRole,
    isAdmin: userRole === 'admin',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
