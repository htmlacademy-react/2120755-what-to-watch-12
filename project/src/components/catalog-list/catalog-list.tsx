import { useSelector } from 'react-redux';
import Card from '../card/card';
import { filmsToShowSelector } from '../../store/reducers/films';
import { FilmType } from '../../types';


type CatalogListProps = {
  cardsToShow: FilmType[];
  amountToShow: number;
}

function CatalogList({cardsToShow, amountToShow}: CatalogListProps): JSX.Element {

  const filmsToShow = useSelector(filmsToShowSelector);
  // // eslint-disable-next-line no-console
  // console.log([...new Set(cardsToShow.map((movie) => movie.genre))]);
  // // // eslint-disable-next-line no-console
  // // console.log(filmsToShow);
  return (
    <div className="catalog__films-list">
      {filmsToShow?.slice(0, amountToShow).map((film)=> <Card name={film.name} preview={film.previewImage} id={film.id} trailer={film.videoLink} key={film.id} />)}
    </div>
  );
}
export default CatalogList;
