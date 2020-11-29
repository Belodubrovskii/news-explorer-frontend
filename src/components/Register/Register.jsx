import React from 'react';
import Popup from '../Popup/Popup';
import './Register.css';

function Register({ isOpen, onClose, changePopup }) {
  return (
    <Popup
      isOpen={isOpen}
      value="Зарегистрироваться"
      linkTo="Войти"
      title="Регистрация"
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
      <label className="popup__label">Имя</label>
      <input
        className="popup__input"
        type="text"
        placeholder="Введите своё имя"
        required
      />
      <span className="popup__error popup__error_visible">Some error</span>
      <span className="popup__error popup__error_visible popup__error_general">Такой пользователь уже есть</span>
    </Popup>
  );
}

export default Register;
