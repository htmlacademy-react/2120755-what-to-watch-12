import {PayloadAction, createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { FilmType } from '../../types';
import { mockFilms } from '../../mocks/mock-films';
import { mockFilmsLikly } from '../../mocks/mock-films-likly';
import { mockPromo } from '../../mocks/mock-promo';
import { FilmsState, InitialState } from '../../types/store';

const filmsInitialState: FilmsState = {
  choosenGenre: 'All genres',
  initialFilms: mockFilms,
  myListFilms: mockFilmsLikly,
  promoFilm: mockPromo,
};

export const FilmsSlice = createSlice({
  name: 'films',
  initialState: filmsInitialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.choosenGenre = action.payload;
    },
  },
});

const selectGenre = (state: InitialState) => state.films.choosenGenre;
const selectFilms = (state: InitialState) => state.films.initialFilms;
const selectMyListFilms = (state: InitialState) => state.films.myListFilms;
const selectPromoFilm = (state: InitialState) => state.films.promoFilm;

const filmsSelector = createDraftSafeSelector(
  selectFilms,
  (initialFilms: FilmType[] | undefined) => initialFilms
);

const myListFilmsSelector = createDraftSafeSelector(
  selectMyListFilms,
  (myListFilms: FilmType[] | undefined) => myListFilms
);

const filmsOfTargetGenreSelector = createDraftSafeSelector(
  selectFilms,
  selectGenre,
  (initialFilms: FilmType[] | undefined, chosenGenre: string) => {
    if (chosenGenre === 'All genres') {
      return initialFilms;
    }
    return initialFilms?.filter(({ genre }) => genre === chosenGenre);
  }
);
const promoFilmSelector = createDraftSafeSelector(
  selectPromoFilm,
  (promoFilm: FilmType | undefined) => promoFilm
);


export const { changeGenre } = FilmsSlice.actions;
export { filmsSelector, myListFilmsSelector, filmsOfTargetGenreSelector, promoFilmSelector };
