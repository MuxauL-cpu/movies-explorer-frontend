import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function SavedMovies({ savedMovies, deleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const savedSearchedMovies = localStorage.getItem('savedSearchMovies');

  useEffect(() => {
    if (savedSearchedMovies) setFilteredMovies(JSON.parse(savedSearchedMovies));
  }, [savedSearchedMovies]);

  async function filterMovies(movies, searchValue, isShortMovie) {
    let filtered = [];

    if (isShortMovie) {
      filtered = movies.filter((shortMovie) => {
        return (
          shortMovie.duration <= SHORT_MOVIE_DURATION &&
          shortMovie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        );
      });

      setFilteredMovies(filtered);
      localStorage.setItem('savedSearchValue', searchValue);
      localStorage.setItem('savedSearchMovies', JSON.stringify(filtered));
    } else {
      filtered = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      });

      setFilteredMovies(filtered);
      localStorage.setItem('savedSearchValue', searchValue);
      localStorage.setItem('savedSearchMovies', JSON.stringify(filtered));
    }
  }

  return(
    <main>
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <SearchForm
          movies={savedMovies}
          filterMovies={filterMovies}
        />
        <MoviesCardList
          movies={filteredMovies}
          deleteMovie={deleteMovie}
        />
      </section>
    </main>
  );
}

export default SavedMovies;