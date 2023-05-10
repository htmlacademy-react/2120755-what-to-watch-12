import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import NotFoundPage from '../../components/not-found';
import { FilmType } from '../../types';
import ReviewForm from './components/review-form';

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
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={choosenFilm.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__poster film-card__poster--small">
          <img src={choosenFilm.posterImage} alt={choosenFilm.name} width="218" height="327" />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}
export default AddReview;
