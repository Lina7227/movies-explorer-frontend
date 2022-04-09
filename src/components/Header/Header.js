import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
    const location = useLocation();
    const islocationBasic = location.pathname === "/";
    const islocationPrivateIn = location.pathname === "/sign-in";
    const islocationPrivateUp = location.pathname === "/sign-up";

    return(
        <header className={`header ${islocationBasic ? "header_type_grey" : ""} ${(islocationPrivateIn || islocationPrivateUp) ? "header_type_private" : ""}`}>
            <NavLink className="header__logo-click" to={"/"}>
            <img
            className="header__logo"
            src={logo}
            alt="Логотип"
          />
            </NavLink>
            {!(islocationPrivateIn || islocationPrivateUp) && <Navigation islogOn={props.islogOn} />}
        </header>
    );
}

export default Header;