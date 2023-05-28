import { useSelector } from 'react-redux';
import CatalogList from '../../components/catalog-list/catalog-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { myListFilmsSelector } from '../../store/reducers/films';

function MyList(): JSX.Element {
  const userFilms = useSelector(myListFilmsSelector);
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{userFilms?.length}</span></h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogList cardsToShow={userFilms} amountToShow={userFilms?.length}/>
      </section>
      <Footer/>
    </div>
  );
}
export default MyList;
