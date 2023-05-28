import { useSelector } from 'react-redux';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner/spinner';
import Catalog from './components/catalog';
import PromoFilm from './components/promo-film';
import { loadingStatusSelector } from '../../store/reducers/loading';

function Main(): JSX.Element {
  const isLoaded = useSelector(loadingStatusSelector);

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
