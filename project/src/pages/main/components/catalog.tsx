import CatalogList from '../../../components/catalog-list/catalog-list';
import { useEffect, useState } from 'react';
import { genres } from '../../../utils/data';
import { FilmType } from '../../../types';
import { INITIAL_AMOUNT_TO_SHOW_MAIN } from '../../../utils/const';

type CatalogProps = {
  filmsToDisplay: FilmType[];
};


function Catalog({filmsToDisplay}: CatalogProps): JSX.Element {
  const[choseenGenre, setChoosenGenre] = useState('All genres');
  const [amountToShowOnMain, setAmountToShowOnMain] = useState(INITIAL_AMOUNT_TO_SHOW_MAIN);

  useEffect(() => {
    setAmountToShowOnMain(INITIAL_AMOUNT_TO_SHOW_MAIN);
  }, []);

  function handleMoreClick() {
    setAmountToShowOnMain(amountToShowOnMain + 8);
  }

  function handleChoosenGenre(choosen: string) {
    setChoosenGenre(choosen);
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li onClick={() => handleChoosenGenre(genre)} className={`catalog__genres-item ${choseenGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>))}
      </ul>
      <CatalogList cardsToShow={filmsToDisplay} amountToShow={amountToShowOnMain}/>
      {amountToShowOnMain < filmsToDisplay.length ?
        <div className="catalog__more">
          <button onClick={handleMoreClick} className="catalog__button" type="button">Show more</button>
        </div> : null}
    </section>
  );
}
export default Catalog;
