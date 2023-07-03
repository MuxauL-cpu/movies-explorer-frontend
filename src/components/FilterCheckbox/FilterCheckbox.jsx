import './FilterCheckbox.css';

function FilterCheckbox({ onCheck, isChecked }) {
  return(
    <label htmlFor='checkbox' className='filter-checkbox'>
      <input className='filter-checkbox__input' type='checkbox' id='checkbox' onChange={onCheck} checked={isChecked || ''} />
      <span className='filter-checkbox__inner' />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;