import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return(
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <NavLink to='/' className='not-found__router'>Назад</NavLink>
    </section>
  );
}

export default PageNotFound;