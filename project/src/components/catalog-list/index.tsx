import Card from '../card';
import { mockFilms } from '../../mocks/mock-films';

type CatalogListProps = {
  amountToShow: number;
}

function CatalogList({amountToShow}: CatalogListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {mockFilms.slice(0, amountToShow).map((film)=> <Card name={film.name} preview={film.previewImage} key={film.id}/>)}
    </div>
  );
}
export default CatalogList;
