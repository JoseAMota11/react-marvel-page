import { combineReducers } from 'redux';
import fetcherReducer from './fetcher';

const allReducers = combineReducers({
  data: fetcherReducer
});

export default allReducers;
