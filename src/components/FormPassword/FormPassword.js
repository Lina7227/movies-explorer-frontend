import React from 'react';
import './FormPassword.css';

function FormPassword(props) {
    const [isCorrectly, setIsCorrectly] = React.useState(true);
    const [onFocus, setOnFocus] = React.useState(false);
    
    function handleChange() {

    }

    function handleFocus() {
        setOnFocus(true);
    }

    function handleClean() {
        setOnFocus(false);
    }

    return (
        <label htmlFor="password" className="label-password">
            <div className={`label-password__container ${props.logOnIn ? "label-password__container_type_login" : ""} ${onFocus ? "abel-password__containler_type_active" : ""}`}>
                <p className={`label-password__title ${props.logOnIn ? "label-password__title_type_active" : ""}`}>Пароль</p>
                <input 
                id="password" 
                name="password" 
                type="password" 
                className={`label-password__input ${props.logOnIn ? "label-password__input_type_active" : ""} ${!isCorrectly ? "label-password__input_error" : "" }`}
                required
                minLength="6"
                maxLength="20"
                onBlur={handleClean}
                onChange={handleChange}
                onFocus={handleFocus}
                />
            </div>
            <span className={`label-password__error ${!isCorrectly ? "label-password__error_type_active" : "" }`}>Что-то пошло не так...</span>
        </label>
    );
}

export default FormPassword;