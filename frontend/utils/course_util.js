export const createCourse = course => {
  return $.ajax({
    method: 'POST',
    url: '/api/courses',
    data: { course }
  })
}