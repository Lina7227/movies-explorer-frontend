import React from 'react';
import './SearchFormError.css';

function SearchFormError(props) {

    return (
        <span
            className={`search-form-error ${
                props.messageSearchResult ? "search-form-error_active" : ""
            }`}
        >
            {props.messageSearchResult}
        </span>
    )
}

export default SearchFormError;