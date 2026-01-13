import React from 'react';

const Navbar: React.FC<{ activeTab: string, setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">DAVID PAARUP</div>
        <div className="flex gap-8 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('cv')}
            className={`${activeTab === 'cv' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors`}
          >
            CURRÍCULUM
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`${activeTab === 'gallery' ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors`}
          >
            DIBUJOS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
