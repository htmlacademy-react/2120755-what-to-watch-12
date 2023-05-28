import Card from '../card/card';
import { FilmType } from '../../types';

type CatalogListProps = {
  cardsToShow: FilmType[] | undefined;
  amountToShow: number | undefined;
}

function CatalogList({cardsToShow, amountToShow}: CatalogListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {cardsToShow?.slice(0, amountToShow).map((film)=> <Card name={film.name} preview={film.previewImage} id={film.id} trailer={film.videoLink} key={film.id} />)}
    </div>
  );
}
export default CatalogList;
