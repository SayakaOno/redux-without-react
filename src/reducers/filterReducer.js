import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../actions';

export default (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { filter: action.filter };
    default:
      return state;
  }
};
