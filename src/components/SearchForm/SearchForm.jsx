import './SearchForm.css';
import React from 'react';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = React.useState(localStorage.keyword || '');
  const [isErrorVisible, setErrorVisible] = React.useState(false);

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    setErrorVisible(false);
    e.preventDefault();
    if (keyword) {
      onSubmit(keyword);
    } else {
      setErrorVisible(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__subtitle">
        Находите самые свежие статьи на любую тему
        и сохраняйте в своём личном кабинете.
      </p>
      <p className={`search-form__error ${isErrorVisible && 'search-form__error_visible'}`}>Нужно ввести ключевое слово</p>
      <div className="search-form__input-container">
        <input value={keyword} onChange={handleChange} className="search-form__input" placeholder="Введите тему новости" />
        <button className="search-form__btn" type="submit">Искать</button>
      </div>
    </form>
  );
}

export default SearchForm;
