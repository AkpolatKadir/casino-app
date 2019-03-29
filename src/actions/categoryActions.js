import axios from "axios";

import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "./types";

export const getCategories = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  axios
    .get("/categories")
    .then(res => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchCategoriesFailure(err.response && err.response.data));
    });
};

export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};
export const fetchCategoriesSuccess = categories => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};
export const fetchCategoriesFailure = error => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};
