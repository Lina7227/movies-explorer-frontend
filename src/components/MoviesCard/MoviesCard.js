import React from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();
    const isLocationMoviesSaved = location.pathname === '/saved-movies';

    const [isAddCard, setAddACardSaved ] = React.useState(false);
    const [isDelete, setIsDelete] = React.useState(false);
    let cardSaveButtonClassName = `card__emotion ${isAddCard ? "card__emotion_active" : "card__emotion"}`;

    function handleAddSaved() {
        isAddCard ? setAddACardSaved(false) : setAddACardSaved(true);
    }

    function handleDeleteSaved() {
        setAddACardSaved(false);
    }

    function handleDeleteButtonVisible() {
        setIsDelete(true);
        return ;
    }

    function handleDeleteeButtonHidden() {
        setIsDelete(false);
        return ;
    }

    function handleMovieLength() {
        const duration = {};
        duration['hours'] = Math.floor(props.movie.duration / 60);
        duration['minutes'] = props.movie.duration % 60;
        return duration;
    }

    return (
        <li onMouseOver={handleDeleteButtonVisible} onMouseLeave={handleDeleteeButtonHidden} className="card">
            <div className="card__description">
                <div className="card__info">
                    <h2 className="card__title">{props.movie.name}</h2>
                    <p className="card__length">{`${ handleMovieLength().hours !== 0 ? `${handleMovieLength().hours}ч ` : "" } ${handleMovieLength().minutes}м`}
                    </p>
                </div>
            
                { !isLocationMoviesSaved &&
                    <button
                    type="button"
                    aria-label="Кнопка добавления в сохраненные"
                    className={cardSaveButtonClassName}
                    onClick={handleAddSaved}
                    ></button>
                }
                { isLocationMoviesSaved &&
                    <button
                    type="button"
                    aria-label="Кнобка удаления из сохраненных"
                    className={`card__close ${(isDelete || isMobile) ? "card__close_visible" : "card__close_hidden"} `}
                    onClick={handleDeleteSaved}
                    ></button>
                }
            </div>
            <img className="movies-card__image" src={props.movie.link} alt={props.movie.name}/>
      </li>
    );
}

export default MoviesCard;