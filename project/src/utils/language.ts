import { Language } from '../types/language';

export const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  
  switch (browserLang) {
    case 'hy':
    case 'am':
      return Language.Armenian;
    case 'ru':
      return Language.Russian;
    case 'en':
      return Language.English;
    default:
      return Language.Armenian;
  }
};