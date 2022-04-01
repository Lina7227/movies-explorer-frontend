import React from 'react';
import '../FormPassword/FormPassword.css';

function FormEmail(props) {
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
        <label htmlFor="email" className="label-password">
            <div className={`label-password__container ${props.logOnIn ? "label-password__container_type_login" : ""} ${onFocus ? "abel-password__containler_type_active" : ""}`}>
                <p className={`label-password__title ${props.logOnIn ? "label-password__title_type_active" : ""}`}>E-mail</p>
                <input 
                id="email" 
                name="email" 
                type="email" 
                className={`label-password__input ${props.logOnIn ? "label-password__input_type_active" : ""} ${!isCorrectly ? "label-password__input_error" : "" }`}
                required
                minLength="2"
                maxLength="30"
                onBlur={handleClean}
                onChange={handleChange}
                />
            </div>
            <span className={`label-password__error ${!isCorrectly ? "label-password__error_type_active" : "" }`}>Что-то пошло не так...</span>
        </label>
    );
}

export default FormEmail;