import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
// import movies from '../../utils/movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupError from '../PopupError/PopupError';
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useDisplayMovies from '../../utils/useDisplayMovies';
import useDeviceResize from '../../utils/useDeviceResize';
import useOfFilterAndSearch from '../../utils/useOfFilterAndSearch';
import useSavedAndDeleteMovies from '../../utils/useSavedAndDeletemovies';
import usePopupError from '../../utils/usePopupError';
import usePersonalProfile from '../../utils/usePersonalProfile';
import './App.css';


function App() {
  const [islogOn, setlogOn] = React.useState(false);
  const [isMovies, setIsMovies] = React.useState([]);
  const [storedMovies, setStoredMovies] = React.useState([]);
  // const [allMovies, setAllMovies] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(null);
  const [isErrorMovies, setErrorMovies] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isFormDisabled, setFormDisabled] = React.useState(false);
  const navigate = useNavigate();
  
  
  const {
    isError,
    handleErrorVisible,
  } = usePopupError();

  const {
    width,
    checkDeviceWidth,
    changeDeviceWidth,
  } = useDeviceResize();

  const {
    searchedMovies,
    searchValue,
    storageSearchValue,
    searchedMoviesSaved,
    isIncludedFilter,
    isSavedMoviesFilterShort,
    setSearchedMovies,
    setSearchValue,
    setIncludedFilter,
    setSavedMoviesFilterShort,
    handlehMoviesSearc,
    handleSavedMoviesSearch,
    handleFilterMovies,
    handleSavedMoviesFilter,
    handleSearchValue,
    handleStorageSearchValue,
    clearMoviesSaved,
    handleSearchingFinish,
  } = useOfFilterAndSearch({ isMovies, storedMovies, setErrorMovies, setIsSearching });

  const {
    setMovies,
    saveOfMovies,
    getOfMoviesSaved,
    deleteOfMovieSaved,
  } = useSavedAndDeleteMovies({storedMovies, setIsMovies, setErrorMovies, setStoredMovies, handleErrorVisible})

  const {
    isVisibleMovies,
    isAllMovies,
    setIsVisibleMovies,
    handleVisibleMovies,
    handleResizeOfVisibleMovies,
    handleOtherVisibleMovies,
    countVisibleMovies,
  } = useDisplayMovies({ width, searchedMovies });

  const {
    isLoading,
    isAptly,
    handleIsToken,
    handleIsLogin,
    handleIsRegister,
    handleSignOut,
    handleUpdateProfile,
  } = usePersonalProfile(
    setlogOn, setCurrentUser,
    handleErrorVisible,
    setFormDisabled,
    currentUser,
    setIsMovies,
    setStoredMovies,
    setIsVisibleMovies,
    setSearchValue,
    setIncludedFilter,
    setIsSearching,
    setSearchedMovies
  );
  
  React.useEffect(() => {
    setIsMovies(JSON.parse(localStorage.getItem("movies")));
    checkDeviceWidth();
    changeDeviceWidth();
    setIncludedFilter(JSON.parse(localStorage.getItem("isIncludedFilter")) || false);
    setSavedMoviesFilterShort(JSON.parse(localStorage.getItem("isSavedMoviesFilterShort")) || false);
    setSearchValue("");
  },// eslint-disable-next-line
   []);

  React.useEffect(() => {
    isLoading && getOfMoviesSaved();
  },// eslint-disable-next-line
  [isLoading]
  );

  React.useEffect(() => {
    if (searchedMovies) {
      if (searchedMovies.length === 0) {
        setIsVisibleMovies(searchedMovies);
      } else {
        handleVisibleMovies()
      }
    }
  },// eslint-disable-next-line 
    [searchedMovies]
  );

  React.useEffect(() => {
    if (isVisibleMovies && isVisibleMovies.length !== 0) {
      countVisibleMovies();
    }
  }, // eslint-disable-next-line
    [isVisibleMovies]
  );

  React.useEffect(() => {
    searchedMovies && isVisibleMovies && handleResizeOfVisibleMovies();
  }, // eslint-disable-next-line
    [width]
  );

  React.useEffect(() => {
    searchValue && setMovies();
    ((isMovies && isMovies.length !== 0) || localStorage.getItem("movies") !== null) && handlehMoviesSearc();
  }, // eslint-disable-next-line
  [isMovies,
    isSavedMoviesFilterShort,
    searchValue,
  ]
  );

  React.useEffect(() => {
    if (Array.isArray(storedMovies)) {
      handleSavedMoviesSearch(storageSearchValue);
    }
  }, // eslint-disable-next-line
    [
    searchValue,
    storedMovies,
    isSavedMoviesFilterShort,
  ]);
  
  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header isLoading={isLoading} />
        
        <Routes>

          <Route exact path="/" element={<Main islogOn={islogOn} />}/>

          <Route
            exact
            path="/sign-up" 
            element={<Register
              onSubmit={handleIsRegister}
              isFormDisabled={isFormDisabled}
            />}
          />

          <Route
            exact
            path="/sign-in"
            element={<Login
              islogOn={islogOn}
              onSubmit={handleIsLogin}
              isFormDisabled={isFormDisabled}
            />}
          />
          
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            isLoading={isLoading}
            onUpdeteProfile={handleUpdateProfile}
            onSignOut={handleSignOut}
            isAptly={isAptly}
            isFormDisabled={isFormDisabled}
          />

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            islogOn={isLoading}
            isAllMovies={isAllMovies}
            isErrorMovies={isErrorMovies}
            isSearching={isSearching}
            storedMovies={storedMovies}
            isIncludedFilter={isIncludedFilter}
            isVisibleMovies={isVisibleMovies}
            onMoviesSearch={handleSearchValue}
            onMoviesFilter={handleFilterMovies}
            onOtherVisibleMovies={handleOtherVisibleMovies}
            onSeeMovies={handleOtherVisibleMovies}
            onSearchingFinish={handleSearchingFinish}
            saveOfMovies={saveOfMovies}
            deleteOfMovieSaved={deleteOfMovieSaved}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            islogOn={isLoading}
            isErrorMovies={isErrorMovies}
            isSavedMoviesFilterShort={isSavedMoviesFilterShort}
            isVisibleMovies={isVisibleMovies}
            storedMovies={storedMovies}
            onMoviesSearch={handleStorageSearchValue}
            onClearQuery={clearMoviesSaved}
            onMoviesFilter={handleSavedMoviesFilter}
            saveOfMovies={saveOfMovies}
            deleteOfMovieSaved={deleteOfMovieSaved}
          />

          <Route path="/404" element={<PageNotFound />}/>

          <Navigate replace to="/404" />
          
        </Routes>
        
        <Footer />
        <PopupError />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
