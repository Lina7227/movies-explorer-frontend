import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    register,
    login,
    signOut,
    setProfile,
    checkToken,
} from './MainApi';

function usePersonalProfile(
    setlogOn,
    setCurrentUser,
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
) {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isAptly, setIsAptly] = React.useEffect(false);

    function handleIsToken() {
        
        checkToken()
          .then((res) => {
            setCurrentUser(res);
            setlogOn(true);
            setIsLoading(true);
            setIsSearching(false);
            setIsVisibleMovies(false);
            setIsMovies([]);
            setStoredMovies([]);
            if (location.pathname === "/sign-up" || location.pathname === "/sign-in") {
                navigate.push("/movies");
            }
          })
          .catch((err) => {
              console.log(err);
          })
          .finally(()=> {
            setIsLoading(false)
            setFormDisabled(false)
          });
    }

    function handleIsLogin(data) {  
        login(data)
          .then(() => {
            handleIsToken();
            setFormDisabled(true);
          })
          .catch((err) => {
            handleErrorVisible(err);
          })
          .finally(()=> {
            setIsLoading(false)
            setFormDisabled(false)
          });
    }

    function handleIsRegister(data) {
        register(data)
          .then((res) => {
            setCurrentUser(res);
            handleIsLogin(data);
            setFormDisabled(true);
          })
          .catch((err) => {
            handleErrorVisible(err);
          })
          .finally(()=> {
            setIsLoading(false)
            setFormDisabled(false)
          });
    }

    
    function handleSignOut() {
        signOut(currentUser.email)
          .then(() => {
            setlogOn(false);
            setIsLoading(false);
            navigate.push("/");
            setIsMovies([]);
            setStoredMovies([]);
            setSearchedMovies([]);
            setCurrentUser({ email: "", password: "", name: "" });
            setSearchValue("");
            setIncludedFilter(false);
            localStorage.removeItem("isIncludedFilter");
            localStorage.removeItem("isSavedMoviesFilterShort");
            localStorage.removeItem("isSearchedMovies");
            localStorage.removeItem("movies");
          })
          .catch((err) => {
            handleErrorVisible(err);
          })
    }

    function handleUpdateProfile(user) {
        setProfile(user)
          .then((res) => {
            setCurrentUser(res);
            setFormDisabled(true);
            setIsAptly(true);
          })
          .catch((err) => {
            handleErrorVisible(err);
          })
          .finally(()=> {
            setIsAptly(false)
            setFormDisabled(false)
          });
    }

    return {
        isLoading,
        isAptly,
        handleIsToken,
        handleIsLogin,
        handleIsRegister,
        handleSignOut,
        handleUpdateProfile,
    }

}

export default usePersonalProfile;