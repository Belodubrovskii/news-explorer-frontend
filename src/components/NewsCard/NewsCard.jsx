import './NewsCard.css';
import React from 'react';
import * as moment from 'moment';
import 'moment/locale/ru';

function NewsCard({
  tooltip, isMainPage, loggedIn, article, onSave, onDelete,
}) {
  const [isDisabled, setIsDisabled] = React.useState(false);

  function saveArticle() {
    setIsDisabled(true);
    onSave(article)
      .finally(() => setIsDisabled(false));
  }

  function deleteArticle() {
    onDelete(article);
  }

  return (
    <div className="card">
      <div className="card__container">
        {!isMainPage
          && (
          <div className="card__field category">
            <p className="card__field-text">{article.keyword}</p>
          </div>
          )}
        <div className="card__tooltip-container">
          {isMainPage
            ? (
              <button
                onClick={article.isSaved ? deleteArticle : saveArticle}
                type="button"
                className={`card__button card__save-icon ${article.isSaved ? 'card__save-icon_marked' : ''}`}
                disabled={!loggedIn || isDisabled}
              />
            )
            : (
              <button
                onClick={deleteArticle}
                className="card__button card__trash-icon"
                type="button"
                disabled={isDisabled}
              />
            )}
          {!(isMainPage && loggedIn)
            && (
            <div className="card__field tooltip">
              <p className={`card__field-text ${!isMainPage && 'card__field-text_saved-news'}`}>{tooltip}</p>
            </div>
            )}
        </div>
      </div>
      <img className="card__image" src={article.image} alt="article" />
      <a href={article.link} className="card__link">
        <p className="card__date">{moment(article.date).format('LL')}</p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__content">{article.text}</p>
        <p className="card__source">{article.source}</p>
      </a>
    </div>
  );
}

export default NewsCard;
