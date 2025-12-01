import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

// Импорты компонентов
import Menu from './pages/Menu';
import SimpleHero from './pages/SimpleHero';
import AboutMe from './pages/AboutMe';
import Content from './pages/Content';
import List from './pages/List';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PersonalDataAgreement from './pages/PersonalDataAgreement';

import './App.css';
import './pages/Content.css';

function MainPage() {
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();

  // Автоматический скролл при изменении хеша
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#/', '').replace('#', '');
      // Ждем пока DOM обновится
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <SimpleHero id="home" />
      <AboutMe id="about" />
      <Content />
      <div className="container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {isShown && (
          <div>
            <List />
            <div className="text-center mt-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleClick}
              >
                Скрыть
              </button>
            </div>
          </div>
        )}
        {!isShown && (
          <div className="text-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleClick}
            >
              Открыть
            </button>
          </div>
        )}
      </div>
      <Contact id="contact" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={
          <>
            <MainPage />
            <Footer />
          </>
        } />
        {/* Эти страницы теперь доступны только по прямой ссылке */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/personal-data-agreement" element={<PersonalDataAgreement />} />
      </Routes>
    </div>
  );
}

export default App;