import {store} from '../store';
import { FilmType, ReviewObjectType, UserData } from './index';

export type AuthorizationState = {
  authorized: boolean | undefined;
  userData: UserData | undefined;
}

export type LoadingState = {
  isLoaded: boolean;
  isFilmLoaded: boolean;
  isFavoriteFilmsLoaded: boolean;
  isReviewUploaded: boolean | undefined;
}

export type FilmsState = {
  choosenGenre: string;
  initialFilms: FilmType[];
  myListFilms: FilmType[];
  promoFilm: FilmType | undefined;
}

export type ChosenFilmState = {
  filmToShow: FilmType | undefined;
  similarFilms: FilmType[];
  filmReviews: ReviewObjectType[];
}

export type InitialState = {
loading: LoadingState;
films: FilmsState;
choosenFilm: ChosenFilmState;
authorization: AuthorizationState;
}

export type AppDispatch = typeof store.dispatch;
