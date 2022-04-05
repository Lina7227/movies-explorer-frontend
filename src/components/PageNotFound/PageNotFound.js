import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate.go();
    }

    return (
      <section className="content not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link
                onClick={handleGoBack}
                to={"/movies"}
                className="not-found__text-link"
            >
                Назад
            </Link>
      </section>  
    );
}

export default PageNotFound;