import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import handleCart from "./reducer/handleCart"
// import { reducer as AppReducer } from "./AppReducer/reducer.js";
import { reducer as AuthReducer } from "./AuthReducer/reducer.js";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers({ AppReducer, AuthReducer });
const rootReducer = combineReducers({  AuthReducer,handleCart });
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
