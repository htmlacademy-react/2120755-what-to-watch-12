import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CatalogList from '../../components/catalog-list/catalog-list';
import Footer from '../../components/footer/footer';
import Details from './components/details';
import FilmNavigation from './components/film-navigation';
import HeroFilm from './components/heroFilm';
import Overview from './components/overview';
import Reviews from './components/reviews';
import NotFoundPage from '../../components/not-found/not-found';
import { FilmType } from '../../types';
import { mockReviews } from '../../mocks/mock-reviews';
import { AMOUNT_TO_SHOW_LIKLY } from '../../utils/const';

type FilmProps = {
  choosenFilms: FilmType[];
  liklyFilms: FilmType[];
};

function Film({choosenFilms, liklyFilms}: FilmProps): JSX.Element {
  // Запрос на фильм
  // Запрос на ревью к фильму.
  const [activeTab, setActiveTab] = useState('Overview');
  const filmId = Number(useParams().id);

  const choosenFilm = choosenFilms.find((film) => film.id === filmId);

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

  if (choosenFilm === undefined ) {
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
