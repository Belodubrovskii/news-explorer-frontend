import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({name, loggedIn, onRegister}) {
  return (
    <div className="main">
      <div className="main__background-img">
        <Header name={name} loggedIn={loggedIn} onRegister={onRegister}/>
        <SearchForm />
      </div>
      <NewsCardList isMainPage={true} tooltip='Войдите, чтобы сохранять статьи' />
      <About />
    </div>
  );
}

export default Main;
