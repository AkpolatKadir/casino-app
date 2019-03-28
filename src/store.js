import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const logger = store => next => action => {
  console.group(action.type);
  console.info("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  console.groupEnd(action.type);
  return result;
};

const middleware = [thunk];

let enhancer = undefined;
if (process.env.REACT_APP_ENV === "production") {
  enhancer = compose(applyMiddleware(...middleware));
} else {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    enhancer = compose(applyMiddleware(...middleware, logger));
  }
}

const store = createStore(rootReducer, initialState, enhancer);
export default store;
