import CatalogList from '../../components/catalog-list';
import Footer from '../../components/footer';
import Header from '../../components/header';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogList amountToShow={9}/>
      </section>
      <Footer/>
    </div>
  );
}
export default MyList;
