import * as APIUtil from '../utils/session';

export const RECIEVE_CURRENT_PLAYER = "RECIEVE_CURRENT_PLAYER";
export const LOGOUT_CURRENT_PLAYER = "LOGOUT_CURRENT_PLAYER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const recieveCurrentPlayer = player => {
  return {
    type: RECIEVE_CURRENT_PLAYER,
    player
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

export const signup = player => dispatch => {
  return APIUtil.signup(player)
  .then(
    player => dispatch(recieveCurrentPlayer(player)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
};

export const login = player => dispatch => {
  return APIUtil.login(player)
  .then(
    player => dispatch(recieveCurrentPlayer(player)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
};

export const logout = () => dispatch => {
  return APIUtil.logout()
  .then(player => dispatch(logoutCurrentPlayer()))
};