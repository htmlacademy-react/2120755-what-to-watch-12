import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../utils/api';
import rootReducer from './reducers/rootReducer';

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
