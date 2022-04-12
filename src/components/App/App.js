import React from 'react';
import { Route, Routes, Redirect, useNavigate } from 'react-router-dom';
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
import useDisplayMovies from '../../utils/useDisplayMovies';
import useDeviceResize from '../../utils/useDeviceResize';
import useOfFilterAndSearch from '../../utils/useOfFilterAndSearch';
import './App.css';


function App() {
  const [islogOn, setlogOn] = React.useState(false);
  const [isMovies, setIsMovies] = React.useState([]);
  const [storedMovies, setStoredMovies] = React.useState([]);
  // const [allMovies, setAllMovies] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(null);
  const [isErrorMovies, setErrorMovies] = React.useState(null);
  const navigate = useNavigate();

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
    isVisibleMovies,
    isAllMovies,
    setIsVisibleMovies,
    handleVisibleMovies,
    handleResizeOfVisibleMovies,
    handleOtherVisibleMovies,
    countVisibleMovies,
  } = useDisplayMovies({ width, searchedMovies });

  
  function handleSignIn() {
    setlogOn(true);
    navigate.push("/movies");
  }

  function handleProfile() {}

  function handleSignUp() {
    handleSignIn();
  }

  function handleSignOut() {
    setlogOn(false);
    navigate.push("/");
  }

  React.useEffect(() => {
    setIsMovies(JSON.parse(localStorage.getItem("movies")));
  }, []);

  React.useEffect(() => {
    if (isVisibleMovies && isVisibleMovies.length !== 0) {
      countVisibleMovies();
    }
  }, [isVisibleMovies]);

  React.useEffect(() => {
    searchedMovies && isVisibleMovies && handleResizeOfVisibleMovies();
  }, [width]);
  
  return (
    <div className="page">
      <Header islogOn={islogOn} />
      
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/sign-up" element={<Register onSubmit={handleSignUp} />}/>
        <Route exact path="/sign-in" element={<Login onSubmit={handleSignIn} />}/>
        <Route exact path="/profile" element={<Profile onSubmit={handleProfile} onSignOut={handleSignOut} />}/>
        <Route exact path="/movies" element={<Movies isMovies={isMovies} allMovies={isVisibleMovies} onSeeMovies={handleOtherVisibleMovies} />}/>
        <Route exact path="/saved-movies" element={<SavedMovies isMovies={isMovies} />}/>

        <Route path="/404" element={<PageNotFound />}/>
      </Routes>
      
      <Footer />
      <PopupError />
    </div>
  );
}

export default App;
