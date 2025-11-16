import './App.css';
import {useState} from 'react';

import { articles } from './data.js';

function SimpleHero({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-8">
            <div className="hero-content">
              <h1 className="hero-title">Твое Имя</h1>
              <p className="hero-subtitle">Веб-разработчик</p>
              <p className="hero-description">
                Создаю современные и удобные веб-приложения. 
                Превращаю идеи в функциональные цифровые решения.
              </p>
              {/* Кнопки удалены */}
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="hero-image">
              <img 
                src="/images/photo_1.jpg" 
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
                    Начинающий веб-разработчик, увлеченный созданием современных digital-решений
                  </p>
                  
                  <p>
                    Активно изучаю веб-разработку и создаю свои первые проекты. 
                    Мне нравится превращать идеи в функциональные веб-приложения 
                    и постоянно совершенствовать свои навыки.
                  </p>

                  <div className="skills mt-4">
                    <h5>Технологии, которые я изучаю:</h5>
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
          Zaridiji
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
  return(
  <div id="blog" className="container text-center" style={{marginTop:'30px', paddingTop: '80px', marginTop: '-80px'}}> {/* Добавлены отступы для якоря */}
    <h2 className="section-title mb-5">Мой блог</h2>
  <div className="row">
    <div className="col-md-4 mb-4">
    <div className="card mx-auto" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div></div>
  <div className="col-md-4 mb-4">
    <div className="card mx-auto" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div></div>
<div className="col-md-4 mb-4">
    <div className="card mx-auto" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
              </a>
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
                {/* Контактная информация - компактная версия */}
                <div className="col-md-4">
                  <div className="contact-info">
                    <h5 className="mb-3">Контакты</h5>
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <span>example@domain.com</span>
                      </div>
                    </div>

                    <div className="social-links mt-3">
                      <h6 className="mb-2">Соцсети</h6>
                      <div className="social-icons">
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Telegram</a>
                        <a href="#" className="social-link">VK</a>
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
                            className="form-control form-control-sm"
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
                            className="form-control form-control-sm"
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
                            className="form-control form-control-sm"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Ваше сообщение..."
                          ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-send w-100">
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
          <div className="footer-links">
            <a href="#contact" className="footer-link">Контакты</a>
          </div>
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
              Показать еще
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
