import { combineReducers } from '@reduxjs/toolkit';
import { FilmsSlice } from './films';


export const rootReducer = combineReducers({
  films: FilmsSlice.reducer,
});

export default rootReducer;
