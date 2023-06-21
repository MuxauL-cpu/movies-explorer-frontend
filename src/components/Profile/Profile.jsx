import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import './Profile.css';
import useValidation from '../../hooks/useValidation';
import { useEffect, useState } from 'react';

function Profile() {
  const { values, errors, onChange, isValid } = useValidation();
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isInputDisabled, setInputDisabled] = useState(false);

  function onSubmit(evt) {
    evt.preventDefault();

    setShowSaveButton(!showSaveButton);
  }

  useEffect(() => {
    if (showSaveButton) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
  }, [showSaveButton]);


  return(
    <div className='profile'>
      <h2 className='profile__title'>Привет, Михаил!</h2>
      <Form
        buttonText='Редактировать'
        type='profile'
        onSubmit={onSubmit}
        showSaveButton={showSaveButton}
      >
        <div className='profile__input-container'>
          <label htmlFor='name' className='profile__input-label'>Имя</label>
          <input className={`profile__input`}
            type='name'
            name='name'
            id='name'
            minLength='2'
            maxLength='40'
            placeholder='Имя'
            value={values.name || ''}
            onChange={onChange}
            disabled={isInputDisabled}
            required
          />
        </div>
        <div className='profile__input-container'>
          <label htmlFor='email' className='profile__input-label'>E-mail</label>
          <input className={`profile__input`}
            type='email'
            name='email'
            id='email'
            placeholder='E-mail'
            value={values.email || ''}
            onChange={onChange}
            disabled={isInputDisabled}
            required
          />
        </div>
      </Form>
      { showSaveButton ? '' : <NavLink to='/signin' className='profile__signout'>Выйти из аккаунта</NavLink> }
    </div>
  );
}

export default Profile;