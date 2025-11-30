import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const location = useLocation();

  // Функция для обработки навигации
  const handleNavClick = (hash, e) => {
    // Если мы на главной странице
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Обновляем URL с хэшем без перезагрузки страницы
        window.history.pushState(null, null, `/#${hash.substring(1)}`);
      }
    }
    // Если не на главной, ссылка переведет на главную с якорем (работает по умолчанию)
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand 
          as={Link} 
          to="/"
          onClick={(e) => {
            // Если мы уже на главной странице, прокручиваем к началу
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, null, '/#');
            }
          }}
        >
          ZARIDIGI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link 
              href="#home"
              onClick={(e) => handleNavClick('#home', e)}
            >
              Главная
            </Nav.Link>
            <Nav.Link 
              href="#about"
              onClick={(e) => handleNavClick('#about', e)}
            >
              Обо мне
            </Nav.Link>
            <Nav.Link 
              href="#projects"
              onClick={(e) => handleNavClick('#projects', e)}
            >
              Проекты
            </Nav.Link>
            <Nav.Link 
              href="#contact"
              onClick={(e) => handleNavClick('#contact', e)}
            >
              Связь со мной
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;