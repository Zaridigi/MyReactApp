import './App.css';
import {useState} from 'react';

import { articles } from './data.js';

function SimpleHero() {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4">Привет! Меня зовут Зарина</h1>
            <p className="lead">Я Веб-разработчик</p>
            <p>Создаю современные и удобные веб-приложения</p>
          </div>
          <div className="col-md-4 text-center">
            <img 
              src={`${process.env.PUBLIC_URL}/images/photo_1.jpg`} 
              alt="Мое фото" 
              className="rounded-circle img-thumbnail"
              style={{width: '200px', height: '200px', objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  const listItems = articles.map(article =>
    <div key={article.id} className="portfolio-card">
      <div className="card" style={{ width: "18rem" }}>
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
    <div className="row align-items-start">
      {listItems}
    </div>
  );
}



function Menu() {
  return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      ZariDiji
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
          <a className="nav-link active" aria-current="page" href="#">
            Обо мне
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Блог
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Портфолио
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Связь со мной
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

function Content() {
  return(
  <div className="container text-center" style={{marginTop:'30px'}}>
  <div className="row align-items-start">
    <div className="col"><div className="card" style={{ width: "18rem" }}>
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
    <div className="col"><div className="card" style={{ width: "18rem" }}>
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
    <div className="col"><div className="card" style={{ width: "18rem" }}>
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
  </div>
</div>

  )
}

function App() {

    const [isShown, setIsShown] = useState(false);

const handleClick = event => {
    setIsShown(current => !current);
};

  return (
    <div className="App">
        <Menu />
      <SimpleHero />
      <Content/>

      {isShown && (
        <div>
          <List/>
        </div>
      )}


      <button onClick={handleClick}>Показать еще</button>


    </div>
  );
}

export default App;
