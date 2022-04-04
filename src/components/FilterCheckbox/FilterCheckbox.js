import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter">
            <label className="filter__container">
                <input type="checkbox" className="filter__input" name="little-film" id="little-film" value="true"/>
                <span className="filter__other"></span>
            </label>
            <p className="filter__text">Короткометражки</p>
        </div>
      );
}

export default FilterCheckbox;