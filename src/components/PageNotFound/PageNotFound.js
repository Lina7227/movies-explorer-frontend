import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {

    return (
      <section className="content not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link className="not-found__text-link" to="/">Назад</Link>
        
      </section>  
    );
}

export default PageNotFound;