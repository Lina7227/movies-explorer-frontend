import React from 'react';

function useDisplayMovies({ width, searchedMovies }) {
    const [isVisibleMovies, setIsVisibleMovies] = React.useState(null);
    const [isAllMovies, setIsAllMovies] = React.useState(false);
    
    const visibleMovies = {
        1280: 7,
        457: 5,
    };
      
    const addingVisibleMovies = {
        1280: 7,
        457: 2,
    };
  
    function handleVisibleMovies() {
        setIsVisibleMovies([
            ...searchedMovies.filter(
                (movie, index) => index < visibleMovies[width]
            ),
        ]);
    }

    function handleResizeOfVisibleMovies() {
        let visualMovies = isVisibleMovies.length;
        setIsVisibleMovies([]);
        if (visualMovies < visibleMovies[width]) {
            visualMovies = visibleMovies[width];
        } else {
            visualMovies = Math.ceil(visualMovies / addingVisibleMovies[width]) * addingVisibleMovies[width];
        }
        setIsVisibleMovies([
            ...searchedMovies.filter(
                (movie, index) => index < visualMovies
            ),
        ]);
    }
    
    function handleOtherVisibleMovies() {
        setIsVisibleMovies([
          ...isVisibleMovies,
          ...searchedMovies.filter(
            (movie, index) =>
              index >= isVisibleMovies.length &&
              index < isVisibleMovies.length + addingVisibleMovies[width]
          ),
        ]);
    }
    
    function countVisibleMovies() {
        if (isVisibleMovies.length === searchedMovies.length) {
            setIsAllMovies(true);
        } else {
            setIsAllMovies(false);
        }
    }
      
    return {
        isVisibleMovies,
        isAllMovies,
        setIsVisibleMovies,
        handleVisibleMovies,
        handleResizeOfVisibleMovies,
        handleOtherVisibleMovies,
        countVisibleMovies,
    }
}

export default useDisplayMovies;