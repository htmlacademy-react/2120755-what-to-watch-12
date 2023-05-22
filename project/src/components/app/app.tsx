import { Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/signin/signin';
import NotFoundPage from '../not-found/not-found';
import ProtectedRoute from '../protected-route/protected-route';
import { FilmType } from '../../types';

type AppProps = {
  filmsToShow: FilmType[];
  promoToShow: FilmType;
  liklyFilmsToShow: FilmType[];
};

function App({ filmsToShow, promoToShow, liklyFilmsToShow }: AppProps): JSX.Element {

  return(
    <Routes>
      <Route
        path='/mylist'
        element={
          <ProtectedRoute
            element={<MyList filmsOnMyList={filmsToShow}/>}
            loggedIn
          />
        }
      />
      <Route path='/' element={<Main filmsOnMain={filmsToShow} promoOnMain={promoToShow}/>}/>
      {/* Добавь табы через аутлет, когда данные будут приходить из редакса */}
      <Route path='/films/:id' element={<Film choosenFilms={filmsToShow} liklyFilms={liklyFilmsToShow}/>}/>
      <Route path='films/:id/review' element={<AddReview choosenFilms={filmsToShow}/>}/>
      <Route path='/player/:id' element={<Player choosenFilms={filmsToShow}/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  );


}

export default App;
