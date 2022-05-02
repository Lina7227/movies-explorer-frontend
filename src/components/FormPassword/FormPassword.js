import React from 'react';
import './FormPassword.css';

function FormPassword(props) {

    return (
        <div className="info__container">
            <label htmlFor="password" className={`info__label ${!props.isAuth ? "info__label_active" : ""}`}>Пароль</label>
    
            <input 
            id="password" 
            name="password" 
            type="password"
            value={props.values.password || ""}
            className={`info__input ${props.errors.password ? "info__input_error" : "" }`}
            required
            placeholder="Пароль"
            minLength="6"
            maxLength="20"
            onChange={props.handleChange}
            />
            <span className={`info__error ${props.errors.password ? "info__error_active" : "" }`}>{props.errors.password}</span>
        </div>
    );
}

export default FormPassword;