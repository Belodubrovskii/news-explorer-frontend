import React from 'react';
import Popup from '../Popup/Popup';
import './Register.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({
  isOpen, onClose, changePopup, onRegister, errorMessage,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit() {
    onRegister(values);
  }

  return (
    <Popup
      isOpen={isOpen}
      value="Зарегистрироваться"
      linkTo="Войти"
      title="Регистрация"
      hasForm
      onClose={onClose}
      changePopup={changePopup}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">Email</label>
      <input
        onChange={handleChange}
        value={values.email || ''}
        className="popup__input popup__form-image-title"
        type="email"
        name="email"
        placeholder="Введите почту"
        required
      />
      <span className="popup__error">{errors.email || ''}</span>
      <label className="popup__label">Пароль</label>
      <input
        onChange={handleChange}
        value={values.password || ''}
        className="popup__input popup__form-image-link"
        name="password"
        type="password"
        placeholder="Введите пароль"
        minLength="6"
        pattern="^\S+$"
        required
      />
      <span className="popup__error">{errors.password || ''}</span>
      <label className="popup__label">Имя</label>
      <input
        onChange={handleChange}
        value={values.name || ''}
        className="popup__input"
        name="name"
        type="text"
        placeholder="Введите своё имя"
        minLength="2"
        maxLength="30"
        pattern="[А-ЯЁа-яёA-Za-z -]{1,}"
        required
      />
      <span className="popup__error">{errors.name || ''}</span>
      <span className="popup__error popup__error_general">{errorMessage}</span>
    </Popup>
  );
}

export default Register;
