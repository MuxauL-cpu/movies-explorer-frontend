import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ savedMovies, deleteMovie }) {
  const [movies, setMovies] = useState([])
  const [isShortMovie, setShortMovie] = useState(false);
  const toggle = localStorage.getItem('saveToggleButton');
  const filteredMovies = movies.filter((movie) => movie.duration < 40);

  useEffect(() => {
    if (isShortMovie) {
      setMovies(filteredMovies);
    } else {
      setMovies(savedMovies);
    }
  }, [isShortMovie, setShortMovie]);

  useEffect(() => {
    setMovies(savedMovies)
  }, [savedMovies])

  async function filterMovies(movies, searchValue, isShortMovie) {
    let filtered = [];

    if (isShortMovie) {
      filtered = movies.filter((movie) => {
        return movie.duration < 40;
      });

      setMovies(filtered);
      localStorage.setItem('savedSearchValue', searchValue);
      localStorage.setItem('savedShortSearchMovies', JSON.stringify(filtered));
    } else {
      filtered = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      });

      setMovies(filtered);
      localStorage.setItem('savedSearchValue', searchValue);
      localStorage.setItem('savedSearchMovies', JSON.stringify(filtered));
    }
  }

  async function toggleButton() {
    setShortMovie(!isShortMovie);
    localStorage.setItem('saveToggleButton', !isShortMovie);
    console.log(toggle)
  }

  return(
    <main>
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <SearchForm
          movies={savedMovies}
          setMovies={setMovies}
          filterMovies={filterMovies}
          onCheck={toggleButton}
        />
        <MoviesCardList movies={movies} deleteMovie={deleteMovie} />
      </section>
    </main>
  );
}

export default SavedMovies;