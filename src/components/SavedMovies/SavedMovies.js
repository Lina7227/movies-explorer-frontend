import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchFormError from '../SearchFormError/SearchFormError';
import './SavedMovies.css';

function SavedMovies(props) {

    return (
        <section className="content movies">
            <SearchForm
                searchMovies={props.searchMovies}
                searchShortMovies={props.searchShortMovies}
                messageSearchResult={props.messageSearchResult}
                setSearchMovies={props.setSearchMovies}
                setSearchShortMovies={props.setSearchShortMovies}
                setIsPreloader={props.setIsPreloader}
                setMessageSearchResult={props.setMessageSearchResult}
                onGetMovies={props.onGetMovies}
                changeChecked={props.changeChecked}
                isCheckedSaved={props.isCheckedSaved}
                
            />
            {props.isPreloader ? (
                <Preloader />
            ) : props.messageSearchResult ? (
                <SearchFormError messageSearchResult={props.messageSearchResult} />
            ) : props.movies ? (
                <MoviesCardList
                movies={props.storedMovies}
                storedMovies={props.storedMovies}
                isCheckedSaved={props.isCheckedSaved}
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

export default SavedMovies;