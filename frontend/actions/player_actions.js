import * as PlayerApiUtil from '../utils/player_util';

export const RECEIVE_ALL_PLAYERS = "RECEIVE_ALL_PLAYERS";
export const RECEIVE_PLAYER = "RECEIVE_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

// synch

const receiveAllPlayers = (players) => {
  return {
    type: RECEIVE_ALL_PLAYERS,
    players
  }
};

const receivePlayer = (player) => {
  return {
    type: RECEIVE_PLAYER,
    player
  }
};

const removePlayer = (playerId) => {
  return {
    type: REMOVE_PLAYER,
    playerId
  }
};

// asynch

export const fetchPlayers = () => dispatch => {
  return(
    PlayerApiUtil.fetchPlayers()
    .then((players) => dispatch(receiveAllPlayers(players)))
  )
}

export const fetchPlayer = (playerId) => dispatch => {
  return(
    PlayerApiUtil.fetchPlayer(playerId)
    .then((player) => dispatch(receivePlayer(player)))
  )
}

// **signup under session actions makes this useless**
// export const createPlayer = (player) => dispatch => {
//   return(
//     PlayerApiUtil.createPlayer(player)
//     .then((player) => dispatch(receivePlayer(player)))
//   )
// }

export const updatePlayer = (player) => dispatch => {
  return(
    PlayerApiUtil.updatePlayer(player)
    .then((player) => dispatch(receivePlayer(player)))
  )
}

export const deletePlayer = (playerId) => dispatch => {
  debugger
  return(
    PlayerApiUtil.deletePlayer(playerId)
    .then((player) => dispatch(removePlayer(player.id)))
  )
}