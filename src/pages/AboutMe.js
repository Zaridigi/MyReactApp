import React from 'react';

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
                    Я начинающий веб-разработчик, увлеченный созданием современных digital-решений
                  </p>
                  
                  <p>
                    Активно изучаю новые технологии и создаю свои первые проекты.  
                    Мне нравится превращать идеи в функциональные веб-приложения 
                    и постоянно совершенствовать свои навыки.
                  </p>

                  <div className="skills mt-4">
                    <h5>Технологии, которые я использую:</h5>
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

export default AboutMe;