import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/main-reducer';

export const store = configureStore({
  reducer: rootReducer,
});
