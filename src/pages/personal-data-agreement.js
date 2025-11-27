import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Добавьте импорт
import './personal.css';

export default function PersonalDataAgreement() {
  return (
    <>
      <Head>
        <title>Согласие на обработку персональных данных - ZARIDIGI</title>
        <meta name="description" content="Согласие на обработку персональных данных" />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Согласие на обработку персональных данных</h1>
            
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <section className="mb-4">
                  <p><strong>Я,</strong> субъект персональных данных, настоящим даю свое согласие на обработку моих персональных данных, указанных в форме обратной связи на сайте zaridigi.ru</p>
                </section>

                <section className="mb-4">
                  <h5>Перечень персональных данных:</h5>
                  <ul>
                    <li>Фамилия, имя</li>
                    <li>Адрес электронной почты</li>
                    <li>Текст сообщения</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5>Цели обработки:</h5>
                  <ul>
                    <li>Обработка входящих запросов</li>
                    <li>Предоставление обратной связи</li>
                    <li>Информирование о деятельности</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5>Способы обработки:</h5>
                  <p>Обработка может включать сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                </section>

                <section className="mb-4">
                  <h5>Срок действия согласия:</h5>
                  <p>Согласие действует до достижения целей обработки персональных данных или до отзыва согласия.</p>
                </section>

                <section className="mb-4">
                  <h5>Отзыв согласия:</h5>
                  <p>Я оставляю за собой право отозвать настоящее согласие, направив письменное уведомление по адресу электронной почты: zaridigi@mail.ru</p>
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