import CatalogList from '../../components/catalog-list';
import Footer from '../../components/footer';
// import Details from './components/details';
import FilmNavigation from './components/film-navigation';
import HeroFilm from './components/heroFilm';
// import Overview from './components/overview';
import Reviews from './components/reviews';
import { FilmType } from '../../types';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../../components/not-found';

type FilmProps = {
  choosenFilms: FilmType[];
  liklyFilms: FilmType[];
};

function Film({choosenFilms, liklyFilms}: FilmProps): JSX.Element {
  const filmId = Number(useParams().id);
  const choosenFilm = choosenFilms.find((film) => film.id === filmId);

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
              <FilmNavigation/>
              {/* Тут будет Tabs */}
              {/* <Overview/> */}
              {/* <Details/> */}
              <Reviews/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogList cardsToShow={liklyFilms}/>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default Film;
