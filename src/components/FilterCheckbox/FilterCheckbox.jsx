import './FilterCheckbox.css';

function FilterCheckbox({ onCheck }) {
  return(
    <label htmlFor='checkbox' className='filter-checkbox' onChange={onCheck}>
      <input className='filter-checkbox__input' type='checkbox' id='checkbox' />
      <span className='filter-checkbox__inner' />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;