import './SavedNewsHeader.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/currentUserContext';

function SavedNewsHeader({ articles }) {
  const currentUser = React.useContext(CurrentUserContext);
  const keywords = articles.reduce((res, item) => {
    res[item.keyword] = (res[item.keyword] || 0) + 1;
    return res;
  }, {});

  const keywordsArr = [];

  Object.keys(keywords).forEach((word) => {
    keywordsArr.push([word, keywords[word]]);
  });

  keywordsArr.sort((a, b) => b[1] - a[1]);
  const words = keywordsArr.map((item) => item[0].slice(0, 1).toUpperCase() + item[0].slice(1));

  let resultStr = '';

  if (words.length <= 3) {
    resultStr = words.join(', ');
  } else {
    resultStr = `${words[0]}, ${words[1]}`;
  }

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__subtitle">Сохранённые статьи</p>
      <h3 className="saved-news-header__greeting">{`${currentUser}, у вас ${articles.length} сохранённых статей`}</h3>
      { articles.length > 0 && (
      <p className="saved-news-header__keywords">
        По ключевым словам:&nbsp;
        <span className="saved-news-header__keywords_bold">
          {resultStr}
        </span>
        {words.length > 3
          && (
          <>
            <span> и&nbsp;</span>
            <span className="saved-news-header__keywords_bold">
              {words.length - 2}
              -м другим
            </span>
          </>
          )}
      </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
