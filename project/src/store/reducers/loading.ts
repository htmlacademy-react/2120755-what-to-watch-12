import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchFilms } from '../api-actions';
import { LoadingState, InitialState } from '../../types/store';

const loadingInitialState: LoadingState = {
  isLoaded: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingInitialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state) => {
        state.isLoaded = true;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;

const loadingStatusSelector = createDraftSafeSelector(
  selectLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

export { loadingStatusSelector };
