import React, { createContext, useContext, useState } from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error('Logout Error:', error);
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
