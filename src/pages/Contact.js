import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Валидация формы
    if (!formData.name || !formData.email || !formData.message) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    try {
      // ЗАМЕНИТЕ ЭТОТ КОД НА РЕАЛЬНУЮ ОТПРАВКУ ЧЕРЕЗ EMAILJS
      const response = await send(
        'service_9cwz4wq',
        'template_rizwgaq',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError('');
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
    } catch (err) {
      setError('Нет связи с сервисом EmailJS. Проверьте подключение.');
      console.error('Ошибка EmailJS:', err);
    }
  };

  return (
    <section id="contact" className="contact-section py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center mb-4">
              <h2 className="section-title mb-3">Связь со мной</h2>
              <p className="lead mb-0">Есть идея, вопрос или просто хотите поздороваться?</p>
              <p className="lead mb-0">Пишите! Небольшая форма ниже поможет быстро связаться со мной</p>
            </div>

            <div className="contact-card">
              <div className="row align-items-start">
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

                <div className="col-md-8">
                  <div className="contact-form">
                    {isSubmitted ? (
                      <div className="alert alert-success">
                        <strong>Спасибо!</strong> Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        {error && (
                          <div className="alert alert-danger">
                            {error}
                          </div>
                        )}
                        
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
} // ← Эта фигурная скобка теперь закрывает компонент Contact

export default Contact; // ← Добавьте экспорт