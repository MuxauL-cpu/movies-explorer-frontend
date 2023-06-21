import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

function Navigation({ isPopup }) {
  const location = useLocation();

  function setActiveRoute(route) {
    return location.pathname === route ? 'navigation__route-link_active' : '';
  }
  return(
      <nav className={`${!isPopup ? 'navigation' : 'navigation__popup'}`}>
        <NavLink to='/' className={
          `${isPopup ? 'navigation__route-link navigation__route-link_main-active' : 'navigation__route-link_main-disabled'}
          ${setActiveRoute('/')}`
        }>Главная</NavLink>
        <NavLink to='/movies'
          className={`navigation__route-link ${setActiveRoute('/movies')}`}
        >Фильмы</NavLink>
        <NavLink to='/saved-movies'
          className={`navigation__route-link ${setActiveRoute('/saved-movies')}`}
        >Сохранённые фильмы</NavLink>
      
      <div className={`${!isPopup ? 'navigation__profile-container' : 'navigation__profile-container_popup'}`}>
        <NavLink to='/profile' className='navigation__profile-link'>
          Аккаунт
          <img src={profileIcon} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation