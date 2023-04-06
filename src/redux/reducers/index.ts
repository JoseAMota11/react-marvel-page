import { combineReducers } from 'redux';
import paginationReducer from './general';

const allReducers = combineReducers({
  app: paginationReducer,
});

export default allReducers;
