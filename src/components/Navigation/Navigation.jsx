import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

function Navigation({ isPopup, loggedIn }) {
  const location = useLocation();

  function setActiveRoute(route) {
    return location.pathname === route ? 'navigation__route-link_active' : '';
  }

  function setActivePopupRoute(route) {
    return location.pathname === route ? 'popup__navigation-link_active' : '';
  }

  const isDrawer = !isPopup ? 'navigation' : 'popup__container-navigation';

  return(
      <nav className={`${loggedIn ? isDrawer : 'navigation navigation_unauthorized'}`}>
        { loggedIn ?
        <>
          <NavLink to='/' className={
            `${isPopup ? 
              'popup__navigation-link' :
              'navigation__route-link navigation__route-link_main-disabled'}
            ${setActiveRoute('/')}`
          }>Главная</NavLink>
          <NavLink to='/movies'
            className={`${isPopup ? 'popup__navigation-link' : 'navigation__route-link'} 
            ${!isPopup ? setActiveRoute('/movies') : setActivePopupRoute('/movies')}`}
          >Фильмы</NavLink>
          <NavLink to='/saved-movies'
            className={`${isPopup ? 'popup__navigation-link' : 'navigation__route-link'} 
            ${!isPopup ? setActiveRoute('/movies') : setActivePopupRoute('/saved-movies')}`}
          >Сохранённые фильмы</NavLink>
        
          <div className={`${!isPopup ? 'navigation__profile-container' : 'popup__container-profile-popup'}`}>
            <NavLink to='/profile' className={`${isPopup ? 'popup__profile-link' : 'navigation__profile-link'}`}>
              Аккаунт
              <img src={profileIcon} alt='Иконка профиля' />
            </NavLink>
          </div>
        </> :
        <>
          <NavLink to='/signup'
            className={`navigation__route-unauthorized`}
          >Регистрация</NavLink>
          <NavLink to='/signin'
            className={`navigation__route-unauthorized navigation__route-unauthorized_signin`}
          >Вход</NavLink>
        </>
      }
    </nav>
  );
}

export default Navigation