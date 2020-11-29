import './About.css';
import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about__avatar" />
      <div className="about__info-container">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__info">Это блок с описанием автора проекта. Здесь следует указать,
          как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        <p className="about__info">Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
}

export default About;
