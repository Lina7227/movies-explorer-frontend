import React from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_SERVER_URL } from '../../utils/utils';
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();
    const isLocationMoviesSaved = location.pathname === '/saved-movies';
    const [isDelete, setIsDelete] = React.useState(false);
    const [isLiked, setLiked] = React.useState(props.movie.likes === undefined ? true : props.movie.likes);
    // console.log(props.movie)
    let cardSaveButtonClassName = `card__emotion ${isLiked ? "card__emotion_active" : "card__emotion"}`;

    function handleLike(){
        setLiked(() => props.movie.likes === false ? true : false);
        setIsDelete(() => isDelete === false ? true : false);
        props.onMoviesSaved(props.movie);
        props.handleMovieLike();
    }

    React.useEffect(() => {
        props.movie.likes = isLiked;
    },// eslint-disable-next-line 
    [isLiked, isDelete]);

    function handleDeleteSaved() {
        props.onDeleteMoviesSaved(props.movie);
        props.handleMovieLike();
        setLiked(() => props.movie.likes = false)
        setIsDelete(() => isDelete === false ? true : false);
        
    }

    function handleMovieLength() {
        const duration = {};
        duration['hours'] = Math.floor(props.movie.duration / 60);
        duration['minutes'] = props.movie.duration % 60;
        return duration;
    }

    return (
        <li

            className='card'>
            <div className="card__description">
                <div className="card__info">
                    <h2 className="card__title">{props.movie.nameRU}</h2>
                    <p className="card__length">{`${ handleMovieLength().hours !== 0 ? `${handleMovieLength().hours}ч ` : "" } ${handleMovieLength().minutes}м`}
                    </p>
                </div>
            
                { !isLocationMoviesSaved &&
                    <button
                    type="button"
                    aria-label="Кнопка добавления в сохраненные"
                    className={cardSaveButtonClassName}
                    onClick={handleLike}
                    ></button>
                }
                { isLocationMoviesSaved &&
                    <button
                    type="button"
                    aria-label="Кнобка удаления из сохраненных"
                    className={`card__close ${isDelete  ? "card__close_visible" : ""} `}

                    onClick={handleDeleteSaved}
                    ></button>
                }
            </div>
            <a
                href={props.movie.trailerLink || props.movie.trailer}
                target="_blank"
                className="card__trailer"                
                rel="noopener noreferrer"
            >
                <img
                    className="card__image"
                    src={`${!isLocationMoviesSaved ? MOVIES_SERVER_URL + props.movie.image.url : props.movie.image}`}
                    alt={props.movie.nameRU}/>
            </a>
      </li>
    );
}

export default MoviesCard;