import Card from '../card';
import { FilmType } from '../../types';

type CatalogListProps = {
  cardsToShow: FilmType[];
}

function CatalogList({cardsToShow}: CatalogListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {cardsToShow.slice(0, 20).map((film)=> <Card name={film.name} preview={film.previewImage} id={film.id} key={film.id} />)}
    </div>
  );
}
export default CatalogList;
