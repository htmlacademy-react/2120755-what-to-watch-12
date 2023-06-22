import { authorizationSlice } from './authorization';
import { checkAuthAction, login, logout } from '../api-actions';
import { mockUserData } from '../../mocks/mock-user-data';

const userData = mockUserData;
const state = { authorized: undefined, userData: undefined};

describe('Reducer: authorization', () => {
  it('without additional parameters should return initial state', () => {
    expect(authorizationSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ authorized: undefined, userData: undefined});
  });
  it('should update authorization state to "true" and update userData state with loaded data if response recived from checkAuthAction', () => {
    expect(authorizationSlice.reducer(state, {type: checkAuthAction.fulfilled.type, payload: userData}))
      .toEqual({ authorized: true, userData: userData});
  });
  it('should update authorization state to "false" if response recived with rejeсtion from checkAuthAction', () => {
    expect(authorizationSlice.reducer(state, {type: checkAuthAction.rejected.type}))
      .toEqual({ authorized: false, userData: undefined});
  });
  it('should update authorization state to "true" and update userData state with loaded data if response recived from login', () => {
    expect(authorizationSlice.reducer(state, {type: login.fulfilled.type, payload: userData}))
      .toEqual({ authorized: true, userData: userData});
  });
  it('should update authorization state to "false" if response recived with rejeсtion from login', () => {
    expect(authorizationSlice.reducer(state, {type: login.rejected.type}))
      .toEqual({ authorized: false, userData: undefined});
  });
  it('should update authorization state to "false" and userData to "underfined" if response recived from logout', () => {
    expect(authorizationSlice.reducer({ authorized: false, userData: mockUserData}, {type: logout.fulfilled.type}))
      .toEqual({ authorized: undefined, userData: undefined});
  });
});
