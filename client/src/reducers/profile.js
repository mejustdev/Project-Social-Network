import { createAction, createReducer } from '@reduxjs/toolkit'
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from '../actions/types';

const initialState = {
  // it holds individual profile
  profile: null,
  // it is for profile listing page
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const getProfile = createAction(GET_PROFILE)
const updateProfile = createAction(UPDATE_PROFILE)
const getProfiles = createAction(GET_PROFILES)
const profileError = createAction(PROFILE_ERROR)
const clearProfile = createAction(CLEAR_PROFILE)
const getRepos = createAction(GET_REPOS)

const profileReducer = createReducer(initialState, (builder) => {

  builder
    .addCase(getProfile, (state, action) => {
      return {
        ...state,
        profile: action.payload, // action.payload --> we got response which include whole profile
        loading: false,
      };
    })
    .addCase(updateProfile, (state, action) => {
      return {
        ...state,
        profile: action.payload, // action.payload --> we got response which include whole profile
        loading: false,
      };
    })
    .addCase(getProfiles, (state, action) => {
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    })
    .addCase(profileError, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    })
    .addCase(clearProfile, (state, action) => {
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    })
    .addCase(getRepos, (state, action) => {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    })

})

export default profileReducer;