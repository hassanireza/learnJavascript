import { useState, useCallback, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { loadJSON, saveJSON } from './storage';

const KEY = 'certificate-name';

/**
 * Returns the name that should be printed on the certificate. Authenticated
 * demo users default to their profile name; guests can type any name, which
 * is remembered locally so certificates work fully without logging in.
 */
export function useCertificateName(): [string, (name: string) => void] {
  const { user, isAuthenticated } = useAuth();
  const [name, setNameState] = useState<string>(() => {
    const stored = loadJSON<string>(KEY, '');
    if (stored) return stored;
    if (isAuthenticated && user) return `${user.firstName} ${user.lastName}`.trim();
    return '';
  });

  useEffect(() => {
    if (!loadJSON<string>(KEY, '') && isAuthenticated && user) {
      setNameState(`${user.firstName} ${user.lastName}`.trim());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const setName = useCallback((next: string) => {
    setNameState(next);
    saveJSON(KEY, next);
  }, []);

  return [name, setName];
}
