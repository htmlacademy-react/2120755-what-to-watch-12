import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchFilms, fetchFilmData } from '../api-actions';
import { LoadingState, InitialState } from '../../types/store';

const loadingInitialState: LoadingState = {
  isLoaded: false,
  isFilmLoaded: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingInitialState,
  reducers: {
    cleanFilmLoadingStatus: (state) => {
      state.isFilmLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilmData.fulfilled, (state) => {
        state.isFilmLoaded = true;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;
const selectFilmLoadingStatus = (state: InitialState) => state.loading.isFilmLoaded;

const loadingStatusSelector = createDraftSafeSelector(
  selectLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

const filmLoadingStatusSelector = createDraftSafeSelector(
  selectFilmLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

export const { cleanFilmLoadingStatus } = loadingSlice.actions;
export { loadingStatusSelector, filmLoadingStatusSelector };
