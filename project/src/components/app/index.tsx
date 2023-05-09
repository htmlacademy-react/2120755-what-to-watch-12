import { Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review';
import Main from '../../pages/main';
import Film from '../../pages/film';
import MyList from '../../pages/my-list';
import Player from '../../pages/player';
import SignIn from '../../pages/signin';
import NotFoundPage from '../not-found';
import ProtectedRoute from '../protected-route';

function App(): JSX.Element {

  return(
    <Routes>
      <Route
        path='/mylist'
        element={
          <ProtectedRoute
            element={<MyList/>}
            loggedIn={false}
          />
        }
      />
      <Route path='/' element={<Main/>}/>
      <Route path='/films/:id' element={<Film/>}/>
      <Route path='films/:id/review' element={<AddReview/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
  );


}

export default App;
