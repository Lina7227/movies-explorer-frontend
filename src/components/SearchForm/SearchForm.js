import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    const [isMobile, setIsMobile] = React.useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <>
            {!isMobile &&
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
                        <FilterCheckbox />
                    </div>
                </form>
            }

            {/* {isMobile &&
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
            } */}
        </>
        
    );
}

export default SearchForm;