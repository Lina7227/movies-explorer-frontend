import React from 'react';
import './PopupError.css';

function PopupError(props) {

    return (
        <div className={`popup ${props.isActive ? "popup_opened" : ""}`}>
            <h2 className="popup__title">Произошла ошибка</h2>
            <p className="popup__subtitle">{props.textError}</p>
        </div>
    );
}

export default PopupError;
