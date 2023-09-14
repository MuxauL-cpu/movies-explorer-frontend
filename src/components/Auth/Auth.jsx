import './Auth.css';
import logo from '../../images/header_logo.svg'
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';

function Auth({ children, buttonText, title, authRouteText, link, linkText, type, onSubmit, isValid }) {
  return(
    <div className='auth'>
      <div className={`auth__container auth__container_type-${type}`}>
        <NavLink className='auth__logo-link' to='/'>
          <img src={logo} className='auth__logo'alt='Лого' />
        </NavLink>
        <h2 className='auth__title'>{title}</h2>
      </div>
      <Form buttonText={buttonText} type={type} onSubmit={onSubmit} isValid={isValid}>
        {children}
      </Form>
      <p className='auth__route-text'>
        {authRouteText}
        <NavLink to={link} className='auth__route'> {linkText}</NavLink>
      </p>
    </div>
  )
}

export default Auth;