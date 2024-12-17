import React from 'react';
import { Plane } from 'lucide-react';
import { navigationItems } from '../../constants/navigation';
import { scrollToElement } from '../../utils/scroll';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navbar() {
  const { activeSection, isScrolled } = useScrollSpy();
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToElement('home')}
              className="flex items-center space-x-2"
            >
              <Plane className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                AviCare
              </span>
            </button>
          </div>
          
          <div className="flex space-x-8">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToElement(id)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-200 ${
                  activeSection === id
                    ? `${isScrolled ? 'border-blue-600 text-blue-600' : 'border-white text-white'}`
                    : `border-transparent ${isScrolled ? 'text-gray-500' : 'text-white'} hover:text-blue-600`
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}