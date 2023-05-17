import Footer from '../../components/footer/footer';
import Catalog from './components/catalog';
import PromoFilm from './components/promo-film';
import { FilmType } from '../../types';

type MainProps = {
  filmsOnMain: FilmType[];
  promoOnMain: FilmType;
};

function Main({filmsOnMain, promoOnMain}: MainProps): JSX.Element {
  return (
    <div>
      <PromoFilm promoToDisplay={promoOnMain}/>
      <div className="page-content">
        <Catalog filmsToDisplay={filmsOnMain}/>
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
