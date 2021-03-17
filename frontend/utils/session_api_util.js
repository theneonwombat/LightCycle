export const signup = player => {
  return $.ajax({
    url: 'api/players',
    method: 'POST',
    data: { player }
  })
}

export const login = player => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { player }
  })
}

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'delete',
  })
}