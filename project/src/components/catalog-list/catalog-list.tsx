
import Card from '../card/card';
import { FilmType } from '../../types';


type CatalogListProps = {
  cardsToShow: FilmType[] | undefined;
  amountToShow: number;
}

function CatalogList({cardsToShow, amountToShow}: CatalogListProps): JSX.Element {


  // // eslint-disable-next-line no-console
  // console.log([...new Set(cardsToShow.map((movie) => movie.genre))]);
  // // // eslint-disable-next-line no-console
  // // console.log(filmsToShow);
  return (
    <div className="catalog__films-list">
      {cardsToShow?.slice(0, amountToShow).map((film)=> <Card name={film.name} preview={film.previewImage} id={film.id} trailer={film.videoLink} key={film.id} />)}
    </div>
  );
}
export default CatalogList;
