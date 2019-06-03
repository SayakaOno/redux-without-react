import { combineReducers } from 'redux';
import todoReducer from './todoReducer.js';
import filterReducer from './filterReducer.js';

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer
});
