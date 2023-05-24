import Footer from '../../components/footer/footer';
import Catalog from './components/catalog';
import PromoFilm from './components/promo-film';

function Main(): JSX.Element {

  return (
    <div>
      <PromoFilm/>
      <div className="page-content">
        <Catalog/>
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
