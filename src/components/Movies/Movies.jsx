
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ movies, setMovies, saveMovie, deleteMovie, savedMovies }) {
  const [isShortMovie, setShortMovie] = useState(false);
  const toggle = localStorage.getItem('toggleButton');
  const filteredMovies = movies.filter((movie) => movie.duration < 40);

  useEffect(() => {
    if (isShortMovie) {
      setMovies(filteredMovies);
    } else {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, [isShortMovie, setShortMovie]);

  async function toggleButton() {
    setShortMovie(!isShortMovie);
    localStorage.setItem('toggleButton', isShortMovie);
    console.log(toggle);
  }

  async function filterMovies(movies, searchValue, isShortMovie) {
    let filtered = [];
    let sortFiltered = [];
    
    if (isShortMovie) {
      sortFiltered = movies.filter((shortMovie) => {
        return shortMovie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
    });

      setMovies(sortFiltered);
      localStorage.setItem('searchValue', searchValue);
      localStorage.setItem('shortMovies', JSON.stringify(sortFiltered));
    } else {
      filtered = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
      })
        
      setMovies(filtered);
      localStorage.setItem('searchValue', searchValue);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    }
  }

  return(
    <main>
      <section className='movies' aria-label='Фильмы'>
        <SearchForm
          movies={movies}
          setMovies={setMovies}
          onCheck={toggleButton}
          isShortMovie={isShortMovie}
          filterMovies={filterMovies}
        />
        <MoviesCardList
          movies={movies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
        />
      </section>
    </main>
  )
}

export default Movies;