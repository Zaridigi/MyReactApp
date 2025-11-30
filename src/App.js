import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Contact />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Menu />
            <MainPage />
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/personal-data-agreement" element={<PersonalDataAgreement />} />
      </Routes>
    </div>
  );
}

export default App;