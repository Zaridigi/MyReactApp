import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Добавьте эту строку
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    emailjs.init('qi12KMEWFdIMAOeTB');
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (error) setError('');
  }

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Пожалуйста, заполните все поля');
      setIsLoading(false);
      return;
    }

    if (!isAgreed) {
      setError('Необходимо согласие на обработку персональных данных');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Пожалуйста, введите корректный email');
      setIsLoading(false);
      return;
    }

    try {
      const response = await emailjs.send(
        'service_9cwz4wq',
        'template_rizwgaq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Зарина',
          reply_to: formData.email
        }
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setIsAgreed(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      console.error('Ошибка EmailJS:', err);
      setError('Ошибка отправки сообщения. Попробуйте позже или свяжитесь другим способом.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center mb-3">
              <h2 className="section-title mb-2">Связь со мной</h2>
              <p className="lead mb-1">Есть идея, вопрос или просто хотите поздороваться?</p>
              <p className="lead mb-2">Пишите! Небольшая форма ниже поможет быстро связаться со мной</p>
            </div>

            <div className="contact-card compact-card">
              <div className="row align-items-start">
                {/* Левая колонка - контакты */}
                <div className="col-md-4">
                  <div className="contact-info compact-info">
                    <h5 className="mb-2">Контакты</h5>
                    <div className="contact-item compact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <span>zaridigi@mail.ru</span>
                      </div>
                    </div>

                    <div className="social-links mt-2">
                      <h6 className="mb-1">Соцсети</h6>
                      <div className="social-icons compact-social">
                        <a href="https://github.com/Zaridigi" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                        <a href="https://t.me/ZariDigi" target="_blank" rel="noopener noreferrer" className="social-link">Telegram</a>
                        <a href="https://vk.com/id28841101" target="_blank" rel="noopener noreferrer" className="social-link">VK</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Правая колонка - форма */}
                <div className="col-md-8">
                  <div className="contact-form compact-form">
                    {isSubmitted ? (
                      <div className="alert alert-success compact-alert">
                        <strong>Спасибо!</strong> Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        {error && (
                          <div className="alert alert-danger compact-alert">
                            {error}
                          </div>
                        )}
                        
                        <div className="form-group compact-form-group">
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
                            disabled={isLoading}
                          />
                        </div>

                        <div className="form-group compact-form-group">
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
                            disabled={isLoading}
                          />
                        </div>

                        <div className="form-group compact-form-group">
                          <label htmlFor="message" className="form-label">Сообщение *</label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control compact-textarea"
                            rows="3"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Ваше сообщение..."
                            disabled={isLoading}
                          ></textarea>
                        </div>

                        {/* Согласие с двумя ссылками */}
                        <div className="agreement-section compact-agreement">
                          <div className="form-check">
                            <input
                              className="form-check-input agreement-checkbox"
                              type="checkbox"
                              id="agreement"
                              checked={isAgreed}
                              onChange={handleAgreementChange}
                              disabled={isLoading}
                            />
                            <label className="form-check-label" htmlFor="agreement">
                              Соглашаюсь с{' '}
                              <a 
  href="#/privacy-policy" 
  className="policy-link"
  target="_blank"
  rel="noopener noreferrer"
>
  Политикой конфиденциальности
</a>{' '}
                              и даю{' '}
                              <a 
  href="#/personal-data-agreement" 
  className="policy-link"
  target="_blank"
  rel="noopener noreferrer"
>
  согласие на обработку персональных данных
</a>
                            </label>
                          </div>
                        </div>

                        <button 
                          type="submit" 
                          className="btn btn-contact w-100 compact-btn"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Отправка...' : 'Отправить сообщение'}
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

export default Contact;