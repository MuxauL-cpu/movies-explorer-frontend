import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';

function App() {
  let location = useLocation();
  const activeHeaderRoutes = ['/movies', '/saved-movies', '/profile', '/'];

  return (
    <>
    {activeHeaderRoutes.includes(location.pathname) ? <Header /> : ''}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/movies' />
        <Route path='/saved-movies' />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
