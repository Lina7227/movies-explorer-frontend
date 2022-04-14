import React from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    const location = useLocation();
    const locationMovies = location.pathname === "/movies";

    const [isCheckbox, setIsCheckbox ] = React.useState(false);

    let checkboxClassName = `filter__other ${isCheckbox ? "filter__other_active" : "filter__other"}`;

     function handleCheckbox() {
        props.onMoviesFilter();
        setIsCheckbox(!isCheckbox);
    }

    React.useEffect(() => {
        if (locationMovies) {
            props.isIncludedFilter ? setIsCheckbox(true) : setIsCheckbox(false);
        } else {
            props.handleSavedMoviesFilter ? setIsCheckbox(true) : setIsCheckbox(false);
        }
    },// eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    // function handleCheckbox() {
    //     isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
    // }

    return (
        <div className="filter">
            <label className="filter__container">
                <input type="checkbox" className="filter__input" name="little-film" id="little-film" value="true"/>
                <button
                    type="button"
                    value={isCheckbox}
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