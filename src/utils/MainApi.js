export default class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then((res) => this._getResponse(res))
  }

  patchUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({name, email})
    })
    .then((res) => this._getResponse(res))
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    })
    .then((res) => this._getResponse(res))
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        movieId: movie.id,
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
        trailerLink: movie.trailerLink,
        year: movie.year,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      })
    })
    .then((res) => this._getResponse(res))
  }

  deleteSavedMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then((res) => this._getResponse(res))
  }
  
  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }
}