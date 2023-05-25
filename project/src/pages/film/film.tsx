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
import { fetchFilmData } from '../../store/api-actions';
import { filmToShowSelector, cleanFilmToShowData } from '../../store/reducers/chosenFilm';
import { filmLoadingStatusSelector } from '../../store/reducers/loading';
import { FilmType } from '../../types';
import { AppDispatch } from '../../types/store';


type FilmProps = {
  liklyFilms: FilmType[];
};

function Film({liklyFilms}: FilmProps): JSX.Element {
  // Запрос на ревью к фильму.
  const dispatch: AppDispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Overview');
  const filmId = Number(useParams().id);
  const choosenFilm = useSelector(filmToShowSelector);
  const isFilmLoaded = useSelector(filmLoadingStatusSelector);

  // eslint-disable-next-line no-console
  console.log(choosenFilm);
  // eslint-disable-next-line no-console
  console.log(isFilmLoaded);

  useEffect(() => {
    dispatch(fetchFilmData(filmId));
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
          <CatalogList cardsToShow={liklyFilms} amountToShow={AMOUNT_TO_SHOW_LIKLY}/>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default Film;
