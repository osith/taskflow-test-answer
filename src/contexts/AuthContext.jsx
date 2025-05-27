import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedToken && storedUser && storedRole) {
      setToken(storedToken);
      setUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  const signup = (token, role) => {
    setRole(role);
    setToken(token);

    localStorage.setItem("role", role);
    localStorage.setItem("token", token);
  };

  const login = (token, role) => {
    setToken(token);
    setRole(role);

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, role, login, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
