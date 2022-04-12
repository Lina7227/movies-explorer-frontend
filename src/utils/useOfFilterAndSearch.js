import React from 'react';

function useOfFilterAndSearch({ isMovies, storedMovies, setErrorMovies, setIsSearching }) {

    const [searchedMovies, setSearchedMovies] = React.useState();
    const [searchValue, setSearchValue] = React.useState("");
    const [storageSearchValue, setStorageSearchValue] = React.useState("");
    const [searchedMoviesSaved, setSearchedMoviesSaved] =
    React.useState();
    const [isIncludedFilter, setIncludedFilter] = React.useState(null);
    const [isSavedMoviesFilterShort, setSavedMoviesFilterShort] =
    React.useState(null);
    const shortMovies = 40;

    function handleSearching(movie, moviesSearching) {
        const input = moviesSearching
      ? searchValue
      : storageSearchValue;
      return Object.values(movie).find((features) => {
          return (
              typeof features === "string" &&
              features.toLowerCase().uncludes(input.toLowerCase())
          );
      });
    }

    function handleFilterSearching(inputData, moviesSearching) {
        return (
            inputData &&
            inputData.filter((movie) =>
            handleSearching(movie, moviesSearching)
            )
        );
    }

    function handleFilterDuration(inputData) {
        return inputData.filter((movie) => movie.duration <= shortMovies);
    }

    function handlehMoviesSearc() {
        let isSearchedMovies = JSON.parse(localStorage.getItem("isSearchedMovies"));
        const inputData =
        isMovies.length !== 0
            ? isMovies
            : JSON.parse(localStorage.getItem("movies"));
        if (searchValue) {
            isSearchedMovies = handleFilterSearching(inputData, true);
        }
        if (
            isIncludedFilter &&
            isSearchedMovies &&
            isSearchedMovies.length !== 0
        ) {
            const filteredSearchedMovies = handleFilterDuration(isSearchedMovies);
            setSearchedMovies(filteredSearchedMovies);
        } else {
            searchValue &&
            localStorage.setItem("searchedMovies", JSON.stringify(isSearchedMovies));
            setSearchedMovies(isSearchedMovies);
        }
    }

    
    function handleSavedMoviesSearch() {
        setErrorMovies(false);
        const searchedSavedMovies = handleFilterSearching(storedMovies, false);
        if (isSavedMoviesFilterShort) {
        const savedMoviesFilteredSearched =
            handleFilterDuration(searchedSavedMovies);
            setSearchedMoviesSaved(savedMoviesFilteredSearched);
        } else {
            setSearchedMoviesSaved(searchedSavedMovies);
        }
    }

    function handleFilterMovies() {
        setIncludedFilter(!isIncludedFilter);
        localStorage.setItem("isIncludedFilter", !isIncludedFilter);
    }

    function handleSavedMoviesFilter() {
        setSavedMoviesFilterShort(!isSavedMoviesFilterShort);
        localStorage.setItem(
            "isSavedMoviesFilterShort",
            !isSavedMoviesFilterShort
        );
    }

    function handleSearchValue(movieSearched) {
        setSearchValue(movieSearched);
    }

    function handleStorageSearchValue(movieSearched) {
        setStorageSearchValue(movieSearched);
    }
    
    function clearMoviesSaved() {
        setStorageSearchValue("");
    }

    function handleSearchingFinish() {
        setIsSearching(true);
    }
    

    return {
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
    }    
}

export default useOfFilterAndSearch;