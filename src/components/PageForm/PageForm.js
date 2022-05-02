import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './PageForm.css';

function PageForm(props) {
    const location = useLocation();
    const islocationPrivateUp = location.pathname === "/sign-up";
    const islocationProfile = location.pathname === "/profile";
 
    return (
        <div className={`auth ${props.isAuth ? "auth__login" : ""}`}>
            <h2 className={`auth__welcome ${props.isAuth ? "auth__welcome_login" : ""} ${islocationProfile ? "auth__welcome_profile" : ""}`}>
                {props.title}
            </h2>
            <form
                onSubmit={props.onSubmit}
                name={`${props.name}`} 
                className="auth__form"
                disabled={props.isFormDisabled}
                noValidate>

                    {props.children}

                <button 
                    type="submit" 
                    className={`auth__button 
                    ${!props.isInputs ? "auth__button_active" : ""} 
                    ${!props.buttonState ? "auth__button_inactive" : ""} 
                    ${islocationPrivateUp ? "auth__button_active_up" : " "} 
                    ${islocationProfile ? "auth__button_profile" : "" }`}
                    disabled={!props.buttonState ? true : ""}>
                    {props.buttonText}
                </button>
                <div className="auth__redirect">
                    {props.isAuth && <p className="auth__redirect-text">{props.textBottom}</p>}
                    <NavLink
                        onClick={props.redirectClick}
                        className={`auth__redirect-link ${
                            !props.isAuth ? "auth__redirect-link_type_profile" : ""
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