'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  reloadUser: () => Promise<void>;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<User>;
  signIn: (email: string, password: string) => Promise<User>;
  signInWithGoogle: () => Promise<User>;
  signInWithGithub: () => Promise<User>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  const signIn = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  };

  const signInWithGithub = async () => {
    const result = await signInWithPopup(auth, githubProvider);
    return result.user;
  };

  const logout = () => {
    return signOut(auth);
  };

  const reloadUser = async () => {
    if (user) {
      await user.reload();
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logout,
    reloadUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
