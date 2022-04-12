export const MOVIES_SERVER_URL  = "https://api.nomoreparties.co";
export const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://api.gallery-movies.nomoredomains.xyz"
  : "http://localhost:3000";

// возврат ответа сервера об ошибке
const handleResponse = (res) => {
    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

// регистрация
export const register = ({name, email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        }),
    })
    .then(response => handleResponse(response));
}

// вход в профиль
export const login = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
    .then(response => handleResponse(response));
}

// выход из профиля
export const signOut = (email) => {
    return fetch(`${BASE_URL}/signout`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
        }),
    })
    .then(response => handleResponse(response));
}

// редактирование профиля
export const setProfile = ({name, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
            })
    })
    .then(response => handleResponse(response));
}

// получение информации о пользователе
export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => handleResponse(response));
}

// сохранение фильма
export const saveMovie = (movie) => {
    const {
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
    } = movie;

    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: `${country}`,
            director: `${director}`,
            duration: +duration,
            year: `${year}`,
            description: `${description}`,
            image: `${MOVIES_SERVER_URL}${movie.image.url}`,
            trailer: `${trailerLink}`,
            nameRU: `${nameRU}`,
            nameEN: `${nameEN}`,
            thumbnail: `${MOVIES_SERVER_URL}${movie.image.formats.thumbnail.url}`,
            movieId: +movie.id,
        }),
    })
    .then(response => handleResponse(response));  
}

// получение сохраненных фильмов
export const getMoviesSaved = () => {
    return fetch(`${BASE_URL}/movies`, {
        credentials: "include",
    })
    .then(response => handleResponse(response));
}

// удаление сохраненного фильма
export const deleteMovieSaved = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        credentials: "include",
    })
    .then(response => handleResponse(response));
  }