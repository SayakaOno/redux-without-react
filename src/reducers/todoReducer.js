import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return todo(state, action);
    case DELETE_TODO:
      return todo(state, action);
    case TOGGLE_TODO:
      return todo(state, action);
    default:
      return state;
  }
};

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
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
