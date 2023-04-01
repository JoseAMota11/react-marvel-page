import { combineReducers } from 'redux';
import fetcherReducer from './fetch';

const allReducers = combineReducers({
  data: fetcherReducer,
});

export default allReducers;
