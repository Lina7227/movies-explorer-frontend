import React from 'react';
import { useLocation } from 'react-router-dom';
import '../FormPassword/FormPassword.css';

function FormName(props) {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";


    return (
        <div className="info__container">
            <label htmlFor="name" className={`info__label ${!props.isAuth ? "info__label_active" : ""}`}>Имя</label>
    
            <input 
            id="name" 
            name="name" 
            type="text"
            value={props.values.name || ""}
            className={`info__input ${islocationProfile  ? "info__input_profile" : ""} ${props.errors.name ? "info__input_error" : "" }`}
            required
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            onChange={props.handleChange}
            />
            <span className={`info__error ${props.errors.name ? "info__error_active" : "" }`}>{props.errors.name}</span>
        </div>
    );
}

export default FormName;