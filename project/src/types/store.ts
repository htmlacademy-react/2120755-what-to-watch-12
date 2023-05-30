import {store} from '../store';
import { FilmType, ReviewObjectType, UserData } from './index';

export type AuthorizationState = {
  authorized: boolean;
  userData: UserData | undefined;
}

export type LoadingState = {
  isLoaded: boolean;
  isFilmLoaded: boolean;
  isFavoriteFilmsLoaded: boolean;
}

export type FilmsState = {
  choosenGenre: string;
  initialFilms: FilmType[] | undefined;
  myListFilms: FilmType[];
  promoFilm: FilmType | undefined;
}

export type ChosenFilmState = {
  filmToShow: FilmType | undefined;
  similarFilms: FilmType[] | undefined;
  filmReviews: ReviewObjectType[] | undefined;
}

export type InitialState = {
loading: LoadingState;
films: FilmsState;
choosenFilm: ChosenFilmState;
authorization: AuthorizationState;
}

export type AppDispatch = typeof store.dispatch;
