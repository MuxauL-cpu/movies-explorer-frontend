import './Promo.css';
import earthImage from '../../images/earth-web_icon.png';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return(
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text-container'>
          <h1 className='promo__title'>
            Учебный проект студента факультета <span>Веб-разработки.</span>
          </h1>
          <h2 className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
          <NavTab />
        </div>
        <img src={earthImage} alt='Земля' className='promo__image' />
      </div>
    </section>
  )
}

export default Promo;