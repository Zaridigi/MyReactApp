jsx
import React from 'react';

function MomMeetPage() {
  return (
    <div className="project-page">
      <h1>Проект: MomMeet</h1>
      <p>Описание социальной сети для мам с детьми. Здесь можно рассказать подробно о функционале, технологиях, скриншотах и т. д.</p>
      <button onClick={() => window.history.back()}>Назад</button>
    </div>
  );
}

export default MomMeetPage;
