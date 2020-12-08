import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ isMainPage, loggedIn, tooltip }) {
  return (
    <section className="card-list">
      {isMainPage && <h2 className="card-list__title">Результаты поиска</h2>}
      <div className="card-list__container">
        <NewsCard category="Природаааааааааа" tooltip={tooltip} isMainPage={isMainPage} loggedIn={loggedIn} />
        <NewsCard category="Природа" tooltip={tooltip} isMainPage={isMainPage} loggedIn={loggedIn} />
        <NewsCard category="Природа" tooltip={tooltip} isMainPage={isMainPage} loggedIn={loggedIn} />
        <NewsCard category="Природа" tooltip={tooltip} isMainPage={isMainPage} loggedIn={loggedIn} />
      </div>
      {isMainPage && <button className="card-list__show-more-btn" type="button">Показать еще</button>}
    </section>
  );
}

export default NewsCardList;
