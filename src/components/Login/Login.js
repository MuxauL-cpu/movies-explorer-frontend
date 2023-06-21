import Auth from '../Auth/Auth';
import useValidation from '../../hooks/useValidation';
import './Login.css';

function Login() {
  const { values, errors, onChange, isValid } = useValidation();
  return(
    <Auth
      buttonText='Войти'
      title='Рады видеть!'
      authRouteText='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      type='login'
    >
      <div className='login__input-container'>
        <label htmlFor='email' className='login__input-label'>Логин</label>
        <input className={`login__input ${!isValid ? 'login__input_error' : ''}`}
            type='email'
            name='email'
            id='email'
            value={values.email || ''}
            onChange={onChange}
            required
          />
        <span className="login__input-error">{errors.email || ''}</span>
      </div>
      <div className='login__input-container'>
        <label htmlFor='email' className='login__input-label'>Пароль</label>
        <input className='login__input'
            type='password'
            name='password'
            id='password'
            minLength='6'
            maxLength='40' 
            value={values.password || ''}
            onChange={onChange}
            required
          />
        <span className='login__input-error'>{errors.password || ''}</span>
      </div>
    </Auth>
  );
}

export default Login;