import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <section className="card-list">
      {props.isMainPage && <h2 className="card-list__title">Результаты поиска</h2>}
      <div className="card-list__container">
        <NewsCard category='Природаsssssssssssssssssss' tooltip={props.tooltip} isMainPage={props.isMainPage} loggedIn={props.loggedIn}/>
        <NewsCard category='Природа' tooltip={props.tooltip} isMainPage={props.isMainPage} loggedIn={props.loggedIn}/>
        <NewsCard category='Природа' tooltip={props.tooltip} isMainPage={props.isMainPage} loggedIn={props.loggedIn}/>
        <NewsCard category='Природа' tooltip={props.tooltip} isMainPage={props.isMainPage} loggedIn={props.loggedIn}/>
      </div>
      {props.isMainPage && <button className="card-list__show-more-btn">Показать еще</button>}
    </section>
  );
}

export default NewsCardList;
