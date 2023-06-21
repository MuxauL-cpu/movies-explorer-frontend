import './Promo.css';
import earthImage from '../../images/earth-web_icon.svg';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return(
    <div className='promo'>
      <div className='promo__container'>
        <div className='promo__text-container'>
          <h2 className='promo__title'>
            Учебный проект студента факультета <span>Веб-разработки.</span>
          </h2>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <NavTab />
        </div>
        <img src={earthImage} alt='Земля' className='promo__image' />
      </div>
    </div>
  )
}

export default Promo;