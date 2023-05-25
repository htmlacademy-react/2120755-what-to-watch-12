import {store} from '../store';
import { FilmType, ReviewType } from './index';

export type LoadingState = {
  isLoaded: boolean;
  isFilmLoaded: boolean;
}

export type FilmsState = {
  choosenGenre: string;
  initialFilms: FilmType[] | undefined;
  myListFilms: FilmType[] | undefined;
  promoFilm: FilmType | undefined;
}

export type ChosenFilmState = {
  filmToShow: FilmType | undefined;
  similarFilms: FilmType[] | undefined;
  filmReviews: ReviewType[] | undefined;
}

export type InitialState = {
loading: LoadingState;
films: FilmsState;
choosenFilm: ChosenFilmState;
}

export type AppDispatch = typeof store.dispatch;
