import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} David Paarup
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://www.linkedin.com/in/davidpaarup/" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">LinkedIn</a>
          <a href="https://github.com/davidpaarup" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">GitHub</a>
          <a href="https://www.instagram.com/davidpaarup/" target={"_blank"} className="text-gray-400 hover:text-black transition-colors">Instagram</a>
          <a href="mailto:hola@davidpaarup.com" className="text-gray-400 hover:text-black transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
