import React from 'react';
import NotFoundPage from '../../../components/not-found/not-found';
import { FilmType } from '../../../types';

type DetailsProps = {
  film: FilmType | undefined;
};

function Details({film}: DetailsProps): JSX.Element {
  function formatTime(totalMinutes: number ): string | null {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const paddedHours = hours > 0 ? `${hours}h ` : '';
    const paddedMinutes = `${minutes.toString().padStart(2, '0') }m`;
    return `${paddedHours}${paddedMinutes}`;
  }

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
          <span className="film-card__details-value">{formatTime(film.runTime)}</span>
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
