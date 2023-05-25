import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../utils/api';
import rootReducer from './reducers/main-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
