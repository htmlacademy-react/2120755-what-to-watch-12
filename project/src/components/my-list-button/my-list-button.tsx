import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../types/store';
import { useEffect, useState } from 'react';
import { myListFilmsSelector } from '../../store/reducers/films';
import { authorizationSelector } from '../../store/reducers/authorization';
import { postUserFilm } from '../../store/api-actions';
import { FilmType } from '../../types';
import { useNavigate } from 'react-router-dom';

type MyListButtonProps = {
  targetFilm: FilmType | undefined;
}


function MyListButton({targetFilm}: MyListButtonProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const myListFilms = useSelector(myListFilmsSelector);
  const authorized = useSelector(authorizationSelector);
  const [isAddToList, setIsAddedToList] = useState(false);
  const [myListCount, setMyListCount] = useState(0);


  useEffect(() => {
    const isAdded = myListFilms.some( (film ) => film.id === targetFilm?.id);
    if (isAdded) {
      setIsAddedToList(true);
    }
    setMyListCount(myListFilms.length);
  }, [myListFilms, targetFilm]);

  function handleMyListClick() {
    if (!authorized) {
      navigate('/login');
    }
    else if (!isAddToList) {
      dispatch(postUserFilm({id: targetFilm?.id, status: 1}));
      setMyListCount(myListCount + 1);
    } else {
      dispatch(postUserFilm({id: targetFilm?.id, status: 0}));
      setMyListCount(myListCount - 1);
    }
    setIsAddedToList(!isAddToList);
  }

  return (
    <button onClick={handleMyListClick} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={`${isAddToList ? '#in-list' : '#add'}`}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myListCount}</span>
    </button>
  );
}
export default MyListButton;
