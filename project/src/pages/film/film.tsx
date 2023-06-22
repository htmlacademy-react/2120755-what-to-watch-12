import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
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
import NotAvailible from '../../components/not-available/not-available';
import { AMOUNT_TO_SHOW_LIKLY } from '../../utils/const';
import { fetchFilmData, fetchSimilarFilms, fetchFilmReviews } from '../../store/api-actions';
import { cleanFilmToShowData, filmToShowSelector, similarFilmsSelector } from '../../store/reducers/chosenFilm';
import { filmLoadingStatusSelector, cleanFilmLoadingStatus } from '../../store/reducers/loading';
import { filmsSelector, promoFilmSelector } from '../../store/reducers/films';
import { AppDispatch } from '../../types/store';


function Film(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('overview');
  const filmId = Number(useParams().id);
  const tab = searchParams.get('tab');
  const choosenFilm = useSelector(filmToShowSelector);
  const similarFilms = useSelector(similarFilmsSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);

  useEffect(() => {
    dispatch(fetchFilmData(filmId));
    dispatch(fetchSimilarFilms(filmId));
    dispatch(fetchFilmReviews(filmId));
    return () => {
      dispatch(cleanFilmToShowData());
      dispatch(cleanFilmLoadingStatus());
    };
  }, [dispatch, filmId]);

  function handleTabChange(option: string) {
    setSearchParams({tab: option});
    setActiveTab(option);
  }

  function chooseTab(choosenTab: string) {
    const TabComponent = {
      overview: Overview,
      details: Details,
      reviews: Reviews,
    }[choosenTab];
    return TabComponent && <TabComponent />;
  }

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
    chooseTab(activeTab);
  }, [activeTab, tab]);

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
              <FilmNavigation activeTab={activeTab} onTabClick={handleTabChange}/>
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
