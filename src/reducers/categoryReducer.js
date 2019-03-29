import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/types";

const initialState = {
  data: [],
  error: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
