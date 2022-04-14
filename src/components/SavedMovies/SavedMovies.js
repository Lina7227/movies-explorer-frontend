import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies(props) {
    return (
        <section className="content movies-saved">
            <SearchForm
                onMoviesSearch={props.onMoviesSearch}
                onClearQuery={props.onClearQuery}
                onMoviesFilter={props.onMoviesFilter}
                isSavedMoviesFilterShort={props.isSavedMoviesFilterShort}
            />

            <MoviesCardList 
                isVisibleMovies={props.isVisibleMovies}
                storedMovies={props.storedMovies}
                isErrorMovies={props.isErrorMovies}
                saveOfMovies={props.saveOfMovies}
                deleteOfMovieSaved={props.deleteOfMovieSaved}
            />
        </section>
    );
}

export default SavedMovies;