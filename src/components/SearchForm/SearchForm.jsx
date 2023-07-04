import searchIcon from '../../images/search_icon.svg';
import findIcon from '../../images/find_icon.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ movies, filterMovies }) {
  const [searchValue, setSearchValue] = useState('');
  const toggle = JSON.parse(localStorage.getItem('toggleButton'));
  const [isShortMovie, setShortMovie] = useState(toggle);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/saved-movies')) {
      setSearchValue(localStorage.getItem('savedSearchValue'));
    } else if (location.pathname.includes('/movies')) {
      setSearchValue(localStorage.getItem('searchValue'));
    }
  }, [setSearchValue]);

  async function toggleButton() {
    if (searchValue !== null) {
      setShortMovie(!isShortMovie);
      filterMovies(movies, searchValue, !isShortMovie);
      localStorage.setItem('toggleButton', !isShortMovie);
    } else {
      setShortMovie(!isShortMovie);
      filterMovies(movies, '', !isShortMovie);
      localStorage.setItem('toggleButton', !isShortMovie);
    }
  }

  async function changeHandler(evt) {
    setSearchValue(evt.target.value);
  }

  async function handleSubmit(evt) {
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
        <img className='search-form__find-icon' src={findIcon} alt='Кнопка поиска' onClick={handleSubmit} />
      </form>
      <FilterCheckbox onCheck={toggleButton} isChecked={toggle} />
    </div>
  );
}

export default SearchForm;