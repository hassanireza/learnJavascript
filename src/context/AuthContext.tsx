import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { AuthUser } from '../types';
import { loadJSON, saveJSON, removeKey } from '../utils/storage';

/**
 * This authentication layer is a showcase only.
 * There is no real server, no password verification, and no session security.
 * It exists purely to demonstrate what a login and registration flow would
 * look like in a production app. Every course, lesson, exam, and certificate
 * feature works fully without ever signing in.
 */

interface RegisterInput {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  register: (input: RegisterInput) => void;
  logout: () => void;
  updateProfile: (input: Partial<AuthUser>) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'auth-user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => loadJSON<AuthUser | null>(STORAGE_KEY, null));

  const login = useCallback((username: string) => {
    const demoUser: AuthUser = {
      username: username || 'guest',
      firstName: 'Demo',
      lastName: 'Learner',
      email: `${username || 'guest'}@example.com`,
    };
    setUser(demoUser);
    saveJSON(STORAGE_KEY, demoUser);
  }, []);

  const register = useCallback((input: RegisterInput) => {
    const newUser: AuthUser = {
      username: input.username,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
    };
    setUser(newUser);
    saveJSON(STORAGE_KEY, newUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    removeKey(STORAGE_KEY);
  }, []);

  const updateProfile = useCallback((input: Partial<AuthUser>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...input };
      saveJSON(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      login,
      register,
      logout,
      updateProfile,
    }),
    [user, login, register, logout, updateProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
