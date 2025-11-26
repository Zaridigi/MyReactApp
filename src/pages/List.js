import React from 'react';
import { articles } from '../data.js';
  // Путь зависит от расположения файлов

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

export default List; 