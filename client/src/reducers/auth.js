import { createAction, createReducer } from '@reduxjs/toolkit'
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  ACCOUNT_DELETED,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const registerSuccess = createAction(REGISTER_SUCCESS)
const userLoaded = createAction(USER_LOADED)
const authError = createAction(AUTH_ERROR)
const loginSuccess = createAction(LOGIN_SUCCESS)
const logout = createAction(LOGOUT)
const accountDeleted = createAction(ACCOUNT_DELETED)

const authReducer = createReducer(initialState, (builder) => {

  builder
    .addCase(userLoaded, (state, action) => {
     return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: action.payload,
     }
    })
    .addCase(registerSuccess, (state, action) => {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    })
    .addCase(loginSuccess, (state, action) => {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    })
    .addCase(accountDeleted, (state, action) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    })
    .addCase(authError, (state, action) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    })
    .addCase(logout, (state, action) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    })

})

export default authReducer;