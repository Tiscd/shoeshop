import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Mock login admin
    if (credentials.username === 'admin' && credentials.password === '123456') {
      setUser({ name: 'Admin', role: 'admin' });
      window.location.href = '/admin/products'; // Redirect bằng window (an toàn)
    } else {
      setUser({ name: credentials.username, role: 'user' });
      window.location.href = '/';
    }
  };

  const logout = () => {
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Thêm dòng này để export useAuth
export const useAuth = () => useContext(AuthContext);