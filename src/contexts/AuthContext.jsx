/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function signup(email, password) {
    setError(null);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.message);
        throw error;
      });
  }

  function login(email, password) {
    setError(null);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.message);
        throw error;
      });
  }

  function logout() {
    setError(null);
    return signOut(auth)
      .catch((error) => {
        setError(error.message);
        throw error;
      });
  }

  function resetPassword(email) {
    setError(null);
    return sendPasswordResetEmail(auth, email)
      .catch((error) => {
        setError(error.message);
        throw error;
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    error,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
