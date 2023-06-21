
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import './Movies.css';

function Movies() {
  return(
    <section className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className='movies__button'>Ещё</button>
    </section>
  )
}

export default Movies;