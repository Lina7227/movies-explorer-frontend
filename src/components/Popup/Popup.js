import React from 'react';
import './Popup.css';

function Popup(props) {

    return (
        <div className={`popup ${props.isPopup ? "popup_opened" : ""}`}>
            <p className="popup__title">{props.isPopupText}</p>
        </div>
    );
}

export default Popup;
