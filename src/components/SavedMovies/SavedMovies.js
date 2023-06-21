import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import './SavedMovies.css';

function SavedMovies() {
  return(
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className='saved-movies__button'>Ещё</button>
    </section>
  );
}

export default SavedMovies;