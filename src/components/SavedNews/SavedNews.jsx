import './SavedNews.css';
import React from 'react';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
  return (
    <div className="saved-news">
      <Header name="Грета" loggedIn isBlackText />
      <SavedNewsHeader name="Грета" cardsNumber="7" />
      <NewsCardList isMainPage={false} loggedIn tooltip="Убрать из сохранённых" />
    </div>
  );
}

export default SavedNews;
