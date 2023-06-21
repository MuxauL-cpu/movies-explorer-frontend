import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies }) {
  const [height, width] = useResize();
  const location = useLocation();

  const [isSavedMovie, setSavedMovie] = useState(false);

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
  }, [location.pathname])

  console.log(isSavedMovie)

  return(
    <ul className='movies-card-list'>
      {
        width <= 768 ?
        getMovies(movies).slice(0, 8).map((movie) => {
          return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
        })
        : width <= 500 ?
        getMovies(movies).slice(0, 5).map((movie) => {
          return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
        }) : 
        getMovies(movies).map((movie) => {
          return <MoviesCard movie={movie} key={movie.movieId} savedMovie={isSavedMovie} />
        })
      }
    </ul>
  );
}

export default MoviesCardList;