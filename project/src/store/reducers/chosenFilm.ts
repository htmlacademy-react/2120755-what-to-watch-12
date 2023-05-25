import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { fetchFilmData, fetchSimilarFilms, fetchFilmReviews, postReview } from '../api-actions';
import { ChosenFilmState, InitialState } from '../../types/store';
import { FilmType, ReviewType} from '../../types';

const chosenOffersInitialState: ChosenFilmState = {
  filmToShow: undefined,
  similarFilms: undefined,
  filmReviews: undefined,
};

export const chosenFilmSlice = createSlice({
  name: 'chosenOffer',
  initialState: chosenOffersInitialState,
  reducers: {
    cleanFilmToShowData: (state) => {
      state.filmToShow = undefined;
      state.similarFilms = undefined;
      state.filmReviews = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmData.fulfilled, (state, action) => {
        state.filmToShow = action.payload;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFilmReviews.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      });
  },
});

const selectFilmToShow = (state: InitialState) => state.choosenFilm.filmToShow;
const selectSimilarFilms = (state: InitialState) => state.choosenFilm.similarFilms;
const selectFilmReviews = (state: InitialState) => state.choosenFilm.filmReviews;


const filmToShowSelector = createDraftSafeSelector(
  selectFilmToShow,
  (filmToShow: FilmType | undefined ) => filmToShow
);

const similarFilmsSelector = createDraftSafeSelector(
  selectSimilarFilms,
  (similarFilms: FilmType[] | undefined) => similarFilms
);

const filmReviewsSelector = createDraftSafeSelector(
  selectFilmReviews,
  (filmReviews: ReviewType[] | undefined) => filmReviews
);

export const { cleanFilmToShowData } = chosenFilmSlice.actions;
export { filmToShowSelector, similarFilmsSelector, filmReviewsSelector };
