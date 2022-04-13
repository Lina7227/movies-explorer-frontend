import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies(props) {
    return (
        <section className="content movies">
            <SearchForm
                onMoviesSearch={props.onMoviesSearch}
                onMoviesFilter={props.onMoviesFilter}
                isIncludedFilter={props.isIncludedFilter}
            />
            { !props.isSearching && <Preloader /> }
            <MoviesCardList
                isVisibleMovies={props.isVisibleMovies}
                isAllMovies={props.isAllMovies}
                isErrorMovies={props.isErrorMovies}
                isSearching={props.isSearching}
                storedMovies={props.storedMovies}
                onOtherVisibleMovies={props.onOtherVisibleMovies}
                
            />
        </section>
    );
}

export default Movies;