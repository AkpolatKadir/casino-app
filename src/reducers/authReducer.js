import isEmpty from "../validation/is-empty";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../actions/types.js";

const initialState = {
  user: {},
  isAuthenticated: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const isAuthenticated = !isEmpty(action.payload);

      return {
        isAuthenticated,
        user: action.payload,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
}
