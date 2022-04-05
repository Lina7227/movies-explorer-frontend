import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    const navigate = useNavigate();

    // function handleGoBack() {
    //     navigate.go();
    // }

    return (
      <section className="content not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button
                onClick={() => navigate(-1)}
                className="not-found__text-link"
            >
                Назад
            </button>
      </section>  
    );
}

export default PageNotFound;