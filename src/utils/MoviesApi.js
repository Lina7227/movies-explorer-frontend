export const MOVIES_URL  = 'https://api.nomoreparties.co/beatfilm-movies';

// возврат ответа сервера об ошибке
const handleResponse = (res) => {
    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

// получение всех фильмов
export const getMovies = () => {
    return fetch(`${MOVIES_URL}`, {
    })
    .then(response => handleResponse(response));
}