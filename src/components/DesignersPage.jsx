jsx
import React from 'react';

function DesignersPage() {
  return (
    <div className="project-page">
      <h1>Проект: Оптимизация работы проектировщиков</h1>
      <p>Веб приложение для автоматизации расчётов, чертежей и документации.</p>
      <button onClick={() => window.history.back()}>Назад</button>
    </div>
  );
}

export default DesignersPage;
