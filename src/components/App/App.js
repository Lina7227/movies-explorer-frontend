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
import movies from '../../utils/movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupError from '../PopupError/PopupError';
import './App.css';
let numberMovies = 0;



function App() {
  const [islogOn, setlogOn] = React.useState(false);
  const [isMovies, setIsMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState(false);
  const navigate = useNavigate();
  
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
    setIsMovies(movies.filter((movie, index) => index < 7));
  }, []);

  React.useEffect(()=>{
    countsSeeMovies();
  },[isMovies]);

  function handleSeeMovies() {
    numberMovies++;
    setIsMovies([
      ...isMovies,
      ...movies.filter(
        (movie, index) =>
          index >= (7 * numberMovies) && index < (7 * (numberMovies + 1))
      ),
    ]);
  }

  function countsSeeMovies() {
    if (setIsMovies.length === movies.length) setAllMovies(true);
  } 
  
  return (
    <div className="page">
      <Header islogOn={islogOn} />
      
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/sign-up" element={<Register onSubmit={handleSignUp} />}/>
        <Route exact path="/sign-in" element={<Login onSubmit={handleSignIn} />}/>
        <Route exact path="/profile" element={<Profile onSubmit={handleProfile} onSignOut={handleSignOut} />}/>
        <Route exact path="/movies" element={<Movies isMovies={isMovies} allMovies={allMovies} onSeeMovies={handleSeeMovies} />}/>
        <Route exact path="/saved-movies" element={<SavedMovies isMovies={isMovies} />}/>

        <Route path="/404" element={<PageNotFound />}/>
      </Routes>
      
      <Footer />
      <PopupError />
    </div>
  );
}

export default App;
