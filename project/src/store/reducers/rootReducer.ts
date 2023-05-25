import { combineReducers } from '@reduxjs/toolkit';
import { FilmsSlice } from './films';
import { loadingSlice } from './loading';
import { chosenFilmSlice } from './chosenFilm';


export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  films: FilmsSlice.reducer,
  choosenFilm: chosenFilmSlice.reducer

});

export default rootReducer;
