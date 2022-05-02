import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../ProtectedRoute';
import './App.css';
import { getMovies } from '../../utils/MoviesApi'
import {
  register,
  login,
  signOut,
  setProfile,
  checkToken,
  getUser,
  saveMovie,
  getMoviesSaved,
  deleteMovieSaved,
} from '../../utils/MainApi';
import { messageErrorMovies, messageNotFound, DURATION_LENGTH, PAGE_WITHOUT_AUTH } from '../../utils/utils';
import { handleSearchMovies } from '../../hooks/useMovies';

function App() {
  const [islogOn, setlogOn] = React.useState(false); // авторизация
  const [isLoading, setIsLoading] = React.useState(false); // авторизация
  const [isAuth, setIsAuth] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({}); // текущий пользователь
  const [movies, setMovies] = React.useState([]); // фильмы, получаемые со стороннего сервера и отображаемые
  const [storedMovies, setStoredMovies] = React.useState([]); // сохраненные фильмы
  const [searchStoredMovies, setSearchStoredMovies] = React.useState([]); // сохраненные фильмы
  const [searchMovies, setSearchMovies] = React.useState(""); // фильмы, которые ищут на основной странице
  const [searchSavedMovies, setSearchSavedMovies] = React.useState(""); // фильмы, которые ищут среди сохраненных фильмов
  const [searchShortMovies, setSearchShortMovies] = React.useState(""); // короткометражки на главной странице
  const [ShortSavedMovies, setShortSavedMovies] = React.useState(""); // короткометражки у сохраненных
  const [isFormDisabled, setFormDisabled] = React.useState(false); // форма
  const [isPreloader, setIsPreloader] = React.useState(false); // прелоадер
  const [messageSearchResult, setMessageSearchResult] = React.useState(""); // сообщение о результатах поиска фильмов
  const [messageSearchSavedResult, setMessageSearchSavedResult] = React.useState(""); // сообщение о результатах поиска фильмов
  const [isChecked, setChecked] = React.useState(false); // чекбокс короткометражек на главной странице
  const [isCheckedSaved, setCheckedSaved] = React.useState(false); // чекбокс короткометражек на странице сохраненных фильмов
  const [isLiked, setLiked] = React.useState(false); // статус лайков
  const [isPopup, setPopup] = React.useState(false); // попап с результатами запросов
  const [isPopupText, setPopupText] = React.useState(""); // текст для попапа
  const history = useHistory();
  const location = useLocation();
  const isLocationMovies = location.pathname === '/movies';
  const isLocationSavedMovies = location.pathname === '/saved-movies';

  const userId = localStorage.getItem("id") || "";




  React.useEffect(() => {

    if (userId) {
      handleIsToken();
      PAGE_WITHOUT_AUTH.includes(location.pathname) ?
      history.push("/movies") : 
      history.push(location.pathname);
    }    
  }, // eslint-disable-next-line
  [userId, history, location.pathname]);
  
  React.useEffect(() => {
  

    if (isLoading === true) {
      getUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        }) 
      getMovies()
        .then((movies) => {
        movies.map((movie) => movie.likes = false)
        localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(err);
          setMessageSearchResult(messageErrorMovies);
        })
    }
    
  },// eslint-disable-next-line
  [isLoading]);

  React.useEffect(() => {
    if (isLoading === true) {
      getMoviesSaved()
        .then((event) => {
          setStoredMovies(event);
          localStorage.setItem("storedMovies", JSON.stringify(storedMovies));

        })
        .catch((err) => {
          console.log(err);
          setMessageSearchResult(messageErrorMovies);
        })
    }
  }, // eslint-disable-next-line
  [isLoading, isLocationSavedMovies]);

  const handleLocalStorageMovies = React.useCallback(() => {

    const resultMovies = JSON.parse(localStorage.getItem("resultMovies"));
    const searchedMovieWord = localStorage.getItem("searchedMovieWord");
    const searchShortMovies = JSON.parse(localStorage.getItem("searchShortMovies"));

    if (resultMovies) {
      setMovies(resultMovies);
    } else if (searchedMovieWord) {
      setSearchMovies(searchedMovieWord)
    } else 
    if (searchShortMovies) {
      setSearchShortMovies(searchShortMovies);
    }
    
  },// eslint-disable-next-line
  [setMovies, setSearchMovies, setSearchShortMovies]);

  React.useEffect(() => {
    handleLocalStorageMovies();
  },// eslint-disable-next-line
  [handleLocalStorageMovies]);

  function handleIsToken() {  
    checkToken()
      .then((user) => {
        setCurrentUser(user);
        setlogOn(true);
        setIsLoading(true);
      })
      .catch((err) => {
          console.error(err);
      })
      .finally(()=> setlogOn(false));
  }

  function handleIsLogin(data) {  
    login(data)
      .then((user) => {
        if (user.id) {
          localStorage.setItem("id", user.id);
          handleIsToken();
          setFormDisabled(true);   
        }
      })
      .catch((err) => {
        setPopup(true);
        if (err === "Ошибка: 401") setPopupText("Ошибка авторизации. Возможно вы не зарегистрированы или ввели неверные данные");
        setTimeout(() => setPopup(false), 2000);
      })
      .finally(()=> {
        setFormDisabled(false)
      });
  }

  function handleIsRegister(data) {
    register(data)
      .then((user) => {
        setCurrentUser(user);
        setFormDisabled(true);
        handleIsLogin(data);
      })
      .catch((err) => {
        setPopup(true);
        if (err === "Ошибка: 400") setPopupText("Переданы некорректные данные");
        if (err === "Ошибка: 409") setPopupText("Пользователь с таким E-mail уже существует");
        if (err === "Ошибка: 500") setPopupText("Ошибка сервера");
        setTimeout(() => setPopup(false), 2000);
      })
      .finally(()=> {
        setFormDisabled(false)
      });
  }

  function handleSignOut() {
    signOut();  
    setIsLoading(false);  
    history.push("/");
    localStorage.removeItem("id");
    localStorage.clear();
    setlogOn(false);
    setCurrentUser({});
    setMovies([]);
  }

  function handleUpdateProfile(user) {
    setProfile(user)
      .then((user) => {
        setCurrentUser(user);
        setFormDisabled(true);
        setPopup(true);
        setPopupText("Редактирование данных прошло успешно")
        setTimeout(() => setPopup(false), 2000);
      })
      .catch((err) => {
        setPopup(true);
        if (err === "Ошибка: 400") setPopupText("Переданы некорректные данные");
        if (err === "Ошибка: 409") setPopupText("Пользователь с таким E-mail уже существует");
        if (err === "Ошибка: 500") setPopupText("Запрос не может быть выполнен, возможно ошибка сервера.");
        setTimeout(() => setPopup(false), 2000);
      })
      .finally(()=> {
        setFormDisabled(false);
      });
  }




  // поиск фильмов 
  const getMoviesFilter = () => {
    if (isLocationMovies) {
      const newMovies = JSON.parse(localStorage.getItem("movies"));
      const handleMovies = handleSearchMovies(newMovies, searchMovies);

      if (handleMovies.length !== 0) {
          setMovies(handleMovies);
          localStorage.setItem("resultMovies", JSON.stringify(handleMovies));
          localStorage.setItem("searchedMovieWord", JSON.stringify(searchMovies));
        } else {
          setMessageSearchResult(messageNotFound);
        }
    } else { // поиск фильмов в saved-movies
      const newMovies = storedMovies;
      const handleMovies = handleSearchMovies(newMovies, searchSavedMovies);

      if (handleMovies.length !== 0) {
          setSearchStoredMovies(handleMovies);
        } else {
          setMessageSearchSavedResult(messageNotFound);
        }
      }
  }

  React.useEffect(() => {

    setSearchStoredMovies([]);
     
  }, // eslint-disable-next-line
  [!isLocationSavedMovies]);

  // фильтрация коротких фильмов на главной странице
  function handleDurationFilter(searchMovies) {
    
    return searchMovies.filter((movie) => {
        return movie.duration <= DURATION_LENGTH;
    })
  }

  // проверка checked 
  function changeChecked() {
    isLocationMovies ? setChecked(!isChecked) : setCheckedSaved(!isCheckedSaved) ;
  }

  React.useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
    if (isLocationMovies) { 
      if (isChecked){
        setSearchShortMovies(handleDurationFilter(movies));
        localStorage.setItem("searchShortMovies", JSON.stringify(searchShortMovies));
        
      } 
    } else {
        if (isCheckedSaved){
          setShortSavedMovies(handleDurationFilter(storedMovies));
        }
    }
      
  }, // eslint-disable-next-line
  [isChecked, isCheckedSaved]);


  // Для записи в локальное хранилище сохраненных фильмов
  React.useEffect(() => {
    localStorage.setItem("storedMovies", JSON.stringify(storedMovies));
    localStorage.setItem("resultMovies", JSON.stringify(movies));
    
    const newMovies = JSON.parse(localStorage.getItem("movies"));

    if (newMovies !== null) {
      
      for (const movie of newMovies) {
        for (const storedMovie of storedMovies){
            if ( movie.id === storedMovie.movieId) {
                movie.likes = true;
            }
        }
      }
      localStorage.setItem("movies", JSON.stringify(newMovies));
    }
  }, // eslint-disable-next-line
  [storedMovies, searchMovies]);
   
  // обработчик нажатия на кнопку like
  function handleMovieLike(){
    setLiked(()=> isLiked === false ? true : false)
  }

  // сохранение и удаление карточек на основной странице
  function handleMoviesSaved(likedMovie) {
    if(!likedMovie.likes){
      saveMovie(likedMovie)
        .then((newlikedMovie) => {
          setStoredMovies([newlikedMovie, ...storedMovies]);
        })
        .catch((err) => {
          console.log(err);
        })

    } else {
      const findedMovie = storedMovies.find((movie) => {
        return movie.movieId === likedMovie.id
      });

      deleteMovieSaved(findedMovie._id)
        .then(() => {
          setStoredMovies(storedMovies.filter((movie) => movie.movieId !== likedMovie.id));
          likedMovie.likes = false;
        })
        .catch((err) => {
          console.log(err);
        })    
        
    }
  }

  // удаление карточек на странице сохраненных фильмов
  function handleDeleteMoviesSaved(dislikedMovie) {

    let moviesArrow = [];

    if ( movies.length === 0) {
      moviesArrow = storedMovies;
      moviesArrow.find((movie) =>movie.movieId === dislikedMovie.movieId).likes = false;
    } else {
      moviesArrow = movies;
        if ( moviesArrow.find((movie) =>movie.id === dislikedMovie.movieId) === undefined) {
          moviesArrow = storedMovies;
          moviesArrow.find((movie) =>movie.movieId === dislikedMovie.movieId).likes = false;
        } else {
          moviesArrow.find((movie) =>movie.id === dislikedMovie.movieId).likes = false;
        }
    }

    // test2.likes = false;

    const findedMovie = storedMovies.find((movie) => {
      return movie.movieId === dislikedMovie.movieId
    });

    deleteMovieSaved(findedMovie._id)
    .then(() => {
      setStoredMovies(storedMovies.filter((movie) => movie.movieId !== dislikedMovie.movieId));
      localStorage.removeItem("storedMovies");
      setSearchStoredMovies(searchStoredMovies.filter((movie) => movie.movieId !== dislikedMovie.movieId));

    })
    .catch((err) => {
     console.log(err);
    })   
    
  }

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header islogOn={isLoading} />
        
        <Switch>

          <Route exact path="/">
            <Main islogOn={islogOn} />
          </Route>

          <Route exact path="/sign-up">
            <Register
              handleIsRegister={handleIsRegister}
              isFormDisabled={isFormDisabled}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
          </Route>

          <Route exact path="/sign-in">
            <Login
              islogOn={islogOn}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              handleIsLogin={handleIsLogin}
              isFormDisabled={isFormDisabled}
            />
          </Route>

          <ProtectedRoute
            exact
            islogOn={isLoading}
            setIsAuth={setIsAuth}
            path="/profile"
            component={Profile}
            onUpdateProfile={handleUpdateProfile}
            onSignOut={handleSignOut}
            isFormDisabled={isFormDisabled}
            setFormDisabled={setFormDisabled}
          />

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            islogOn={isLoading}
            isLiked={isLiked}
            movies={movies}
            storedMovies={storedMovies}
            isPreloader={isPreloader}
            searchMovies={searchMovies}
            searchShortMovies={searchShortMovies}
            messageSearchResult={messageSearchResult}
            setIsPreloader={setIsPreloader}
            setSearchMovies={setSearchMovies}
            setSearchShortMovies={setSearchShortMovies}
            setMessageSearchResult={setMessageSearchResult}
            onGetMovies={getMoviesFilter}
            isChecked={isChecked}
            onMoviesSaved={handleMoviesSaved}
            onDeleteMoviesSaved={handleDeleteMoviesSaved}
            handleMovieLike={handleMovieLike}
            changeChecked={changeChecked}

          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            islogOn={isLoading}
            isLiked={isLiked}
            movies={movies}
            storedMovies={storedMovies}
            searchStoredMovies={searchStoredMovies}
            isPreloader={isPreloader}
            searchSavedMovies={searchSavedMovies}
            searchShortMovies={ShortSavedMovies}
            messageSearchSavedResult={messageSearchSavedResult}
            setIsPreloader={setIsPreloader}
            setSearchSavedMovies={setSearchSavedMovies}
            setSearchShortMovies={setShortSavedMovies}
            setMessageSearchSavedResult={setMessageSearchSavedResult}
            onGetMovies={getMoviesFilter}
            isCheckedSaved={isCheckedSaved}
            onMoviesSaved={handleMoviesSaved}
            onDeleteMoviesSaved={handleDeleteMoviesSaved}
            handleMovieLike={handleMovieLike}
            changeChecked={changeChecked}

          />

          <Route path="*">
            <PageNotFound />
          </Route>
          
        </Switch>
        
        <Footer />
        <Popup isPopup={isPopup} isPopupText={isPopupText} />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;