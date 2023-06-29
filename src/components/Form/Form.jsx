import { React } from 'react';
import './Form.css';
import { nameValidation, emailValidation } from '../../utils/Validation';
import useValidation from '../../hooks/useValidation';


function Form({ children, buttonText, type, onSubmit, showSaveButton, updateUserInfo}) {
  const { isValid } = useValidation();
  return(
    <form className={`form form_type-${type}`} onSubmit={onSubmit}>
      {children}
      { showSaveButton ? 
        <button
          className={`form__button form__button_type-save`}
          onClick={updateUserInfo}
          type='submit'
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