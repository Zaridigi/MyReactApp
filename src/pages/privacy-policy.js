import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Добавьте импорт
import './personal.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности - ZARIDIGI</title>
        <meta name="description" content="Политика конфиденциальности и обработки персональных данных" />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Политика конфиденциальности</h1>
            
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <section className="mb-4">
                  <h5>1. Общие положения</h5>
                  <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных».</p>
                </section>

                <section className="mb-4">
                  <h5>2. Основные понятия</h5>
                  <p>Персональные данные - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.</p>
                </section>

                <section className="mb-4">
                  <h5>3. Цели обработки персональных данных</h5>
                  <ul>
                    <li>Обработка входящих запросов от пользователей</li>
                    <li>Предоставление обратной связи</li>
                    <li>Информирование о новых проектах и услугах</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5>4. Правовые основания обработки</h5>
                  <p>Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</p>
                </section>

                <section className="mb-4">
                  <h5>5. Состав персональных данных</h5>
                  <p>Имя, адрес электронной почты, текст сообщения.</p>
                </section>

                <section className="mb-4">
                  <h5>6. Сроки обработки персональных данных</h5>
                  <p>Персональные данные обрабатываются до достижения целей обработки.</p>
                </section>

                <div className="text-center mt-4">
                  <a href="/" className="btn btn-primary">Вернуться на главную</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}