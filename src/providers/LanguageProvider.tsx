import React, { useEffect } from 'react';
import { useLanguageStore } from '../stores/languageStore';
import { getDefaultLanguage } from '../utils/language';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  useEffect(() => {
    const defaultLanguage = getDefaultLanguage();
    setLanguage(defaultLanguage);
  }, [setLanguage]);

  return <>{children}</>;
}