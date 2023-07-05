import Form from '../Form/Form';
import './Profile.css';
import useValidation from '../../hooks/useValidation';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ signOut, updateUserInfo }) {
  const { values, onChange, resetForm, errors, isValid, setValid } = useValidation();
  const currentUser = useContext(CurrentUserContext);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isInputDisabled, setInputDisabled] = useState(false);

  function onSubmit(evt) {
    evt.preventDefault();

    setShowSaveButton(!showSaveButton);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    updateUserInfo({ name: values.name, email: values.email });
    setShowSaveButton(!showSaveButton);
  }

  useEffect(() => {
    if (showSaveButton) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
  }, [showSaveButton]);

  useEffect(() => {
    if (currentUser)
      resetForm(currentUser)
  }, [currentUser]);

// Если поля без изменений блокирует кнопку
  useEffect(() => {
    if ((values.name === currentUser.name) && (values.email === currentUser.email)) {
      setValid(false);
    }
  }, [currentUser.email, currentUser.name, setValid, values.email, values.name])

  return(
    <>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Михаил!</h1>
        <Form
          buttonText='Редактировать'
          type='profile'
          onSubmit={onSubmit}
          showSaveButton={showSaveButton}
          updateUserInfo={handleSubmit}
          isValid={isValid}
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
          <span className='profile__input-error'>{errors.name}</span>
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
          <span className='profile__input-error'>{errors.email}</span>
        </Form>
        { showSaveButton ? '' : <p className='profile__signout' onClick={signOut}>Выйти из аккаунта</p> }
      </section>
    </>
  );
}

export default Profile;