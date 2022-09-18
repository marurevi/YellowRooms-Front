import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import roomsReducer from "./Detail/detail";
const reducers = combineReducers({ rooms: roomsReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
