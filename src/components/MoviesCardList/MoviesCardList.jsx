import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies }) {
  const [height, width] = useResize();
  const location = useLocation();

  const [isSavedMovie, setSavedMovie] = useState(false);
  const [isMobileActive, setMobileActive] = useState(false);

  function getMovies(movies) {
    if (location.pathname === '/saved-movies') {
      return movies = movies.filter((savedMovie) => savedMovie.isLiked);
    } else {
      return movies;
    }
  }

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setSavedMovie(true);
    }
  }, [location.pathname]);

  return(
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
      {
          width <= 500 ?
          getMovies(movies).slice(0, 5).map((movie) => {
            return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
          }) : 
          width <= 768 ?
          getMovies(movies).slice(0, 8).map((movie) => {
            return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
          }) :
          getMovies(movies).map((movie) => {
            return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
          })
        }
      </ul>
      {
        width <= 500 ?
          getMovies(movies).length > 5 ?
            <button className='movies-cards__button'>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : width <= 768 ?
          getMovies(movies).length > 8 ?
            <button className='movies-cards__button'>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : width >= 1100 ?
          getMovies(movies).length > 15 ?
            <button className='movies-cards__button'>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : ''
        }
    </section>
  );
}

export default MoviesCardList;