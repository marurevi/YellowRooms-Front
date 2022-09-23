import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import roomsReducer from "./Rooms/rooms";
import reservationsReducer from "./Reservations/Reservations";
import handleUser from "./Authenticate/authentication";

const reducers = combineReducers({
  rooms: roomsReducer,
  reservations: reservationsReducer,
  user: handleUser,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
