import { MOVIES_SERVER_URL, BASE_URL } from './utils';

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
          "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password
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
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
    .then(response => handleResponse(response));
}

// выход из профиля
export const signOut = () => {
    return fetch(`${BASE_URL}/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
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
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
            })
    })
    .then(response => handleResponse(response));
}

// проверка профиля
export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => handleResponse(response));
}

// проверка профиля
export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => handleResponse(response));
}


// сохранение фильма
export const saveMovie = (movie) => {
    
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            country: movie.country || movie.director,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: MOVIES_SERVER_URL+movie.image.url,
            trailerLink: movie.trailerLink || MOVIES_SERVER_URL+movie.image.url,
            thumbnail: MOVIES_SERVER_URL+movie.image.url,
            movieId: +movie.id,
            nameRU: movie.nameRU || movie.nameEN,
            nameEN: movie.nameEN || movie.nameRU,
        }),
    })
    .then(response => handleResponse(response));  
}

// получение сохраненных фильмов
export const getMoviesSaved = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => handleResponse(response));
}

// удаление сохраненного фильма
export const deleteMovieSaved = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => handleResponse(response));
  }