import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <>
            <div className="form__desctop">
                <form
                    onSubmit={handleSubmit}
                    name="search-films" 
                    noValidate
                    className="form-search">
                        <div className="search-films__container search-films__container_decktop">
                            <svg className="search-films__icon"></svg>
                            <input 
                            id="search" 
                            name="search" 
                            type="text" 
                            className="search-films__input"
                            required
                            placeholder="Фильм"
                            />
                            <button
                                type="submit"
                                aria-label="Кнопка поиска фильмов"
                                className="search-films__submit"
                            >
                            </button>
                            <FilterCheckbox />
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
                        className="search-films__input"
                        required
                        placeholder="Фильм"
                        />
                        <button
                            type="submit"
                            aria-label="Кнопка поиска фильмов"
                            className="search-films__submit"
                        >
                        </button> 
                    </div>
                    <FilterCheckbox />
                </form>
            </div>
        </>
        
    );
}

export default SearchForm;