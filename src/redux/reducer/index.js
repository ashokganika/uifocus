import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
  product: productReducer,
  error: errorReducer,
});

export default reducer;
