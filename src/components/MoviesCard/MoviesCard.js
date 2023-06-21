import './MoviesCard.css';

function MoviesCard({ movie, savedMovie }) {
  return(
    <li className='movies-card'>
      <img className='movies-card__image' src={movie.thumbNail} alt={movie.nameRU} />
      <div className='movies-card__description'>
        <p className='movies-card__name'>
          {movie.nameRU}
        </p>
        {
          savedMovie
          ? <button className='movies-card__delete-button' />
          : <button className={`movies-card__like-button ${movie.isLiked ? 'movies-card__like-button_liked' : ''}`} />
        }
      </div>
      <p className='movies-card__duration'>
        {movie.duration}
      </p>
    </li>
  );
}

export default MoviesCard;