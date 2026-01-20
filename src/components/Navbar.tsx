import React, { useState } from 'react';

import {useLanguage} from "../context/UseLanguage.tsx";

const Navbar: React.FC<{ activeTab: string, setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">DAVID PAARUP</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <button 
            onClick={() => setActiveTab('cv')}
            className={`${activeTab === 'cv' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors cursor-pointer`}
          >
            {t('nav.resume')}
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`${activeTab === 'gallery' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors cursor-pointer`}
          >
            {t('nav.gallery')}
          </button>
          
          <div className="w-px h-4 bg-gray-200 mx-2"></div>

          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="text-gray-400 group-hover:text-black transition-colors cursor-pointer uppercase flex items-center gap-1"
            >
              {language}
              <svg 
                className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute right-0 top-full pt-2 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}>
              <div className="py-2 w-20 bg-white border border-gray-100 shadow-xl rounded-md">
                <button 
                  onClick={() => { setLanguage('es'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'es' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'en' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => { setLanguage('da'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'da' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  DA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="text-gray-400 hover:text-black transition-colors cursor-pointer uppercase flex items-center gap-1 text-sm font-medium"
            >
              {language}
              <svg 
                className={`w-3 h-3 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-20 bg-white border border-gray-100 shadow-xl rounded-md">
                <button 
                  onClick={() => { setLanguage('es'); setIsMobileDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'es' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsMobileDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'en' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => { setLanguage('da'); setIsMobileDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 cursor-pointer ${language === 'da' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  DA
                </button>
              </div>
            )}
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-black transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <button 
            onClick={() => { setActiveTab('cv'); setIsMobileMenuOpen(false); }}
            className={`text-left text-sm font-medium ${activeTab === 'cv' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors cursor-pointer`}
          >
            {t('nav.resume')}
          </button>
          <button 
            onClick={() => { setActiveTab('gallery'); setIsMobileMenuOpen(false); }}
            className={`text-left text-sm font-medium ${activeTab === 'gallery' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors cursor-pointer`}
          >
            {t('nav.gallery')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
