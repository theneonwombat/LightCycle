export const fetchCourses = () => {
  return(
    $.ajax({
      method: 'GET',
      url: '/api/courses',
    })
  )
}

/////////
export const fetchPlayerCourses = (playerId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/courses/?player_id=${playerId}`,
    })
  )
}
///////////

export const fetchCourse = (courseId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/courses/${courseId}`,
    })
  )
}

export const createCourse = course => {
  return $.ajax({
    method: 'POST',
    url: '/api/courses',
    data: { course }
  })
}

export const updateCourse = (course) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/courses/${course.id}`,
      data: {course}
    })
  )
}

export const deleteCourse = (courseId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/courses/${courseId}`,
    })
  )
}