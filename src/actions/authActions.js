import axios from "axios";

import { setAuthToken, removeAuthToken } from "../utils/setAuthToken";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  RESET_LOGIN_ERROR
} from "./types";

export const loginUser = credentials => dispatch => {
  axios
    .post("/login", credentials)
    .then(res => {
      const auth = { ...res.data, username: credentials.username };
      dispatch(loginSuccess(auth));
    })
    .catch(error => {
      dispatch(loginFailure(error.response && error.response.data));
    });
};

export const logoutUser = username => dispatch => {
  axios.post("/logout", { username });
  removeAuthToken();
  dispatch(logoutUserSuccess());
};

export const loginSuccess = auth => {
  setAuthToken(auth);
  return {
    type: LOGIN_SUCCESS,
    payload: auth
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
