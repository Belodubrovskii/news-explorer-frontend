import './SavedNews.css';
import React from 'react';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({
  onSignOut, onDelete, articles,
}) {
  return (
    <div className="saved-news">
      <Header loggedIn isBlackText onSignOut={onSignOut} />
      <SavedNewsHeader name="Грета" cardsNumber="7" articles={articles} />
      {articles.length > 0 && (
      <NewsCardList
        isMainPage={false}
        loggedIn
        tooltip="Убрать из сохранённых"
        onDelete={onDelete}
        articles={articles}
      />
      )}
    </div>
  );
}

export default SavedNews;
