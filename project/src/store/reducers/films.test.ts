import { FilmsSlice, changeGenre } from './films';
import { fetchFilms, fetchUserFilms, fetchPromoFilm } from '../api-actions';
import { mockFilms } from '../../mocks/mock-films';
import { mockPromo } from '../../mocks/mock-promo';


const state = {
  choosenGenre: 'All genres',
  initialFilms: [],
  myListFilms: [],
  promoFilm: undefined,
};

describe('Reducer: films', () => {
  it('without additional parameters should return initial state', () => {
    expect(FilmsSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        choosenGenre: 'All genres',
        initialFilms: [],
        myListFilms: [],
        promoFilm: undefined,
      });
  });
  it('should update genry state to Choosen genry from action payload', () => {
    expect(FilmsSlice.reducer(state, {type: changeGenre, payload: 'Choosen genry'}))
      .toEqual({
        choosenGenre: 'Choosen genry',
        initialFilms: [],
        myListFilms: [],
        promoFilm: undefined,
      });
  });
  it('should update initialFilms state loaded films if response recived from fetchFilms', () => {
    expect(FilmsSlice.reducer(state, {type: fetchFilms.fulfilled.type, payload: mockFilms}))
      .toEqual({
        choosenGenre: 'All genres',
        initialFilms: mockFilms,
        myListFilms: [],
        promoFilm: undefined,
      });
  });
  it('should update myListFilms state loaded userFilms if response recived from fetchPromoFilm', () => {
    expect(FilmsSlice.reducer(state, {type: fetchUserFilms.fulfilled.type, payload: mockFilms}))
      .toEqual({
        choosenGenre: 'All genres',
        initialFilms: [],
        myListFilms: mockFilms,
        promoFilm: undefined,
      });
  });
  it('should update promoFilm state loaded promoFilm if response recived from fetchUserFilms', () => {
    expect(FilmsSlice.reducer(state, {type: fetchPromoFilm.fulfilled.type, payload: mockPromo}))
      .toEqual({
        choosenGenre: 'All genres',
        initialFilms: [],
        myListFilms: [],
        promoFilm: mockPromo,
      });
  });
});
