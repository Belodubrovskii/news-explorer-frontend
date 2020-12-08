import './NotFound.css';
import React from 'react';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__image" />
      <p className="not-found__title">Ничего не найдено</p>
      <p className="not-found__text">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default NotFound;
