import Auth from '../Auth/Auth';
import useValidation from '../../hooks/useValidation';
import './Login.css';

function Login({ onLogin }) {
  const { values, errors, onChange, isValid } = useValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin(values.email, values.password)
  }

  return(
    <Auth
      buttonText='Войти'
      title='Рады видеть!'
      authRouteText='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      type='login'
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <div className='login'>
        <div className='login__input-container'>
          <label htmlFor='email' className='login__input-label'>E-mail</label>
          <input className={`login__input ${errors.email ? 'login__input_error' : ''}`}
              type='email'
              name='email'
              id='email'
              placeholder='E-mail'
              value={values.email || ''}
              onChange={onChange}
              required
            />
          <span className="login__input-error">{errors.email || ''}</span>
        </div>
        <div className='login__input-container'>
          <label htmlFor='email' className='login__input-label'>Пароль</label>
          <input className={`login__input ${errors.password ? 'login__input_error' : ''}`}
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
          <span className='login__input-error'>{errors.password || ''}</span>
        </div>
      </div>
    </Auth>
  );
}

export default Login;