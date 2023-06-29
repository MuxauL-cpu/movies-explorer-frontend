import Title from '../Title/Title';
import './Techs.css';

function Techs() {
  return(
    <section className='techs'>
      <Title titleText='Технологии' />
      <div className='techs__container'>
        <h4 className='techs__container-title'>
          7 технологий
        </h4>
        <p className='techs__container-description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className='techs__list'>
        <li className='techs__list-item'>
          HTML
        </li>
        <li className='techs__list-item'>
          CSS
        </li>
        <li className='techs__list-item'>
          JS
        </li>
        <li className='techs__list-item'>
          React
        </li>
        <li className='techs__list-item'>
          Git
        </li>
        <li className='techs__list-item'>
          Express.js
        </li>
        <li className='techs__list-item'>
          MongoDB
        </li>
      </ul>
    </section>
  )
}

export default Techs;