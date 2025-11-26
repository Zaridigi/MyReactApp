import React from 'react';
import { HashRouter } from 'react-router-dom'; // Можно убрать, если не нужны маршруты

// Импорты компонентов
import Menu from './pages/Menu';
import SimpleHero from './pages/SimpleHero';
import AboutMe from './pages/AboutMe';
import Content from './pages/Content';
import List from './pages/List';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import './App.css';
import './pages/Content.css';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="App">
      <Menu />
      
      {/* Компоненты идут друг за другом */}
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
      <Footer />
    </div>
  );
}

export default App;
