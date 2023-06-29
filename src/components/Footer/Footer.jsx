import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__container-data'>© 2023</p>
        <ul className='footer__container-links'>
          <a
            className='footer__container-link'
            href='https://practicum.yandex.ru/'
            target='_blank'
          >Яндекс.Практикум</a>
          <a
            className='footer__container-link'
            href='https://github.com/MuxauL-cpu'
            target='_blank'
          >GitHub</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;