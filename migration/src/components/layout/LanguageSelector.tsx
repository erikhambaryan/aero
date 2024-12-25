import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../types/language';
import { ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = {
    [Language.Armenian]: 'Հայ',
    [Language.Russian]: 'Рус',
    [Language.English]: 'Eng',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span>{languages[currentLanguage]}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {Object.entries(languages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setLanguage(key as Language);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLanguage === key ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}