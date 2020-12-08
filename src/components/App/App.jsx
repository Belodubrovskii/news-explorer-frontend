import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = React.useState({ name: 'Грета' });
  const [registerPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [messagePopupOpen, setMessagePopupOpen] = React.useState(false);

  function handleRegisterClick() {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }

  function handleLoginClick() {
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
      <Switch>
        <Route exact path="/">
          <Main name={currentUser.name} loggedIn={loggedIn} onRegister={handleRegisterClick} />
        </Route>
        <Route path="/saved-news">
          <SavedNews name={currentUser.name} />
        </Route>
      </Switch>
      <Register
        isOpen={registerPopupOpen}
        onClose={closeAllPopups}
        changePopup={handleLoginClick}
      />
      <Login isOpen={loginPopupOpen} onClose={closeAllPopups} changePopup={handleRegisterClick} />
      <Popup
        isOpen={messagePopupOpen}
        onClose={closeAllPopups}
        changePopup={handleLoginClick}
        title="Пользователь успешно зарегистрирован!"
        linkTo="Войти"
      />
      <Footer />
    </div>
  );
}

export default App;
