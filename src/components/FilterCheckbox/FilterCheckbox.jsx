import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <label htmlFor='checkbox' className='filter-checkbox'>
      <input className='filter-checkbox__input' type='checkbox' id='checkbox' />
      <span className='filter-checkbox__inner' />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;