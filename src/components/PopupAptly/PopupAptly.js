import React from 'react';
import '../PopupError/PopupError.css';

function PopupAptly(props) {

    return (
        <div className={`popup ${props.isAptly ? "popup_opened" : ""}`}>
            <h2 className="popup__title">Данные успешно обновлены</h2>
            <p className="popup__subtitle">Вы обновили данные профиля</p>
        </div>
    );
}

export default PopupAptly;