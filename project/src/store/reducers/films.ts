import { PayloadAction, createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { fetchFilms, fetchPromoFilm, fetchUserFilms, logout } from '../api-actions';
import { FilmsState, InitialState } from '../../types/store';
import { FilmType } from '../../types';

const filmsInitialState: FilmsState = {
  choosenGenre: 'All genres',
  initialFilms: [],
  myListFilms: [],
  promoFilm: undefined,
};

export const FilmsSlice = createSlice({
  name: 'films',
  initialState: filmsInitialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.choosenGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.initialFilms = action.payload;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchUserFilms.fulfilled, (state, action) => {
        state.myListFilms = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.myListFilms = [];
      });
  },
});

const selectGenre = (state: InitialState) => state.films.choosenGenre;
const selectFilms = (state: InitialState) => state.films.initialFilms;
const selectMyListFilms = (state: InitialState) => state.films.myListFilms;
const selectPromoFilm = (state: InitialState) => state.films.promoFilm;

const filmsSelector = createDraftSafeSelector(
  selectFilms,
  (initialFilms: FilmType[]) => initialFilms
);

const myListFilmsSelector = createDraftSafeSelector(
  selectMyListFilms,
  (myListFilms: FilmType[]) => myListFilms
);

const filmsOfTargetGenreSelector = createDraftSafeSelector(
  selectFilms,
  selectGenre,
  (initialFilms: FilmType[], chosenGenre: string) => {
    if (chosenGenre === 'All genres') {
      return initialFilms;
    }
    return initialFilms.filter(({ genre }) => genre === chosenGenre);
  }
);
const promoFilmSelector = createDraftSafeSelector(
  selectPromoFilm,
  (promoFilm: FilmType | undefined) => promoFilm
);

export const { changeGenre } = FilmsSlice.actions;
export { filmsSelector, myListFilmsSelector, filmsOfTargetGenreSelector, promoFilmSelector };
