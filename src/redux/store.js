import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import {handleCart} from "./reducer/handleCart"
// import { reducer as AppReducer } from "./AppReducer/reducer.js";
import { reducer as AuthReducer } from "./AuthReducer/reducer.js";
import { Appreducer } from "./Appreducer/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers({ AppReducer, AuthReducer });
const rootReducer = combineReducers({  AuthReducer,handleCart,Appreducer });
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
