import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";
const initialState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
