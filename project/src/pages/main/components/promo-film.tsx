import { Link } from 'react-router-dom';
import Header from '../../../components/header/header';
import { FilmType } from '../../../types';

type PromoFilmProps = {
  promoToDisplay: FilmType;
}

function PromoFilm({promoToDisplay}: PromoFilmProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoToDisplay.backgroundImage} alt={`${promoToDisplay.name} background`} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoToDisplay.posterImage} alt={`${promoToDisplay.name} poster`} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoToDisplay.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoToDisplay.genre}</span>
              <span className="film-card__year">{promoToDisplay.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`/player/${promoToDisplay.id}`} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <Link to='/mylist' className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PromoFilm;
