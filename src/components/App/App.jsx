import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import auth from '../../utils/Auth';
import { moviesApi } from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeHeaderRoutes = ['/movies', '/saved-movies', '/profile', '/'];
  const activeFooterRoutes = ['/movies', '/saved-movies', '/'];
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [editFailed, setEditFailed] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) setLoggedIn(true);
        })
        .catch((error) => { console.log(error) })
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((moviesData) => {
          setMovies(moviesData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })

      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((movies) => {
          const userSavedMovies = movies.filter((movie) => movie.owner === currentUser._id);
          localStorage.setItem('savedMovies', JSON.stringify(userSavedMovies));
          setSavedMovies(userSavedMovies);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
    }
  }, [loggedIn, currentUser._id, setSavedMovies])

  function userLogin(email, password) {
    auth.login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function userRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        navigate('/signin');
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function updateUserInfo(name, email) {
    mainApi.patchUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setEditFailed(true);
        setTimeout(() => {
          setEditFailed(false);
        }, 5000);
      })
  }

  function userSaveMovie(movie, isSaved, id) {
    if (isSaved) {
      userDeleteSavedMovie(id)
    } else {
      mainApi.saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res])
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
    }
  }

  function userDeleteSavedMovie(_id) {
    mainApi.deleteSavedMovie(_id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((i) => i._id !== _id);
        setSavedMovies(newSavedMovies);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function signOut() {
    setLoggedIn(false);
    localStorage.clear();
    navigate('/');
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('searchValue');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('toggleButton');
    localStorage.removeItem('saveToggleButton');
    localStorage.removeItem('savedSearchValue');
    localStorage.removeItem('savedShortSearchMovies');
    localStorage.removeItem('savedSearchMovies');
  }

  console.log(currentUser)

  return (
      <div className='app'>
        <CurrentUserContext.Provider value={currentUser}>
        {activeHeaderRoutes.includes(location.pathname) ? <Header loggedIn={loggedIn} /> : ''}
          <Routes>
            <Route path='/'
              element={
                <Main />
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  onLogin={userLogin}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  onRegister={userRegister}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute 
                  element={Profile}
                  editFailed={editFailed}
                  loggedIn={loggedIn}
                  signOut={signOut}
                  updateUserInfo={updateUserInfo}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute 
                  element={Movies}
                  movies={movies}
                  loggedIn={loggedIn}
                  setMovies={setMovies}
                  saveMovie={userSaveMovie}
                  deleteMovie={userDeleteSavedMovie}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute 
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  setMovies={setMovies}
                  deleteMovie={userDeleteSavedMovie}
                />
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        {activeFooterRoutes.includes(location.pathname) ? <Footer /> : ''}
        </CurrentUserContext.Provider>
      </div>
  );
}

export default App;
