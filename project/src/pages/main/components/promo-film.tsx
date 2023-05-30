import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../../components/header/header';
import { promoFilmSelector } from '../../../store/reducers/films';
import MyListButton from '../../../components/my-list-button/my-list-button';

function PromoFilm(): JSX.Element | null {
  const promoFilm = useSelector(promoFilmSelector);

  if (promoFilm === undefined) {
    return null;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={`${promoFilm.name} background`} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <MyListButton targetFilm={promoFilm}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PromoFilm;
