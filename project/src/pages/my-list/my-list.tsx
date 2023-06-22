import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CatalogList from '../../components/catalog-list/catalog-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import NotAvailible from '../../components/not-available/not-available';
import { filmsSelector, myListFilmsSelector, promoFilmSelector } from '../../store/reducers/films';
import { favoriteFilmsLoadingStatusSelector, cleanFavoriteFilmsLoadingStatus } from '../../store/reducers/loading';
import { AppDispatch } from '../../types/store';
import { fetchUserFilms } from '../../store/api-actions';


function MyList(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const userFilms = useSelector(myListFilmsSelector);
  const isFavoriteLoaded = useSelector(favoriteFilmsLoadingStatusSelector);
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);


  useEffect(() => {
    dispatch(cleanFavoriteFilmsLoadingStatus());
    dispatch(fetchUserFilms());
    return () => {
      dispatch(cleanFavoriteFilmsLoadingStatus());
    };
  }, [dispatch]);

  if(!isFavoriteLoaded) {
    return (
      <div style={{height: '100vh'}} className="page-content">
        <Spinner />
      </div>);
  }

  if (isFavoriteLoaded && !promo && films.length === 0) {
    return <NotAvailible/>;
  }

  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{userFilms.length}</span></h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogList cardsToShow={userFilms} amountToShow={userFilms.length}/>
      </section>
      <Footer/>
    </div>
  );
}
export default MyList;
