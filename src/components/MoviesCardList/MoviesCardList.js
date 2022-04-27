import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const location = useLocation();
    const isLocationMovies = location.pathname === '/movies';
    const [visibleMovies, setVisibleMovies] = React.useState([]); // карточки, которые будут отображаться
    const [moviesCount, setMoviesCount] = React.useState(0); // количество карточек для отображения
    const [additionMovies, setAdditionMovies] = React.useState(0); // количество карточек которые добаляются
    const [buttonMoviesVisible, setButtonMoviesVisible] = React.useState(true); // кнопка добавления фильмов

    const movies= props.isChecked || props.isCheckedSaved ? props.searchShortMovies : props.movies;
 
    function handleMoviesCount() {
        if (document.documentElement.clientWidth > 800) {
            setMoviesCount(7);
            setAdditionMovies(7);
        } else if (document.documentElement.clientWidth > 500) {
            setMoviesCount(7);
            setAdditionMovies(2);
        } else {
            setMoviesCount(5);
            setAdditionMovies(1);
        }
    }

    React.useEffect(() => {
        handleMoviesCount();
    }, []);

    React.useEffect(() => {
        setVisibleMovies(movies.slice(0, moviesCount))
    },// eslint-disable-next-line
      [
        movies,
        moviesCount,
    ]);

    React.useEffect(() => {
        if(visibleMovies.length === movies.length) {
            setButtonMoviesVisible(false);
        } else {
            setButtonMoviesVisible(true);
        }
    },// eslint-disable-next-line
    [
        movies,
      visibleMovies,
    ]);

    React.useEffect(() => {
        const handleResizeWindow = () => {
            setTimeout(handleMoviesCount, 3000);
        }
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);

    function handleIsAddMovies() {
        setVisibleMovies(
            visibleMovies.concat(movies.slice(visibleMovies.length, visibleMovies.length + additionMovies))
        );
    }

    return (
        <section className="movies-list">

            <ul className="movies-list__table">
                {visibleMovies &&
                    visibleMovies.map((movie) => {
                        return (
                            <MoviesCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                isLiked={props.isLiked}
                                storedMovies={props.storedMovies}
                                name={movie.nameRU}
                                duration={movie.duration}
                                {...movie}
                                isChecked={props.isChecked}
                                onMoviesSaved={props.onMoviesSaved}
                                onDeleteMoviesSaved={props.onDeleteMoviesSaved}
                                handleMovieLike={props.handleMovieLike}
                                onGetMovies={props.onGetMovies}
                            />
                        );
                    })
                }
            </ul>
        
            {isLocationMovies && buttonMoviesVisible &&
                (
                    <button
                        type="button"
                        aria-label="Загрузить еще карточки"
                        onClick={handleIsAddMovies}
                        className="movies-list__button"
                    >Ещё</button>
                ) 
            }

        </section>
    );

}

export default MoviesCardList;