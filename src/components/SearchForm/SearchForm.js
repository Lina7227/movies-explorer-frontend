import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchFormError from '../SearchFormError/SearchFormError';
import './SearchForm.css';

function SearchForm(props) {
    const location = useLocation();
    const isLocationMoviesSaved = location.pathname === "/saved-movies";

    const [isEmpty, setEmpty] = React.useState(false);
    const [searchedMovieValue, setSearchedMovieValue] = React.useState("");
    const [isClearQuery, setClearQuery] = React.useState(false);


    function handleSubmit(evt) {
        evt.preventDefault();
        const queryMovies = searchedMovieValue.trim();
        if (!isClearQuery) {
            if (queryMovies.length === 0) {
                setEmpty(true);
                setSearchedMovieValue("");
                setTimeout(() => setEmpty(false),4000);
            } else {
                setEmpty(false);
                props.onMoviesSearch(queryMovies);
                setClearQuery(true);
            }
        } else {
            setSearchedMovieValue("");
            setClearQuery(false);
            if (isLocationMoviesSaved) props.onClearQuery();
        }
    }

    function handleChange(evt) {
        setSearchedMovieValue(evt.target.value);
        setClearQuery(false);
        
        if (isLocationMoviesSaved && evt.target.value.length === 0) {
            setSearchedMovieValue("");
            setClearQuery(false);
            props.onClearQuery()
        }
    }

    return (
        <>
            <div className="form__desctop">
                <form
                    onSubmit={handleSubmit}
                    name="search-films" 
                    className="form-search">
                        <div className="search-films__container search-films__container_decktop">
                            <svg className="search-films__icon"></svg>
                            <input 
                            id="search" 
                            name="search"
                            type="text"
                            value={searchedMovieValue}
                            className="search-films__input"
                            required
                            minLength="2"
                            placeholder="Фильм"
                            onChange={handleChange}
                            />
                            <button
                                type="submit"
                                aria-label="Кнопка поиска фильмов"
                                className="search-films__submit"
                            >
                            </button>
                            <FilterCheckbox
                                onMoviesFilter={props.onMoviesFilter}
                                isIncludedFilter={props.isIncludedFilter}
                            />
                        </div>
                        <SearchFormError isEmpty={isEmpty} />
                </form>
            </div>
                
            <div className="form__modile">
                <form
                    onSubmit={handleSubmit}
                    name="search-films" 
                    noValidate
                    className="form-search">
                    <div className="search-films__container">
                        <svg className="search-films__icon"></svg>
                        <input 
                            id="search" 
                            name="search"
                            type="text"
                            value={searchedMovieValue}
                            className="search-films__input"
                            required
                            minLength="2"
                            placeholder="Фильм"
                            onChange={handleChange}
                            />
                        <button
                            type="submit"
                            aria-label="Кнопка поиска фильмов"
                            className="search-films__submit"
                        >
                        </button> 
                    </div>
                    <SearchFormError isEmpty={isEmpty} />
                    <FilterCheckbox 
                        onMoviesFilter={props.onMoviesFilter}
                        isIncludedFilter={props.isIncludedFilter}
                    />
                </form>
            </div>
        </>
        
    );
}

export default SearchForm;