export const fetchPlayers = () => {
  return(
    $.ajax({
      method: 'GET',
      url: '/api/players',
    })
  )
}

export const fetchPlayer = (playerId) => {
  
  return(
    $.ajax({
      method: 'GET',
      url: `/api/players/${playerId}`,
    })
  )
}

export const createPlayer = player => {
  return $.ajax({
    method: 'POST',
    url: '/api/players',
    data: { player }
  })
}

export const updatePlayer = (player) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/players/${player.id}`,
      data: {player}
    })
  )
}

export const deletePlayer = (playerId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/players/${playerId}`,
    })
  )
}