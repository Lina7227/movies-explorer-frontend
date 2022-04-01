import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageForm.css';

function PageForm(props) {
    const [buttonState, setButtonState] = React.useState(true);

    return (
        <div className={`auth ${props.logOnIn ? "auth__login" : ""}`}>
            <h2 className={`auth__welcome ${props.logOnIn ? "auth__welcome_login" : ""}`}>
                {props.title}
            </h2>
            <form
                onSubmit={props.onSubmit}
                name={`${props.name}`} 
                className="auth__form"
                noValidate>

                    {props.children}

                <button 
                    type="submit" 
                    className={`auth__button ${props.logOnIn ? "auth__button_active" : ""} ${!buttonState ? "auth__button_inactive" : ""}`}
                    disabled={!buttonState ? true : ""}>
                    {props.buttonText}
                </button>
                <div className="auth__redirect">
                    {props.logOnIn && <p className="auth__redirect-text">{props.textBottom}</p>}
                    <NavLink
                        onClick={props.redirectClick}
                        className={`auth__redirect-link ${
                            !props.logOnIn ? "auth__redirect-link_type_profile" : ""
                          }`}
                        to={props.onRedirectLink}
                    >
                        {props.textLinkRedirect}
                    </NavLink>
                </div>

            </form>
        </div>
    );
}

export default PageForm;