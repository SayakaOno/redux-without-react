import React from 'react';
import { createStore } from 'redux';
import reducer from '../reducers';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../actions/';

const store = createStore(reducer);
store.dispatch(addTodo('have dinner'));

console.log(store.getState());

const App = () => {
  return <div>{console.log(store.getState())}</div>;
};

export default App;
