import { combineReducers } from 'redux';
import { auth } from '../reducers';

const appReducer = combineReducers({
  auth
});

export default appReducer;
