import Title from '../Title/Title';
import profilePicture from '../../images/user-picture.png';
import './AboutMe.css';

function AboutMe() {
  return(
    <section className='about-me'>
      <Title titleText='Студент' />
      <div className='about-me__container'>
        <div className='about-me__description'>
          <h4 className='about-me__description-title'>Михаил</h4>
          <p className='about-me__description-about'>Фронтенд-разработчик, 22 года</p>
          <p className='about-me__description-text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__github'
            href='https://github.com/MuxauL-cpu?tab=repositories'
            target='_blank'>
              GitHub
          </a>
        </div>
        <img className='about-me__image' src={profilePicture} alt='Фотография студента' />
      </div>
    </section>
  )
}

export default AboutMe;