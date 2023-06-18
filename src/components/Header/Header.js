import './Header.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from '../../images/header_logo.svg';
import burgerMenu from '../../images/burger_icon.svg';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Navigation from '../Navigation/Navigation';

function Header() {
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
        <img className='header__logo' src={logo} alt='Лого' />
        <img src={burgerMenu} onClick={openPopup} className='header__burger-menu' />
        <Navigation />
      </header>
      <Popup
        isOpen={isPopupOpen}
        isClosed={closePopup}
      />
    </>
  );
}

export default Header;