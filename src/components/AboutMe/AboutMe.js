import React from 'react';
import './AboutMe.css';
import myFoto from '../../images/myFoto.jpg'

function AboutMe() {
    return(
        <section className="about-me block-section">
            <h2 className="about-me__title block-section__title">Студент</h2>
            <div className="about-me__block">
                <div className="about-me__block-info">
                    <h3 className="about-me__suttitle">Елена</h3>
                    <p className="about-me__text">Фронтенд разработчик, 31 год</p>
                    <article className="about-me__info">
                        Я родилась на Урале, но живу в Москве. По образованию историк. С февраля 2021 года начала интресоваться сферой IT, в частность frontend-разработкой. Спустя два месяца обучения на Яндекс Практикуме устроилась на работу верстальщиком в DiGITAL-агентство. Увлекаюсь путешествиями, спортом, книгами и музыкой. В дальнейшем хочу заниматься frontend-разработкой в интересных и полезных проектах.
                    </article>
                    <nav className="about-me__contacts">
                        <a
                            href="https://www.linkedin.com/in/linakricosheina7227/"
                            target="_blank"
                            className="about-me__link link-click"
                            rel = "noreferrer noopener">
                            <p className="about-me__link-text">Linkidin</p>
                        </a>
                        <a
                            href="https://github.com/Lina7227"
                            target="_blank"
                            className="about-me__link link-click"
                            rel = "noreferrer noopener">
                            <p className="about-me__link-text">GitHub</p>
                        </a>
                    </nav>
                </div>
                <img
                    className="about-me__image"
                    src={myFoto}
                    alt="фото студента"
                /> 
            </div>
            
        </section>
    );
}

export default AboutMe;