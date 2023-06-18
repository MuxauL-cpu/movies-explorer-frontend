import Auth from '../Auth/Auth';
import Input from '../Input/Input';
import './Login.css';

function Login() {
  return(
    <Auth
      buttonText='Войти'
      title='Рады видеть!'
      authRouteText='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      type='login'
    >
      <Input 
        labelText='E-mail'
        type='email'
        name='email'
        mod='login'
      />
      <Input
        labelText='Пароль'
        type='password'
        name='password'
        mod='login'
      />
    </Auth>
  );
}

export default Login;