import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddReview from '../../pages/add-review/add-review';
import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/signin/signin';
import NotFoundPage from '../not-found/not-found';
import ProtectedRoute from '../protected-route/protected-route';
import { fetchFilms, fetchPromoFilm, fetchUserFilms, checkAuthAction } from '../../store/api-actions';
import { AppDispatch } from '../../types/store';

function App(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchFilms());
    dispatch(fetchPromoFilm());
    dispatch(fetchUserFilms());
  }, [dispatch]);

  return(
    <Routes>
      <Route
        path='/mylist'
        element={
          <ProtectedRoute
            element={<MyList/>}
          />
        }
      />
      <Route path='films/:id/review' element={
        <ProtectedRoute
          element={<AddReview/>}
        />
      }
      />
      <Route path='/' element={<Main/>}/>
      <Route path='/films/:id' element={<Film/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  );


}

export default App;
