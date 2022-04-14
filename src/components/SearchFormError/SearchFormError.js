import React from 'react';
import './SearchFormError.css';

function SearchFormError({ isEmpty }) {

    return (
        <span
            className={`search-form-error${
                isEmpty ? "search-form-error_active" : ""
            }`}
        >
            Введите ключевое слово
        </span>
    )
}

export default SearchFormError;