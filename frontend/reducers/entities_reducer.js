import { combineReducers } from 'redux';
import playersReducer from './players_reducer';
import pinsReducer from './pins_reducer'

const entitiesReducer = combineReducers({
  players: playersReducer,
  pins: pinsReducer,
});

export default entitiesReducer;