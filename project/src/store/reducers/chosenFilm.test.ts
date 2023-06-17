import { chosenFilmSlice, cleanFilmToShowData } from './chosenFilm';
import { fetchFilmData, fetchSimilarFilms, fetchFilmReviews, postReview } from '../api-actions';
import { mockPromo } from '../../mocks/mock-promo';
import { mockFilmsLikly } from '../../mocks/mock-films-likly';
import { mockReviews } from '../../mocks/mock-reviews';


const state = {
  filmToShow: undefined,
  similarFilms: [],
  filmReviews: [],
};

describe('Reducer: chosenFilm', () => {
  it('without additional parameters should return initial state', () => {
    expect(chosenFilmSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        filmToShow: undefined,
        similarFilms: [],
        filmReviews: [],
      });
  });
  it('should update  filmToShow, similarFilms, filmReviews to underfined', () => {
    expect(chosenFilmSlice.reducer(state, {type: cleanFilmToShowData }))
      .toEqual({
        filmToShow: undefined,
        similarFilms: [],
        filmReviews: [],
      });
  });

  it('should update  filmToShow from loaded film', () => {
    expect(chosenFilmSlice.reducer(state, {type: fetchFilmData.fulfilled.type, payload: mockPromo}))
      .toEqual({
        filmToShow: mockPromo,
        similarFilms: [],
        filmReviews: [],
      });
  });
  it('should update  similarFilms from loaded FilmsLikly', () => {
    expect(chosenFilmSlice.reducer(state, {type: fetchSimilarFilms.fulfilled.type, payload: mockFilmsLikly}))
      .toEqual({
        filmToShow: undefined,
        similarFilms: mockFilmsLikly,
        filmReviews: [],
      });
  });
  it('should update  filmReviews from loaded reviews', () => {
    expect(chosenFilmSlice.reducer(state, {type: fetchFilmReviews.fulfilled.type, payload: mockReviews}))
      .toEqual({
        filmToShow: undefined,
        similarFilms: [],
        filmReviews: mockReviews,
      });
  });
  it('should update  filmReviews from updated loaded reviews', () => {
    expect(chosenFilmSlice.reducer(state, {type: postReview.fulfilled.type, payload: mockReviews}))
      .toEqual({
        filmToShow: undefined,
        similarFilms: [],
        filmReviews: mockReviews,
      });
  });
});
