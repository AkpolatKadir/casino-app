import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  RESET_LOGIN_ERROR
} from "./types";

export const loginUser = credentials => dispatch => {
  axios
    .post("http://localhost:3001/login", credentials)
    .then(res => {
      dispatch(loginSuccess(res.data, credentials));
    })
    .catch(error => {
      dispatch(loginFailure(error.response && error.response.data));
    });
};

export const logoutUser = username => dispatch => {
  axios.post("http://localhost:3001/logout", { username });
  dispatch(logoutUserSuccess());
};

export const loginSuccess = (user, credentials) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { ...user, username: credentials.username }
  };
};

const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

const logoutUserSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const resetErrors = () => dispatch => {
  dispatch({
    type: RESET_LOGIN_ERROR
  });
};
