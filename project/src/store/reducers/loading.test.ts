import { cleanFavoriteFilmsLoadingStatus, cleanFilmLoadingStatus, cleanReviewUploadingStatus, loadingSlice } from './loading';
import { fetchFilms, fetchFilmData, fetchUserFilms, postReview } from '../api-actions';


const state = {
  isLoaded: false,
  isFilmLoaded: false,
  isFavoriteFilmsLoaded: false,
  isReviewUploaded: undefined};

describe('Reducer: loading', () => {
  it('without additional parameters should return initial state', () => {
    expect(loadingSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
  it('should update isLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilms.fulfilled.type}))
      .toEqual({
        isLoaded: true,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
  it('should update isOfferLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilmData.fulfilled.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: true,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
  it('should update  isFavoriteFilmsLoaded then load completed', () => {
    expect(loadingSlice.reducer(state, {type: fetchUserFilms.fulfilled.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: true,
        isReviewUploaded: undefined});
  });
  it('should update isOfferLoaded then load in progress', () => {
    expect(loadingSlice.reducer(state, {type: fetchFilmData.rejected.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
  it('should update  isReviewUploaded then upload completed', () => {
    expect(loadingSlice.reducer(state, {type: postReview.fulfilled.type}))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: true});
  });
  it('should update isReviewUploaded then upload failed', () => {
    expect(loadingSlice.reducer(state, {type: postReview.rejected.type}))
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
        isReviewUploaded: undefined});
  });
  it('should update isFavoriteFilmsLoaded to false', () => {
    expect(loadingSlice.reducer(state, {type: cleanFavoriteFilmsLoadingStatus }))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
  it('should update isReviewUploaded to undefined', () => {
    expect(loadingSlice.reducer(state, {type: cleanReviewUploadingStatus }))
      .toEqual({
        isLoaded: false,
        isFilmLoaded: false,
        isFavoriteFilmsLoaded: false,
        isReviewUploaded: undefined});
  });
});
