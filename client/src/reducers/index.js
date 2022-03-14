import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

const rootReducer = {
  alert,
  auth,
  profile,
  post,
};

export default rootReducer;