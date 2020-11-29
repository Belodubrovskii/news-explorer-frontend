import './SavedNews.css';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ name, loggedIn, isBlackText }) {
  return (
    <div className="saved-news">
      <Header name={name} loggedIn={true} isBlackText={true}/>
      <SavedNewsHeader name="Грета" cardsNumber="7"/>
      <NewsCardList isMainPage={false} loggedIn={true} tooltip='Убрать из сохранённых'/>
    </div>
  );
}

export default SavedNews;
