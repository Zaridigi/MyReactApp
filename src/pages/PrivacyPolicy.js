import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div>
      <Menu />
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Политика конфиденциальности</h1>
            
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3>1. Общие положения</h3>
                <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями законодательства...</p>
                
                <h3>2. Основные понятия</h3>
                <p>Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники...</p>
                
                <h3>3. Права субъекта персональных данных</h3>
                <p>Субъект персональных данных имеет право на получение информации, касающейся обработки его персональных данных...</p>
                
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

export default PrivacyPolicy;