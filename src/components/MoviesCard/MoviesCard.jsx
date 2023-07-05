import { useLocation } from 'react-router-dom';
import durationConvert from '../../utils/durationConvert'
import './MoviesCard.css';
import useResize from '../../hooks/useResize';
import { MOBILE_RESOLUTION } from '../../utils/constants';

function MoviesCard({ movie, saveMovie, deleteMovie, savedMovies }) {
  const movieImage = `https://api.nomoreparties.co/${movie.image.url}`
  const savedMovieImage = movie.image;
  const location = useLocation();
  const savedMovie = savedMovies ? savedMovies.find((i) => i.movieId === movie.id) : '';
  const isSaved = savedMovies ? savedMovies.some((i) => i.movieId === movie.id) : false;
  const [height, width] = useResize();

  function handleSaveMovie(evt) {
    evt.preventDefault();

    saveMovie(movie, isSaved, savedMovie?._id);
  }

  function handleDeleteMovie(evt) {
    evt.preventDefault();

    deleteMovie(movie._id)
  }
  
  return(
    <li className='movies-card'>
      <a className='movies-card__image-container' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='movies-card__image'
          src={`${location.pathname.includes('/saved-movies') ? savedMovieImage : movieImage}`}
          alt={movie.nameRU}
        />
      </a>
      <div className='movies-card__description'>
        <p className='movies-card__name'>
          {movie.nameRU}
        </p>
        {
          location.pathname.includes('/saved-movies')
          ? <button
            className={`
              ${(width <= MOBILE_RESOLUTION) ? 'movies-card__delete-button movies-card__delete-button_mobile' : 'movies-card__delete-button'}
            `}
            onClick={handleDeleteMovie} />
          : <button
              className={`movies-card__like-button ${isSaved ? 'movies-card__like-button_liked' : ''}`}
              onClick={handleSaveMovie}
            />
        }
      </div>
      <p className='movies-card__duration'>
        {durationConvert(movie.duration)}
      </p>
    </li>
  );
}

export default MoviesCard;