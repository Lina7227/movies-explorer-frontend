import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { messageKeyWordMovies } from '../../utils/utils';


function SearchForm(props) { 
    function handelIsSearchMovies(evt) {
        props.setSearchMovies(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!props.searchMovies) {
            props.setMessageSearchResult(messageKeyWordMovies);
            return;
        }

        props.setIsPreloader(true);
        props.setMessageSearchResult(null);
        props.onGetMovies();

    }

    return (
        <>
            <div className="form__desctop">
                <form
                    onSubmit={handleSubmit}
                    name="search-films" 
                    className="form-search"
                    noValidate>
                        <div className="search-films__container search-films__container_decktop">
                            <svg className="search-films__icon"></svg>
                            <input 
                            id="search" 
                            name="search"
                            type="text"
                            value={props.searchMovies || ""}
                            className="search-films__input"
                            required
                            minLength="2"
                            placeholder="Фильм"
                            onChange={handelIsSearchMovies}
                            />
                            <button
                                type="submit"
                                aria-label="Кнопка поиска фильмов"
                                className="search-films__submit"
                            >
                            </button>
                            <FilterCheckbox
                                changeChecked={props.changeChecked}
                                onGetMovies={props.onGetMovies}
                                searchShortMovies={props.searchShortMovies}
                                setSearchShortMovies={props.setSearchShortMovies}
                                isChecked={props.isChecked}
                                isCheckedSaved={props.isCheckedSaved}
                            />
                        </div>  
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
                            value={props.searchMovies || ""}
                            className="search-films__input"
                            required
                            minLength="2"
                            placeholder="Фильм"
                            onChange={handelIsSearchMovies}
                            />
                        <button
                            type="submit"
                            aria-label="Кнопка поиска фильмов"
                            className="search-films__submit"
                        >
                        </button> 
                    </div>
                    <FilterCheckbox
                        changeChecked={props.changeChecked}
                        onGetMovies={props.onGetMovies}
                        searchShortMovies={props.searchShortMovies}
                        setSearchShortMovies={props.setSearchShortMovies}
                        isChecked={props.isChecked}
                        isCheckedSaved={props.isCheckedSaved}
                    />
                </form>
            </div>
        </>
        
    );
}

export default SearchForm;