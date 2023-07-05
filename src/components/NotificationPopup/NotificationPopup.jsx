import './NotificationPopup.css';
import React, { useEffect } from "react";
import successIcon from '../../images/interface_checkmark_check_success_circle_icon_133028.svg';
import failureIcon from '../../images/failure_icon.svg';

function NavigationPopup({ isOpen, success, isClosed, headerText }) {
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === 'Escape') {
        isClosed();
      }
    }

    function handleOutsideClick(evt) {
      if (evt.target.classList.contains('notification-popup_opened')) {
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
    <div className={`notification-popup ${isOpen ? 'notification-popup_opened' : ''}`}>
      <div className='notification-popup__container'>
        <img className='notification-popup__image' src={success ? successIcon : failureIcon} alt='Успех' />
        <h3 className='notification-popup__header'>{headerText}</h3>
        <button className='notification-popup__close' onClick={isClosed}></button>
      </div>
    </div>
  )
}

export default NavigationPopup;