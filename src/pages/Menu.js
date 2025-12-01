import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const location = useLocation();

  // Обработка хеша при загрузке/изменении URL
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#/', '').replace('#', '');
      // Ждем немного чтобы компоненты успели отрендериться
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  // Функция для навигации по якорям
  const handleAnchorClick = (id, e) => {
    e.preventDefault();
    
    // Если мы уже на главной странице (путь "/" или "/#/")
    if (window.location.pathname === '/' || window.location.hash.startsWith('#')) {
      const element = document.getElementById(id);
      if (element) {
        // Скроллим к элементу
        element.scrollIntoView({ behavior: 'smooth' });
        // Обновляем URL без перезагрузки
        window.history.pushState({}, '', `#/${id}`);
      }
    } else {
      // Если не на главной, переходим на главную с якорем
      window.location.href = `/#/${id}`;
    }
  };

  // Функция для кнопки "Главная"
  const handleHomeClick = (e) => {
    e.preventDefault();
    // Скроллим наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Обновляем URL
    window.history.pushState({}, '', '/');
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand 
          href="/"
          onClick={handleHomeClick}
          style={{ cursor: 'pointer' }}
        >
          ZARIDIGI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* Главная - всегда скроллит наверх */}
            <Nav.Link 
              href="/"
              onClick={handleHomeClick}
            >
              Главная
            </Nav.Link>
            
            {/* Якорные ссылки - работают в любом порядке */}
            <Nav.Link 
              href="#about"
              onClick={(e) => handleAnchorClick('about', e)}
            >
              Обо мне
            </Nav.Link>
            
            <Nav.Link 
              href="#projects"
              onClick={(e) => handleAnchorClick('projects', e)}
            >
              Проекты
            </Nav.Link>
            
            <Nav.Link 
              href="#contact"
              onClick={(e) => handleAnchorClick('contact', e)}
            >
              Связь со мной
            </Nav.Link>
            
            {/* Убрали "Политика" из меню как просили */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;