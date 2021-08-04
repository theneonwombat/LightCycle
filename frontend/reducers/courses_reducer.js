import {
  RECEIVE_ALL_COURSES,
  RECEIVE_COURSE,
  REMOVE_COURSE,
} from '../actions/courses_actions';

const defaultState = {}

const CoursesReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_COURSES:
      return Object.assign({}, action.courses);
    case RECEIVE_COURSE:
      return Object.assign({}, oldState, { [action.course.id]: action.course} ); //action.course was previously { [action.course.id]: action.course }
    case REMOVE_COURSE:
      debugger
      let nextState = Object.assign({}, oldState)
      delete nextState[action.courseId]
      return nextState;
    default:
      return oldState;
  }
}

export default CoursesReducer;