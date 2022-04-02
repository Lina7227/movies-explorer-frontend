import React from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    const location = useLocation();
    const islocationBasic = location.pathname === "/";
    const islocationProfile = location.pathname === "/profile";
    const islocationMovies = location.pathname === "/movies";
    const islocationMoviesSaved = location.pathname === "/saved-movies";
    const islocationAllMovies = islocationMovies || islocationMoviesSaved || islocationProfile;
    const [isMenu, setMenu] = React.useState(false);
    const [isActiveMovies, setIsActiveMovies] = React.useState(false);
    const [isActiveMoviesSaved, setIsActiveMoviesSaved] = React.useState(false);
    const navigate = useNavigate();

    function handleBasic() {
        setMenu(false);
        navigate.push('/');
    }

    function handleSignIn() {
        setMenu(false);
    }    
    
    function handleProfile() {
    setMenu(false);
    }
    
    function handleMovies() {
        setMenu(false);
        setIsActiveMovies(true);
        setIsActiveMoviesSaved(false);
    }

    function handleSavedMovies() {
        setMenu(false);
        setIsActiveMovies(false);
        setIsActiveMoviesSaved(true);
    }

    function handleMenu () {
        setMenu(true);
    }

    function handleMenuClose() {
        setMenu(false);
    }

    return (
        <div className={`navigation ${isMenu ? "navigation__hidden navigation__visible" : ""} `}>
            <nav className={`navigate__block ${(!isMenu && islocationAllMovies) ? "navigation__block_inactive" : ""} ${isMenu ? "navigation__colunm" : ""}`} >

                {!props.islogOn && islocationBasic &&
                    <div className="navigation__container-auth">
                        <NavLink
                            className="navigation__nav-item"
                            to={"/sign-up"}>
                            Регистрация
                        </NavLink>
                        <NavLink
                            className="navigation__nav-item navigation__nav-item__button"
                            to={"/sign-in"}
                            onClick={handleSignIn}>
                            Войти
                        </NavLink>
                    </div>
                }

                {islocationAllMovies &&
                    <div className={`navigation__conteiner-centered ${isMenu ? "navigation__container-centered_type_column" : ""}`}>
                        <button
                            type="button"
                            aria-label="Кнопка закрытия меню"
                            className={`navigate__button-close ${isMenu ? "navigate__button-close_active" : ""}`}
                            onClick={handleMenuClose}>
                        </button>
                        <div className={`navigation__container-film ${isMenu ? "navigation__container-film_type_column" : ""}`}>
                            {isMenu && <NavLink onClick={handleBasic} className={`navigation__nav-item ${({ isActive }) => isActive && islocationBasic? "navigation__nav-item_type_column" : ""}`} to={"/"}>Главная</NavLink>}
                            <NavLink onClick={handleMovies} className={`navigation__nav-item ${isActiveMovies && !isMenu ? "navigation__nav-item_active" : "navigation__nav-item_type_column"}`} to={"/movies"}>Фильмы</NavLink>
                            <NavLink onClick={handleSavedMovies} className={`navigation__nav-item ${isActiveMoviesSaved && !isMenu ? "navigation__nav-item_active" : "navigation__nav-item_type_column"}`} to={"/saved-movies"}>Сохраненные фильмы</NavLink>
                        </div>
                        <div className={`navigation__container-office ${isMenu ? "navigation__container-office_type_column " : ""}`}>
                            <NavLink onClick={handleProfile} className="navigation__nav-item" to={"/profile"}>
                                Аккаунт
                            </NavLink>
                        </div>
                    </div>
                }

            </nav>

            {islocationAllMovies &&
                <div onClick={handleMenu} className= {`navigation__burger-menu ${isMenu ? "navigation__burger-menu_inactive" : ""}`}>
                <div className="navigation__burger-item"></div>
                <div className="navigation__burger-item"></div>
                <div className="navigation__burger-item"></div>
                </div>
            }
        </div>
    );
}

export default Navigation;