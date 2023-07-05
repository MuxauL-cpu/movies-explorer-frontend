import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound({ loggedIn }) {
  const navigate = useNavigate();

  function goBack() {
    if (loggedIn) {
      navigate(-2);
    } else {
      navigate(-1);
    }
  }
  
  return(
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <p className='not-found__router' onClick={goBack}>Назад</p>
    </section>
  );
}

export default PageNotFound;