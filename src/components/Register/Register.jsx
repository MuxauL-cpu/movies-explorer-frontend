import useValidation from '../../hooks/useValidation';
import Auth from '../Auth/Auth';
import './Register.css';

function Register({ onRegister }) {
  const { values, errors, onChange, isValid } = useValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister(values.name, values.email, values.password)
  }

  return(
    <Auth
      buttonText='Зарегистрироваться'
      title='Добро пожаловать!'
      authRouteText='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      type='registration'
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <div className='register'>
        <div className='register__input-container'>
          <label htmlFor='name' className='register__input-label'>Имя</label>
          <input className={`register__input ${errors.name ? 'register__input_error' : ''}`}
              type='name'
              name='name'
              id='name'
              minLength='2'
              maxLength='40'
              placeholder='Имя'
              value={values.name || ''}
              onChange={onChange}
              required
            />
          <span className="register__input-error">{errors.name || ''}</span>
        </div>
        <div className='register__input-container'>
          <label htmlFor='email' className='register__input-label'>E-mail</label>
          <input className={`register__input ${errors.email ? 'register__input_error' : ''}`}
              type='email'
              name='email'
              id='email'
              placeholder='E-mail'
              value={values.email || ''}
              onChange={onChange}
              required
            />
          <span className="register__input-error">{errors.email || ''}</span>
        </div>
        <div className='register__input-container'>
          <label htmlFor='email' className='register__input-label'>Пароль</label>
          <input className={`register__input ${errors.password ? 'register__input_error' : ''}`}
              type='password'
              name='password'
              id='password'
              minLength='6'
              maxLength='40'
              placeholder='Пароль'
              value={values.password || ''}
              onChange={onChange}
              required
            />
          <span className='register__input-error'>{errors.password || ''}</span>
        </div>
      </div>
    </Auth>
  );
}

export default Register;