import { createAction, createReducer } from '@reduxjs/toolkit'
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];
const setAlert = createAction(SET_ALERT)
const removeAlert = createAction(REMOVE_ALERT)

const alertReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAlert, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(removeAlert, (state, action) => {
      return state.filter(alert => alert.id !== action.payload); // here payload is id.
    })
})

export default alertReducer;