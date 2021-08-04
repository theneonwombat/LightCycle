import * as CourseApiUtil from '../utils/course_util';

export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const REMOVE_COURSE = "REMOVE_COURSE";

// synch

const receiveAllCourses = (courses) => {
  return {
    type: RECEIVE_ALL_COURSES,
    courses
  }
};

const receiveCourse = (course) => {
  return {
    type: RECEIVE_COURSE,
    course
  }
};

const removeCourse = (courseId) => {
  return {
    type: REMOVE_COURSE,
    courseId
  }
};

// asynch

export const fetchCourses = () => dispatch => {
  return(
    CourseApiUtil.fetchCourses()
    .then((courses) => dispatch(receiveAllCourses(courses)))
  )
}

export const fetchCourse = (courseId) => dispatch => {
  return(
    CourseApiUtil.fetchCourse(courseId)
    .then((course) => {
      return dispatch(receiveCourse(course))
    })
  )
}

export const createCourse = (course) => dispatch => {
  return(
    CourseApiUtil.createCourse(course)
    .then((course) => dispatch(receiveCourse(course)))
  )
}

export const updateCourse = (course) => dispatch => {
  return(
    CourseApiUtil.updateCourse(course)
    .then((course) => dispatch(receiveCourse(course)))
  )
}

export const deleteCourse = (courseId) => dispatch => {
  return(
    CourseApiUtil.deleteCourse(courseId)
    .then((course) => {
      // debugger
      return dispatch(removeCourse(course.id))
    })
  )
}