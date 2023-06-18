import linkIcon from '../../images/arrow_icon.svg';
import './Portfolio.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>
        Портфолио
      </h3>
      <div className='portfolio__links'>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>
            Статичный сайт
          </p>
          <img className='portfolio__link-image' src={linkIcon} />
        </a>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>
            Адаптивный сайт
          </p>
          <img className='portfolio__link-image' src={linkIcon} />
        </a>
        <a className='portfolio__link'>
          <p className='portfolio__link-text'>
            Одностраничное приложение
          </p>
          <img className='portfolio__link-image' src={linkIcon} />
        </a>
      </div>
    </section>
  )
}

export default Portfolio;