import './SearchForm.css';
import React from 'react';

function SearchForm(props) {
  return (
    <form className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__subtitle">Находите самые свежие статьи на любую тему
        и сохраняйте в своём личном кабинете.</p>
      <div className="search-form__input-container">
        <input className="search-form__input" placeholder="Введите тему новости" />
        <button className="search-form__btn">Искать</button>
      </div>
    </form>
  );
}

export default SearchForm;
