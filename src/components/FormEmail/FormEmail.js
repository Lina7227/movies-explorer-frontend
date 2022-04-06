import React from 'react';
import { useLocation } from 'react-router-dom';
import '../FormPassword/FormPassword.css';

function FormEmail() {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";
    const [isCorrectly, setIsCorrectly] = React.useState(true);
    
    function handleChange() {

    }

    return (
        <div className="info__container">
            <label htmlFor="email" className={`info__label ${!islocationProfile ? "info__label_active" : ""}`}>E-mail</label>
    
            <input 
            id="email" 
            name="email" 
            type="email" 
            className={`info__input ${!islocationProfile ? "info__input_active" : ""} ${islocationProfile ? "info__input_profile" : ""} ${!isCorrectly ? "info__input_error" : "" }`}
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            />
            <span className={`info__error ${!isCorrectly ? "pinfo__error_active" : "" }`}>Что-то пошло не так...</span>
        </div>
    );
}

export default FormEmail;