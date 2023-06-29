import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies';
import './SavedMovies.css';

function SavedMovies() {
  return(
    <main>
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <SearchForm />
        <MoviesCardList movies={movies} />
      </section>
    </main>
  );
}

export default SavedMovies;