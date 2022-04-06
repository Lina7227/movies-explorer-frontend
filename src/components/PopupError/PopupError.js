import React from 'react';
import './PopupError.css';

function PopupError() {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <div className={`popup ${isActive ? "popup_opened" : ""}`}>
            <h2 className="popup__title">Произошла ошибка</h2>
            <p className="popup__subtitle">Описание ошибки</p>
        </div>
    );
}

export default PopupError;
