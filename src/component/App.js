import React from 'react';
import { createStore } from 'redux';
import reducer from '../reducers';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  setVisibilityFilter,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../actions/';

const store = createStore(reducer);
store.dispatch(addTodo('have breakfast'));
store.dispatch(addTodo('hang out with friends'));
store.dispatch(addTodo('coding'));
store.dispatch(toggleTodo(1));
console.log(store.getState());
store.dispatch(deleteTodo(2));
store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
console.log(store.getState());

const App = () => {
  return <div>{store.getState().todos.map(todo => todo.text)}</div>;
};

export default App;
