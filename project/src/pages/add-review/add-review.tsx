import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundPage from '../../components/not-found/not-found';
import ReviewForm from './components/review-form';
import { FilmType } from '../../types';

type AddReviewProps = {
  choosenFilms: FilmType[];
};

function AddReview({choosenFilms}: AddReviewProps): JSX.Element {
  const filmId = Number(useParams().id);
  const choosenFilm: FilmType | undefined = choosenFilms.find((film) => film.id === filmId);

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
