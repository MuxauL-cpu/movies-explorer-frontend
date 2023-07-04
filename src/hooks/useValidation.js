import { useState } from 'react';

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
  }

  function resetForm(values = {}, errors = {}) {
    setValues(values);
    setErrors(errors);
  }
  return { values, errors, onChange, resetForm, isValid }
}

export default useValidation;