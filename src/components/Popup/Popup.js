import './Popup.css';
import React, { useEffect } from "react";
import Navigation from '../Navigation/Navigation';

function Popup({ isOpen, isClosed }) {
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === 'Escape') {
        isClosed();
      }
    }

    function handleOutsideClick(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        isClosed();
      }
    };
  
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('click', handleOutsideClick);
      }
    }
  }, [isOpen]);

  return(
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${isOpen ? 'popup__container_active' : 'popup__container_disable'}`}>
        <Navigation isPopup={isOpen} />
        <button className='popup__close' onClick={isClosed}></button>
      </div>
    </div>
  )
}

export default Popup;