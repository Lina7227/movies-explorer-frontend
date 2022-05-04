export const messageErrorMovies = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
export const messageNotFound = "К сожалению, по вашему запросу ничего не найдено.";
export const messageKeyWordMovies = "Нужно ввести ключевое слово";

export const MOVIES_SERVER_URL  = "https://api.nomoreparties.co";

export const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://diploma-gallery-movies.herokuapp.com/"
  : "http://localhost:3000";

export  const DURATION_LENGTH = 40;


export const PAGE_WITHOUT_AUTH = ["/sign-in", "/sign-up"];