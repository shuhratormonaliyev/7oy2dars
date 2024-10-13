import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header />
          <MainContent />
          <ToastContainer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
