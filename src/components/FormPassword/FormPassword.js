import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormPassword.css';

function FormPassword() {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";
    const [isCorrectly, setIsCorrectly] = React.useState(true);
    
    function handleChange() {

    }

    return (
        <div className="info__container">
            <label htmlFor="password" className={`info__label ${!islocationProfile ? "info__label_active" : ""}`}>Пароль</label>
    
            <input 
            id="password" 
            name="password" 
            type="password" 
            className={`info__input ${!islocationProfile ? "info__input_active" : ""} ${!isCorrectly ? "info__input_error" : "" }`}
            required
            placeholder="Пароль"
            minLength="6"
            maxLength="20"
            onChange={handleChange}
            />
            <span className={`info__error ${!isCorrectly ? "pinfo__error_active" : "" }`}>Что-то пошло не так...</span>
        </div>
    );
}

export default FormPassword;