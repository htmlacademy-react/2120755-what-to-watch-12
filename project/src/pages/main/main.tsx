import { useSelector } from 'react-redux';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner/spinner';
import Catalog from './components/catalog';
import PromoFilm from './components/promo-film';
import { loadingStatusSelector } from '../../store/reducers/loading';
import { filmsSelector, promoFilmSelector } from '../../store/reducers/films';
import NotAvailible from '../../components/not-available/not-available';

function Main(): JSX.Element {
  const isLoaded = useSelector(loadingStatusSelector);
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);

  if (isLoaded && !promo && films.length === 0) {
    return <NotAvailible/>;
  }

  return (
    isLoaded ? (
      <div>
        <PromoFilm />
        <div className="page-content">
          <Catalog />
          <Footer />
        </div>
      </div>
    ) : (
      <div style={{height: '100vh'}} className="page-content">
        <Spinner />
      </div>
    )
  );
}
export default Main;
