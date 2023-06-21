
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import './Movies.css';

function Movies() {
  return(
    <section className='movies' aria-label='Фильмы'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  )
}

export default Movies;