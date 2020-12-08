import './Preloader.css';
import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__circle" />
      <p className="preloader__message">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
