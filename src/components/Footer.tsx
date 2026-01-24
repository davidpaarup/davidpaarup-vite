import React from 'react';

import {useLanguage} from "../context/UseLanguage.tsx";

const Footer: React.FC = () => {
  const { t, showOnlyEmail, showCopyright } = useLanguage();
  
  return (
    <footer className="border-t border-gray-100 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {showCopyright && (
          <div className="text-sm text-gray-400">
            {t('footer.copy').replace('{year}', new Date().getFullYear().toString())}
          </div>
        )}
        <div className="flex gap-6 text-sm font-medium">
          {!showOnlyEmail && (
            <>
              <a href="https://www.linkedin.com/in/davidpaarup/" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">LinkedIn</a>
              <a href="https://github.com/davidpaarup" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">GitHub</a>
              <a href="https://www.instagram.com/davidpaarup/" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">Instagram</a>
            </>
          )}
          <a href="mailto:hola@davidpaarup.es" className="text-gray-400 hover:text-black transition-colors">
            {showOnlyEmail ? t('footer.send_email') : 'Email'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
