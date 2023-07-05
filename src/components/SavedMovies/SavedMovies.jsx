import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function SavedMovies({ savedMovies, deleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const savedSearchedMovies = localStorage.getItem('savedSearchMovies');

  useEffect(() => {
    if (savedSearchedMovies) {
      setFilteredMovies(JSON.parse(savedSearchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [savedSearchedMovies]);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  async function filterMovies(movies, searchValue, isShortMovie) {
    let filtered = [];

    if (isShortMovie) {
      filtered = savedMovies.filter((shortMovie) => {
        return (
          shortMovie.duration <= SHORT_MOVIE_DURATION &&
          shortMovie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        );
      });

      setFilteredMovies(filtered);
      localStorage.setItem('savedSearchValue', searchValue);
      localStorage.setItem('savedSearchMovies', JSON.stringify(filtered));
    } else {
      filtered = savedMovies.filter((movie) => {
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
          movies={filteredMovies}
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