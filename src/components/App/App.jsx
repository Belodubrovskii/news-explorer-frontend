import './App.css';
import React from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import SavedNews from '../SavedNews/SavedNews';
import getNews from '../../utils/NewsApi';
import {
  register, authorize, isTokenValid, saveArticle, deleteArticle, getSavedNews,
} from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/currentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('isLoggedIn'));
  const [currentUser, setCurrentUser] = React.useState(localStorage.currentUser || '');
  const [registerPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [messagePopupOpen, setMessagePopupOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isNotFound, setNotFound] = React.useState(false);
  const [articles, setArticles] = React.useState(JSON.parse(localStorage.getItem('articles')) || []);
  const [myArticles, setMyArticles] = React.useState(JSON.parse(localStorage.getItem('savedArticles')) || []);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);

  const history = useHistory();

  function clearLocalStorageAndSavedArticles() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('savedArticles');
    localStorage.removeItem('currentUser');
    setMyArticles([]);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      isTokenValid(jwt)
        .then((user) => {
          setCurrentUser(user.name);
          setLoggedIn(true);
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('currentUser', user.name);
        })
        .catch((err) => {
          console.log(err.message);
          localStorage.removeItem('jwt');
          clearLocalStorageAndSavedArticles();
          setLoggedIn(false);
        });
    } else {
      clearLocalStorageAndSavedArticles();
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      getSavedNews()
        .then((data) => {
          setMyArticles(data);
          localStorage.setItem('savedArticles', JSON.stringify(data));
        })
        .catch((err) => console.log(err.message));
    }
  }, [loggedIn]);

  function checkArticles(articlesToCheck) {
    const checkedArticles = articlesToCheck.map((article) => {
      const savedArticle = myArticles.find((a) => a.link === article.link);
      if (savedArticle) {
        return { ...article, isSaved: true, _id: savedArticle._id };
      }
      return { ...article, isSaved: false };
    });
    setArticles(checkedArticles);
  }

  function handleRegisterSubmit(values) {
    register(values)
      .then((res) => {
        if (res) {
          setRegisterPopupOpen(false);
          setMessagePopupOpen(true);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }

  function handleLoginSubmit(values) {
    authorize(values)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        setLoginPopupOpen(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    clearLocalStorageAndSavedArticles();
    setCurrentUser('');
    history.push('/');
    setLoggedIn(false);
  }

  function hadleSearchFormSubmit(keyword) {
    setArticles([]);
    setNotFound(false);
    setIsErrorVisible(false);
    setLoading(true);
    const keywordFormatted = keyword.slice(0, 1).toUpperCase() + keyword.slice(1).toLowerCase();
    getNews(keywordFormatted)
      .then((data) => {
        localStorage.setItem('keyword', keywordFormatted);
        if (data.articles.length === 0) {
          localStorage.setItem('articles', JSON.stringify([]));
          setNotFound(true);
          return;
        }
        const articlesWithImage = data.articles.filter((a) => a.urlToImage !== null);
        const articlesFormatted = articlesWithImage.map((article) => ({
          keyword: keywordFormatted,
          title: article.title,
          text: article.description,
          date: article.publishedAt,
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
        }));
        setArticles(articlesFormatted);
        checkArticles(articlesFormatted);
        localStorage.setItem('articles', JSON.stringify(articlesFormatted));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.setItem('articles', JSON.stringify([]));
        localStorage.setItem('keyword', keywordFormatted);
        setNotFound(true);
        setIsErrorVisible(true);
      })
      .finally(() => setLoading(false));
  }

  function clearMessages() {
    setNotFound(false);
  }
  function handleSaveArticle(article) {
    return saveArticle(article)
      .then((card) => {
        setMyArticles([...myArticles, card]);
        localStorage.setItem('savedArticles', JSON.stringify([...myArticles, card]));
      })
      .catch((err) => console.log(err.message));
  }

  function handleDeleteArticle(article) {
    return deleteArticle(article._id)
      .then(() => {
        const myNewArticles = myArticles.filter((a) => a._id !== article._id);
        setMyArticles(myNewArticles);
        localStorage.setItem('savedArticles', JSON.stringify(myNewArticles));
      })
      .catch((err) => console.log(err.message));
  }

  function handleRegisterClick() {
    setErrorMessage('');
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }

  function handleLoginClick() {
    setErrorMessage('');
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setMessagePopupOpen(false);
  }

  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setMessagePopupOpen(false);
  }

  React.useEffect(() => {
    function closePopup(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }

      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('click', closePopup);
    document.addEventListener('keydown', closePopup);
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main
              name={currentUser.name}
              loggedIn={loggedIn}
              onRegister={handleRegisterClick}
              onSubmit={hadleSearchFormSubmit}
              onSignOut={handleSignOut}
              isLoading={isLoading}
              isNotFound={isNotFound}
              articles={articles}
              onSave={handleSaveArticle}
              onDelete={handleDeleteArticle}
              checkArticles={checkArticles}
              myArticles={myArticles}
              isErrorVisible={isErrorVisible}
              clearMessages={clearMessages}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            onSignOut={handleSignOut}
            onDelete={handleDeleteArticle}
            articles={myArticles}
            loggedIn={loggedIn}
            loginPopupOpen={handleLoginClick}
          />
        </Switch>
        <Register
          onRegister={handleRegisterSubmit}
          isOpen={registerPopupOpen}
          onClose={closeAllPopups}
          changePopup={handleLoginClick}
          errorMessage={errorMessage}
        />
        <Login
          isOpen={loginPopupOpen}
          onClose={closeAllPopups}
          changePopup={handleRegisterClick}
          onLogin={handleLoginSubmit}
          errorMessage={errorMessage}
        />
        <Popup
          isOpen={messagePopupOpen}
          onClose={closeAllPopups}
          changePopup={handleLoginClick}
          title="Пользователь успешно зарегистрирован!"
          linkTo="Войти"
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
