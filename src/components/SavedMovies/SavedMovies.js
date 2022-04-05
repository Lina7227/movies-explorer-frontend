import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({isMovies}) {
    return (
        <section className="content movies-saved">
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList isMovies={isMovies} />
        </section>
    );
}

export default SavedMovies;