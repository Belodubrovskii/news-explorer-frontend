import React from 'react';
import './Popup.css';

function Popup({
  isOpen, value, linkTo, title, hasForm, onClose, changePopup, children, onSubmit,
}) {
  // React.useEffect(() => {

  //   function closePopup (evt) {
  //     if (evt.target.classList.contains('popup_opened')) {
  //       onClose();
  //     }

  //     if (evt.key === 'Escape') {
  //       onClose();
  //     }
  //   }

  //   document.addEventListener('click', closePopup);
  //   document.addEventListener('keydown', closePopup);

  //   return () => {
  //     document.removeEventListener('click', closePopup);
  //     document.removeEventListener('keydown', closePopup);
  //   }
  // });

  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      {hasForm
        ? (
          <form onSubmit={onSubmit} className="popup__wrapper popup__wrapper_form">
            <h4 className="popup__title">{title}</h4>
            {children}
            <input className="popup__submit-btn" type="submit" value={value} />
            <div className="popup__container">
              <p className="popup__text">или&nbsp;</p>
              <button onClick={changePopup} className="popup__link-btn" type="button">{linkTo}</button>
            </div>
            <button onClick={onClose} className="popup__close-button" type="button" />
          </form>
        )
        : (
          <div className="popup__wrapper">
            <h4 className="popup__title">{title}</h4>
            <button
              onClick={changePopup}
              className="popup__link-btn popup__link-btn_info-popup"
              type="button"
            >
              {linkTo}
            </button>
            <button onClick={onClose} className="popup__close-button" type="button" />
          </div>
        )}
    </section>
  );
}

export default Popup;
