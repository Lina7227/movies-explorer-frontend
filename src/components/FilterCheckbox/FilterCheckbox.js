import React from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    const location = useLocation();
    const locationMovies = location.pathname === "/movies";


    let checkboxClassName = `filter__other ${locationMovies && props.isChecked ? "filter__other_active" : "filter__other"} ${!locationMovies && props.isCheckedSaved ? "filter__other_active" : "filter__other"}`;

    function handleCheckbox() {
        props.changeChecked();
    }

    return (
        <div className="filter">
            <label className="filter__container">
                <input type="checkbox" className="filter__input" name="little-film" id="little-film" />
                <button
                    type="button"
                    checked={props.searchShortMovies}
                    aria-label="Отфильтровать короткометражки"
                    onClick={handleCheckbox}
                    className={checkboxClassName}>
                </button>
            </label>
            <p className="filter__text">Короткометражки</p>
        </div>
      );
}

export default FilterCheckbox;