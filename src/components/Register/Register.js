import Auth from '../Auth/Auth';
import Input from '../Input/Input';
import './Register.css';

function Register() {
  return(
    <Auth
      buttonText='Зарегистрироваться'
      title='Добро пожаловать!'
      authRouteText='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      type='registration'
    >
      <Input
        labelText='Имя'
        type='name'
        name='name'
        mod='registration'
      />
      <Input 
        labelText='E-mail'
        type='email'
        name='email'
        mod='registration'
      />
      <Input
        labelText='Пароль'
        type='password'
        name='password'
        mod='registration'
      />
    </Auth>
  );
}

export default Register;