export function handleSearchMovies(movies, wordKey) {

    movies = handleWordKeyFilter(movies, wordKey);

    return movies;

    function handleWordKeyFilter(movies, wordKey) {
        return movies.filter((movie) => {
			return (movie.nameRU || movie.nameEN).toLowerCase().includes(wordKey.toLowerCase());
		});
    }

}