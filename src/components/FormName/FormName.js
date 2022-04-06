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
        <div className="info__container">
            <label htmlFor="name" className={`info__label ${!islocationProfile ? "info__label_active" : ""}`}>Имя</label>
    
            <input 
            id="name" 
            name="name" 
            type="text" 
            className={`info__input ${!islocationProfile ? "info__input_active" : ""} ${!isCorrectly ? "info__input_error" : "" }`}
            required
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            />
            <span className={`info__error ${!isCorrectly ? "info__error_active" : "" }`}>Что-то пошло не так...</span>
        </div>
    );
}

export default FormName;