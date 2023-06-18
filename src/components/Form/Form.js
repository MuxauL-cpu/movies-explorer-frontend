import { React } from 'react';
import './Form.css';

function Form({ children, buttonText, type }) {
  return(
    <form className={`form form_type-${type}`}>
      {children}
      <button
        className={`form__button form__button_type-${type}`}
        type='submit'
      >{buttonText}</button>
    </form>
  )
}

export default Form;