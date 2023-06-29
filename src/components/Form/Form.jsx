import { React } from 'react';
import './Form.css';

function Form({ children, buttonText, type, onSubmit, showSaveButton }) {
  function saveUserData(evt) {
    evt.preventDefault();
  }

  return(
    <form className={`form form_type-${type}`} onSubmit={saveUserData}>
      {children}
      { showSaveButton ? 
        <button
          className={`form__button form__button_type-save`}
          type='submit'
          onClick={onSubmit}
          id='submit'
        >Сохранить</button>
        :
        <button
          className={`form__button form__button_type-${type}`}
          onClick={onSubmit}
          type='submit'
          id='submit'
         >{buttonText}</button>
      }
    </form>
  )
}

export default Form;