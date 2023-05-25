import { combineReducers } from '@reduxjs/toolkit';
import { FilmsSlice } from './films';
import { loadingSlice } from './loading';


export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  films: FilmsSlice.reducer,
});

export default rootReducer;
