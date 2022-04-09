import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return(
        <section className="project block-section">
            <h2 className="project__title block-section__title">О проекте</h2>
            <div className="project__container">
                <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="project__period">
                <p className="project__period-block">1 неделя</p>
                <p className="project__caption">Back-end</p>
                <p className="project__period-block project__period-block_type_grey">4 недели</p>
                <p className="project__caption">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;