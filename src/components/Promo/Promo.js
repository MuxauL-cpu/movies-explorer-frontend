import './Promo.css';
import earthImage from '../../images/earth-web_icon.svg';

function Promo() {
  return(
    <div className='promo'>
      <div className='promo__container'>
        <div className='promo__text-container'>
          <h2 className='promo__title'>
            Учебный проект студента факультета <span>Веб-разработки.</span>
          </h2>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img src={earthImage} alt='Земля' className='promo__image' />
      </div>
      <a className='promo__button' href='#about-project'>Узнать больше</a>
    </div>
  )
}

export default Promo;