import React from 'react';
import './Popup.css';

function Popup (props) {

  // React.useEffect(() => {

  //   function closePopup (evt) {
  //     if (evt.target.classList.contains('popup_opened')) {
  //       props.onClose();
  //     }

  //     if (evt.key === 'Escape') {
  //       props.onClose();
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
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      {props.hasForm
        ?
        <form onSubmit={props.onSubmit} className="popup__wrapper popup__wrapper_form" name={props.name}>
          <h4 className="popup__title">{props.title}</h4>
          {props.children}
          <input className="popup__submit-btn" type="submit" value={props.value} />
          <div className="popup__container">
            <p className="popup__text">или&nbsp;</p>
            <button onClick={props.changePopup} className="popup__link-btn" type="button">{props.linkTo}</button>
          </div>
          <button onClick={props.onClose} className="popup__close-button" type="button" />
        </form>
        :
        <div className="popup__wrapper">
          <h4 className="popup__title">{props.title}</h4>
          <button
            onClick={props.changePopup}
            className="popup__link-btn popup__link-btn_info-popup"
            type="button">
              {props.linkTo}
          </button>
          <button onClick={props.onClose} className="popup__close-button" type="button" />
        </div>
      }
    </section>
  );
}

export default Popup;
