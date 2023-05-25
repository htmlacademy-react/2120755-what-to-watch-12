import {store} from '../store';
import { FilmType } from './index';

export type LoadingState = {
  isLoaded: boolean;
}

export type FilmsState = {
  choosenGenre: string;
  initialFilms: FilmType[] | undefined;
  myListFilms: FilmType[] | undefined;
  promoFilm: FilmType | undefined;
}

export type InitialState = {
loading: LoadingState;
films: FilmsState;
}

export type AppDispatch = typeof store.dispatch;
