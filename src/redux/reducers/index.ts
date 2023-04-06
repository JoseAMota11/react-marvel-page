import { combineReducers } from 'redux';
// import fetcherReducer from './fetcher';
import paginationReducer from './general';

const allReducers = combineReducers({
  app: paginationReducer,
});

export default allReducers;
