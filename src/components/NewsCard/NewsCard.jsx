import './NewsCard.css';
import React from 'react';

function NewsCard({
  category, tooltip, isMainPage, loggedIn,
}) {
  const [isSaved, setSaved] = React.useState(false);

  return (
    <div className="card">
      <div className="card__container">
        {!isMainPage
          && (
          <div className="card__field category">
            <p className="card__field-text">{category}</p>
          </div>
          )}
        <div className="card__tooltip-container">
          {isMainPage
            ? (
              <button
                onClick={() => { setSaved(!isSaved); }}
                type="button"
                className={`card__button card__save-icon ${isSaved ? 'card__save-icon_marked' : ''}`}
              />
            )
            : <button className="card__button card__trash-icon" type="button" />}
          {!(isMainPage && loggedIn)
            && (
            <div className="card__field tooltip">
              <p className="card__field-text">{tooltip}</p>
            </div>
            )}
        </div>
      </div>
      <img className="card__image" src="https://media.wired.com/photos/5fac6afb446b4639b3d5b8d8/191:100/w_1280,c_limit/Security-Microsoft-1229426260.jpg" alt="article" />
      <a href="https://nat-geo.ru/nature/lesnye-ogonki-istoriya-odnoj-fotografii/" className="card__link">
        <p className="card__date">2 августа, 2019</p>
        <h3 className="card__title">Лесные огоньки: история одной фотографии</h3>
        <p className="card__content">
          Фотограф отвлеклась от освещения суровой
          политической реальности Мексики, чтобы запечатлеть ускользающую красоту
          одного из местных чудес природы.
        </p>
        <p className="card__source">Афиша</p>
      </a>
    </div>
  );
}

export default NewsCard;
