import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({isMovies, allMovies, onSeeMovies}) {
    return (
        <section className="content movies">
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList isMovies={isMovies} allMovies={allMovies} onSeeMovies={onSeeMovies} />
        </section>
    );
}

export default Movies;