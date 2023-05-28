import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundPage from '../../components/not-found/not-found';
import ReviewForm from './components/review-form';
import { cleanFilmToShowData, filmToShowSelector } from '../../store/reducers/chosenFilm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../types/store';
import { useEffect } from 'react';
import { fetchFilmData } from '../../store/api-actions';
import { cleanFilmLoadingStatus, filmLoadingStatusSelector } from '../../store/reducers/loading';
import Spinner from '../../components/spinner/spinner';

function AddReview(): JSX.Element {
  const urlParams = useParams();
  const filmId = Number(urlParams.id);
  const dispatch: AppDispatch = useDispatch();
  const choosenFilm = useSelector(filmToShowSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);

  useEffect(() => {
    dispatch(fetchFilmData(filmId));
    return () => {
      dispatch(cleanFilmToShowData());
      dispatch(cleanFilmLoadingStatus());
    };
  }, [dispatch, filmId]);

  if(!isFilmLoaded) {
    return (
      <div style={{height: '100vh'}} className="page-content">
        <Spinner />
      </div>);
  }


  if (choosenFilm === undefined ) {
    return <NotFoundPage/>;
  }
  return (
    <section className="film-card film-card--full" style={{backgroundColor:choosenFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={choosenFilm.backgroundImage} alt={`${choosenFilm.name} poster`} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${choosenFilm.id}`} className="breadcrumbs__link">{choosenFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="film-card__poster film-card__poster--small">
          <img src={choosenFilm.posterImage} alt={choosenFilm.name} width="218" height="327" />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}
export default AddReview;
