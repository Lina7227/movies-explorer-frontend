import React from 'react';
import './Techs.css';

function Techs() {
    return(
        <section className="techs block-section">
            <h2 className="techs__title block-section__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="teachs__table">
                <li className="teachs__item">HTML</li>
                <li className="teachs__item">CSS</li>
                <li className="teachs__item">JS</li>
                <li className="teachs__item">React</li>
                <li className="teachs__item">Git</li>
                <li className="teachs__item">Express.js</li>
                <li className="teachs__item">mongoDB</li>
            </ul>
        </section>
    );

}

export default Techs;