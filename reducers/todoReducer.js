import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [],
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: todo(state.todos, action)
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: todo(state.todos, action)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todo(state.todos, action)
      };
    default:
      return state;
  }
};

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: state.length, text: action.text, completed: false }
      ];
    case DELETE_TODO:
      return state.todos.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
