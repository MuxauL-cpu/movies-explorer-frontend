import useValidation from '../../hooks/useValidation';
import Auth from '../Auth/Auth';
import './Register.css';

function Register() {
  const { values, errors, onChange, isValid } = useValidation();

  return(
    <Auth
      buttonText='Зарегистрироваться'
      title='Добро пожаловать!'
      authRouteText='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      type='registration'
    >
      <div className='register__input-container'>
        <label htmlFor='name' className='register__input-label'>Имя</label>
        <input className={`register__input ${!isValid ? 'register__input_error' : ''}`}
            type='name'
            name='name'
            id='name'
            minLength='2'
            maxLength='40' 
            value={values.name || ''}
            onChange={onChange}
            required
          />
        <span className="register__input-error">{errors.name || ''}</span>
      </div>
      <div className='register__input-container'>
        <label htmlFor='email' className='register__input-label'>Логин</label>
        <input className={`register__input ${!isValid ? 'register__input_error' : ''}`}
            type='email'
            name='email'
            id='email'
            value={values.email || ''}
            onChange={onChange}
            required
          />
        <span className="register__input-error">{errors.email || ''}</span>
      </div>
      <div className='register__input-container'>
        <label htmlFor='email' className='register__input-label'>Пароль</label>
        <input className={`register__input ${!isValid ? 'register__input_error' : ''}`}
            type='password'
            name='password'
            id='password'
            minLength='6'
            maxLength='40' 
            value={values.password || ''}
            onChange={onChange}
            required
          />
        <span className='register__input-error'>{errors.password || ''}</span>
      </div>
    </Auth>
  );
}

export default Register;