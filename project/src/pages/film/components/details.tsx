import React from 'react';
import { useSelector } from 'react-redux';
import NotFoundPage from '../../../components/not-found/not-found';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';
import { formatTimeForFilmDetails } from '../../../utils/calculation-functions';

function Details(): JSX.Element {
  const film = useSelector(filmToShowSelector);
  const runTime = formatTimeForFilmDetails(film?.runTime ?? 0);

  if (film === undefined) {
    return <NotFoundPage/>;
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
              <React.Fragment key={actor}>
                {actor}
                {index < film.starring.length - 1 && <br />}
              </React.Fragment>
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
