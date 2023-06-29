import searchIcon from '../../images/search_icon.svg';
import findIcon from '../../images/find_icon.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <div className='search'>
      <form className='search-form'>
        <img className='search-form__search-icon' src={searchIcon} alt='Лупа' />
        <input className='search-form__input' placeholder='Фильм' />
        <img className='search-form__find-icon' src={findIcon} alt='Кнопка поиска' />
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;