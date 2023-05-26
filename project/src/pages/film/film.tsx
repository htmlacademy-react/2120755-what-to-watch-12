import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CatalogList from '../../components/catalog-list/catalog-list';
import Footer from '../../components/footer/footer';
import Details from './components/details';
import FilmNavigation from './components/film-navigation';
import HeroFilm from './components/heroFilm';
import Overview from './components/overview';
import Reviews from './components/reviews';
import NotFoundPage from '../../components/not-found/not-found';
import Spinner from '../../components/spinner/spinner';
import { mockReviews } from '../../mocks/mock-reviews';
import { AMOUNT_TO_SHOW_LIKLY } from '../../utils/const';
import { fetchFilmData, fetchSimilarFilms } from '../../store/api-actions';
import { filmToShowSelector, similarFilmsSelector, cleanFilmToShowData } from '../../store/reducers/chosenFilm';
import { filmLoadingStatusSelector } from '../../store/reducers/loading';
import { AppDispatch } from '../../types/store';

function Film(): JSX.Element {
  // Запрос на ревью к фильму.
  const dispatch: AppDispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Overview');
  const filmId = Number(useParams().id);
  const choosenFilm = useSelector(filmToShowSelector);
  const similarFilms = useSelector(similarFilmsSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);

  useEffect(() => {
    dispatch(fetchFilmData(filmId));
    dispatch(fetchSimilarFilms(filmId));
    return () => {
      dispatch(cleanFilmToShowData());
    };
  }, [dispatch, filmId]);

  function handleTabChange(option: string) {
    setActiveTab(option);
  }

  function chooseTab(tab: string) {
    if (tab === 'Overview') {
      return <Overview film={choosenFilm}/>;
    }
    if (tab === 'Details') {
      return <Details film={choosenFilm}/>;
    }
    if (tab === 'Reviews') {
      return <Reviews filmReviews={mockReviews}/>;
    }
  }

  useEffect(() => {
    chooseTab(activeTab);
  }, [activeTab]);

  if(!isFilmLoaded) {
    return (
      <div style={{height: '100vh'}} className="page-content">
        <Spinner />
      </div>);
  }

  if (choosenFilm === undefined) {
    return <NotFoundPage/>;
  }

  return (
    <div>
      <section className="film-card film-card--full" style={{backgroundColor: choosenFilm.backgroundColor}}>
        <HeroFilm choosenFilm={choosenFilm}/>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={choosenFilm.posterImage} alt={`${choosenFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmNavigation onTabClick={handleTabChange}/>
              {chooseTab(activeTab)}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilms?.length === 0 ? <p>No similar films in our database. But we will find some...later☹️</p> : <CatalogList cardsToShow={similarFilms} amountToShow={AMOUNT_TO_SHOW_LIKLY}/>}
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default Film;
