import { combineReducers } from 'redux';
import playersReducer from './players_reducer';

const entitiesReducer = combineReducers({
  players: playersReducer,
});

export default entitiesReducer;