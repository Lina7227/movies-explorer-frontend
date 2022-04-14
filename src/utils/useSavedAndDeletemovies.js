import { getMovies } from './MoviesApi';
import {
    saveMovie,
    getMoviesSaved,
    deleteMovieSaved,
} from './MainApi';

function useSavedAndDeleteMovies({ islogOn, storedMovies, setIsMovies, setErrorMovies, setStoredMovies, handleErrorVisible }) {

    function setMovies() {
        if (localStorage.getItem("movies") === null) {
            getOfMovies();
        }
    }

    function getOfMovies() {
        getMovies()
          .then((res) => {
              setIsMovies(res);
              localStorage.setItem("movies", JSON.stringify(res));
              setErrorMovies(false);
          })
          .catch((err) => {
              setErrorMovies(true);
          })
    }

    function saveOfMovies(movie) {
        saveMovie(movie)
          .then((newMovie) => {
              setStoredMovies([...storedMovies, newMovie]);
          })
          .catch((err) => {
              handleErrorVisible(err);
          })
    }

    function getOfMoviesSaved() {
        getMoviesSaved()
          .then((res) => {
              setStoredMovies(res);
          })
          .catch((err) => {
              if (islogOn !== null) {
                  handleErrorVisible(err);
              }
          })
    }

    function deleteOfMovieSaved(movieId) {
        deleteMovieSaved()
          .then(() =>{
              setStoredMovies(storedMovies.filter((evt) => evt.movieId !== movieId));
          })
          .catch((err) => {
              handleErrorVisible(err);
          })
    }

    return {
        setMovies,
        saveOfMovies,
        getOfMoviesSaved,
        deleteOfMovieSaved,
    }
    
    
}

export default useSavedAndDeleteMovies;