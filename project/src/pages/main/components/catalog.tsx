import { useEffect, useState } from 'react';
import CatalogList from '../../../components/catalog-list/catalog-list';
import GenreList from './genre-list';

import { FilmType } from '../../../types';
import { INITIAL_AMOUNT_TO_SHOW_MAIN } from '../../../utils/const';
import { sortByGenre } from '../../../store/reducers/films';
import { useDispatch } from 'react-redux';


type CatalogProps = {
  filmsToDisplay: FilmType[];
};


function Catalog({filmsToDisplay}: CatalogProps): JSX.Element {
  const dispatch = useDispatch();
  const [amountToShowOnMain, setAmountToShowOnMain] = useState(INITIAL_AMOUNT_TO_SHOW_MAIN);

  useEffect(() => {
    setAmountToShowOnMain(INITIAL_AMOUNT_TO_SHOW_MAIN);
  }, []);

  function handleMoreClick() {
    setAmountToShowOnMain(amountToShowOnMain + 8);
  }

  function handleChoosenGenre(choosen: string) {
    dispatch(sortByGenre(choosen));
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList onGenreClick={handleChoosenGenre}/>
      <CatalogList cardsToShow={filmsToDisplay} amountToShow={amountToShowOnMain}/>
      {amountToShowOnMain < filmsToDisplay.length ?
        <div className="catalog__more">
          <button onClick={handleMoreClick} className="catalog__button" type="button">Show more</button>
        </div> : null}
    </section>
  );
}
export default Catalog;
