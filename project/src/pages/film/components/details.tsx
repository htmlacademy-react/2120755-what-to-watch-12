import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';
import { formatTimeForFilmDetails } from '../../../utils/calculation-functions';

function Details(): JSX.Element | null {
  const film = useSelector(filmToShowSelector);
  const runTime = formatTimeForFilmDetails(film?.runTime ?? 0);

  if (film === undefined) {
    return null;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((actor, index) => (
              <Fragment key={actor}>
                {actor}
                {index < film.starring.length - 1 && <br />}
              </Fragment>
            ))}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}
export default Details;
