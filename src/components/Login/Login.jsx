import React from 'react';
import Popup from '../Popup/Popup';
import './Login.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({
  isOpen, onClose, changePopup, onLogin, errorMessage,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit() {
    onLogin(values);
  }

  return (
    <Popup
      isOpen={isOpen}
      value="Войти"
      linkTo="Зарегистрироваться"
      title="Вход"
      hasForm
      onClose={onClose}
      changePopup={changePopup}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">Email</label>
      <input
        onChange={handleChange}
        className="popup__input popup__form-image-title"
        type="email"
        name="email"
        value={values.email || ''}
        placeholder="Введите почту"
        required
      />
      <span className="popup__error">{errors.email || ''}</span>
      <label className="popup__label">Пароль</label>
      <input
        onChange={handleChange}
        value={values.password || ''}
        className="popup__input popup__form-image-link"
        type="password"
        name="password"
        pattern="^\S+$"
        minLength="6"
        placeholder="Введите пароль"
        required
      />
      <span className="popup__error">{errors.password || ''}</span>
      <span className="popup__error popup__error_general">{errorMessage}</span>
    </Popup>
  );
}

export default Login;
