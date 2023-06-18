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
            Я родился и живу в Москве, закончил факультет информатики и вычислительной техники МТУСИ.
            Люблю слушать музыку. Недавно начал кодить.
          </p>
          <a
            className='about-me__github'
            href='https://github.com/MuxauL-cpu?tab=repositories'>
              GitHub
          </a>
        </div>
        <img className='about-me__image' src={profilePicture} />
      </div>
    </section>
  )
}

export default AboutMe;