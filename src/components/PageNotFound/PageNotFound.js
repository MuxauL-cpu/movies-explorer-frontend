import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return(
    <div className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__text'>Страница не найдена</p>
      <NavLink to='/' className='not-found__router'>Назад</NavLink>
    </div>
  );
}

export default PageNotFound;