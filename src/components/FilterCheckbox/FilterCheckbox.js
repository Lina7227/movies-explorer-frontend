import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    const [isCheckbox, setIsCheckbox ] = React.useState(false);

    let checkboxClassName = `filter__other ${isCheckbox ? "filter__other_active" : "filter__other"}`;

    function handleCheckbox() {
        isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
    }

    return (
        <div className="filter">
            <label className="filter__container">
                <input type="checkbox" className="filter__input" name="little-film" id="little-film" value="true"/>
                <button
                    type="button"
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