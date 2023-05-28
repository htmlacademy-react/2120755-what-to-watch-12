import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../../components/header/header';
import { FilmType } from '../../../types';
import { authorizationSelector } from '../../../store/reducers/authorization';
import MyListButton from '../../../components/my-list-button/my-list-button';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';

type HeroFilmProps = {
  choosenFilm: FilmType;
};

function HeroFilm({ choosenFilm }: HeroFilmProps): JSX.Element {
  const heroFilm = useSelector( filmToShowSelector);
  const authorized = useSelector(authorizationSelector);
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={choosenFilm.backgroundImage} alt={choosenFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{choosenFilm?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{choosenFilm?.genre}</span>
            <span className="film-card__year">{choosenFilm?.released}</span>
          </p>
          <div className="film-card__buttons">
            <Link to={`/player/${choosenFilm.id}`} className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <MyListButton targetFilm={heroFilm}/>
            {authorized ? <Link to={`/films/${choosenFilm.id}/review`} className="btn film-card__button">Add review</Link> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroFilm;
