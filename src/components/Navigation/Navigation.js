import './Navigation.css';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

function Navigation({ isPopup }) {
  return(
    <>
      <nav className={`${!isPopup ? 'navigation__route-menu' : 'navigation__route-menu_popup'}`}>
        <NavLink to='/' className={`
          ${isPopup ? 'navigation__route-link navigation__route-link_main-active' : 'navigation__route-link_main-disabled'}
        `}>Главная</NavLink>
        <NavLink to='/movies' className='navigation__route-link'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='navigation__route-link'>Сохранённые фильмы</NavLink>
      </nav>
      <div className={`${!isPopup ? 'navigation__profile-container' : 'navigation__profile-container_popup'}`}>
        <NavLink to='/profile' className='navigation__profile-link'>
          Аккаунт
          <img src={profileIcon} />
        </NavLink>
      </div>
    </>
  );
}

export default Navigation