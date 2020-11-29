import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import menuWhite from '../../images/menu.svg';
import menuBlack from '../../images/menu-black.svg';
import closeBtn from '../../images/close.svg';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout-black.svg';

function Header(props) {

  const isDark = props.isBlackText;
  const [isNavBarVisible, setNavBarVisible] = React.useState(false);

  function toggleNavBar() {
    setNavBarVisible(!isNavBarVisible);
  }

  return (
    <header className={`header ${isDark ? 'header_light' : ''} ${isNavBarVisible ? 'header_dark' : ''}`}>
          <div className={`header__title ${(isDark && !isNavBarVisible) ? 'header__title_dark' : ''}`}>NewsExplorer</div>
          {isNavBarVisible
          ? <button onClick={toggleNavBar} className="header__menu-btn" style={{backgroundImage: `url(${closeBtn})`}}/>
          : <button onClick={toggleNavBar} className="header__menu-btn" style={{backgroundImage: `url(${isDark ? menuBlack : menuWhite})`}}/>
          }
        <div className={`header__overlay ${isNavBarVisible ? 'header__overlay_visible' : ''}`}>
        <div className={`header__nav-bar ${isNavBarVisible ? 'header__nav-bar_opened' : ''}`}
        >
          <NavLink exact to="/"
            className={`header__link ${isDark ? 'header__link_dark' : ''}`}
            activeClassName="header__link_active"
          >
            Главная
          </NavLink>
          <NavLink to="/saved-news"
            className={`header__link ${isDark ? 'header__link_dark' : ''}`}
            activeClassName="header__link_active-dark"
          >
            Сохранённые статьи
          </NavLink>
          <button onClick={props.onRegister} className={`header__button ${(isDark && !isNavBarVisible) ? 'header__button_dark' : ''}`}>
            <p className={`header__text ${(isDark && !isNavBarVisible) ? 'header__text_dark' : ''}`}>{props.loggedIn ? props.name : 'Авторизоваться'}</p>
            {props.loggedIn && <div className="header__img" style={{backgroundImage: `url(${(isDark && !isNavBarVisible) ? logoutBlack : logout})`}}/>}
          </button>
        </div>
        </div>
    </header>
  );
}

export default Header;
