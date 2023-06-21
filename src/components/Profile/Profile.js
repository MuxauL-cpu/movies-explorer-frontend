import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import './Profile.css';
import useValidation from '../../hooks/useValidation';

function Profile() {
  const { values, errors, onChange, isValid } = useValidation();
  return(
    <div className='profile'>
      <h2 className='profile__title'>Привет, Михаил!</h2>
      <Form
        buttonText='Редактировать'
        type='profile'
      >
        <div className='profile__input-container'>
          <label htmlFor='name' className='profile__input-label'>Имя</label>
          <input className={`profile__input ${!isValid ? 'profile__input_error' : ''}`}
            type='name'
            name='name'
            id='name'
            minLength='2'
            maxLength='40' 
            value={values.name || ''}
            onChange={onChange}
            required
          />
        </div>
        <div className='profile__input-container'>
          <label htmlFor='email' className='profile__input-label'>E-mail</label>
          <input className={`profile__input ${!isValid ? 'profile__input_error' : ''}`}
            type='email'
            name='email'
            id='email'
            value={values.email || ''}
            onChange={onChange}
            required
          />
        </div>
      </Form>
      <NavLink to='/signin' className='profile__signout'>Выйти из аккаунта</NavLink>
    </div>
  );
}

export default Profile;