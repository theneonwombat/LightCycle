export const fetchPins = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pins',
  })
}

// export const createPin = pin => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/pins',
//     data: {pin}
//   })
// }