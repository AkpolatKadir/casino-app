import axios from "axios";

import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_FAILURE,
  FETCH_GAMES_SUCCESS
} from "./types";

export const getGames = () => dispatch => {
  dispatch(fetchGamesRequest());
  axios
    .get("/games")
    .then(res => {
      dispatch(fetchGamesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchGamesFailure(err.response && err.response.data));
    });
};

export const fetchGamesRequest = () => {
  return {
    type: FETCH_GAMES_REQUEST
  };
};
export const fetchGamesSuccess = games => {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: games
  };
};
export const fetchGamesFailure = error => {
  return {
    type: FETCH_GAMES_FAILURE,
    payload: error
  };
};
