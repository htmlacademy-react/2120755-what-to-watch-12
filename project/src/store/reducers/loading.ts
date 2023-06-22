import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchFilms, fetchFilmData, fetchUserFilms, postReview } from '../api-actions';
import { LoadingState, InitialState } from '../../types/store';

const loadingInitialState: LoadingState = {
  isLoaded: false,
  isFilmLoaded: false,
  isFavoriteFilmsLoaded: false,
  isReviewUploaded: undefined,
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
    cleanReviewUploadingStatus: (state) => {
      state.isReviewUploaded = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchFilmData.fulfilled, (state) => {
        state.isFilmLoaded = true;
      })
      .addCase(fetchUserFilms.fulfilled, (state) => {
        state.isFavoriteFilmsLoaded = true;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.isReviewUploaded = true;
      })
      .addCase(postReview.rejected, (state) => {
        state.isReviewUploaded = false;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;
const selectFilmLoadingStatus = (state: InitialState) => state.loading.isFilmLoaded;
const selectFavoriteFilmsLoadingStatus = (state: InitialState) => state.loading.isFavoriteFilmsLoaded;
const selectReviewUploadingStatus = (state: InitialState) => state.loading.isReviewUploaded;

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

const reviewUploadingStatusSelector = createDraftSafeSelector(
  selectReviewUploadingStatus,
  (isReviewUploaded: boolean | undefined) => isReviewUploaded
);

export const { cleanFilmLoadingStatus, cleanFavoriteFilmsLoadingStatus, cleanReviewUploadingStatus } = loadingSlice.actions;
export { loadingStatusSelector, filmLoadingStatusSelector, favoriteFilmsLoadingStatusSelector, reviewUploadingStatusSelector };
