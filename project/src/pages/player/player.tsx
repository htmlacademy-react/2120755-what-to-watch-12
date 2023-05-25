import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '../../components/not-found/not-found';
import { FilmType } from '../../types';

type PlayerProps = {
  choosenFilms: FilmType[];
};

function Player({choosenFilms}: PlayerProps): JSX.Element {
  const filmId = Number(useParams().id);
  const choosenFilm = choosenFilms.find((film) => film.id === filmId);


  function formatTime(totalMinutes: number | undefined ): string | null {
    if (totalMinutes === undefined) {
      return null;
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor((totalMinutes % 1) * 60);
    const paddedHours = hours.toString().padStart(2);
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  if (choosenFilm === undefined) {
    return <NotFoundPage/>;
  }

  return (
    <div className="player">
      <video src={choosenFilm?.videoLink} className="player__video" poster={choosenFilm?.backgroundImage} autoPlay></video>

      <Link to={`/films/${choosenFilm?.id}`} type="button" className="player__exit" style={{textDecoration: 'none'}}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(choosenFilm?.runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{choosenFilm?.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
