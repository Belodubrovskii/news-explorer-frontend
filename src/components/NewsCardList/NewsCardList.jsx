import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  isMainPage, loggedIn, tooltip, articles, onSave, onDelete,
}) {
  const [index, setIndex] = React.useState(isMainPage ? 3 : articles.length);
  const [buttonDisabled, setButtonDisabled] = React.useState(!(articles.length > 3));

  function handleShowMore() {
    setIndex(index + 3);

    if (index + 3 >= articles.length) {
      setButtonDisabled(true);
    }
  }

  return (
    <section className="card-list">
      {isMainPage && <h2 className="card-list__title">Результаты поиска</h2>}
      <div className="card-list__container">
        {articles.slice(0, index).map((article) => (
          <NewsCard
            tooltip={tooltip}
            isMainPage={isMainPage}
            loggedIn={loggedIn}
            article={article}
            key={article.link}
            onSave={onSave}
            onDelete={onDelete}
          />
        ))}
      </div>
      {(isMainPage && !buttonDisabled) && <button onClick={handleShowMore} className="card-list__show-more-btn" type="button">Показать еще</button>}
    </section>
  );
}

export default NewsCardList;
