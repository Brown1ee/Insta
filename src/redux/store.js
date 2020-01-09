import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
