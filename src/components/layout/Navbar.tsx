import { navigationItems } from '../../constants/navigation';
import { scrollToElement } from '../../utils/scroll';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { LanguageSelector } from './LanguageSelector';
import { useTranslations } from '../../hooks/useTranslations';

export function Navbar() {
  const { activeSection, isScrolled } = useScrollSpy();
  const t = useTranslations();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      style={{ height: '100px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full pt-8 pb-2">
          {/* Логотип */}
          <div className="flex items-center space-x-4">
            <img
              id="logo"
              src="/dist/logo.png"
              alt="AviaMed Logo"
              className="h-12 w-auto sm:h-10 lg:h-12"
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {t.logo}
            </span>
          </div>

          {/* Навигация */}
          <div className="flex items-center space-x-8">
            {navigationItems.map(({ id }) => (
              <button
                key={id}
                onClick={() => scrollToElement(id)}
                className={`inline-flex items-center px-1 pt-1 text-lg font-medium border-b-2 transition-all duration-200 ${
                  activeSection === id
                    ? `${
                        isScrolled
                          ? 'border-blue-600 text-blue-600'
                          : 'border-white text-white'
                      }`
                    : `border-transparent ${
                        isScrolled
                          ? 'text-gray-500'
                          : 'text-white'
                      } hover:text-blue-600`
                }`}
              >
                {t.nav[id]}
              </button>
            ))}
            <LanguageSelector isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
}