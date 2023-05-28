import { combineReducers } from '@reduxjs/toolkit';
import { FilmsSlice } from './films';
import { loadingSlice } from './loading';
import { chosenFilmSlice } from './chosenFilm';
import { authorizationSlice } from './authorization';


export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  films: FilmsSlice.reducer,
  choosenFilm: chosenFilmSlice.reducer,
  authorization: authorizationSlice.reducer
});

export default rootReducer;
