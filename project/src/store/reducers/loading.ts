import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchFilms, fetchFilmData, fetchUserFilms } from '../api-actions';
import { LoadingState, InitialState } from '../../types/store';

const loadingInitialState: LoadingState = {
  isLoaded: false,
  isFilmLoaded: false,
  isFavoriteFilmsLoaded: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingInitialState,
  reducers: {
    cleanFilmLoadingStatus: (state) => {
      state.isFilmLoaded = false;
    },
    cleanFavoriteFilmsLoadingStatus: (state) => {
      state.isFavoriteFilmsLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilmData.fulfilled, (state) => {
        state.isFilmLoaded = true;
      })
      .addCase(fetchUserFilms.fulfilled, (state) => {
        state.isFavoriteFilmsLoaded = true;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;
const selectFilmLoadingStatus = (state: InitialState) => state.loading.isFilmLoaded;
const selectFavoriteFilmsLoadingStatus = (state: InitialState) => state.loading.isFavoriteFilmsLoaded;

const loadingStatusSelector = createDraftSafeSelector(
  selectLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

const filmLoadingStatusSelector = createDraftSafeSelector(
  selectFilmLoadingStatus,
  (isFilmLoaded: boolean) => isFilmLoaded
);

const favoriteFilmsLoadingStatusSelector = createDraftSafeSelector(
  selectFavoriteFilmsLoadingStatus,
  (isFavoriteFilmsLoaded: boolean) => isFavoriteFilmsLoaded
);

export const { cleanFilmLoadingStatus, cleanFavoriteFilmsLoadingStatus } = loadingSlice.actions;
export { loadingStatusSelector, filmLoadingStatusSelector, favoriteFilmsLoadingStatusSelector };
