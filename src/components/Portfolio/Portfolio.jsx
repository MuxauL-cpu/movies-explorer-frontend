import linkIcon from '../../images/arrow_icon.svg';
import './Portfolio.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>
        Портфолио
      </h3>
      <div className='portfolio__links'>
        <a className='portfolio__link' href='https://how-to-learn-navy.vercel.app/' target='_blank'>
          <p className='portfolio__link-text'>
            Статичный сайт
          </p>
          <img className='portfolio__link-image' src={linkIcon} alt='Ссылка на сайт' />
        </a>
        <a className='portfolio__link' href='https://russian-travel-red.vercel.app/' target='_blank'>
          <p className='portfolio__link-text'>
            Адаптивный сайт
          </p>
          <img className='portfolio__link-image' src={linkIcon} alt='Ссылка на сайт' />
        </a>
        <a className='portfolio__link' href='https://react-mesto-auth-rho.vercel.app/sign-in' target='_blank'>
          <p className='portfolio__link-text'>
            Одностраничное приложение
          </p>
          <img className='portfolio__link-image' src={linkIcon} alt='Ссылка на сайт' />
        </a>
      </div>
    </section>
  )
}

export default Portfolio;