import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';
import { useLocation } from 'react-router-dom';
import { LAPTOP_RESOLUTION,
         MOBILE_RESOLUTION, 
         MOVIES_RENDER_COUNT_LAPTOP, 
         MOVIES_RENDER_COUNT_MOBILE, 
         MOVIES_RENDER_COUNT_TABLET, 
         MOVIES_RENDER_LAPTOP, 
         MOVIES_RENDER_MOBILE, 
         MOVIES_RENDER_TABLET, 
         TABLET_RESOLUTION } from '../../utils/constants';

function MoviesCardList({ movies, saveMovie, deleteMovie, savedMovies, isSaved }) {
  const [height, width] = useResize();
  const [renderMovies, setRenderMovies] = useState(width <= MOBILE_RESOLUTION ? MOVIES_RENDER_TABLET : width < LAPTOP_RESOLUTION ? MOVIES_RENDER_TABLET : MOVIES_RENDER_LAPTOP);

  const location = useLocation()

  console.log(renderMovies)

  useEffect(() => {
    if (width >= LAPTOP_RESOLUTION) {
      setRenderMovies(MOVIES_RENDER_LAPTOP);
    } else if (width <= MOBILE_RESOLUTION) {
      setRenderMovies(MOVIES_RENDER_MOBILE);
    } else if (width <= TABLET_RESOLUTION) {
      setRenderMovies(MOVIES_RENDER_TABLET);
    }
  }, [width])
  
  function moreMovies() {
    if (width >= LAPTOP_RESOLUTION) {
      setRenderMovies((prev) => prev + MOVIES_RENDER_COUNT_LAPTOP);
    } else if (width <= MOBILE_RESOLUTION) {
      setRenderMovies((prev) => prev + MOVIES_RENDER_COUNT_MOBILE);
    } else if (width < LAPTOP_RESOLUTION) {
      setRenderMovies((prev) => prev + MOVIES_RENDER_COUNT_TABLET);
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