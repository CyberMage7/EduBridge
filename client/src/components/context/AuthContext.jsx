import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if user is logged in on component mount
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUserEmail(email || '');
      setUserName(name || '');
    }
  }, []);

  const login = (email, name) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserEmail('');
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
