import React from 'react';
import './i18n';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import SearchBar from './components/SearchBar'; 
import Images from './assets/images/imgone.svg';
import ImgTue from './assets/images/imgtue.svg';
import ImgThree from './assets/images/imgthree.svg';
import Location from './assets/images/location.svg';
import { useTranslation } from 'react-i18next';
import './App.css'; 

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
        toast.success(`Language changed to ${e.target.value}`);
    };

    return (
        <select onChange={handleLanguageChange} className="bg-transparent rounded-md border">
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
            <option value="en">English</option>
        </select>
    );
};

const App = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const { t } = useTranslation(); 

    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f0f4ff] text-gray-900'}`}>
            <div className={`max-w-full mx-auto p-6 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <header className="flex justify-between items-center py-4 shadow-lg">
                    <div className="text-2xl font-bold ml-5">{t('welcome')}</div>
                    <nav className="flex space-x-4">
                        <LanguageSelector />
                        <a href="#" className={`hover:text-gray-900 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t('assets')}</a>
                        <a href="#" className={`hover:text-gray-900 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t('creators')}</a>
                        <a href="#" className={`hover:text-gray-900 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers')}</a>
                        <a href="#" className={`hover:text-gray-900 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t('goPro')}</a>
                    </nav>
                    <SearchBar /> 
                    <div className="flex space-x-4 mr-5">
                        <button onClick={toggleDarkMode} className="text-gray-700 hover:text-gray-900 bg-blue-400 rounded-md p-2 font-sans font-bold">
                            {darkMode ? t('lightMode') : t('darkMode')}
                        </button>
                    </div>
                </header>

                <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-10 border rounded-md mt-4">
                    <div className="w-[400px] h-[576px] ml-32">
                        <p className='p-4'>{t('securitySolution')}</p>
                        <h1 className="text-4xl font-bold leading-tight">{t('desc')}</h1>
                        <div className="flex gap-2">
                            <img className="w-20 h-20 mt-12" src={Location} alt="lokatsiya" />
                            <p className="text-App mt-10">{t('description')}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mt-20 text-gray-900">{t('joinWaitlist')}</h2>
                            <p className='text-gray-800'>{t('notify')}</p>
                            <form className="mt-4 flex">
                                <input type="email" placeholder="Your email address" className="px-4 py-2 w-full md:w-2/3 border border-gray-300 rounded-l" />
                                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600">JOIN LIST!</button>
                            </form>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center ">
                        <img src={Images} alt="tel" className="md:w-[400px] rounded-lg" />
                        <img src={ImgTue} alt="tel" className="md:w-[400px] rounded-lg" />
                        <img src={ImgThree} alt="tel" className="md:w-[400px] rounded-lg" />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

const Root = () => (
    <ThemeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </ThemeProvider>
);

export default Root;