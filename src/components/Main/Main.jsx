import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({
  loggedIn,
  onRegister,
  onSubmit,
  isLoading,
  isNotFound,
  articles, onSignOut, onSave, onDelete, checkArticles, myArticles, isErrorVisible, clearMessages,
}) {
  React.useEffect(() => {
    clearMessages();
  }, []);

  React.useEffect(() => {
    checkArticles(articles);
  }, [myArticles]);

  return (
    <div className="main">
      <div className="main__background-img">
        <Header
          loggedIn={loggedIn}
          onRegister={onRegister}
          isBlackText={false}
          onSignOut={onSignOut}
        />
        <SearchForm onSubmit={onSubmit} />
      </div>
      {isLoading && <Preloader />}
      {isNotFound && <NotFound isErrorVisible={isErrorVisible} />}
      {articles.length > 0
        && (
        <NewsCardList
          isMainPage
          tooltip="Войдите, чтобы сохранять статьи"
          articles={articles}
          loggedIn={loggedIn}
          onSave={onSave}
          onDelete={onDelete}
        />
        )}
      <About />
    </div>
  );
}

export default Main;
