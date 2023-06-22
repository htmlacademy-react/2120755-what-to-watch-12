import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundPage from '../../components/not-found/not-found';
import ReviewForm from './components/review-form';
import Spinner from '../../components/spinner/spinner';
import NotAvailible from '../../components/not-available/not-available';
import { cleanFilmToShowData, filmToShowSelector } from '../../store/reducers/chosenFilm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../types/store';
import { useEffect } from 'react';
import { fetchFilmData } from '../../store/api-actions';
import { cleanFilmLoadingStatus, filmLoadingStatusSelector } from '../../store/reducers/loading';
import { filmsSelector, promoFilmSelector } from '../../store/reducers/films';

function AddReview(): JSX.Element {
  const urlParams = useParams();
  const filmId = Number(urlParams.id);
  const dispatch: AppDispatch = useDispatch();
  const choosenFilm = useSelector(filmToShowSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);

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

  if (isFilmLoaded && !promo && films.length === 0) {
    return <NotAvailible/>;
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
                <a href={`/films/${choosenFilm.id}/review`} className="breadcrumbs__link">Add review</a>
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
