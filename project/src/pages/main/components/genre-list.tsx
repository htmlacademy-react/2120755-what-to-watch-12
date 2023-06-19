import { useState } from 'react';
import { useSelector } from 'react-redux';
import { genreSorter } from '../../../utils/genreSorter';
import { filmsSelector } from '../../../store/reducers/films';

type GenreListProps = {
  onGenreClick: (genre: string) => void;
}

function GenreList({onGenreClick}: GenreListProps): JSX.Element {
  const initialFilms = useSelector(filmsSelector);
  const genresToShow = genreSorter(initialFilms);
  const[choseenGenre, setChoosenGenre] = useState('All genres');

  function chooseGenre(choosen: string | undefined) {
    if (choosen === undefined) {
      setChoosenGenre('All genres');
      onGenreClick('All genres');
    } else {
      setChoosenGenre(choosen);
      onGenreClick(choosen);
    }
  }

  return (
    <ul className="catalog__genres-list">
      {genresToShow.map((genre) => (
        <li onClick={() => chooseGenre(genre)} className={`catalog__genres-item ${choseenGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <button style={{border: 'none', background: 'none'}} className="catalog__genres-link">{genre}</button>
        </li>))}
    </ul>
  );
}
export default GenreList;
