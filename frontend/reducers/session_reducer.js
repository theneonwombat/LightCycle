import {
  RECEIVE_CURRENT_PLAYER, 
  LOGOUT_CURRENT_PLAYER,
} from '../actions/session_actions';

const _nullSession = {
  id: null,
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_PLAYER:
      return Object.assign({}, state, { id: parseInt(Object.keys(action.currentPlayer)[0]) })
    case LOGOUT_CURRENT_PLAYER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;