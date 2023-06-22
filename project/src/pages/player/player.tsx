import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from '../../components/not-found/not-found';
import Spinner from '../../components/spinner/spinner';
import { filmToShowSelector } from '../../store/reducers/chosenFilm';
import { SECONDS_IN_MINUTE, PLAYBACK_STEP } from '../../utils/const';
import { presentageCalculator, formatTimeForPlayer } from '../../utils/calculation-functions';
import { fetchFilmData } from '../../store/api-actions';
import { cleanFilmToShowData } from '../../store/reducers/chosenFilm';
import { cleanFilmLoadingStatus, filmLoadingStatusSelector } from '../../store/reducers/loading';
import { AppDispatch } from '../../types/store';
import { filmsSelector, promoFilmSelector } from '../../store/reducers/films';
import NotAvailible from '../../components/not-available/not-available';

function Player(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const choosenFilm = useSelector(filmToShowSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);
  const filmId = Number(useParams().id);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [timeLeft, setTimeleft] = useState(0);
  const totalRuntime = (choosenFilm?.runTime ?? 0) * SECONDS_IN_MINUTE;
  const tooglerPosition = presentageCalculator(playbackPosition, totalRuntime);

  useEffect(() => {
    dispatch(fetchFilmData(filmId));
    return () => {
      dispatch(cleanFilmToShowData());
      dispatch(cleanFilmLoadingStatus());
    };
  }, [dispatch, filmId]);

  useEffect(() => {
    setTimeleft(totalRuntime - playbackPosition);
  }, [playbackPosition, totalRuntime]);

  useEffect(() => {
    let playback: NodeJS.Timeout | null = null;
    if (!isPaused) {
      playback = setInterval(() => {
        setPlaybackPosition((prevPlaybackPosition) => {
          const currentPlaybackPosition = prevPlaybackPosition + PLAYBACK_STEP;
          if (playback && currentPlaybackPosition >= totalRuntime) {
            clearInterval(playback);
            return totalRuntime;
          }
          return currentPlaybackPosition;
        });
      }, 1000);
    } else {
      if (playback) {
        clearInterval(playback);
      }
    }
    return () => {
      if (playback) {
        clearInterval(playback);
      }
    };
  }, [isPaused, totalRuntime]);

  if(!isFilmLoaded) {
    return (
      <div style={{height: '100vh'}} className="page-content">
        <Spinner />
      </div>);
  }

  if (choosenFilm === undefined) {
    return <NotFoundPage/>;
  }

  if (isFilmLoaded && !promo && films.length === 0) {
    return <NotAvailible/>;
  }

  function handlePlayClick() {
    const videoElement = videoRef.current;
    if (isPaused) {
      videoElement?.play();
    }
    else {
      videoElement?.pause();
    }
    setIsPaused(!isPaused);
  }

  function handleFullScreenClick() {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.requestFullscreen();
    } }


  return (
    <div className="player">
      <video ref={videoRef} src={choosenFilm.videoLink} className="player__video" poster={choosenFilm.backgroundImage} autoPlay loop></video>
      <Link to={`/films/${choosenFilm.id}`} type="button" className="player__exit" style={{textDecoration: 'none'}}>Exit</Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playbackPosition} max={totalRuntime}></progress>
            <div className="player__toggler" style={{left: `${tooglerPosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTimeForPlayer(timeLeft)}</div>
        </div>
        <div className="player__controls-row">
          <button onClick={handlePlayClick} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={`${ isPaused ? '#play-s' : '#pause'}`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{choosenFilm.name}</div>
          <button onClick={handleFullScreenClick} type="button" className="player__full-screen">
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
