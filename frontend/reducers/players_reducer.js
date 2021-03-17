import { RECEIVE_CURRENT_PLAYER } from "../actions/session_actions";

const playersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYER:
      return Object.assign({}, state, { [action.currentPlayer.id]: action.currentPlayer });
    default:
      return state;
  }
}

export default playersReducer;