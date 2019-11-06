import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';

const initialState = {
  // it holds individual profile
  profile: null,
  // it is for profile listing page
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
