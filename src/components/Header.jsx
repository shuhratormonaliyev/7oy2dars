import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { toast } from 'react-toastify';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lang) => {
    switchLanguage(lang);
    toast.success(`Language switched to ${lang}`);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Your Logo</h1>
      <div className="flex space-x-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange('uz')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          UZ
        </button>
      </div>
    </header>
  );
};

export default Header;
