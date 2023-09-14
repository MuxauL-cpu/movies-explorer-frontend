import { useState } from 'react';
import { EMAIL_REGEX } from '../utils/constants';

function useValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);
  
  function onChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    const error = evt.target.validationMessage;
    
    setValues((values) => ({ ...values, [name]: value}));
    setErrors((errors) => ({ ...errors, [name]: error}));
    setValid(evt.target.closest('form').checkValidity());

    if (name === 'email') {
      if (!EMAIL_REGEX.test(value.toLowerCase())) {
        setErrors({ ...errors, [name]: 'Некорректный формат электронной почты'});
        setValid(false)
      } 
    }
  }

  function resetForm(values = {}, errors = {}) {
    setValues(values);
    setErrors(errors);
  }
  return { values, errors, onChange, resetForm, isValid, setValid, setValues }
}

export default useValidation;