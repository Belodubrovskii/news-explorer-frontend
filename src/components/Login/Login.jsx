import React from 'react';
import Popup from '../Popup/Popup';
import './Login.css';

function Login({ isOpen, onClose, changePopup }) {
  return (
    <Popup
      isOpen={isOpen}
      value="Войти"
      linkTo="Зарегистрироваться"
      title="Вход"
      hasForm
      onClose={onClose}
      changePopup={changePopup}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input popup__form-image-title"
        type="email"
        placeholder="Введите почту"
        required
      />
      <span className="popup__error popup__error_visible">Неправильный формат email</span>
      <label className="popup__label">Пароль</label>
      <input
        className="popup__input popup__form-image-link"
        type="password"
        placeholder="Введите пароль"
        required
      />
      <span className="popup__error popup__error_visible" />
      <span className="popup__error popup__error_visible popup__error_general">Такой пользователь уже есть</span>
    </Popup>
  );
}

export default Login;
