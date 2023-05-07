import Footer from '../../components/footer';
import Catalog from './components/catalog';
import FilmCard from './components/film-card';
import { mockFilmCard } from '../../mocks/mock-films';

function Main(): JSX.Element {
  return (
    <div>
      <FilmCard cardToDisplay={mockFilmCard}/>
      <div className="page-content">
        <Catalog/>
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
