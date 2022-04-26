import React from 'react';
import { useLocation } from 'react-router-dom';
import '../FormPassword/FormPassword.css';

function FormEmail(props) {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";    

    return (
        <div className="info__container">
            <label htmlFor="email" className={`info__label ${!props.isAuth ? "info__label_active" : ""}`}>E-mail</label>
    
            <input 
            id="email" 
            name="email" 
            type="email"
            value={props.values.email || ""}
            className={`info__input ${islocationProfile ? "info__input_profile" : ""} ${props.errors.email ? "info__input_error" : "" }`}
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="30"
            onChange={props.handleChange}
            />
            <span className={`info__error ${props.errors.email ? "info__error_active" : "" }`}>{props.errors.email}</span>
        </div>
    );
}

export default FormEmail;