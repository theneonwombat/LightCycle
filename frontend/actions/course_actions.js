import * as CourseApiUtil from '../utils/course_util';

export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const REMOVE_COURSE = "REMOVE_COURSE";

// synch



// asynch

export const createCourse = (course) => dispatch => {
  return(
    CourseApiUtil.createCourse(course)
    .then((course) => dispatch(receiveCourse(course)))
  )
}