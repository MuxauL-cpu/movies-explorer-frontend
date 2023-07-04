import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, saveMovie, deleteMovie, savedMovies, isSaved }) {
  const [height, width] = useResize();
  const [renderMovies, setRenderMovies] = useState(16);

  const location = useLocation()

  useEffect(() => {
    if (width >= 1100) {
      setRenderMovies(16);
    } else if (width <= 500) {
      setRenderMovies(5);
    } else if (width <= 768) {
      setRenderMovies(8);
    }
  }, [width])
  
  function moreMovies() {
    if (width >= 1100) {
      setRenderMovies((prev) => prev + 4);
    } else if (width <= 500) {
      setRenderMovies((prev) => prev + 1);
    } else if (width < 768) {
      setRenderMovies((prev) => prev + 2);
    }
  }

  return(
    <section className='movies-cards'>
      { movies.length > 0 ?
        <ul className='movies-cards__list'>
        { 
          movies.slice(0, renderMovies).map((movie) => {
            return <MoviesCard
                      movie={movie}
                      key={`${location.pathname.includes('/saved-movies') ? movie.movieId : movie.id}`}
                      saveMovie={saveMovie}
                      deleteMovie={deleteMovie}
                      savedMovies={savedMovies}
                      isSaved={isSaved}
                   />
          })
        }
        </ul>
        : <p className='movies-cards__not-found'>Ничего не найдено</p>
      }
      {
        width <= 500 ?
          movies.length > 5 && renderMovies < movies.length ?
            <button className='movies-cards__button' onClick={moreMovies}>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : width < 1100 ?
          movies.length > 8 && renderMovies < movies.length ?
            <button className='movies-cards__button' onClick={moreMovies}>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : width >= 1100 ?
          movies.length > 15 && renderMovies < movies.length ?
            <button className='movies-cards__button' onClick={moreMovies}>Ещё</button> :
            <button className='movies-cards__button movies-cards__button_inactive'>Ещё</button>
        : renderMovies === movies.length ? '' : ''
        }
    </section>
  );
}

export default MoviesCardList;