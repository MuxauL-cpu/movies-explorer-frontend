import searchIcon from '../../images/search_icon.svg';
import findIcon from '../../images/find_icon.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ movies, setMovies, onCheck, filterMovies, isShortMovie }) {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/saved-movies')) {
      setSearchValue(localStorage.getItem('savedSearchValue'));
    } else if (location.pathname.includes('/movies')) {
      setSearchValue(localStorage.getItem('searchValue'));
    }
  }, [setSearchValue]);

  async function changeHandler(evt) {
    setSearchValue(evt.target.value);

    if (location.pathname.includes('/saved-movies')) {
      setMovies(movies);
    } else if (location.pathname.includes('/movies')) {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    filterMovies(movies, searchValue, isShortMovie);
    console.log(searchValue);
  }

  return(
    <div className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <img className='search-form__search-icon' src={searchIcon} alt='Лупа' />
        <input
          className='search-form__input'
          placeholder='Фильм'
          name='search'
          id='search'
          value={searchValue || ''}
          onChange={changeHandler}
        />
        <img className='search-form__find-icon' src={findIcon} alt='Кнопка поиска' />
      </form>
      <FilterCheckbox onCheck={onCheck} />
    </div>
  );
}

export default SearchForm;