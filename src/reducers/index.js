import { combineReducers } from "redux";

import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  auth: authReducer,
  games: gameReducer,
  categories: categoryReducer
});
