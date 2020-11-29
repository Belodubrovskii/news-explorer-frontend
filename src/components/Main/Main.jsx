import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ loggedIn, onRegister }) {
  return (
    <div className="main">
      <div className="main__background-img">
        <Header loggedIn={loggedIn} onRegister={onRegister} isBlackText={false} />
        <SearchForm />
      </div>
      <NewsCardList isMainPage tooltip="Войдите, чтобы сохранять статьи" />
      <About />
    </div>
  );
}

export default Main;
