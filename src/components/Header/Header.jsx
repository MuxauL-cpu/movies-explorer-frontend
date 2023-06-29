import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/header_logo.svg';
import burgerMenu from '../../images/burger_icon.svg';
import Popup from '../Popup/Popup';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return(
    <>
      <header className='header'>
        <NavLink to='/'>
          <img className='header__logo' src={logo} alt='Лого' />
        </NavLink>
        { loggedIn ?
          <>
            <img src={burgerMenu} onClick={openPopup} className='header__burger-menu' alt='Бургер меню' />
            <Navigation loggedIn={loggedIn} />
          </> :
          <Navigation loggedIn={loggedIn} />
        }
      </header>
      { loggedIn ?
        <Popup
          isOpen={isPopupOpen}
          isClosed={closePopup}
          loggedIn={loggedIn}
        /> : ''
      }
    </>
  );
}

export default Header;