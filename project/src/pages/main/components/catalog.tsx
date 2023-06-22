import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatalogList from '../../../components/catalog-list/catalog-list';
import GenreList from './genre-list';
import MoreButton from './more-button';
import { INITIAL_AMOUNT_TO_SHOW_MAIN } from '../../../utils/const';
import { changeGenre } from '../../../store/reducers/films';
import { filmsOfTargetGenreSelector } from '../../../store/reducers/films';

function Catalog(): JSX.Element | null{
  const dispatch = useDispatch();
  const [amountToShowOnMain, setAmountToShowOnMain] = useState(INITIAL_AMOUNT_TO_SHOW_MAIN);
  const filmsToDisplayOnMain = useSelector(filmsOfTargetGenreSelector);

  useEffect(() => {
    dispatch(changeGenre('All genres'));
    setAmountToShowOnMain(INITIAL_AMOUNT_TO_SHOW_MAIN);
  }, []);

  function handleMoreClick() {
    setAmountToShowOnMain(amountToShowOnMain + 8);
  }

  function handleChoosenGenre(choosen: string) {
    dispatch(changeGenre(choosen));
    setAmountToShowOnMain(INITIAL_AMOUNT_TO_SHOW_MAIN);
  }

  if (filmsToDisplayOnMain.length < 0) {
    return <p style={{padding: '100px 100px', textAlign: 'center'}}>Sorry, no movies availible at the moment. Please return later</p>;
  }


  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList onGenreClick={handleChoosenGenre}/>
      <CatalogList cardsToShow={filmsToDisplayOnMain} amountToShow={amountToShowOnMain}/>
      {amountToShowOnMain < filmsToDisplayOnMain.length ?
        <MoreButton onMoreClick={handleMoreClick}/> : null}
    </section>
  );
}
export default Catalog;
