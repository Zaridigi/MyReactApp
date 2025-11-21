import React from 'react';
import { Link } from 'react-router-dom';

// Компонент для страницы проекта MomMeet
export function MomMeetPage() {
  return (
    <div className="project-page">
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-primary mb-4">
          ← Назад к портфолио
        </Link>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="project-title mb-4">Социальная сеть MomMeet</h1>
            
            <div className="project-image mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/images/photo_2.png"} 
                alt="MomMeet проект" 
                className="img-fluid rounded"
              />
            </div>

            <div className="project-content">
              <h3>О проекте</h3>
              <p className="lead">
                Безопасная социальная сеть для организации встреч мам с детьми-ровесниками.
              </p>

              <h4>Основные функции:</h4>
              <ul className="feature-list">
                <li>📍 Интерактивная карта с игровыми площадками, парками, кафе</li>
                <li>👥 Планирование встреч и мероприятий</li>
                <li>💬 Приватные и групповые чаты</li>
                <li>👶 Возрастные группы для подбора компаний</li>
                <li>📅 Календарь событий и напоминаний</li>
                <li>⭐ Система рейтингов и отзывов</li>
              </ul>

              <h4>Технологии:</h4>
              <div className="tech-tags mb-4">
                <span className="badge bg-primary me-2">React</span>
                <span className="badge bg-primary me-2">Node.js</span>
                <span className="badge bg-primary me-2">MongoDB</span>
                <span className="badge bg-primary me-2">Socket.io</span>
                <span className="badge bg-primary me-2">Google Maps API</span>
              </div>

              <h4>Результаты:</h4>
              <p>
                Проект помог создать безопасное пространство для общения мам, 
                упростил организацию встреч и способствовал созданию локальных 
                сообществ родителей.
              </p>

              <div className="project-links mt-5">
                <a href="#" className="btn btn-primary me-3">
                  🎯 Демо проекта
                </a>
                <a href="#" className="btn btn-outline-primary">
                  📁 Исходный код
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент для страницы пекарни
export function BakeryPage() {
  return (
    <div className="project-page">
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-primary mb-4">
          ← Назад к портфолио
        </Link>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="project-title mb-4">Пекарня осетинских пирогов</h1>
            
            <div className="project-image mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/images/photo_3.jpg"} 
                alt="Пекарня проект" 
                className="img-fluid rounded"
              />
            </div>

            <div className="project-content">
              <h3>О проекте</h3>
              <p className="lead">
                Интернет-магазин традиционных осетинских пирогов с доставкой.
              </p>

              <h4>Основные функции:</h4>
              <ul className="feature-list">
                <li>🛒 Онлайн-заказ пирогов с кастомизацией</li>
                <li>📦 Система отслеживания выпечки в реальном времени</li>
                <li>🍽️ Блог о культуре и традициях осетинской кухни</li>
                <li>📅 Предзаказ и планирование доставки</li>
                <li>💳 Интеграция с платежными системами</li>
                <li>📱 Адаптивный дизайн для мобильных устройств</li>
              </ul>

              <h4>Технологии:</h4>
              <div className="tech-tags mb-4">
                <span className="badge bg-primary me-2">React</span>
                <span className="badge bg-primary me-2">Express.js</span>
                <span className="badge bg-primary me-2">PostgreSQL</span>
                <span className="badge bg-primary me-2">Stripe API</span>
                <span className="badge bg-primary me-2">Bootstrap</span>
              </div>

              <h4>Результаты:</h4>
              <p>
                Создан удобный сервис для заказа традиционных пирогов, 
                который увеличил продажи пекарни на 40% и расширил 
                географию доставки.
              </p>

              <div className="project-links mt-5">
                <a href="#" className="btn btn-primary me-3">
                  🎯 Демо проекта
                </a>
                <a href="#" className="btn btn-outline-primary">
                  📁 Исходный код
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент для страницы проектировщиков
export function DesignersPage() {
  return (
    <div className="project-page">
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-primary mb-4">
          ← Назад к портфолио
        </Link>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="project-title mb-4">Оптимизация работы проектировщиков</h1>
            
            <div className="project-image mb-4">
              <img 
                src={process.env.PUBLIC_URL + "/images/photo_2.png"} 
                alt="Проект для проектировщиков" 
                className="img-fluid rounded"
              />
            </div>

            <div className="project-content">
              <h3>О проекте</h3>
              <p className="lead">
                Веб-приложение для автоматизации рутинных задач проектировщиков.
              </p>

              <h4>Основные функции:</h4>
              <ul className="feature-list">
                <li>📐 Автоматические расчеты и чертежи</li>
                <li>📋 Генерация технической документации</li>
                <li>🔄 Система версионности проектов</li>
                <li>👥 Коллаборативная работа над проектами</li>
                <li>📊 Визуализация данных и отчетов</li>
                <li>🔗 Интеграция с CAD-системами</li>
              </ul>

              <h4>Технологии:</h4>
              <div className="tech-tags mb-4">
                <span className="badge bg-primary me-2">Vue.js</span>
                <span className="badge bg-primary me-2">Python</span>
                <span className="badge bg-primary me-2">Django</span>
                <span className="badge bg-primary me-2">Three.js</span>
                <span className="badge bg-primary me-2">WebGL</span>
              </div>

              <h4>Результаты:</h4>
              <p>
                Приложение сократило время на рутинные задачи на 60%, 
                уменьшило количество ошибок в расчетах и улучшило 
                взаимодействие между членами проектных команд.
              </p>

              <div className="project-links mt-5">
                <a href="#" className="btn btn-primary me-3">
                  🎯 Демо проекта
                </a>
                <a href="#" className="btn btn-outline-primary">
                  📁 Исходный код
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}