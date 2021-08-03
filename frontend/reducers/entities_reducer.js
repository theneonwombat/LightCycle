import { combineReducers } from 'redux';
import CoursesReducer from './courses_reducer';
import PlayersReducer from './players_reducer';

const entitiesReducer = combineReducers({
  players: PlayersReducer,
  courses: CoursesReducer,
});

export default entitiesReducer;