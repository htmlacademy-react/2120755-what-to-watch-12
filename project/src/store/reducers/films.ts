import {PayloadAction, createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
// import { fetchOffers } from '../api-actions';
// import { getRandomCity } from '@utils/sort-functions';
// import { sortPriceHighToLow, sortPriceLowToHigh, sortTopRaiting, sortIdLowToHigh } from '@utils/sort-functions';
// import { InitialState, OffersState } from '@customTypes/store';
// import { Offer } from '@customTypes/index';
import { FilmType } from '../../types';
import { mockFilms } from '../../mocks/mock-films';
import { FilmsState, InitialState } from '../../types/store';

const filmsInitialState: FilmsState = {
  genre: 'All genres',
  initialFilms: mockFilms,
  filmsToShow: mockFilms,
};

export const FilmsSlice = createSlice({
  name: 'films',
  initialState: filmsInitialState,
  reducers: {
    sortByGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
      if (action.payload === 'All genres') {
        state.filmsToShow = state.initialFilms;
      } else {
        state.filmsToShow = state.initialFilms?.filter((film) => film.genre === action.payload);
      }
    },
  },
});

const selectFilms = (state: InitialState) => state.films.initialFilms;
const selectFilmsToShow = (state: InitialState) => state.films.filmsToShow;

const filmsSelector = createDraftSafeSelector(
  selectFilms,
  (offers: FilmType[] | undefined) => offers
);

const filmsToShowSelector = createDraftSafeSelector(
  selectFilmsToShow,
  (offers: FilmType[] | undefined) => offers
);

export const { sortByGenre } = FilmsSlice.actions;
export { filmsSelector, filmsToShowSelector };
