import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '../types/language';
import { getDefaultLanguage } from '../utils/language';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: getDefaultLanguage(),
      setLanguage: (language: Language) => {
        set({ currentLanguage: language });
        window.dispatchEvent(new Event('languagechange'));
      },
    }),
    {
      name: 'language-store',
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
    }
  )
);