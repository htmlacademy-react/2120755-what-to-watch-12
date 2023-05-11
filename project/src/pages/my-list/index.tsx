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
      <Header>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogList cardsToShow={filmsOnMyList}/>
      </section>
      <Footer/>
    </div>
  );
}
export default MyList;
