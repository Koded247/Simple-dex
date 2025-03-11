import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { RxBorderDotted } from "react-icons/rx";

interface Preferences {
  theme: 'auto' | 'light' | 'dark';
  language: string;
  currency: string;
}

const languages = ['English', 'Spanish', 'French','Portuguese','Japanese'];
const currencies = ['USD', 'EUR', 'GBP','JPY'];

const GlobalPreferences: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<Preferences>({
    theme: 'auto',
    language: 'English',
    currency: 'USD',
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleThemeChange = () =>
    setPreferences((prev) => ({
      ...prev,
      theme: prev.theme === 'auto' ? 'light' : prev.theme === 'light' ? 'dark' : 'auto',
    }));
  const handleLanguageChange = (lang: string) =>
    setPreferences((prev) => ({ ...prev, language: lang }));
  const handleCurrencyChange = (currency: string) =>
    setPreferences((prev) => ({ ...prev, currency }));

  return (
    <div className="relative top-3">
      <button
        onClick={toggleMenu}
        className=" absolute rounded-full text-white right-32 hover:bg-gray-900 focus:outline-none"
      >
       <RxBorderDotted size={20} />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 top-15 bg-transparent flex flex-col gap-2  mt-2 w-64 bg-gray-900 text-white rounded-lg shadow-lg p-4 z-10">
          <h3 className="text-sm font-semibold mb-8">GLOBAL PREFERENCES</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Theme</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{preferences.theme.charAt(0).toUpperCase() + preferences.theme.slice(1)}</span>
              <button
                onClick={handleThemeChange}
                className="p-1 rounded-full bg-gray-800 hover:bg-gray-700"
              >
               <div className="flex gap-24">
               {preferences.theme === 'auto' ? (
                  <FaSun size={16} />
                ) : preferences.theme === 'light' ? (
                  <FaMoon size={16} />
                ) : (
                  <FaSun size={16} />
                )}
               </div>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Language</span>
            <div className="relative">
              <select
                value={preferences.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className=" bg-transparent text-white rounded-lg  py-1 px-5 pr-8 text-sm focus:outline-none"
              >
                {languages.map((lang) => (
                  <option className ="bg-gray-800 " key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Currency</span>
            <div className="relative">
              <select
                value={preferences.currency}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                className=" bg-transparent text-white rounded-lg py-1 px-2 pr-8 text-md focus:outline-none"
              >
                {currencies.map((currency) => (
                  <option className ="bg-gray-800" key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalPreferences;