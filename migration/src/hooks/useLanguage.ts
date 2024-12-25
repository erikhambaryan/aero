import { create } from 'zustand';
import { Language } from '../types/language';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  currentLanguage: Language.Armenian,
  setLanguage: (language) => set({ currentLanguage: language }),
}));