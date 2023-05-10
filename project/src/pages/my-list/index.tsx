import CatalogList from '../../components/catalog-list';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { FilmType } from '../../types';

type MyListProps = {
  filmsOnMyList: FilmType[];
};

function MyList({filmsOnMyList}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogList cardsToShow={filmsOnMyList}/>
      </section>
      <Footer/>
    </div>
  );
}
export default MyList;
