import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_PLAYER = "RECEIVE_CURRENT_PLAYER";
export const LOGOUT_CURRENT_PLAYER = "LOGOUT_CURRENT_PLAYER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

//synch

const receiveCurrentPlayer = currentPlayer => {
  return {
    type: RECEIVE_CURRENT_PLAYER,
    currentPlayer
  }
};

const logoutCurrentPlayer = () => {
  return {
    type: LOGOUT_CURRENT_PLAYER
  }
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

//asynch

export const signup = player => dispatch => {
  return APIUtil.signup(player)
  .then(
    player => dispatch(receiveCurrentPlayer(player)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
};

export const login = player => dispatch => {
  return APIUtil.login(player)
  .then(
    player  => dispatch(receiveCurrentPlayer(player)),
    err => { return dispatch(receiveErrors(err.responseJSON))}
  )
};

export const logout = () => dispatch => {
  return APIUtil.logout()
  .then(player => dispatch(logoutCurrentPlayer()))
};