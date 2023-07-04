
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function Movies({ movies, saveMovie, deleteMovie, savedMovies }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedMovies');

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(movies);
    }
  }, [searchedMovies]);

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies]);

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
      localStorage.setItem('searchValue', searchValue);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    } else {
      filtered = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
      })
        
      setFilteredMovies(filtered);
      localStorage.setItem('searchValue', searchValue);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    }
  }

  return(
    <main>
      <section className='movies' aria-label='Фильмы'>
        <SearchForm
          movies={movies}
          filterMovies={filterMovies}
        />
        <MoviesCardList
          movies={filteredMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
        />
      </section>
    </main>
  )
}

export default Movies;