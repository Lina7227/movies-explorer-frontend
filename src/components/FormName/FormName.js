import React from 'react';
import { useLocation } from 'react-router-dom';
import '../FormPassword/FormPassword.css';

function FormName() {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";
    const [isCorrectly, setIsCorrectly] = React.useState(true);
    
    function handleChange() {

    }

    return (
        <div className="password__container">
            <label htmlFor="password" className={`label-password ${!islocationProfile ? "label-password_active" : ""}`}>Имя</label>
    
            <input 
            id="name" 
            name="name" 
            type="text" 
            className={`password__input ${!islocationProfile ? "password__input_active" : ""} ${!isCorrectly ? "password__input_error" : "" }`}
            required
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            />
            <span className={`password__error ${!isCorrectly ? "password__error_type_active" : "" }`}>Что-то пошло не так...</span>
        </div>
    );
}

export default FormName;