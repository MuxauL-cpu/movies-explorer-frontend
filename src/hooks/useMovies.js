import { useCallback, useEffect, useState, useMemo } from "react";
import { moviesApi } from "../utils/MoviesApi";
import { SHORT_MOVIE_DURATION } from "../utils/constants";

export const useMovies = () => {
  const [state, setState] = useState({
    loading: false,
    movies: [],
    error: null,
  });

  const [search, setSearch] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    const handleFetchMovies = async () => {
      try {
        const movies = await moviesApi.getMovies();

        setState(state => ({
          ...state,
          movies,
        }));
      }
      catch (error) {
        setState(state => ({
          ...state,
          error: error.status,
        }));
      }
      finally {
        setState(state => ({
          ...state,
          loading: false,
        }));
      }

    };
    handleFetchMovies();
    // eslint-disable-next-line
  }, []);

  const filteredMovies = useMemo(() => {
    const { movies } = state;

    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameEN, nameRU, duration } = movie;

      const isSearched = search && (nameEN.includes(search) || nameRU.includes(search));
      const isShort = shortMovies && duration <= SHORT_MOVIE_DURATION;

      if (search && shortMovies) {
        if (isSearched && isShort) {
          result.push(movie);
        }
      }

      if (search && !shortMovies) {
        if (isSearched) {
          result.push(movie);
        }
      }

      if (!search && shortMovies) {
        if (isShort) {
          result.push(movie);
        }
      }
    }

    return result;
  },[search, shortMovies, state]);

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked);
  }, []);


  //console.log({ state, filteredMovies, search, shortMovies });
  return {
    state,
    handleSetSearch,
    handleSetShortMovies,
  };
}