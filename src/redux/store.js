import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
    diff: false,
    collapsed: false
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
