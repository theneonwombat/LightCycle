import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_PLAYER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_PLAYER:
      return [];
    default:
      return state;
  }
};