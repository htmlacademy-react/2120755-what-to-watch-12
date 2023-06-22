import { cleanFavoriteFilmsLoadingStatus, cleanFilmLoadingStatus, loadingSlice } from './loading';
import { fetchFilms, fetchFilmData, fetchUserFilms } from '../api-actions';


const state = {
  isLoaded: false,
  isFilmLoaded: false,
  isFavoriteFilmsLoaded: false,
  isReviewUploaded: false};

describe('Reducer: loading', () => {
  it('without additional parameters should return initial state', () => {
    expect(loadingSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
  it('should update isLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilms.fulfilled.type}))
      .toEqual({
        isLoaded: true,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
  it('should update isOfferLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilmData.fulfilled.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: true,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
  it('should update  isFavoriteFilmsLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchUserFilms.fulfilled.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: true,
        isReviewUploaded: false});
  });
  it('should update isOfferLoaded then load in progress', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilmData.rejected.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
  it('should update isFilmLoaded to false', () => {
    expect(loadingSlice.reducer(state, {type: cleanFilmLoadingStatus }))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
  it('should update isFavoriteFilmsLoaded to false', () => {
    expect(loadingSlice.reducer(state, {type: cleanFavoriteFilmsLoadingStatus }))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: false});
  });
});
