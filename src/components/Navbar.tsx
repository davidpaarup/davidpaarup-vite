import React, { useState } from 'react';

import {useLanguage} from "../context/UseLanguage.tsx";

const Navbar: React.FC<{ activeTab: string, setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">DAVID PAARUP</div>
        <div className="flex gap-8 text-sm font-medium items-center">
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

          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-400 hover:text-black transition-colors cursor-pointer uppercase flex items-center gap-1"
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
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-20 bg-white border border-gray-100 shadow-xl rounded-md">
                <button 
                  onClick={() => { setLanguage('es'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 ${language === 'es' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 ${language === 'en' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => { setLanguage('da'); setIsDropdownOpen(false); }}
                  className={`block w-full px-4 py-1 text-left hover:bg-gray-50 ${language === 'da' ? 'text-black font-bold' : 'text-gray-400'}`}
                >
                  DA
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
