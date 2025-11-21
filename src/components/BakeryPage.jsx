jsx
import React from 'react';

function BakeryPage() {
  return (
    <div className="project-page">
      <h1>Проект: Пекарня осетинских пирогов</h1>
      <p>Описание интернет магазина пирогов: заказ, доставка, блог о культуре питания.</p>
      <button onClick={() => window.history.back()}>Назад</button>
    </div>
  );
}

export default BakeryPage;

