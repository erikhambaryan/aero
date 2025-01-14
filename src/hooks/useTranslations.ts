import { useEffect, useState } from 'react';
import { useLanguageStore } from '../stores/languageStore';
import { armenianTranslations } from '../constants/translations/armenian';
import { russianTranslations } from '../constants/translations/russian';
import { englishTranslations } from '../constants/translations/english';
import { Language } from '../types/language';
import type { TranslationSchema } from '../types/language';

const translations: Record<Language, TranslationSchema> = {
  [Language.Armenian]: armenianTranslations,
  [Language.Russian]: russianTranslations,
  [Language.English]: englishTranslations,
};

export function useTranslations(): TranslationSchema {
  const { currentLanguage } = useLanguageStore();
  const [translation, setTranslation] = useState<TranslationSchema>(
    translations[currentLanguage] || translations[Language.Armenian]
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      const newTranslation = translations[currentLanguage] || translations[Language.Armenian];
      setTranslation(newTranslation);
    };

    window.addEventListener('languagechange', handleLanguageChange);
    handleLanguageChange(); // Initial setup

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, [currentLanguage]);

  return translation;
}