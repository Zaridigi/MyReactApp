import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function PersonalDataAgreement() {
  return (
    <div>
      <Menu />
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Согласие на обработку персональных данных</h1>
            
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p><strong>Дата предоставления согласия:</strong> {new Date().toLocaleDateString()}</p>
                
                <h3>Я даю свое согласие на обработку моих персональных данных:</h3>
                
                <ol>
                  <li>Фамилия, имя, отчество</li>
                  <li>Адрес электронной почты (e-mail)</li>
                  <li>Контактный телефон</li>
                  <li>Текст сообщения</li>
                </ol>
                
                <h3>Цели обработки персональных данных:</h3>
                <ul>
                  <li>Обработка входящих запросов физических лиц с целью оказания консультации</li>
                  <li>Аналитики действий физического лица на веб-сайте и функционирования веб-сайта</li>
                  <li>Проведения рекламных и новостных рассылок</li>
                </ul>
                
                <p>Настоящее согласие действует бессрочно...</p>
                
                <div className="text-center mt-4">
                  <Link to="/" className="btn btn-primary">Вернуться на главную</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalDataAgreement;