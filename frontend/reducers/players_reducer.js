import { RECEIVE_CURRENT_PLAYER } from "../actions/session_actions";
import { 
  RECEIVE_ALL_PLAYERS,
  RECEIVE_PLAYER,
 } from "../actions/player_actions";

const PlayersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_PLAYER:
      debugger
      return Object.assign({}, state, action.currentPlayer);
    case RECEIVE_ALL_PLAYERS:
      return Object.assign({}, action.players);
    case RECEIVE_PLAYER:
      return Object.assign({}, state, action.player);
    default:
      return state;
  }
}

export default PlayersReducer;