import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { SHORT_MOVIE_DURATION, TIMEOUT_DURATION } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, deleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const savedSearchedMovies = localStorage.getItem('savedSearchMovies');

  useEffect(() => {
    if (savedSearchedMovies) {
      setFilteredMovies(JSON.parse(savedSearchedMovies));
    } else {
      setFilteredMovies(localStorage.getItem('savedMovies'));
    }
  }, [savedSearchedMovies]);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  async function filterMovies(movies, searchValue, isShortMovie) {
    setLoading(true);

    setTimeout(() => {
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
      setLoading(false);
    }, !filteredMovies.length ? 0 : TIMEOUT_DURATION);
  }

  return(
    <main>
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <SearchForm
          movies={filteredMovies}
          filterMovies={filterMovies}
        />
        { loading ?
          <Preloader />
          :
          <MoviesCardList
            movies={filteredMovies}
            deleteMovie={deleteMovie}
          />
        }
      </section>
    </main>
  );
}

export default SavedMovies;