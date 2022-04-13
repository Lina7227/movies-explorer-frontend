import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import NoResult from '../NoResults/NoResult';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const location = useLocation();
    const isLocationMovies = location.pathname === '/movies';

    React.useEffect(() => {
        if (isLocationMovies) {
            props.isErrorMovies && props.isSearching();
            props.isErrorMovies && props.isVisibleMovies === null && props.isSearching();
            props.isVisibleMovies !== null && props.isSearching();
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            props.isVisibleMovies,
            props.isErrorMovies
        ]
    );

    return (

        (props.isSearching || !isLocationMovies ) && (
            <section className="movies-list">

                { props.isErrorMovies === true && !isLocationMovies && (
                    <NoResult text={"К сожалению, во время запроса произошла ошибка. Попробуйте еще раз."}/>
                ) }

                { (isLocationMovies || props.storedMovies.length !== 0) && props.isErrorMovies === false && props.isVisibleMovies && props.isVisibleMovies.length === 0 && (
                    <NoResult text={"К сожалению, по вашему запросу ничего не найдено."}/>
                ) }

                { !isLocationMovies && props.storedMovies.length === 0 && props.isErrorMovies === false &&(
                    <NoResult text={"В вашем списке сохраненных фильмов ничего нет."}/>
                ) }


                <ul className="movies-list__table">
                    {props.isVisibleMovies &&
                        props.isVisibleMovies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={movie.id || movie.movieId}
                                    movie={movie}
                                    storedMovies={props.storedMovies}
                                />
                            );
                        })
                    }
                </ul>
            
                {isLocationMovies && !props.isAllMovies && props.isVisibleMovies && props.isVisibleMovies.length !== 0 && (
                        <button
                            type="button"
                            aria-label="Загрузить еще карточки"
                            onClick={props.onOtherVisibleMovies}
                            className="movies-list__button"
                        >Ещё</button>
                    ) 
                }

            </section>
        )
    );

}

export default MoviesCardList;