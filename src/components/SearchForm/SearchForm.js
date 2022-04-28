import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { messageKeyWordMovies } from '../../utils/utils';


function SearchForm(props) { 
    const location = useLocation();
    const isLocationMovies = location.pathname === '/movies';

    const [currentValue, setCurrentValue] = React.useState();
    const [isEmpty, setIsEmpty] = React.useState(true);

    
    function handelIsSearchMovies(evt) {
        setCurrentValue(evt.target.value)
        if (isLocationMovies) {
            props.setSearchMovies(evt.target.value);
        } else {
            props.setSearchSavedMovies(evt.target.value);
        }
    }

    React.useEffect(() => {
        if (!isLocationMovies) {
            if (currentValue === '' && isEmpty === true) {
                setIsEmpty(false)
            } else if (currentValue === '' && isEmpty === false) {
                props.onGetMovies();
            }
        }
    },// eslint-disable-next-line
    [currentValue, isEmpty]);

    function handleSubmit(evt) {
        
        evt.preventDefault();

        if (isLocationMovies) {
            if (!props.searchMovies ) {
                props.setMessageSearchResult(messageKeyWordMovies);
                return;
            }
        } else {
            if (!props.searchSavedMovies ) {
                props.setMessageSearchResult(messageKeyWordMovies);
                return;
            }
        }
        props.setMessageSearchResult(null);
        props.setIsPreloader(true);
        props.onGetMovies();
        setTimeout(() =>  props.setIsPreloader(false), 700);

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
                            value={isLocationMovies ? props.searchMovies || "" : props.searchSavedMovies || ""}
                            className="search-films__input"
                            required
                            minLength="1"
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
                            value={isLocationMovies ? props.searchMovies || "" : props.searchSavedMovies || ""}
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