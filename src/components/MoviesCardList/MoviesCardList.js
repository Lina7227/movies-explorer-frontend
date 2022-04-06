import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import NoResult from '../NoResults/NoResult';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const location = useLocation();
    const isLocationMovies = location.pathname === '/movies';

    return (
        <section className="movies-list">
             {/* <NoResult /> */}

            <ul className="movies-list__table">
                {
                props.isMovies.map((movie) => {
                    return (
                        <MoviesCard
                            key={movie._id}
                            movie={movie}
                        />
                    );
                })
                }
            </ul>
            
            {isLocationMovies && !props.allMovies &&
                <button
                    type="button"
                    aria-label="Загрузить еще карточки"
                    onClick={props.onSeeMovies}
                    className="movies-list__button"
                >Ещё</button>
            }
        </section>
    );

}

export default MoviesCardList;