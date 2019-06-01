import { SET_VISIBILITY_FILTER } from '../actions';

export default (state, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
