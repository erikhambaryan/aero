export enum Language {
  Armenian = 'am',
  Russian = 'ru',
  English = 'en'
}

export interface TranslationSchema {
  logo: string;
  nav: {
    services: string;
    mission: string;
    'our-services': string;
    experts: string;
    contact: string;
  };
  hero: {
    title: string;
    learnMore: string;
  };
  about: {
    title: string;
    description: string;
    content: string[];
    lawsTitle: string;
    laws: string[];
  };
  mission: {
    title: string;
    content: string[];
  };
  services: {
    title: string;
    list: string[];
  };
  contact: {
    title: string;
    description: string;
  };
}