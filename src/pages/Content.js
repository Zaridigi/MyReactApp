import React from 'react';
import Slider from 'react-slick';
import './Content.css'; // Подключите стили

function Content() {
  const projects = [
    {
      id: 1,
      title: "Социальная сеть MomMeet",
      description: "Безопасная социальная сеть для организации встреч мам с детьми-ровесниками. Интерактивная карта с игровыми площадками, парками.",
      image: "/images/photo_2.png"
    },
    {
      id: 2,
      title: "Пекарня осетинских пирогов",
      description: "Интернет-магазин традиционных осетинских пирогов с доставкой. Онлайн-заказ, отслеживание выпечки, блог о культуре питания.",
      image: "/images/photo_3.jpg"
    },
    {
      id: 3,
      title: "Оптимизация работы проектировщиков",
      description: "Программа для автоматизации рутинных задач проектировщиков. Расчеты, чертежи, документация.",
      image: "/images/photo_2.png"
    }
  ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, // Убираем стрелки "Previous/Next"
  appendDots: dots => (
    <div style={{ bottom: '-40px' }}>
      <ul style={{ margin: '0px' }}>{dots}</ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px'
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px'
      }
    }
  ]
};

  return (
    <div id="blog" className="container text-center" style={{ marginTop: '30px', paddingTop: '80px' }}>
      <h2 className="section-title mb-5">Проекты</h2>

      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <div className="card mx-auto project-card">
              <img
                src={process.env.PUBLIC_URL + project.image}
                className="card-img-top"
                alt={project.title}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                  className="btn btn-primary mt-auto"
                >
                  Подробнее о проекте
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Content;
