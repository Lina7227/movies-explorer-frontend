import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchFormError from '../SearchFormError/SearchFormError';
import './Movies.css';

function Movies(props) {

    
    return (
        <section className="content movies">
            <SearchForm
                searchMovies={props.searchMovies}
                searchShortMovies={props.searchShortMovies}
                messageSearchResult={props.messageSearchResult}
                setSearchMovies={props.setSearchMovies}
                setSearchShortMovies={props.setSearchShortMovies}
                setIsPreloader={props.setIsPreloader}
                isPreloader={props.isPreloader}
                setMessageSearchResult={props.setMessageSearchResult}
                onGetMovies={props.onGetMovies}
                changeChecked={props.changeChecked}
                isChecked={props.isChecked}
            />
            {props.isPreloader ? (
                <Preloader />
            ) : props.messageSearchResult ? (
                <SearchFormError messageSearchResult={props.messageSearchResult} />
            ) : props.movies.length ? (
                <MoviesCardList
                movies={props.movies}
                storedMovies={props.storedMovies}
                isChecked={props.isChecked}
                isLiked={props.isLiked}
                searchShortMovies={props.searchShortMovies}
                onMoviesSaved={props.onMoviesSaved}
                onDeleteMoviesSaved={props.onDeleteMoviesSaved}
                handleMovieLike={props.handleMovieLike}
                onGetMovies={props.onGetMovies}
                
                />
            ) : ""}
            
        </section>
    );
}

export default Movies;