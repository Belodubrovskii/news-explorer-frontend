import './NotFound.css';
import React from 'react';

function NotFound({ isErrorVisible }) {
  return (
    <div className="not-found">
      <div className="not-found__image" />
      { isErrorVisible
        ? (
          <p className="not-found__text">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )
        : (
          <>
            <p className="not-found__title">Ничего не найдено</p>
            <p className="not-found__text" style={{ maxWidth: '340px' }}>К сожалению по вашему запросу ничего не найдено.</p>
          </>
        )}
    </div>
  );
}

export default NotFound;
