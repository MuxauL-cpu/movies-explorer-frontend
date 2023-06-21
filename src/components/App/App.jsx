import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  let location = useLocation();
  const activeHeaderRoutes = ['/movies', '/saved-movies', '/profile', '/'];
  const activeFooterRoutes = ['/movies', '/saved-movies', '/'];

  const loggedIn = location.pathname === '/' ? false : true;

  return (
    <div className='app'>
      {activeHeaderRoutes.includes(location.pathname) ? <Header loggedIn={loggedIn} /> : ''}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      {activeFooterRoutes.includes(location.pathname) ? <Footer /> : ''}
    </div>
  );
}

export default App;
