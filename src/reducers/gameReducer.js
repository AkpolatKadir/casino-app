import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE
} from "../actions/types";

const initialState = {
  data: [],
  error: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_GAMES_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_GAMES_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
