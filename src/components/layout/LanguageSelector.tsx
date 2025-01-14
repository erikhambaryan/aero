import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../../types/language';
import { useLanguageStore } from '../../stores/languageStore';

interface LanguageSelectorProps {
  isScrolled: boolean;
}

export function LanguageSelector({ isScrolled }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { currentLanguage, setLanguage } = useLanguageStore();

  const languages: Record<Language, string> = {
    [Language.Armenian]: 'Հայ',
    [Language.Russian]: 'Рус',
    [Language.English]: 'Eng',
  };

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
          isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
        }`}
      >
        <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
          {languages[currentLanguage]}
        </span>
        <ChevronDown className={`w-4 h-4 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {Object.entries(languages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleLanguageChange(key as Language)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLanguage === key ? 'text-blue-600' : 'text-gray-700'
              } hover:bg-gray-100`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}