import {
  RECIEVE_CURRENT_PLAYER, 
  LOGOUT_CURRENT_PLAYER,
} from '../actions/session';

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_CURRENT_PLAYER:
      return Object.assign({}, { currentPlayer: action.player })
    case LOGOUT_CURRENT_PLAYER:
      return _nullSession;
    default:
      return state;
  }
}