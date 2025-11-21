import './App.css';
import {useState} from 'react';

import { articles } from './data.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from 'react-router-dom';
import MomMeetPage from './components/MomMeetPage';
import BakeryPage from './components/BakeryPage';
import DesignersPage from './components/DesignersPage';


function SimpleHero({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="hero-title">Привет! Я Зарина</h1>
              <p className="hero-subtitle">Это мой сайт о Web-разработке</p>
              <p className="hero-description">
                О создании современных и удобных веб-приложений.
              </p>
              <p className="hero-description">
                И превращении идей в функциональные цифровые решения.
              </p>
              
              {/* Минималистичная ссылка на GitHub */}
              <div className="github-link">
                <a 
                  href="https://github.com/Zaridigi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="hero-image">
              <img 
                src={process.env.PUBLIC_URL + "/images/photo_1.jpg"} 
                alt="Мое фото" 
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




function AboutMe({ id }) {
  return (
    <section id={id} className="about-section">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-xxl-10 col-xl-11 col-lg-12 mx-auto">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-title mb-4">Обо мне</h2>
                
                <div className="about-content">
                  <p className="lead">
                    Я начинающий Web-разработчик, увлеченный созданием современных digital-решений
                  </p>
                  
                  <p>
                    Активно изучаю веб-разработку и создаю свои первые проекты. 
                    Мне нравится превращать идеи в функциональные веб-приложения 
                    и постоянно совершенствовать свои навыки.
                  </p>

                  <div className="skills mt-4">
                    <h5>Технологии, которые я использую:</h5>
                    <div className="skill-tags">
                      <span className="badge bg-primary me-2 mb-2">HTML5</span>
                      <span className="badge bg-primary me-2 mb-2">CSS3</span>
                      <span className="badge bg-primary me-2 mb-2">JavaScript</span>
                      <span className="badge bg-success me-2 mb-2">React</span>
                      <span className="badge bg-success me-2 mb-2">Bootstrap</span>
                      <span className="badge bg-info me-2 mb-2">Git</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function List() {
  const listItems = articles.map(article =>
    <div key={article.id} className="portfolio-card">
      <div className="card">
        <img src={article.url_img} className="card-img-top" alt={article.title} />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">
            {article.description}
          </p>
          <a href={article.url} className="btn btn-primary">
            Почитать
          </a>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="portfolio-grid">
      {listItems}
    </div>
  );
}



function Menu() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ZARIDIGI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'flex-end'}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Обо мне</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Мой блог</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Связь со мной</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


function Content() {
  const cardStyle = {
    width: "20rem",
    height: "100%"
  };

  const imgStyle = {
    height: "200px",
    objectFit: "cover"
  };

  return(
    <div id="blog" className="container text-center" style={{marginTop:'30px', paddingTop: '80px'}}>
      <h2 className="section-title mb-5">Мой блог</h2>
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="card mx-auto" style={cardStyle}>
            <img 
              src={process.env.PUBLIC_URL + "/images/photo_2.png"} 
              className="card-img-top" 
              alt="Web-foto"
              style={imgStyle} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Социальная сеть MomMeet</h5>
              <p className="card-text flex-grow-1">
                Безопасную социальная сеть для организации встреч мам с детьми-ровесниками. 
                Интерактивная карта с игровыми площадками, парками, кафе. 
                Планирование встреч, чаты, возрастные группы, события.
              </p>
              <a href="#" className="btn btn-primary mt-auto">Подробнее о проекте</a>
            </div>
          </div>
        </div>

  <div className="col-md-4 mb-4">
          <div className="card mx-auto" style={cardStyle}>
            <img 
              src={process.env.PUBLIC_URL + "/images/photo_3.jpg"} 
              className="card-img-top" 
              alt="Web-foto"
              style={imgStyle} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Пекарня осетинских пирогов</h5>
              <p className="card-text flex-grow-1">
                Интернет-магазин традиционных осетинских пирогов с доставкой. 
                Онлайн-заказ, отслеживание выпечки, блог о культуре питания.
              </p>
              <a href="#" className="btn btn-primary mt-auto">Подробнее о проекте</a>
            </div>
          </div>
        </div>

<div className="col-md-4 mb-4">
          <div className="card mx-auto" style={cardStyle}>
            <img 
              src={process.env.PUBLIC_URL + "/images/photo_2.png"} 
              className="card-img-top" 
              alt="Web-foto"
              style={imgStyle} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Оптимизация работы проектировщиков</h5>
              <p className="card-text flex-grow-1">
                Веб-приложение для автоматизации рутинных задач проектировщиков. 
                Расчеты, чертежи, документация.
              </p>
              <a href="#" className="btn btn-primary mt-auto">Подробнее о проекте</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center mb-4">
              <h2 className="section-title mb-3">Связь со мной</h2>
              <p className="lead mb-0">Есть вопросы или предложения? Буду рада общению!</p>
            </div>

            <div className="contact-card">
              <div className="row align-items-start">
                {/* Контактная информация */}
                <div className="col-md-4">
                  <div className="contact-info">
                    <h5 className="mb-3">Контакты</h5>
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <span>zaridigi@mail.ru</span>
                      </div>
                    </div>

                    <div className="social-links mt-3">
                      <h6 className="mb-2">Соцсети</h6>
                      <div className="social-icons">
                        <a href="https://github.com/Zaridigi" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                        <a href="https://t.me/ZariDigi" target="_blank" rel="noopener noreferrer" className="social-link">Telegram</a>
                        <a href="https://vk.com/id28841101" target="_blank" rel="noopener noreferrer" className="social-link">VK</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Форма обратной связи */}
                <div className="col-md-8">
                  <div className="contact-form">
                    {isSubmitted ? (
                      <div className="alert alert-success">
                        <strong>Спасибо!</strong> Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Имя *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Ваше имя"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Ваш email"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="message" className="form-label">Сообщение *</label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Ваше сообщение..."
                          ></textarea>
                        </div>

                        <button type="submit" className="btn btn-contact w-100">
                          Отправить сообщение
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Zaridiji
          </p>
        </div>
      </div>
    </footer>
  );
}


function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className="App">
      <Menu />
      <SimpleHero id="home" />
      <AboutMe id="about" />
      <Content/>

            {/* Маршрутизация: страницы проектов */}
      <Routes>
        <Route path="/project/mommeet" element={<MomMeetPage />} />
        <Route path="/project/bakery" element={<BakeryPage />} />
        <Route path="/project/designers" element={<DesignersPage />} />
      </Routes>

      
      {/* Блок блога с уменьшенным отступом */}
      <div className="container" style={{marginTop: '2rem', marginBottom: '2rem'}}> {/* Уменьшены отступы */}
        {isShown && (
          <div>
            <List/>
            {/* Кнопка Скрыть под карточками блога */}
            <div className="text-center mt-3"> {/* Уменьшен отступ */}
              <button className="btn btn-primary btn-lg" onClick={handleClick}>
                Скрыть
              </button>
            </div>
          </div>
        )}

        {/* Кнопка Показать еще когда карточки скрыты */}
        {!isShown && (
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={handleClick}>
              Открыть
            </button>
          </div>
        )}
      </div>

      {/* Блок контактов в самом конце */}
      <Contact/>
      <Footer />
    </div>
  );
}


export default App;
