import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return(
        <section className="portfolio block-section">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__table">
                <li className="portfolio__item">
                    <p className="portfolio__subtitle">Статичный сайт</p>
                    <a
                        className="portfolio__link link-click"
                        href="https://lina7227.github.io/how-to-learn/"
                        target="_blank"
                        rel = "noreferrer noopener"
                    >
                        <img className="portfolio__icon" alt="иконка перехода на проект" src={arrow}></img>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__subtitle">Адаптивный сайт</p>
                    <a
                        className="portfolio__link link-click "
                        href="https://lina7227.github.io/russian-travel/"
                        target="_blank"
                        rel = "noreferrer noopener"
                    >
                        <img className="portfolio__icon" alt="иконка перехода на проект" src={arrow}></img>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__subtitle">Одностраничное приложение</p>
                    <a
                        className="portfolio__link link-click "
                        href="https://github.com/Lina7227/react-mesto-api-full"
                        target="_blank"
                        rel = "noreferrer noopener"
                    >
                        <img className="portfolio__icon" alt="иконка перехода на проект" src={arrow}></img>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;