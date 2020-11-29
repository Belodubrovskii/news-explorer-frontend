import './SavedNewsHeader.css';
import React from 'react';

function SavedNewsHeader(props) {
  return (
    <div className="saved-news-header">
      <p className="saved-news-header__subtitle">Сохранённые статьи</p>
      <h3 className="saved-news-header__greeting">{`${props.name}, у вас ${props.cardsNumber} сохранённых статей`}</h3>
      <p className="saved-news-header__keywords">По ключевым словам:&nbsp;
        <span className="saved-news-header__keywords_bold">Природа, Тайга</span> и&nbsp;
        <span className="saved-news-header__keywords_bold">2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
