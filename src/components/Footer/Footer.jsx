import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/fb.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <nav className="footer__navigation">
        <ul className="footer__list footer__list_nav">
          <li className="footer__list-item">
            <Link to="/" className="footer__link">Главная</Link>
          </li>
          <li className="footer__list-item">
            <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          </li>
        </ul>
        <ul className="footer__list footer__list_social">
          <li className="footer__list-item">
            <a href="https://github.com/Belodubrovskii" className="footer__social-link">
              <img src={github} alt="github logo" className="footer__icon" />
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://vk.com/id21256290" className="footer__social-link">
              <img src={facebook} alt="facebook logo" className="footer__icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
