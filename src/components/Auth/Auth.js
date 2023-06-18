import './Auth.css';
import logo from '../../images/header_logo.svg'
import Form from '../Form/Form';
import { Routes, Route, NavLink } from 'react-router-dom';

function Auth({ children, buttonText, title, authRouteText, link, linkText, type }) {
  return(
    <div className='auth'>
      <div className={`auth__container auth__container_type-${type}`}>
        <img src={logo} className='auth__logo' />
        <h2 className='auth__title'>{title}</h2>
      </div>
      <Form buttonText={buttonText} type={type}>
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