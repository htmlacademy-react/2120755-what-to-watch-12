import { FilmType } from '../types';

export function genreSorter(films: FilmType[] | undefined) {
  if (films === undefined) {
    return ['All genres'];
  }
  const genreList = [...new Set(films?.map((movie) => movie.genre))];
  genreList.unshift('All genres');
  return genreList;
}
