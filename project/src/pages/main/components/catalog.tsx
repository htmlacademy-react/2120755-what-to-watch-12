import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatalogList from '../../../components/catalog-list/catalog-list';
import GenreList from './genre-list';
import { INITIAL_AMOUNT_TO_SHOW_MAIN } from '../../../utils/const';
import { changeGenre } from '../../../store/reducers/films';

import { filmsOfTargetGenreSelector } from '../../../store/reducers/films';


function Catalog(): JSX.Element | null{
  const dispatch = useDispatch();
  const [amountToShowOnMain, setAmountToShowOnMain] = useState(INITIAL_AMOUNT_TO_SHOW_MAIN);
  const filmsToDisplayOnMain = useSelector(filmsOfTargetGenreSelector);

  useEffect(() => {
    setAmountToShowOnMain(INITIAL_AMOUNT_TO_SHOW_MAIN);
  }, []);

  function handleMoreClick() {
    setAmountToShowOnMain(amountToShowOnMain + 8);
  }

  function handleChoosenGenre(choosen: string) {
    dispatch(changeGenre(choosen));
  }

  if (filmsToDisplayOnMain === undefined) {
    return <p style={{padding: '100px 100px', textAlign: 'center'}}>Sorry, no movies availible at the moment. Please return later</p>;
  }


  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList onGenreClick={handleChoosenGenre}/>
      <CatalogList cardsToShow={filmsToDisplayOnMain} amountToShow={amountToShowOnMain}/>
      {amountToShowOnMain < filmsToDisplayOnMain.length ?
        <div className="catalog__more">
          <button onClick={handleMoreClick} className="catalog__button" type="button">Show more</button>
        </div> : null}
    </section>
  );
}
export default Catalog;
