import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { checkAuthAction, login, logout } from '../api-actions';
import { UserData } from '../../types';
import { InitialState, AuthorizationState } from '../../types/store';

const initialAuthorizationState: AuthorizationState = {
  authorized: undefined,
  userData: undefined,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialAuthorizationState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorized = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorized = true;
      })
      .addCase(login.rejected, (state) => {
        state.authorized = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorized = undefined;
        state.userData = undefined;
      });
  },
});

const selectAuthorization = (state: InitialState) => state.authorization.authorized;
const selectUserData = (state: InitialState ) => state.authorization.userData;


const authorizationSelector = createDraftSafeSelector(
  selectAuthorization,
  (authorized: boolean | undefined) => authorized
);

const userDataSelector = createDraftSafeSelector(
  selectUserData,
  (userData: UserData | undefined) => userData
);

export {authorizationSelector, userDataSelector};

