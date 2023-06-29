import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject() {
  return(
    <section className='about-project' id='about-project'>
      <Title titleText='О проекте' />
      <div className='about-project__container'>
        <div className='about-project__column'>
          <p className='about-project__column-title'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='about-project__column-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__column'>
          <p className='about-project__column-title'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='about-project__column-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__duration'>
        <div className='about-project__duration-week about-project__duration-week_one'>
          1 неделя
        </div>
        <div className='about-project__duration-week about-project__duration-week_four'>
          4 недели
        </div>
      </div>
      <div className='about-project__tech'>
        <div className='about-project__tech-week about-project__tech-week_back'>
          Back-end
        </div>
        <div className='about-project__tech-week about-project__tech-week_front'>
          Front-end
        </div>
      </div>
    </section>
  )
}

export default AboutProject;