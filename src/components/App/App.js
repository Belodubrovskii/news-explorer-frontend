import './App.css';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Popup from '../Popup/Popup.js';
import SavedNews from '../SavedNews/SavedNews.js';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: 'Грета'});
  const [registerPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [messagePopupOpen, setMessagePopupOpen] = React.useState(false);

  function handleRegisterClick () {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  }

  function handleLoginClick () {
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setMessagePopupOpen(false);
  }

  function closeAllPopups () {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setMessagePopupOpen(false);
  }

  React.useEffect(() => {

    function closePopup (evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }

      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('click', closePopup);
    document.addEventListener('keydown', closePopup);

  },[]);


  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main name={currentUser.name} loggedIn={loggedIn} onRegister={handleRegisterClick}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews name={currentUser.name} loggedIn={loggedIn} isBlackText={true} />
        </Route>
      </Switch>
      <Register isOpen={registerPopupOpen} onClose={closeAllPopups} changePopup={handleLoginClick}/>
      <Login isOpen={loginPopupOpen} onClose={closeAllPopups} changePopup={handleRegisterClick}/>
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
