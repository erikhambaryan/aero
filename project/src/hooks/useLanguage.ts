import { useLanguageStore } from '../stores/languageStore';
import { Language } from '../types/language';

interface UseLanguageReturn {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export function useLanguage(): UseLanguageReturn {
  const { currentLanguage, setLanguage } = useLanguageStore();
  
  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    // Force re-render of components using translations
    window.dispatchEvent(new Event('languagechange'));
  };
  
  return {
    currentLanguage,
    setLanguage: handleLanguageChange,
  };
}